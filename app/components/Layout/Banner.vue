<script setup lang="ts">
const {
  title = '專案作品',
  heading = 'PROJECTS',
  mobileImage = '/img/project/mobile/project_banner.webp',
  desktopImage = '/img/project/desktop/project_banner.webp',
  decorationText = 'BLOG',
  showDecoration = false
} = defineProps<{
  title?: string
  heading?: string
  mobileImage?: string
  desktopImage?: string
  decorationText?: string
  showDecoration?: boolean
}>()

const { app } = useRuntimeConfig()
const bannerStyle = computed(() => ({
  '--banner-mobile-image': toCssImage(mobileImage, app.baseURL),
  '--banner-desktop-image': toCssImage(desktopImage, app.baseURL)
}))
</script>

<template>
  <section
    class="relative flex h-95 flex-col justify-center overflow-hidden bg-(image:--banner-mobile-image) bg-cover bg-center text-center text-neutral-0 md:bg-(image:--banner-desktop-image)"
    :style="bannerStyle"
  >
    <!-- 遮罩 -->
    <div class="absolute inset-0 bg-dark-40a"></div>

    <div class="relative z-10">
      <p class="mb-1 text-heading-x-large md:mb-2 md:text-heading-xxx-large">
        {{ heading }}
      </p>
      <h1 class="text-heading-x-large md:text-heading-xx-large">{{ title }}</h1>
    </div>

    <!-- 裝飾文字 -->
    <span
      v-if="showDecoration"
      aria-hidden="true"
      class="pointer-events-none absolute top-60 left-1/2 z-10 -translate-x-[calc(50%+12px)] text-[160px] leading-[1.2] font-bold text-primary-50/20 md:top-35 md:-translate-x-[calc(50%+42px)] md:text-[300px]"
      >{{ decorationText }}
    </span>
  </section>
</template>
