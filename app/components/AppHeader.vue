<script setup>
const isMenuOpen = ref(false)

const navLinks = [
  { label: '服務項目', to: '/service' },
  { label: '專案作品', to: '/project' },
  { label: '部落格', to: '/blog' }
]

const navLinkClass = 'px-3 py-1 text-label-medium transition hover:text-neutral-900'

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-primary-50 px-3 py-2 md:py-3">
    <nav class="mx-auto flex max-w-[1296px] items-center justify-between">
      <!-- logo -->
      <NuxtLink to="/" aria-label="回到首頁" @click="closeMenu">
        <picture>
          <source media="(min-width: 768px)" srcset="/img/common/desktop/logo.svg" />
          <img src="/img/common/mobile/logo.svg" alt="網站 logo" />
        </picture>
      </NuxtLink>

      <!-- 電腦版選單 -->
      <ul class="hidden gap-6 md:flex">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink :to="link.to" :class="navLinkClass" active-class="text-primary-500">
            {{ link.label }}
          </NuxtLink>
        </li>
        <li>
          <a :class="navLinkClass" href="#footer">與我聯絡</a>
        </li>
      </ul>

      <!-- 手機版選單按鈕 -->
      <button
        class="flex size-11 items-center justify-center rounded-full border-neutral md:hidden"
        :class="{ border: isMenuOpen }"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        aria-label="開關選單"
        @click="isMenuOpen = !isMenuOpen"
      >
        <!-- 漢堡圖示 -->
        <span class="flex size-5 flex-col justify-center gap-[5px]" aria-hidden="true">
          <div class="h-px bg-neutral"></div>
          <div class="h-px bg-neutral"></div>
          <div class="h-px bg-neutral"></div>
        </span>
      </button>
    </nav>

    <!-- 遮罩 -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 top-16 z-40 bg-dark-60a md:hidden"
      aria-hidden="true"
      @click="closeMenu"
    ></div>

    <!-- 手機版選單 -->
    <nav
      v-if="isMenuOpen"
      class="absolute left-0 right-0 top-full z-50 bg-primary-50 py-3 md:hidden"
    >
      <ul class="flex flex-col items-center gap-3">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="block px-3 py-1 text-label-small transition hover:text-neutral-900"
            active-class="text-primary-500"
            @click="closeMenu"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
        <li>
          <a
            class="block px-3 py-1 text-label-small transition hover:text-neutral-900"
            href="#footer"
            @click="closeMenu"
          >
            與我聯絡
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
