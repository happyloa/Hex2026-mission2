<script setup>
// 常見問題資料
const faqItems = [
  {
    id: 1,
    title: '設計提案後包含幾次修改機會？',
    content:
      '每個專案皆包含 2 次修改機會，讓我們能在既定方向中細修視覺與互動細節。若後續需要額外調整，也可以依照修改範圍另行評估。'
  },
  {
    id: 2,
    title: '結案時我會收到哪些格式的檔案？',
    content:
      '會依專案內容提供設計原始檔、切圖素材、設計規格與可交付的前端檔案；若有品牌或後台相關文件，也會一併整理給您。'
  },
  {
    id: 3,
    title: '平面設計的成果，未來能直接應用在網頁嗎？',
    content:
      '沒問題。由於我兼具 UI/UX 設計與前端工程背景，在執行平面設計時會預先考量數位載體的適配性。這意味著您的品牌識別能無縫轉譯至網頁介面，不僅節省後續開發的重複溝通，更能確保品牌在不同平台上的視覺品質。',
    open: true
  },
  {
    id: 4,
    title: '完成一套完整的設計流程需要多久？',
    content:
      '視專案複雜度而定，一般約需 10 到 14 個工作日。透過嚴格執行的「四步驟流程」，我們能確保每個階段都有明確的進度產出，有效避免時程延宕。若有特定的上線期限，歡迎在訪談階段提出，我會為您評估最合適的排程。',
    open: true
  }
]
</script>

<template>
  <!-- FAQ 區塊 -->
  <section class="bg-primary-50 px-3 py-10 md:py-20">
    <div class="mx-auto flex max-w-[1076px] flex-col justify-between gap-6 md:flex-row">
      <!-- 左側標題 -->
      <div class="text-center md:max-w-[416px] md:text-start">
        <p class="text-heading-xxxx-small md:text-heading-xxx-small">FAQ</p>
        <h2 class="text-heading-x-large md:text-heading-xx-large">常見問題</h2>
      </div>
      <!-- 右側手風琴 -->
      <div class="flex-1 md:max-w-[636px]">
        <details
          v-for="faq in faqItems"
          :key="faq.id"
          class="group border-b border-primary [&::details-content]:block [&::details-content]:overflow-hidden [&::details-content]:[block-size:0] [&::details-content]:[transition:block-size_300ms_ease,content-visibility_300ms_ease_allow-discrete] [&[open]::details-content]:[block-size:auto]"
          :open="faq.open"
        >
          <summary
            class="grid cursor-pointer grid-cols-[32px_1fr_24px] gap-3 p-4 text-heading-xxx-small group-open:pb-2 md:items-center md:gap-4 md:p-6 md:text-heading-xx-small md:group-open:pb-4"
          >
            <span class="shrink-0">{{ String(faq.id).padStart(2, '0') }}</span>
            <span>{{ faq.title }}</span>
            <Icon
              name="lucide:chevron-down"
              class="size-6 shrink-0 transition-transform duration-300 group-open:rotate-180"
            />
          </summary>
          <p
            class="grid grid-cols-[32px_1fr_24px] gap-3 px-4 pb-4 text-paragraph-small md:gap-4 md:px-6 md:pb-6 md:text-paragraph-medium"
          >
            <span class="col-start-2">
              {{ faq.content }}
            </span>
          </p>
        </details>
      </div>
    </div>
  </section>
</template>
