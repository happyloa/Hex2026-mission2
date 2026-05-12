<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '專案作品'
  },
  heading: {
    type: String,
    default: 'PROJECTS'
  },
  mobileImage: {
    type: String,
    default: '/img/project/mobile/project_banner.webp'
  },
  desktopImage: {
    type: String,
    default: '/img/project/desktop/project_banner.webp'
  },
  decorationText: {
    type: String,
    default: 'BLOG'
  },
  showDecoration: {
    type: Boolean,
    default: false
  }
})

const bannerStyle = computed(() => ({
  '--banner-mobile-image': `url('${props.mobileImage}')`,
  '--banner-desktop-image': `url('${props.desktopImage}')`
}))
</script>

<template>
  <section
    class="relative flex h-[380px] flex-col justify-center overflow-hidden bg-[image:var(--banner-mobile-image)] bg-cover bg-center text-center text-neutral-0 md:bg-[image:var(--banner-desktop-image)]"
    :style="bannerStyle"
    fetchpriority="high"
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
      class="pointer-events-none absolute left-1/2 top-[240px] z-10 -translate-x-[calc(50%+12px)] text-[160px] font-bold leading-[1.2] text-primary-50/20 md:top-[140px] md:-translate-x-[calc(50%+42px)] md:text-[300px]"
      >{{ decorationText }}
    </span>
  </section>
</template>
