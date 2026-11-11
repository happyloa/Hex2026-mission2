<script setup lang="ts">
const { headingLevel = 'h2' } = defineProps<{ headingLevel?: 'h2' | 'h3' }>()

const { app } = useRuntimeConfig()
const backgroundStyle = {
  '--subscription-mobile-image': toCssImage('/img/common/mobile/subscription_bg.webp', app.baseURL),
  '--subscription-desktop-image': toCssImage(
    '/img/common/desktop/subscription_bg.webp',
    app.baseURL
  )
}
</script>

<template>
  <section
    class="relative bg-(image:--subscription-mobile-image) bg-cover bg-center md:bg-(image:--subscription-desktop-image)"
    :style="backgroundStyle"
  >
    <!-- 遮罩 -->
    <div class="absolute inset-0 bg-dark-60a"></div>

    <div class="relative z-10 mx-auto flex max-w-324 flex-col gap-0 md:flex-row md:gap-6">
      <CommonSiteImage
        src="/img/common/subscription.webp"
        alt="訂閱 CTA 裝飾圖片"
        class="h-auto w-full self-center md:max-w-131.5"
        sizes="(min-width: 768px) 526px, 100vw"
      />
      <!-- 右側標題與文字 -->
      <div
        class="flex flex-col justify-center px-3 py-10 text-neutral-0 md:max-w-186.5 lg:px-10 lg:py-20"
      >
        <p class="text-heading-xxxx-small md:text-heading-xxx-small">電子報訂閱</p>
        <component
          :is="headingLevel"
          class="mb-3 text-heading-x-large break-all md:mb-6 xl:text-heading-xxx-large"
        >
          SUBSCRIPTION
        </component>
        <p class="mb-6 text-paragraph-small md:text-paragraph-medium">
          你也在追求設計美感與技術落地的完美平衡嗎？作為資深設計師兼工程師，我深知跨領域協作的痛點。訂閱電子報，我將分享如何利用
          AI 工具提升產能！
        </p>
        <form class="relative" @submit.prevent>
          <label class="sr-only" for="subscriptionEmail">電子信箱</label>
          <input
            id="subscriptionEmail"
            type="email"
            required
            placeholder="電子信箱"
            class="w-full rounded-full border border-neutral-0 bg-transparent p-5 outline-none placeholder:text-neutral-0"
          />
          <AtomButton type="submit" color="white" class="absolute top-1/2 right-2 -translate-y-1/2">
            送出
          </AtomButton>
        </form>
      </div>
    </div>
  </section>
</template>
