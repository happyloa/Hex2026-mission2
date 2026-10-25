<script setup>
const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  sizes: { type: String, default: '100vw' },
  loading: { type: String, default: 'lazy' },
  fetchpriority: { type: String, default: 'auto' }
})

const config = useRuntimeConfig()
const image = computed(() => getSiteImage(props.src))
const source = computed(() => withAppBaseURL(props.src, config.app.baseURL))
const sourceSet = computed(
  () =>
    image.value?.variants
      .map(({ src, width }) => `${withAppBaseURL(src, config.app.baseURL)} ${width}w`)
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
