<template>
  <section
    class="relative bg-[url('/img/common/mobile/subscription_bg.webp')] bg-cover bg-center md:bg-[url('/img/common/desktop/subscription_bg.webp')]"
  >
    <!-- 遮罩 -->
    <div class="absolute inset-0 bg-dark-60a"></div>

    <div class="relative z-10 mx-auto flex max-w-[1296px] flex-col gap-0 md:flex-row md:gap-6">
      <img
        src="/img/common/subscription.webp"
        alt="訂閱 CTA 裝飾圖片"
        class="flex-1 md:max-w-[526px]"
      />
      <!-- 右側標題與文字 -->
      <div
        class="flex flex-col justify-center px-3 py-10 text-neutral-0 md:max-w-[746px] lg:px-10 lg:py-20"
      >
        <p class="text-heading-xxxx-small md:text-heading-xxx-small">電子報訂閱</p>
        <h3 class="mb-3 break-all text-heading-x-large md:mb-6 xl:text-heading-xxx-large">
          SUBSCRIPTION
        </h3>
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
            class="w-full rounded-full border border-neutral-0 bg-transparent p-5 outline-none placeholder:text-neutral-0 focus:border-primary-500"
          />
          <button
            class="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-neutral-0 px-5 py-3 text-label-small text-neutral transition hover:bg-primary-500 md:px-6 md:text-label-medium"
          >
            送出
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
