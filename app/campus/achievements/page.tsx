import { SchoolDetailPage } from '@/components/school-detail-page'
import { SiteShell } from '@/components/school-site'
import { createSchoolPageMetadata } from '@/lib/seo'
import type { SchoolPageData } from '@/lib/school-page-types'

const canonical = '/campus/achievements'
const description = 'Discover how CMS School celebrates student effort and participation across academics, sports and the arts.'
const page: SchoolPageData = {
  slug: 'achievements',
  title: 'Achievements',
  group: 'Campus Life',
  intro: 'Celebrating effort, curiosity and every step forward.',
  image: 'photo-1529390079861-591de354faf5',
  body: 'Our students bring home recognition in academics, sports, arts and community initiatives. We celebrate not only awards, but also the persistence, teamwork and generosity behind each achievement.',
}

export const metadata = createSchoolPageMetadata({ title: 'Student Achievements in Academics and Sports', description, canonical })

export default function Page() {
  return <SiteShell><SchoolDetailPage page={page} canonical={canonical} description={description}/></SiteShell>
}
