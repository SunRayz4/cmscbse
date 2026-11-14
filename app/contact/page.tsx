import { SchoolDetailPage } from '@/components/school-detail-page'
import { SiteShell } from '@/components/school-site'
import { createSchoolPageMetadata } from '@/lib/seo'
import type { SchoolPageData } from '@/lib/school-page-types'

const canonical = '/contact'
const description = 'Looking for a CBSE school near Nigdi, Pune? CMS School is located in Nigdi, within Pimpri-Chinchwad (PCMC). Contact the school for directions and visit details.'
const page: SchoolPageData = {
  slug: 'contact-us',
  title: 'Contact Us',
  group: 'Contact',
  intro: 'We would be delighted to hear from your family.',
  image: 'photo-1497366754035-f200968a6e72',
  body: 'Visit CMS School in Nigdi, Pune, Maharashtra, within the Pimpri-Chinchwad (PCMC) region. Families from Nigdi Pradhikaran, Akurdi, Ravet, Chinchwad, Pimpri and the wider Talawade area can contact the school to confirm directions and arrange a campus visit. Call +91 (0) 11 2894 5600 or email admissions@cmsschool.edu.in. The admissions office is open Monday to Saturday, 9:00 am to 4:00 pm.',
}

export const metadata = createSchoolPageMetadata({ title: 'Contact and Directions in Nigdi, Pune', description, canonical })

export default function Page() {
  return <SiteShell><SchoolDetailPage page={page} canonical={canonical} description={description}/></SiteShell>
}
