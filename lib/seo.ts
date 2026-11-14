import type { Metadata } from 'next'

export const SITE_URL = 'https://folio-prashantpawarids-dots-projects.vercel.app'

export type SchoolPageSeo = {
  title: string
  description: string
  canonical: string
}

export function createSchoolPageMetadata({ title, description, canonical }: SchoolPageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: 'website',
      title: `${title} | CMS School`,
      description,
      url: canonical,
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'CMS School in Nigdi, Pune' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | CMS School`,
      description,
      images: ['/opengraph-image'],
    },
  }
}
