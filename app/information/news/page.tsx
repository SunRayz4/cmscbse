import { SchoolDetailPage } from '@/components/school-detail-page'
import { SiteShell } from '@/components/school-site'
import { createSchoolPageMetadata } from '@/lib/seo'
import type { SchoolPageData } from '@/lib/school-page-types'

const canonical = '/information/news'
const description = 'Read school updates and admissions announcements from CMS School, a CBSE school in Pune.'
const page: SchoolPageData = {
  slug: 'news-announcements',
  title: 'News & Announcements',
  group: 'Information',
  intro: 'The latest updates from our school community.',
  image: 'photo-1503676260728-1c00da094a0b',
  body: 'Admissions are now open for 2027–28. Families are invited to book a campus visit and meet our admissions team. The annual science showcase and inter-house cultural week are among the highlights of the coming term.',
}

export const metadata = createSchoolPageMetadata({ title: 'School News and Announcements', description, canonical })

export default function Page() {
  return <SiteShell><SchoolDetailPage page={page} canonical={canonical} description={description}/></SiteShell>
}
