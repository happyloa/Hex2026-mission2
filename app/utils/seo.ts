export const SITE_TITLE_BASE = '六角 2026 30 天軟體工程師體驗營'
export const SITE_OG_IMAGE = '/img/common/og-image.png'

export const buildSeoTitle = (title: string) => `${title} | ${SITE_TITLE_BASE}`

export const buildAbsoluteUrl = (path: string, origin: string) => {
  if (/^https?:\/\//.test(path)) {
    return path
  }

  return new URL(path, origin).toString()
}

export const getPageSeo = ({
  title,
  description,
  origin,
  path = '/',
  ogImage = SITE_OG_IMAGE
}: {
  title: string
  description: string
  origin: string
  path?: string
  ogImage?: string
}) => {
  const fullTitle = buildSeoTitle(title)
  const imageUrl = buildAbsoluteUrl(ogImage, origin)

  return {
    title: fullTitle,
    description,
    ogTitle: fullTitle,
    ogDescription: description,
    ogImage: imageUrl,
    ogUrl: buildAbsoluteUrl(path, origin),
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: fullTitle,
    twitterDescription: description,
    twitterImage: imageUrl
  }
}
