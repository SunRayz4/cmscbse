import { SchoolDetailPage } from '@/components/school-detail-page'
import { SiteShell } from '@/components/school-site'
import { createSchoolPageMetadata } from '@/lib/seo'
import type { SchoolPageData } from '@/lib/school-page-types'

const canonical = '/campus/facilities'
const description = 'Explore the classrooms, laboratories, library and sports spaces listed by CMS School in Nigdi, Pune.'
const page: SchoolPageData = {
  slug: 'infrastructure-facilities',
  title: 'Infrastructure & Facilities',
  group: 'Campus Life',
  intro: 'A floor-by-floor directory of learning, wellbeing and play spaces.',
  image: 'photo-1580582932707-520aed937b7b',
  body: '',
}

export const metadata = createSchoolPageMetadata({ title: 'School Facilities in Nigdi, Pune', description, canonical })

export default function Page() {
  return <SiteShell><SchoolDetailPage page={page} canonical={canonical} description={description}/></SiteShell>
}
