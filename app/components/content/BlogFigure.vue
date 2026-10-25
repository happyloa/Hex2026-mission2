<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: true
  }
})
const image = computed(() => getSiteImage(props.src))
</script>

<template>
  <figure
    class="mx-auto mb-5 lg:mb-6"
    :style="image ? { maxWidth: `${image.width}px` } : undefined"
  >
    <CommonSiteImage
      :src="src"
      :alt="alt"
      loading="eager"
      :sizes="
        image ? `(min-width: ${image.width + 24}px) ${image.width}px, calc(100vw - 24px)` : '100vw'
      "
      class="mb-2 block h-auto w-full lg:mb-4"
    />
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>
