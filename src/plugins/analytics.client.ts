import { defineNuxtPlugin } from "#app"
import VueTag from "vue-gtag-next"

// Nuxtプラグインの登録
export default defineNuxtPlugin((nuxtApp) => {
    // ルーター取得
    const router = useRouter()

    const reuntimeConfig = useRuntimeConfig()

    // 測定設定
    const config = {
        id: reuntimeConfig.GTAG, // GA4の測定IDを指定する
    }

    // Vue登録
    nuxtApp.vueApp.use(VueTag, { config: config }, router)
})
