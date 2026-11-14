import { SchoolDetailPage } from '@/components/school-detail-page'
import { SiteShell } from '@/components/school-site'
import { createSchoolPageMetadata } from '@/lib/seo'
import type { SchoolPageData } from '@/lib/school-page-types'

const canonical = '/admissions/process'
const description = 'Find school admission information for CMS School in Nigdi, Pune, a CBSE school in Pimpri-Chinchwad (PCMC). Applications for 2027–28 are open for Nursery to Grade II.'
const page: SchoolPageData = {
  slug: 'admission-process',
  title: 'Admission Process',
  group: 'Admissions',
  intro: 'Take the first step towards a bright future at CMS.',
  image: 'photo-1509062522246-3755977927d7',
  body: 'Admissions are open for Nursery to Grade II for the 2027–28 session, subject to availability. Seats are limited. Families can book a campus visit, discuss the right grade and receive the application checklist from our admissions team.',
}

export const metadata = createSchoolPageMetadata({ title: 'School Admission in Nigdi, Pune', description, canonical })

export default function Page() {
  return <SiteShell><SchoolDetailPage page={page} canonical={canonical} description={description}/></SiteShell>
}
