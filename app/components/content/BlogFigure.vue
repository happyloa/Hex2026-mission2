<script setup>
defineProps({
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
</script>

<template>
  <figure class="mb-5 lg:mb-6">
    <img :src="src" :alt="alt" class="mb-2 block w-full lg:mb-4" />
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>
