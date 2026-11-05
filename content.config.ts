import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod/v4'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        tags: z.array(z.string()),
        image: z.string(),
        views: z.number(),
        shares: z.number()
      })
    })
  }
})
