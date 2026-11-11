<script setup lang="ts">
import type { Project } from '~/types'

const { project, headingLevel = 'h2' } = defineProps<{
  project: Project
  headingLevel?: 'h2' | 'h3'
}>()

defineEmits<{ open: [project: Project] }>()

const { app } = useRuntimeConfig()
const backgroundStyle = computed(() => ({
  '--project-mobile-image': toCssImage(project.images.mobile, app.baseURL),
  '--project-desktop-image': toCssImage(project.images.desktop, app.baseURL)
}))
</script>

<template>
  <article
    class="flex h-145 flex-col-reverse bg-(image:--project-mobile-image) bg-cover bg-center p-4 md:h-auto md:flex-row md:bg-(image:--project-desktop-image) md:p-7"
    :style="backgroundStyle"
  >
    <!-- 內容區塊 -->
    <div
      class="flex w-full flex-col items-center gap-3 bg-primary-50 p-6 text-center text-paragraph-small md:max-w-96.5 md:p-10 md:text-paragraph-medium"
    >
      <!-- 專案時間 -->
      <time :datetime="project.datetime" class="text-paragraph-x-small md:text-paragraph-small"
        >{{ project.date }}
      </time>
      <!-- 標籤 -->
      <ul class="tag-list flex flex-wrap">
        <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
      </ul>
      <!-- 專案名稱 -->
      <component :is="headingLevel" class="text-heading-x-small md:text-heading-small">
        {{ project.title }}
      </component>
      <!-- 專案描述 -->
      <p>{{ project.description }}</p>
      <AtomButton @click="$emit('open', project)">前往專案</AtomButton>
    </div>
  </article>
</template>
