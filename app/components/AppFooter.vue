<script setup>
const socialLinks = [
  { label: 'Instagram', icon: 'simple-icons:instagram', to: '#' },
  { label: 'LINE', icon: 'simple-icons:line', to: '#' },
  { label: 'LinkedIn', icon: 'simple-icons:linkedin', to: '#' },
  {
    label: 'GitHub',
    icon: 'simple-icons:github',
    to: 'https://github.com/happyloa/Hex2026-mission2'
  }
]
</script>

<template>
  <footer id="footer" class="bg-primary px-3 py-10 text-neutral-0 md:py-20">
    <div class="mx-auto flex max-w-[1296px] flex-col justify-between gap-6 md:flex-row">
      <!-- 左側文字區塊 -->
      <div class="flex-1 md:max-w-[526px]">
        <p class="text-heading-xxxx-small md:text-heading-xxx-small">與我聯絡</p>
        <h3 class="mb-3 text-heading-x-large md:mb-6 md:text-heading-xxx-large">CONTACT</h3>
        <p class="text-paragraph-small md:text-paragraph-medium">
          若有數位產品設計和開發相關問題<br />
          歡迎填寫表單 或 直接與我聯絡！
        </p>

        <!-- 電腦版 social -->
        <div class="mt-[92px] hidden md:block">
          <ul class="mb-6 flex gap-3" aria-label="社群連結">
            <li v-for="link in socialLinks" :key="link.label">
              <a
                :href="link.to"
                target="_blank"
                rel="noopener noreferrer"
                class="flex size-12 items-center justify-center rounded-full border border-neutral-0 text-neutral-0 transition hover:bg-neutral-0 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-0"
                :aria-label="link.label"
              >
                <Icon :name="link.icon" class="size-4" />
              </a>
            </li>
          </ul>

          <a
            href="mailto:service@hexschool.com"
            class="flex w-fit items-center gap-2 text-paragraph-medium transition hover:text-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-0"
          >
            <Icon name="lucide:mail-open" class="size-6" />
            service@hexschool.com
          </a>
        </div>
      </div>

      <!-- 右側表單 -->
      <form
        class="grid max-w-[746px] flex-1 gap-3 text-paragraph-small sm:grid-cols-2 md:gap-6 md:text-paragraph-medium lg:px-10"
        @submit.prevent
      >
        <label class="sr-only" for="name">姓名</label>
        <input
          id="name"
          type="text"
          required
          placeholder="姓名"
          class="rounded-full border border-neutral-0 bg-transparent px-5 py-4 text-neutral-0 outline-none placeholder:text-neutral-0 md:px-8 md:py-5"
        />

        <label class="sr-only" for="phone">手機號碼</label>
        <input
          id="phone"
          type="tel"
          required
          placeholder="手機號碼"
          class="rounded-full border border-neutral-0 bg-transparent px-5 py-4 text-neutral-0 outline-none placeholder:text-neutral-0 md:px-8 md:py-5"
        />

        <label class="sr-only" for="email">電子信箱</label>
        <input
          id="email"
          type="email"
          required
          placeholder="電子信箱"
          class="rounded-full border border-neutral-0 bg-transparent px-5 py-4 text-neutral-0 outline-none placeholder:text-neutral-0 sm:col-span-2 md:px-8 md:py-5"
        />

        <label class="sr-only" for="message">備註</label>
        <textarea
          id="message"
          placeholder="備註"
          rows="4"
          class="resize-none rounded-[32px] border border-neutral-0 bg-transparent px-5 py-4 text-neutral-0 outline-none placeholder:text-neutral-0 sm:col-span-2 md:rounded-[40px] md:px-8 md:py-5"
        />

        <AtomButton type="submit" color="white" full class="sm:col-span-2"> 送出 </AtomButton>
      </form>

      <!-- 行動版 social -->
      <div class="block md:hidden">
        <ul class="mb-3 flex flex-wrap gap-3" aria-label="社群連結">
          <li v-for="link in socialLinks" :key="link.label">
            <a
              :href="link.to"
              target="_blank"
              rel="noopener noreferrer"
              class="flex size-11 items-center justify-center rounded-full border border-neutral-0 text-neutral-0 transition hover:bg-neutral-0 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-0"
              :aria-label="link.label"
            >
              <Icon :name="link.icon" class="size-4" />
            </a>
          </li>
        </ul>

        <a
          href="mailto:service@hexschool.com"
          class="flex items-center gap-2 text-paragraph-small transition hover:text-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-0"
        >
          <Icon name="lucide:mail-open" class="size-4" />
          service@hexschool.com
        </a>
      </div>
    </div>
  </footer>
</template>
