import { SchoolDetailPage } from '@/components/school-detail-page'
import { SiteShell } from '@/components/school-site'
import { createSchoolPageMetadata } from '@/lib/seo'
import type { SchoolPageData } from '@/lib/school-page-types'

const canonical = '/our-school/principal-message'
const description = 'Read the principal’s message about student learning, wellbeing and school life at CMS School, Nigdi, Pune.'
const page: SchoolPageData = {
  slug: 'principals-message',
  title: "Principal's Message",
  group: 'Our School',
  intro: 'Knowledge in mind, kindness in heart, courage to lead.',
  image: 'photo-1577896851231-70ef18881754',
  body: 'Our aim is simple: when your child leaves CMS School, they should leave with knowledge in mind, kindness in heart and courage to lead the world. We believe every child deserves to be known, encouraged and challenged. Our teachers create a safe environment where questions are welcomed and effort is celebrated, preparing students not only for examinations but for life.',
}

export const metadata = createSchoolPageMetadata({ title: 'Principal’s Message and School Life in Pune', description, canonical })

export default function Page() {
  return <SiteShell><SchoolDetailPage page={page} canonical={canonical} description={description}/></SiteShell>
}
