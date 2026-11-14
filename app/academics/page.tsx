import { SchoolDetailPage } from '@/components/school-detail-page'
import { SiteShell } from '@/components/school-site'
import { createSchoolPageMetadata } from '@/lib/seo'
import type { SchoolPageData } from '@/lib/school-page-types'

const canonical = '/academics'
const description = 'Explore primary, secondary and senior secondary learning at CMS School, a CBSE school in Nigdi, Pimpri-Chinchwad (PCMC), Pune.'
const page: SchoolPageData = {
  slug: 'academics',
  title: 'Academics',
  group: 'Learning',
  intro: 'Strong foundations and meaningful learning at every stage.',
  image: 'photo-1503676260728-1c00da094a0b',
  body: 'Our academic programme balances a strong CBSE foundation with inquiry, collaboration and practical experience. Teachers use regular feedback and personal mentoring to help students build confidence, deepen understanding and make steady progress.',
}

export const metadata = createSchoolPageMetadata({ title: 'Primary, Secondary and Senior Secondary in Nigdi', description, canonical })

export default function Page() {
  return <SiteShell><SchoolDetailPage page={page} canonical={canonical} description={description}/></SiteShell>
}
