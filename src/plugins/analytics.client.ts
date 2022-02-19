
import { defineNuxtPlugin } from '#app';
import VueTag from "vue-gtag";

// Nuxtプラグインの登録
export default defineNuxtPlugin(nuxtApp => {
  // ルーター取得
  const router = useRouter();

  // 測定設定
  const config = {
    id: `GTM-TWMKZM8`, // GA4の測定IDを指定する
  };

  // Vue登録
  nuxtApp.vueApp.use(VueTag, { config: config }, router);
});