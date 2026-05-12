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
  <!-- 部落格區塊 -->
  <section class="bg-primary-50 px-3 py-10 md:py-20">
    <div class="mx-auto max-w-[1296px]">
      <!-- 標題區塊與按鈕 -->
      <div class="mb-6 flex items-center justify-between gap-6 md:mb-10">
        <div>
          <p class="text-heading-xxxx-small md:text-heading-xxx-small">部落格</p>
          <h2 class="text-heading-x-large md:text-heading-xxx-large">BLOGS</h2>
        </div>
        <AtomButton to="/blog" variant="outline">探索更多</AtomButton>
      </div>
      <!-- 最新文章卡片 -->
    </div>
  </section>
  <LayoutSubscription />
</template>
