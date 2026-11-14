import { SchoolDetailPage } from '@/components/school-detail-page'
import { SiteShell } from '@/components/school-site'
import { createSchoolPageMetadata } from '@/lib/seo'
import type { SchoolPageData } from '@/lib/school-page-types'

const canonical = '/information/academic-calendar'
const description = 'Read how CMS School shares term dates, assessments and school events with families in Pune.'
const page: SchoolPageData = {
  slug: 'academic-calendar',
  title: 'Academic Calendar',
  group: 'Information',
  intro: 'A year of learning, celebration and community.',
  image: 'photo-1506784983877-45594efa4cbe',
  body: 'The school year includes three terms, assessments, parent–teacher meetings, cultural celebrations and sports events. The final calendar is shared with enrolled families at the beginning of the session; dates may be updated to reflect CBSE and local notices.',
}

export const metadata = createSchoolPageMetadata({ title: 'Academic Calendar and Term Dates', description, canonical })

export default function Page() {
  return <SiteShell><SchoolDetailPage page={page} canonical={canonical} description={description}/></SiteShell>
}
