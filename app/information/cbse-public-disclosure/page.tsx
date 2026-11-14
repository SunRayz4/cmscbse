import { SchoolDetailPage } from '@/components/school-detail-page'
import { SiteShell } from '@/components/school-site'
import { createSchoolPageMetadata } from '@/lib/seo'
import type { SchoolPageData } from '@/lib/school-page-types'

const canonical = '/information/cbse-public-disclosure'
const description = 'View CBSE affiliation and school-code information published by CMS School in Pune.'
const page: SchoolPageData = {
  slug: 'mandatory-public-disclosure',
  title: 'Mandatory Public Disclosure (CBSE)',
  group: 'CBSE Information',
  intro: 'School information and disclosures for our community.',
  image: 'photo-1580582932707-520aed937b7b',
  body: 'CMS School is affiliated with the Central Board of Secondary Education, New Delhi. Affiliation number: 1930248. School code: 45129. The school is committed to transparent communication and compliance with applicable CBSE disclosure requirements.',
}

export const metadata = createSchoolPageMetadata({ title: 'CBSE Public Disclosure', description, canonical })

export default function Page() {
  return <SiteShell><SchoolDetailPage page={page} canonical={canonical} description={description}/></SiteShell>
}
