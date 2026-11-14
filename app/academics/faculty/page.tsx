import { SchoolDetailPage } from '@/components/school-detail-page'
import { SiteShell } from '@/components/school-site'
import { createSchoolPageMetadata } from '@/lib/seo'
import type { SchoolPageData } from '@/lib/school-page-types'

const canonical = '/academics/faculty'
const description = 'Meet the teaching approach and educator community described by CMS School, a CBSE-affiliated school in Pune.'
const page: SchoolPageData = {
  slug: 'faculty-staff',
  title: 'Faculty & Staff',
  group: 'Learning',
  intro: 'Dedicated educators who help every learner find their stride.',
  image: 'photo-1524178232363-1fb2b075b655',
  body: 'Our experienced teachers pair subject expertise with a personal approach. Through collaborative planning, ongoing professional learning and close partnership with families, staff help students feel supported, challenged and ready to grow.',
}

export const metadata = createSchoolPageMetadata({ title: 'School Faculty and Staff in Pune', description, canonical })

export default function Page() {
  return <SiteShell><SchoolDetailPage page={page} canonical={canonical} description={description}/></SiteShell>
}
