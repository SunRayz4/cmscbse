import { SchoolDetailPage } from '@/components/school-detail-page'
import { SiteShell } from '@/components/school-site'
import { createSchoolPageMetadata } from '@/lib/seo'
import type { SchoolPageData } from '@/lib/school-page-types'

const canonical = '/admissions/fees'
const description = 'Find out how to request the current CMS School fee schedule for the 2027–28 session in Pune.'
const page: SchoolPageData = {
  slug: 'fee-structure',
  title: 'Fee Structure',
  group: 'Admissions',
  intro: 'Clear guidance for families planning the school year.',
  image: 'photo-1529390079861-591de354faf5',
  body: 'Fee details vary by grade and may include tuition, annual resources and transport where selected. For the current 2027–28 schedule, please contact the admissions office. The school team will share the official fee document and explain payment dates and available options.',
}

export const metadata = createSchoolPageMetadata({ title: 'School Fees and Fee Structure in Pune', description, canonical })

export default function Page() {
  return <SiteShell><SchoolDetailPage page={page} canonical={canonical} description={description}/></SiteShell>
}
