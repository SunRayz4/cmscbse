import { SchoolDetailPage } from '@/components/school-detail-page'
import { SiteShell } from '@/components/school-site'
import { createSchoolPageMetadata } from '@/lib/seo'
import type { SchoolPageData } from '@/lib/school-page-types'
import { curious } from '@/lib/school-data'

const canonical = '/our-school/vision-mission'
const description = 'Discover the vision and mission guiding learning, personal growth and community at CMS School in Nigdi, Pune.'
const page: SchoolPageData = {
  slug: 'vision-mission',
  title: 'Our Vision & Mission',
  group: 'Our School',
  intro: 'Learning with purpose. Leading with compassion.',
  image: curious,
  body: 'Our vision is to nurture thoughtful, capable citizens prepared to contribute with integrity. Our mission is to make learning joyful and rigorous, build confidence through individual attention, and help every student discover their unique potential.',
}

export const metadata = createSchoolPageMetadata({ title: 'Vision and Mission at a CBSE School in Pune', description, canonical })

export default function Page() {
  return <SiteShell><SchoolDetailPage page={page} canonical={canonical} description={description}/></SiteShell>
}