'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, ArrowUpRight, ChevronDown, Mail, MapPin, Menu, Phone, School, X } from 'lucide-react'
import { getSchoolRoute, navigationMenus } from '@/lib/site-routes'

const footerExplore = ['about-us', 'academics', 'infrastructure-facilities', 'admission-process', 'gallery', 'contact-us']
const footerInformation = ['mandatory-public-disclosure', 'mandatory-documents', 'transfer-certificate', 'academic-calendar']

function FooterLinks({ slugs }: { slugs: string[] }) {
  return <div className="footer-links">{slugs.map((slug) => {
    const route = getSchoolRoute(slug)!
    return <Link key={slug} href={route.href}>{route.title}</Link>
  })}</div>
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)

  return <header className="site-header">
    <div className="topbar"><div className="topbar-inner"><div className="top-contact"><a href="tel:+911128945600"><Phone size={13}/> +91 (0) 11 2894 5600</a><a className="email-top" href="mailto:admissions@cmsschool.edu.in"><Mail size={13}/> admissions@cmsschool.edu.in</a></div><div className="top-right"><span className="affiliation-top">CBSE AFFILIATION NO: 1930248&nbsp; | &nbsp;SCHOOL CODE: 45129</span><span className="accreditation"><i/> ACCREDITED EXCELLENCE</span></div></div></div>
    <div className="nav-wrap"><Link href="/" className="brand" aria-label="CMS School home"><span className="brand-mark"><School size={25}/></span><span><b>CMS SCHOOL</b><small>CBSE SENIOR SECONDARY</small></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation"><Link className="nav-home" href="/">Home</Link>{navigationMenus.map((menu) => <div className="nav-menu" key={menu.label} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setDropdown(null) }} onKeyDown={(event) => { if (event.key === 'Escape') { setDropdown(null); (event.currentTarget.querySelector('button') as HTMLButtonElement)?.focus() } }}><button aria-expanded={dropdown === menu.label} onClick={() => setDropdown(dropdown === menu.label ? null : menu.label)}>{menu.label}<ChevronDown size={13}/></button>{dropdown === menu.label && <div className="dropdown">{menu.slugs.map((slug) => {const route = getSchoolRoute(slug)!; return <Link key={slug} href={route.href} onClick={() => setDropdown(null)}>{route.title}<ArrowUpRight size={13}/></Link>})}</div>}</div>)}<Link href="/contact" className="nav-home">Contact Us</Link></nav>
      <Link href="/admissions/process" className="nav-cta">Admissions <ArrowRight size={15}/></Link><button className="mobile-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation"><Link href="/" onClick={() => setOpen(false)}>Home</Link>{navigationMenus.map((menu) => <section key={menu.label}><h3>{menu.label}</h3>{menu.slugs.map((slug) => {const route = getSchoolRoute(slug)!; return <Link key={slug} href={route.href} onClick={() => setOpen(false)}>{route.title}</Link>})}</section>)}<Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link></nav>}
  </header>
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><Link href="/" className="brand"><span className="brand-mark"><School size={25}/></span><span><b>CMS SCHOOL</b><small>CBSE SENIOR SECONDARY</small></span></Link><p>Empowering young minds. Building bright futures. A learning community shaped by curiosity, character and confidence.</p><Link className="footer-visit" href="/admissions/process">Plan your campus visit <ArrowRight size={15}/></Link></div><div><h3>Explore</h3><FooterLinks slugs={footerExplore}/></div><div><h3>CBSE Information</h3><FooterLinks slugs={footerInformation}/></div><div className="footer-contact"><h3>Get in touch</h3><p><MapPin size={15}/> Nigdi, Pune, Maharashtra, India</p><a href="tel:+911128945600"><Phone size={15}/> +91 (0) 11 2894 5600</a><a href="mailto:admissions@cmsschool.edu.in"><Mail size={15}/> admissions@cmsschool.edu.in</a><span className="affiliation-chip">CBSE Affiliation No. 1930248</span></div></div><div className="footer-bottom"><span>© 2026 CMS School. All rights reserved.</span><span>Design & Developed By <a className='' href="https://sunrayztechnology.com/">SunRayz Tech.</a></span><Link href="/information/cbse-public-disclosure">Mandatory Public Disclosure <ArrowUpRight size={13}/></Link></div></footer>
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <><SiteHeader/>{children}<SiteFooter/></>
}
