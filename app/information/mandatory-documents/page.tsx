import { SchoolDetailPage } from '@/components/school-detail-page'
import { SiteShell } from '@/components/school-site'
import { createSchoolPageMetadata } from '@/lib/seo'
import type { SchoolPageData } from '@/lib/school-page-types'

const canonical = '/information/mandatory-documents'
const description = 'Learn how families can request mandatory school documents from CMS School in Nigdi, Pune.'
const page: SchoolPageData = {
  slug: 'mandatory-documents',
  title: 'Mandatory Documents',
  group: 'CBSE Information',
  intro: 'Important school records and certificates.',
  image: 'photo-1450101499163-c8848c66ca85',
  body: 'Families may request the current affiliation certificate, trust registration, building safety certificate, fire safety certificate, health and sanitation documents, and other required records through the school office.',
}

export const metadata = createSchoolPageMetadata({ title: 'Mandatory School Documents in Nigdi, Pune', description, canonical })

export default function Page() {
  return <SiteShell><SchoolDetailPage page={page} canonical={canonical} description={description}/></SiteShell>
}
