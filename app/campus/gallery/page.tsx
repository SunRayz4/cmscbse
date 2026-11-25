import { SchoolDetailPage } from '@/components/school-detail-page'
import { SiteShell } from '@/components/school-site'
import { createSchoolPageMetadata } from '@/lib/seo'
import type { SchoolPageData } from '@/lib/school-page-types'
import { curious } from '@/lib/school-data'

const canonical = '/campus/gallery'
const description = 'View photographs of classroom learning, school activities and campus life at CMS School in Pune.'
const page: SchoolPageData = {
  slug: 'gallery',
  title: 'Gallery',
  group: 'Campus Life',
  intro: 'A glimpse into the ideas, friendships and moments that make school.',
  image: curious,
  body: 'Explore scenes from classroom learning, science projects, performing arts, sports and special days. Every photograph celebrates the curious, creative spirit of our CMS community.',
}

export const metadata = createSchoolPageMetadata({ title: 'Campus and School Photo Gallery in Pune', description, canonical })

export default function Page() {
  return <SiteShell><SchoolDetailPage page={page} canonical={canonical} description={description}/></SiteShell>
}