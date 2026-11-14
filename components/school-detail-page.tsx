import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Heart, MapPin } from 'lucide-react'
import { schoolRoutes } from '@/lib/site-routes'
import { photo, stages } from '@/lib/school-data'
import type { SchoolPageData } from '@/lib/school-page-types'
import { SITE_URL } from '@/lib/seo'
import { Eyebrow } from '@/components/school-ui'
import { SchoolGallery } from '@/components/school-gallery'
import { FacilitiesDirectory } from '@/components/facilities-directory'

export function SchoolDetailPage({ page, canonical, description }: { page: SchoolPageData; canonical: string; description: string }) {
  const pageUrl = `${SITE_URL}${canonical}`
  const pageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description,
    url: pageUrl,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#school` },
  }
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: page.title, item: pageUrl },
    ],
  }
  const groupRoutes = schoolRoutes.filter((route) => route.group === page.group && route.slug !== page.slug).slice(0, 5)
  const relatedRoutes = schoolRoutes.filter((route) => route.slug !== page.slug).slice(0, 3)
  const showStages = page.title === 'Academics' || page.title === 'CBSE Curriculum'
  const showDisclosure = ['mandatory-documents', 'mandatory-public-disclosure', 'transfer-certificate'].includes(page.slug)
  const showContact = page.slug === 'contact-us'
  const showFacilities = page.slug === 'infrastructure-facilities'

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageStructuredData).replace(/</g, '\\u003c') }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData).replace(/</g, '\\u003c') }} />
    <main className="detail-main">
      <nav aria-label="Breadcrumb" className="breadcrumbs"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{page.title}</span></nav>
      <section className="detail-hero">
        <div className="detail-photo" style={{ backgroundImage: `url('${photo(page.image, 1500)}')` }} />
        <div className="detail-overlay" />
        <div className="detail-hero-copy"><Eyebrow>{page.group.toUpperCase()}</Eyebrow><h1>{page.title}</h1><p>{page.intro}</p></div>
        <div className="detail-image-caption">CMS SCHOOL <i /> KNOWLEDGE · CHARACTER · CONFIDENCE</div>
      </section>
      <div className="detail-body">
        <article className="detail-copy">
          <Eyebrow>WELCOME TO CMS</Eyebrow>
          <h2>{page.title === 'About Us' ? 'A tradition of thoughtful learning.' : page.title === 'Academics' ? 'Strong foundations. Bright possibilities.' : page.title}</h2>
          {showFacilities ? <FacilitiesDirectory /> : <p>{page.body}</p>}
          {showStages && <div className="detail-stages">{stages.map(([title, grade, copy], index) => <div key={title}><span>0{index + 1}</span><section><h3>{title} <small>{grade}</small></h3><p>{copy}</p></section></div>)}</div>}
          {showDisclosure && <div className="disclosure-list"><h3>School information</h3>{[['CBSE Affiliation Number', '1930248'], ['School Code', '45129'], ['Session', '2027–28'], ['Board', 'Central Board of Secondary Education']].map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>}
          {showContact && <>
            <div className="contact-details"><p><MapPin /> Nigdi, Pune, Maharashtra, India</p><p><a href="tel:+911128945600">+91 (0) 11 2894 5600</a></p><p><a href="mailto:admissions@cmsschool.edu.in">admissions@cmsschool.edu.in</a></p></div>
            <section aria-labelledby="contact-map-heading" style={{ marginTop: '2rem' }}>
              <h3 id="contact-map-heading" style={{ marginBottom: '1rem' }}>Find CMS School</h3>
              <div style={{ overflow: 'hidden', borderRadius: '14px', border: '1px solid #e3dfd6' }}>
                <iframe title="Map showing CMS School in Nigdi, Pune" src="https://www.google.com/maps?q=CMS+School%2C+Nigdi%2C+Pune%2C+Maharashtra&amp;output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ border: 0, display: 'block', width: '100%', height: '360px' }} />
              </div>
              <p style={{ marginTop: '0.75rem' }}><a href="https://www.google.com/maps/search/?api=1&amp;query=CMS+School%2C+Nigdi%2C+Pune%2C+Maharashtra" target="_blank" rel="noreferrer">Open directions in Google Maps</a></p>
            </section>
          </>}
          <div className="detail-callout"><span><Heart size={20} /></span><div><strong>Every child will be known, nurtured and prepared.</strong><p>For more information, our school team is always happy to help.</p><Link href="/contact">Get in touch <ArrowRight size={15} /></Link></div></div>
        </article>
        <aside className="detail-aside"><span className="aside-label">EXPLORE CMS</span><h3>More to discover</h3>{groupRoutes.map((route) => <Link key={route.slug} href={route.href}>{route.title}<ArrowUpRight size={15} /></Link>)}<Link href="/admissions/process" className="aside-cta">Admissions 2027–28 <ArrowRight size={15} /></Link></aside>
      </div>
      {page.slug === 'gallery' && <SchoolGallery />}
      <section className="related-links"><div><Eyebrow>KEEP EXPLORING</Eyebrow><h2>Discover more about CMS.</h2></div><div>{relatedRoutes.map((route) => <Link key={route.slug} href={route.href}>{route.title}<ArrowRight size={15} /></Link>)}</div></section>
    </main>
  </>
}
