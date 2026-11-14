import { SchoolDetailPage } from '@/components/school-detail-page'
import { SiteShell } from '@/components/school-site'
import { createSchoolPageMetadata } from '@/lib/seo'
import type { SchoolPageData } from '@/lib/school-page-types'

const canonical = '/academics/curriculum'
const description = 'Learn about the CBSE curriculum at CMS School, a CBSE-affiliated school in Pune, from foundational learning through senior secondary.'
const page: SchoolPageData = {
  slug: 'cbse-curriculum',
  title: 'CBSE Curriculum',
  group: 'Learning',
  intro: 'A balanced curriculum aligned with CBSE and NEP 2020.',
  image: 'photo-1509062522246-3755977927d7',
  body: 'The curriculum develops communication, numeracy, scientific thinking and creativity. Learning progresses from play-based discovery in the early years to subject depth and career guidance in senior secondary, with opportunities for projects, Olympiads and interdisciplinary learning.',
}

export const metadata = createSchoolPageMetadata({ title: 'CBSE Curriculum in Pune', description, canonical })

export default function Page() {
  return <SiteShell><SchoolDetailPage page={page} canonical={canonical} description={description}/></SiteShell>
}
