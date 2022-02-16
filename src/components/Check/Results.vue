<script lang="ts" setup>
import { useI18n } from "vue-i18n"
import { useShadowStore } from "../../stores/shadow"

const { t } = useI18n()
const shadow = useShadowStore()
</script>

<template>
    <div class="p-2 mb-12 mx-4 sm:min-w-lg md:min-w-xl bg-sky-50 rounded-lg divide-y divide-gray-300">
        <CheckResultsRow
            :title="t('common.word.user')"
            :okMessage="t('message.status.user.ok')"
            :badMessage="t('message.error.user.try-again', { screenName: shadow.user.screenName })"
            :protectedMessage="t('message.status.user.protected', { screenName: shadow.user.screenName })"
            :networkErrorMessage="t('message.error.network')"
            :noTweetMessage="t('message.status.user.noTweets', { screenName: shadow.user.screenName })"
            :description="t('message.status.user.description')"
            :status="shadow.userStatus"
            shouldBe="Public"
        />

        <CheckResultsRow
            :title="t('common.word.ban.suggestion')"
            :okMessage="t('message.status.suggestion.ok')"
            :badMessage="t('message.status.suggestion.banned')"
            :description="t('message.status.suggestion.description')"
            :status="shadow.suggestionBanStatus"
            shouldBe="No"
        />
        <CheckResultsRow
            :title="t('common.word.ban.search')"
            :okMessage="t('message.status.search.ok')"
            :badMessage="t('message.status.search.banned')"
            :description="t('message.status.search.description')"
            :unknownMessage="t('message.status.search.unknown')"
            :status="shadow.searchBanStatus"
            shouldBe="No"
        />
        <CheckResultsRow
            :title="t('common.word.ban.reply-deboost')"
            :okMessage="t('message.status.reply-deboost.ok')"
            :badMessage="t('message.status.reply-deboost.banned')"
            :description="t('message.status.reply-deboost.description')"
            :unknownMessage="t('message.status.reply-deboost.unknown')"
            :status="shadow.replyDeboostStatus"
            shouldBe="No"
        />
        <CheckResultsRow
            :title="t('common.word.ban.ghost')"
            :okMessage="t('message.status.ghost.ok')"
            :badMessage="t('message.status.ghost.banned')"
            :description="t('message.status.ghost.description')"
            :unknownMessage="t('message.status.ghost.unknown')"
            :status="shadow.ghostBanStatus"
            shouldBe="No"
        />
    </div>
</template>
