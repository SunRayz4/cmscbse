import { SchoolDetailPage } from '@/components/school-detail-page'
import { SiteShell } from '@/components/school-site'
import { createSchoolPageMetadata } from '@/lib/seo'
import type { SchoolPageData } from '@/lib/school-page-types'

const canonical = '/information/transfer-certificate'
const description = 'Find the published guidance for requesting a student transfer certificate from CMS School in Pune.'
const page: SchoolPageData = {
  slug: 'transfer-certificate',
  title: 'Transfer Certificate',
  group: 'CBSE Information',
  intro: 'Guidance for requesting a student transfer certificate.',
  image: 'photo-1450101499163-c8848c66ca85',
  body: 'To request a Transfer Certificate, the parent or guardian should submit a signed application to the school office. Please allow the office team time to verify records and confirm any outstanding formalities. Contact us for the current checklist.',
}

export const metadata = createSchoolPageMetadata({ title: 'Request a School Transfer Certificate', description, canonical })

export default function Page() {
  return <SiteShell><SchoolDetailPage page={page} canonical={canonical} description={description}/></SiteShell>
}
