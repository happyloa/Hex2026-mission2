<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
  },
  variant: {
    type: String,
    default: 'list',
    validator: (value) => ['list', 'related'].includes(value)
  }
})

const formattedDate = computed(() => {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(`${props.post.date}T00:00:00`))
})

const articleClass = computed(() => {
  if (props.variant === 'related') {
    return ''
  }

  return 'flex flex-col gap-2 md:items-center md:gap-6 lg:flex-row'
})

const imageClass = computed(() => {
  if (props.variant === 'related') {
    return 'mb-2 block h-[150px] md:h-[240px] md:mb-3'
  }

  return 'h-[200px] lg:h-[256px] lg:max-w-[526px]'
})
</script>

<template>
  <NuxtLink :to="post.path">
    <article :class="articleClass">
      <img :src="post.image" :alt="post.title" class="w-full object-cover" :class="imageClass" />
      <div class="space-y-2 md:space-y-3">
        <!-- 文章標籤 -->
        <ul
          class="flex flex-wrap text-paragraph-small md:text-paragraph-medium [&>li:not(:last-child)::after]:mx-0.5 [&>li:not(:last-child)::after]:content-['·'] md:[&>li:not(:last-child)::after]:mx-1"
        >
          <li v-for="tag in post.tags" :key="tag">{{ tag }}</li>
        </ul>
        <!-- 標題 -->
        <component
          :is="variant === 'related' ? 'h3' : 'h2'"
          class="text-heading-x-small md:text-heading-small"
        >
          {{ post.title }}
        </component>
        <!-- meta -->
        <div
          class="flex flex-wrap justify-between gap-2 whitespace-nowrap text-paragraph-x-small md:gap-6 md:text-paragraph-small"
        >
          <time :datetime="post.date">{{ formattedDate }}</time>
          <!-- 觀看數與分享數 -->
          <div class="flex flex-wrap gap-2 md:gap-3">
            <span class="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#404040"
              >
                <path
                  d="M587.08-373.01q44-44.09 44-107.08 0-62.99-44.09-106.99-44.09-44-107.08-44-62.99 0-106.99 44.09-44 44.09-44 107.08 0 62.99 44.09 106.99 44.09 44 107.08 44 62.99 0 106.99-44.09ZM412-412q-28-28-28-68t28-68q28-28 68-28t68 28q28 28 28 68t-28 68q-28 28-68 28t-68-28ZM234.62-285.12Q124.16-358.23 69.54-480q54.62-121.77 165.02-194.88Q344.97-748 479.95-748q134.97 0 245.43 73.12Q835.84-601.77 890.46-480q-54.62 121.77-165.02 194.88Q615.03-212 480.05-212q-134.97 0-245.43-73.12ZM480-480Zm207 158q95-58 146-158-51-100-146-158t-207-58q-112 0-207 58T127-480q51 100 146 158t207 58q112 0 207-58Z"
                />
              </svg>
              {{ post.views }} views</span
            >
            <span class="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#404040"
              >
                <path
                  d="M640.22-116q-44.91 0-76.26-31.41-31.34-31.41-31.34-76.28 0-9 5.15-30.16L297.31-402.31q-14.46 14-33.41 22-18.94 8-40.59 8-44.71 0-76.01-31.54Q116-435.39 116-480q0-44.61 31.3-76.15 31.3-31.54 76.01-31.54 21.74 0 40.64 8 18.9 8 33.36 22l240.46-148.08q-2.38-7.38-3.77-14.77-1.38-7.39-1.38-15.77 0-44.87 31.43-76.28Q595.49-844 640.4-844t76.25 31.44Q748-781.13 748-736.22q0 44.91-31.41 76.26-31.41 31.34-76.28 31.34-21.85 0-40.5-8.19Q581.15-645 566.69-659L326.23-510.54q2.38 7.39 3.77 14.77 1.38 7.39 1.38 15.77 0 8.38-1.38 15.77-1.39 7.38-3.77 14.77L566.69-301q14.46-14 33.16-22.19 18.7-8.19 40.46-8.19 44.87 0 76.28 31.43Q748-268.51 748-223.6t-31.44 76.25Q685.13-116 640.22-116Zm.09-52q23.67 0 39.68-16.01Q696-200.02 696-223.69q0-23.67-16.01-39.68-16.01-16.02-39.68-16.02-23.67 0-39.68 16.02-16.02 16.01-16.02 39.68 0 23.67 16.02 39.68Q616.64-168 640.31-168Zm-417-256.31q23.83 0 39.95-16.3 16.13-16.31 16.13-39.39 0-23.08-16.13-39.39-16.12-16.3-39.95-16.3-23.51 0-39.41 16.3Q168-503.08 168-480q0 23.08 15.9 39.39 15.9 16.3 39.41 16.3Zm456.38-272.32Q696-712.64 696-736.31q0-23.67-16.01-39.68Q663.98-792 640.31-792q-23.67 0-39.68 16.01-16.02 16.01-16.02 39.68 0 23.67 16.31 39.68 16.31 16.02 39.39 16.02 23.07 0 39.38-16.02Zm-39.38 472.94ZM223.69-480Zm416.62-256.31Z"
                />
              </svg>
              {{ post.shares }} shares</span
            >
          </div>
        </div>
      </div>
    </article>
  </NuxtLink>
</template>
