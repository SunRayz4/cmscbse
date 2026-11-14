import { HomePage } from '@/components/home-page'
import { SiteShell } from '@/components/school-site'

const homePageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'CBSE School in Nigdi, Pune | CMS School',
  description: 'Looking for the best CBSE school in Nigdi or Pune for your child? Explore CMS School’s academics, affiliation and 2027–28 admissions in Pimpri-Chinchwad (PCMC).',
  url: 'https://folio-prashantpawarids-dots-projects.vercel.app/',
  isPartOf: { '@id': 'https://folio-prashantpawarids-dots-projects.vercel.app/#website' },
  about: { '@id': 'https://folio-prashantpawarids-dots-projects.vercel.app/#school' },
}

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageStructuredData).replace(/</g, '\\u003c') }} />
    <SiteShell><HomePage /></SiteShell>
  </>
}
