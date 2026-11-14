export type SchoolRoute = {
  slug: string
  title: string
  group: string
  href: string
}

export const schoolRoutes: SchoolRoute[] = [
  { slug: 'about-us', title: 'About Us', group: 'Our School', href: '/our-school/about' },
  { slug: 'vision-mission', title: 'Our Vision & Mission', group: 'Our School', href: '/our-school/vision-mission' },
  { slug: 'principals-message', title: "Principal's Message", group: 'Our School', href: '/our-school/principal-message' },
  { slug: 'chairmans-message', title: "Chairman's Message", group: 'Our School', href: '/our-school/chairman-message' },
  { slug: 'school-history', title: 'School History', group: 'Our School', href: '/our-school/history' },
  { slug: 'infrastructure-facilities', title: 'Infrastructure & Facilities', group: 'Campus Life', href: '/campus/facilities' },
  { slug: 'academics', title: 'Academics', group: 'Learning', href: '/academics' },
  { slug: 'cbse-curriculum', title: 'CBSE Curriculum', group: 'Learning', href: '/academics/curriculum' },
  { slug: 'faculty-staff', title: 'Faculty & Staff', group: 'Learning', href: '/academics/faculty' },
  { slug: 'admission-process', title: 'Admission Process', group: 'Admissions', href: '/admissions/process' },
  { slug: 'fee-structure', title: 'Fee Structure', group: 'Admissions', href: '/admissions/fees' },
  { slug: 'academic-calendar', title: 'Academic Calendar', group: 'Information', href: '/information/academic-calendar' },
  { slug: 'school-timings', title: 'School Timings', group: 'Information', href: '/information/school-timings' },
  { slug: 'gallery', title: 'Gallery', group: 'Campus Life', href: '/campus/gallery' },
  { slug: 'events-activities', title: 'Events & Activities', group: 'Campus Life', href: '/campus/events' },
  { slug: 'news-announcements', title: 'News & Announcements', group: 'Information', href: '/information/news' },
  { slug: 'achievements', title: 'Achievements', group: 'Campus Life', href: '/campus/achievements' },
  { slug: 'mandatory-public-disclosure', title: 'Mandatory Public Disclosure (CBSE)', group: 'CBSE Information', href: '/information/cbse-public-disclosure' },
  { slug: 'mandatory-documents', title: 'Mandatory Documents', group: 'CBSE Information', href: '/information/mandatory-documents' },
  { slug: 'transfer-certificate', title: 'Transfer Certificate', group: 'CBSE Information', href: '/information/transfer-certificate' },
  { slug: 'contact-us', title: 'Contact Us', group: 'Contact', href: '/contact' },
]

export const navigationMenus = [
  { label: 'Our School', slugs: ['about-us', 'vision-mission', 'principals-message', 'chairmans-message', 'school-history'] },
  { label: 'Learning', slugs: ['academics', 'cbse-curriculum', 'faculty-staff'] },
  { label: 'Campus Life', slugs: ['infrastructure-facilities', 'gallery', 'events-activities', 'achievements'] },
  { label: 'Admissions', slugs: ['admission-process', 'fee-structure'] },
  { label: 'Information', slugs: ['academic-calendar', 'school-timings', 'news-announcements', 'mandatory-public-disclosure', 'mandatory-documents', 'transfer-certificate'] },
]

export function getSchoolRoute(slug: string) {
  return schoolRoutes.find((route) => route.slug === slug)
}
