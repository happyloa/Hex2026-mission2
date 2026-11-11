<script setup lang="ts">
const { app } = useRuntimeConfig()

// 明確宣告 favicon，部署在子路徑時瀏覽器才不會改向網域根目錄要 /favicon.ico。
useHead({
  link: [{ rel: 'icon', type: 'image/x-icon', href: withAppBaseURL('/favicon.ico', app.baseURL) }]
})
</script>

<template>
  <AppHeader />
  <NuxtPage />
  <AppFooter />
</template>
