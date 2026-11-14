import { SchoolDetailPage } from '@/components/school-detail-page'
import { SiteShell } from '@/components/school-site'
import { createSchoolPageMetadata } from '@/lib/seo'
import type { SchoolPageData } from '@/lib/school-page-types'

const canonical = '/information/school-timings'
const description = 'Review the school-day timing information published by CMS School in Nigdi, Pune.'
const page: SchoolPageData = {
  slug: 'school-timings',
  title: 'School Timings',
  group: 'Information',
  intro: 'A calm, well-supported start to every school day.',
  image: 'photo-1509062522246-3755977927d7',
  body: 'The school campus is open Monday through Saturday. Typical timings are 8:00 am to 2:00 pm, with age-appropriate schedules for the early years. Transport routes and arrival guidance are shared with families before the session begins.',
}

export const metadata = createSchoolPageMetadata({ title: 'School Timings in Nigdi, Pune', description, canonical })

export default function Page() {
  return <SiteShell><SchoolDetailPage page={page} canonical={canonical} description={description}/></SiteShell>
}
