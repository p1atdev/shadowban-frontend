import { defineNuxtPlugin } from "#app"
import VueGtag from "vue-gtag-next"

// Nuxtプラグインの登録
export default defineNuxtPlugin((nuxtApp) => {
    // ルーター取得
    // const router = useRouter()

    const reuntimeConfig = useRuntimeConfig()

    // 測定設定
    const property = {
        id: reuntimeConfig.GTAG, // GA4の測定IDを指定する
    }

    nuxtApp.vueApp.use(VueGtag, {
        property: property,
    })
})
