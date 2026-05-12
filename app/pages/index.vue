<script setup>
const requestUrl = useRequestURL()

useSeoMeta(
  getPageSeo({
    title: '首頁',
    description:
      'Nelson 的個人作品網站，整理服務項目、專案作品與部落格文章，展示 UIUX 設計與前端開發整合能力。',
    origin: requestUrl.origin
  })
)
</script>

<template>
  <h1 class="text-primary underline">首頁</h1>
  <LayoutSubscription />
</template>
