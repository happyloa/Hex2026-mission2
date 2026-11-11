import { siteImages } from '#build/site-images'
import { withAppBaseURL } from './seo'

export const getSiteImage = (src: string) => siteImages[src]

// CSS 背景圖不會經過 Nuxt 的路徑處理，需自行補上 baseURL 才能部署在子路徑。
export const toCssImage = (src: string, baseURL: string) => `url('${withAppBaseURL(src, baseURL)}')`
