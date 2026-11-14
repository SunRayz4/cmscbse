import { SchoolDetailPage } from '@/components/school-detail-page'
import { SiteShell } from '@/components/school-site'
import { createSchoolPageMetadata } from '@/lib/seo'
import type { SchoolPageData } from '@/lib/school-page-types'

const canonical = '/our-school/history'
const description = 'Explore the history of CMS School, established in 1992, and its growth as a CBSE senior secondary school in Pune.'
const page: SchoolPageData = {
  slug: 'school-history',
  title: 'School History',
  group: 'Our School',
  intro: 'Rooted in a proud legacy. Ready for tomorrow.',
  image: 'photo-1560785496-3c9d27877182',
  body: 'Founded in 1992, CMS began with a simple belief: every child can flourish when given the right guidance. From a close-knit school community, we have grown into a senior secondary institution while keeping personal care at the heart of our work.',
}

export const metadata = createSchoolPageMetadata({ title: 'School History in Nigdi, Pune', description, canonical })

export default function Page() {
  return <SiteShell><SchoolDetailPage page={page} canonical={canonical} description={description}/></SiteShell>
}
