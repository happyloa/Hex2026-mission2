<script setup>
defineProps({
  service: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <NuxtLink
    :to="`/service?service=${service.key}`"
    class="group bg-primary-50 text-neutral hover:bg-primary-100 block h-full w-full space-y-2 p-3 transition sm:space-y-3 md:p-6"
  >
    <!-- 標題與 icon -->
    <div class="flex justify-between gap-2 sm:gap-3">
      <div>
        <p class="text-heading-xxxx-small md:text-heading-xxx-small">{{ service.eyebrow }}</p>
        <h3 class="text-heading-small md:text-heading-medium">{{ service.title }}</h3>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
        class="size-6 shrink-0 md:size-7"
        aria-hidden="true"
      >
        <path :d="service.iconPath" />
      </svg>
    </div>
    <!-- 描述與 CTA -->
    <div class="flex gap-2 sm:gap-3">
      <p class="text-paragraph-small md:text-paragraph-medium">
        {{ service.summary }}
      </p>
      <span
        class="bg-neutral flex size-11 shrink-0 items-center justify-center rounded-full transition group-hover:bg-neutral-900 md:size-12"
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill="#ffffff"
          class="size-5 md:size-6"
        >
          <path d="M247.54-268.46 220-296l403.23-404H251.54v-40h440v440h-40v-371.69z" />
        </svg>
      </span>
    </div>
  </NuxtLink>
</template>
