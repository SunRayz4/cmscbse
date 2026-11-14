import Link from 'next/link'
import { SiteShell } from '@/components/school-site'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return <SiteShell>
    <main className="not-found">
      <h1>Page not found</h1>
      <p>The page you are looking for may have moved or is no longer available.</p>
      <Link href="/">Return to CMS School <ArrowRight/></Link>
    </main>
  </SiteShell>
}
