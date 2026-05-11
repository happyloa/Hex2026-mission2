<script setup>
const navLinks = [
  { label: '服務項目', to: '/service' },
  { label: '專案作品', to: '/project' },
  { label: '部落格', to: '/blog' }
]

const navLinkClass = 'px-3 py-1 text-label-medium transition hover:text-neutral-900'
</script>

<template>
  <header class="sticky top-0 z-50 bg-primary-50 px-3 py-2 md:py-3">
    <nav class="mx-auto flex max-w-[1296px] items-center justify-between">
      <!-- logo -->
      <NuxtLink to="/" aria-label="回到首頁">
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
    </nav>
  </header>
</template>
