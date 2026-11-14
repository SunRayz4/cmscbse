import type { MetadataRoute } from 'next'
import { schoolRoutes } from '@/lib/site-routes'

const siteUrl = 'https://folio-prashantpawarids-dots-projects.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/` },
    ...schoolRoutes.map(({ href }) => ({ url: `${siteUrl}${href}` })),
  ]
}
