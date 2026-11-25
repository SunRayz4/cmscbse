import { SchoolDetailPage } from '@/components/school-detail-page'
import { SiteShell } from '@/components/school-site'
import { createSchoolPageMetadata } from '@/lib/seo'
import type { SchoolPageData } from '@/lib/school-page-types'
import { curious } from '@/lib/school-data'

const canonical = '/campus/events'
const description = 'Explore the school events and student activities described by CMS School in Nigdi, Pune.'
const page: SchoolPageData = {
  slug: 'events-activities',
  title: 'Events & Activities',
  group: 'Campus Life',
  intro: 'Learning comes alive beyond the classroom.',
  image: curious,
  body: 'From annual day and inter-house sports to reading week, science showcases and community service, our calendar gives students many ways to discover new interests, build friendships and share their talents.',
}

export const metadata = createSchoolPageMetadata({ title: 'School Events and Activities in Pune', description, canonical })

export default function Page() {
  return <SiteShell><SchoolDetailPage page={page} canonical={canonical} description={description}/></SiteShell>
}