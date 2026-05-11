<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})

defineEmits(['open'])
</script>

<template>
  <article
    class="flex h-[580px] flex-col-reverse bg-[image:var(--project-mobile-image)] bg-cover bg-center p-4 md:h-auto md:flex-row md:bg-[image:var(--project-desktop-image)] md:p-7"
    :style="{
      '--project-mobile-image': `url(${project.images.mobile})`,
      '--project-desktop-image': `url(${project.images.desktop})`
    }"
  >
    <!-- 內容區塊 -->
    <div
      class="flex w-full flex-col items-center gap-3 bg-primary-50 p-6 text-center text-paragraph-small md:max-w-[386px] md:p-10 md:text-paragraph-medium"
    >
      <!-- 專案時間 -->
      <time :datetime="project.datetime" class="text-paragraph-x-small md:text-paragraph-small"
        >{{ project.date }}
      </time>
      <!-- 標籤 -->
      <ul
        class="flex flex-wrap [&>li:not(:last-child)::after]:mx-0.5 [&>li:not(:last-child)::after]:content-['·'] md:[&>li:not(:last-child)::after]:mx-1"
      >
        <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
      </ul>
      <!-- 專案名稱 -->
      <h2 class="text-heading-x-small md:text-heading-small">
        {{ project.title }}
      </h2>
      <!-- 專案描述 -->
      <p>{{ project.description }}</p>
      <AtomButton @click="$emit('open', project)">前往專案</AtomButton>
    </div>
  </article>
</template>
