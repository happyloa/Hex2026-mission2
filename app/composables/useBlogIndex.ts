import type { BlogCollectionItem } from '@nuxt/content'

export type BlogSummary = Pick<
  BlogCollectionItem,
  'path' | 'title' | 'description' | 'date' | 'tags' | 'image' | 'views' | 'shares'
>

export const useBlogIndex = () =>
  useFetch<BlogSummary[]>('/api/blog/index.json', {
    baseURL: useRuntimeConfig().app.baseURL,
    key: 'blog-index',
    default: () => []
  })
