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
            :badMessage="t('message.error.user.try-again')"
            :description="t('message.status.user.description')"
            :status="shadow.isExist"
            shouldBe="Yes"
        />

        <CheckResultsRow
            :title="t('common.word.ban.suggestion')"
            :okMessage="t('message.status.suggestion.ok')"
            :badMessage="t('message.status.suggestion.banned')"
            :description="t('message.status.suggestion.description')"
            :status="shadow.isSuggestionBanned"
            shouldBe="No"
        />
        <CheckResultsRow
            :title="t('common.word.ban.search')"
            :okMessage="t('message.status.search.ok')"
            :badMessage="t('message.status.search.banned')"
            :description="t('message.status.search.description')"
            :status="shadow.isSearchBanned"
            shouldBe="No"
        />
        <CheckResultsRow
            :title="t('common.word.ban.reply-deboost')"
            :okMessage="t('message.status.reply-deboost.ok')"
            :badMessage="t('message.status.reply-deboost.banned')"
            :description="t('message.status.reply-deboost.description')"
            :status="shadow.isReplyDeboosted"
            shouldBe="No"
        />
        <CheckResultsRow
            :title="t('common.word.ban.ghost')"
            :okMessage="t('message.status.ghost.ok')"
            :badMessage="t('message.status.ghost.banned')"
            :description="t('message.status.ghost.description')"
            :status="shadow.isGhostBanned"
            shouldBe="No"
        />
    </div>
</template>
