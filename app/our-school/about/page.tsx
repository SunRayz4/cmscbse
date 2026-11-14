import { SchoolDetailPage } from '@/components/school-detail-page'
import { SiteShell } from '@/components/school-site'
import { createSchoolPageMetadata } from '@/lib/seo'
import type { SchoolPageData } from '@/lib/school-page-types'

const canonical = '/our-school/about'
const description = 'Learn about CMS School, a CBSE-affiliated school in Nigdi, Pune, and its approach to learning, character and student development.'
const page: SchoolPageData = {
  slug: 'about-us',
  title: 'About Us',
  group: 'Our School',
  intro: 'A place where knowledge, character and curiosity grow together.',
  image: 'photo-1523050854058-8df90110c9f1',
  body: 'At CMS, education is not just about marks—it is about character, curiosity and confidence. Affiliated to the Central Board of Secondary Education (CBSE), New Delhi, our school follows NEP 2020 with a balance of Indian values and global learning. From Foundation to Senior Secondary, every child receives personal attention, access to modern labs and a happy, safe campus. Our promise: every child will be known, nurtured and prepared for IIT, NEET, UPSC and life beyond.',
}

export const metadata = createSchoolPageMetadata({ title: 'About Our School in Nigdi, Pune', description, canonical })

export default function Page() {
  return <SiteShell><SchoolDetailPage page={page} canonical={canonical} description={description}/></SiteShell>
}
