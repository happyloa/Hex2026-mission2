<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="flex min-h-60 flex-col justify-center gap-3 bg-primary-50 px-6 py-12 text-center">
    <h2 class="text-heading-x-small md:text-heading-small">{{ title }}</h2>
    <p class="text-paragraph-small text-neutral-500 md:text-paragraph-medium">{{ description }}</p>
  </div>
</template>
