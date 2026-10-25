<script setup>
defineProps({
  headingLevel: {
    type: String,
    default: 'h2'
  }
})

const backgroundStyle = {
  '--subscription-mobile-image': "url('/img/common/mobile/subscription_bg.webp')",
  '--subscription-desktop-image': "url('/img/common/desktop/subscription_bg.webp')"
}
</script>

<template>
  <section
    class="relative bg-[image:var(--subscription-mobile-image)] bg-cover bg-center md:bg-[image:var(--subscription-desktop-image)]"
    :style="backgroundStyle"
  >
    <!-- 遮罩 -->
    <div class="bg-dark-60a absolute inset-0"></div>

    <div class="relative z-10 mx-auto flex max-w-[1296px] flex-col gap-0 md:flex-row md:gap-6">
      <CommonSiteImage
        src="/img/common/subscription.webp"
        alt="訂閱 CTA 裝飾圖片"
        class="h-auto w-full self-center md:max-w-[526px]"
        sizes="(min-width: 768px) 526px, 100vw"
      />
      <!-- 右側標題與文字 -->
      <div
        class="text-neutral-0 flex flex-col justify-center px-3 py-10 md:max-w-[746px] lg:px-10 lg:py-20"
      >
        <p class="text-heading-xxxx-small md:text-heading-xxx-small">電子報訂閱</p>
        <component
          :is="headingLevel"
          class="text-heading-x-large xl:text-heading-xxx-large mb-3 break-all md:mb-6"
        >
          SUBSCRIPTION
        </component>
        <p class="text-paragraph-small md:text-paragraph-medium mb-6">
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
            class="border-neutral-0 placeholder:text-neutral-0 w-full rounded-full border bg-transparent p-5 outline-none"
          />
          <AtomButton type="submit" color="white" class="absolute top-1/2 right-2 -translate-y-1/2">
            送出
          </AtomButton>
        </form>
      </div>
    </div>
  </section>
</template>
