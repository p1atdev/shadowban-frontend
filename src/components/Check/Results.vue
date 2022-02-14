<script lang="ts" setup>
import { useShadowStore } from "../../stores/shadow"
const shadow = useShadowStore()
</script>

<template>
    <div class="p-2 mb-12 mx-4 sm:min-w-lg md:min-w-xl bg-sky-50 rounded-lg divide-y divide-gray-300">
        <CheckResultsRow
            title="User Existence"
            okMessage="User Exists!"
            badMessage="This user does not exist. Please try again."
            description="desc"
            :status="shadow.isExist"
            shouldBe="Yes"
        />

        <CheckResultsRow
            title="Suggestion Ban"
            okMessage="No Suggestion Ban!"
            badMessage="Suggestion Banned..."
            description="desc"
            :status="shadow.isSuggestionBanned"
            shouldBe="No"
        />
        <CheckResultsRow
            title="Reply Deboosting"
            okMessage="No Reply Reboosting!"
            badMessage="In Reply Reboosting..."
            description="desc"
            :status="shadow.isInReplyDeboosting"
            shouldBe="No"
        />
        <CheckResultsRow
            title="Suggestion Ban"
            okMessage="No Ghost Ban!"
            badMessage="Ghost Banned..."
            description="desc"
            :status="shadow.isGhostBanned"
            shouldBe="No"
        />
    </div>
</template>
