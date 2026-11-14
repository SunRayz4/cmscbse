import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = new URL('https://folio-prashantpawarids-dots-projects.vercel.app')
const schoolStructuredData = {
  '@context': 'https://schema.org',
  '@type': ['School', 'EducationalOrganization'],
  '@id': `${siteUrl.href}#school`,
  name: 'CMS School',
  url: siteUrl.href,
  description: 'A CBSE-affiliated senior secondary school in Nigdi, Pune, Maharashtra, India.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nigdi, Pune',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Admissions',
    email: 'admissions@cmsschool.edu.in',
  },
}
const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl.href}#website`,
  name: 'CMS School',
  url: siteUrl.href,
  publisher: { '@id': `${siteUrl.href}#school` },
}

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: 'CBSE School in Nigdi, Pune | CMS School',
    template: '%s | CMS School',
  },
  description: 'Looking for the best CBSE school in Nigdi or Pune for your child? Explore CMS School’s academics, affiliation and 2027–28 admissions in Pimpri-Chinchwad (PCMC).',
  keywords: [
    'CBSE School in Nigdi',
    'CBSE School in Pune',
    'CBSE School in Pimpri Chinchwad',
    'CBSE School in PCMC',
    'CBSE School Near Nigdi Pune',
    'English Medium CBSE School in Nigdi',
    'Senior Secondary CBSE School in Pune',
    'School Admission in Nigdi Pune',
    'CBSE School Near Akurdi',
    'CBSE School Near Pradhikaran',
    'Schools in Nigdi Pune Maharashtra',
  ],
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'CMS School',
    title: 'CBSE School in Nigdi, Pune | CMS School',
    description: 'Looking for the best CBSE school in Nigdi or Pune for your child? Explore CMS School’s academics, affiliation and 2027–28 admissions in Pimpri-Chinchwad (PCMC).',
    url: '/',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'CMS School in Nigdi, Pune' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CBSE School in Nigdi, Pune | CMS School',
    description: 'Explore academics, campus life and admissions at CMS School, a CBSE-affiliated school in Nigdi, Pune.',
    images: ['/opengraph-image'],
  },
  generator: 'Next.js',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: 'white',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolStructuredData).replace(/</g, '\\u003c') }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData).replace(/</g, '\\u003c') }} />
        {children}
      </body>
    </html>
  )
}
