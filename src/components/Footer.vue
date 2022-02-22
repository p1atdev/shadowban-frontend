<script lang="ts" setup>
import { useI18n } from "vue-i18n"

const { t } = useI18n()
</script>
<template>
    <footer mb-8>
        <div flex flex-col text-gray-500 gap-y-1>
            <div grid grid-cols-1 place-items-center>
                <div flex items-center gap-x-4>
                    <a href="https://github.com/p1atdev/shadowban-frontend" target="_blank" rel="noreferrer noopener">
                        <div flex items-center gap-x-2>
                            <div class="i-akar-icons-github-fill text-lg"></div>
                            <p>
                                {{ t("footer.frontend") }}
                            </p>
                        </div>
                    </a>
                    <a
                        href="https://github.com/p1atdev/shadowban-backend-deno"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <div flex items-center gap-x-2>
                            <div class="i-akar-icons-github-fill text-lg"></div>
                            <p>
                                {{ t("footer.backend") }}
                            </p>
                        </div>
                    </a>
                    <a href="https://twitter.com/p1atdev" target="_blank" rel="noreferrer noopener">
                        <div flex items-center gap-x-1>
                            <div class="i-akar-icons-twitter-fill text-lg"></div>
                            <p>@p1atdev</p>
                        </div>
                    </a>
                </div>
            </div>
            <div mx-auto>&copy; 2022 p1atdev</div>
        </div>
    </footer>
</template>
