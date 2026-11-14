import { SchoolDetailPage } from '@/components/school-detail-page'
import { SiteShell } from '@/components/school-site'
import { createSchoolPageMetadata } from '@/lib/seo'
import type { SchoolPageData } from '@/lib/school-page-types'

const canonical = '/our-school/chairman-message'
const description = 'Read the chairman’s message and learn about the values and educational purpose of CMS School in Pune.'
const page: SchoolPageData = {
  slug: 'chairmans-message',
  title: "Chairman's Message",
  group: 'Our School',
  intro: 'An enduring commitment to education and possibility.',
  image: 'photo-1544717305-2782549b5136',
  body: 'For more than three decades, CMS School has worked to make quality education accessible, inspiring and relevant. We are proud of our community and remain committed to thoughtful teaching, responsible leadership and a campus where every learner can thrive.',
}

export const metadata = createSchoolPageMetadata({ title: 'Chairman’s Message and Education in Pune', description, canonical })

export default function Page() {
  return <SiteShell><SchoolDetailPage page={page} canonical={canonical} description={description}/></SiteShell>
}
