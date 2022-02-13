<script lang="ts" setup>
import { useShadowStore } from "../stores/shadow"
const shadow = useShadowStore()
</script>

<template>
    <div class="grid place-items-center">
        <!-- <p>rest id: {{ shadow.restId }}</p> -->
        <p>is exist: {{ shadow.isExist }}</p>
        <p>is suggestion banned: {{ shadow.isSuggestionBanned }}</p>
        <p>is ghostbanned: {{ shadow.isGhostBanned }}</p>
    </div>
</template>
