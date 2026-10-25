import { queryCollection } from '@nuxt/content/server'

export default defineEventHandler((event) =>
  queryCollection(event, 'blog')
    .select('path', 'title', 'description', 'date', 'tags', 'image', 'views', 'shares')
    .order('date', 'DESC')
    .all()
)
