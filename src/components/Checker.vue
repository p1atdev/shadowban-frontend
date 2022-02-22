<script lang="ts" setup>
import { useShadowStore } from "~/stores/shadow"

type Props = {
    initialScreenName?: string
}

const { initialScreenName = "" } = defineProps<Props>()

const shadow = useShadowStore()

const startCheck = async (screenName: string) => {
    shadow.setUserStatus("Loading")
    shadow.setAll("Loading")

    await shadow.getServerStatus()

    if (!shadow.serverStatus.available) {
        shadow.setError("NetworkError")
        return
    }

    await shadow.getUser(screenName)
    shadow.setUserStatusFromUser()

    if (shadow.user.exists) {
        await shadow.getSuggestionBan()
        if (!shadow.user.protected) {
            shadow.getSearchBan()

            if (shadow.user.hasTweets) {
                shadow.getReplyBan()
            } else {
                shadow.ghostBanStatus = "Unknown"
                shadow.replyDeboostStatus = "Unknown"
            }
        } else {
            shadow.searchBanStatus = "Unknown"
            shadow.ghostBanStatus = "Unknown"
            shadow.replyDeboostStatus = "Unknown"
        }
    } else {
        shadow.setAll("None")
    }
}
</script>

<template>
    <div class="">
        <BigTitle />
        <CheckInputBox :onButtonClick="startCheck" :initialScreenName="initialScreenName" />
        <div class="grid place-items-center">
            <CheckResults />
        </div>
        <TweetButton />
    </div>
</template>
