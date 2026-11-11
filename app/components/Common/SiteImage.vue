<script setup lang="ts">
const {
  src,
  alt = '',
  sizes = '100vw',
  loading = 'lazy',
  fetchpriority = 'auto'
} = defineProps<{
  src: string
  alt?: string
  sizes?: string
  loading?: 'lazy' | 'eager'
  fetchpriority?: 'high' | 'low' | 'auto'
}>()

const { app } = useRuntimeConfig()
const image = computed(() => getSiteImage(src))
const source = computed(() => withAppBaseURL(src, app.baseURL))
const sourceSet = computed(
  () =>
    image.value?.variants
      .map(({ src: variant, width }) => `${withAppBaseURL(variant, app.baseURL)} ${width}w`)
      .join(', ') || undefined
)
</script>

<template>
  <img
    :src="source"
    :srcset="sourceSet"
    :sizes="sourceSet ? sizes : undefined"
    :alt="alt"
    :width="image?.width"
    :height="image?.height"
    :loading="loading"
    :fetchpriority="fetchpriority"
    decoding="async"
  />
</template>
