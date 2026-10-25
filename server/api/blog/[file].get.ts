import { queryCollection } from '@nuxt/content/server'

export default defineEventHandler(async (event) => {
  const file = getRouterParam(event, 'file') || ''
  if (!file.endsWith('.json') || file.length <= 5 || /[\\/]/.test(file)) {
    throw createError({ statusCode: 404, statusMessage: 'Not Found', message: '文章不存在' })
  }
  const post = await queryCollection(event, 'blog')
    .path(`/blog/${file.slice(0, -5)}`)
    .first()
  if (!post)
    throw createError({ statusCode: 404, statusMessage: 'Not Found', message: '文章不存在' })
  return post
})
