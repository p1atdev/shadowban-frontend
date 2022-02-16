<script lang="ts" setup>
const router = useRoute()

let screenName = ""

if (router.params.screenName && typeof router.params.screenName == "string") {
    screenName = router.params.screenName
}
</script>

<template>
    <Checker :initialScreenName="screenName" />
</template>
