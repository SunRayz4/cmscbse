import type { ReactNode } from 'react'

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow"><i />{children}<i /></div>
}

export function SectionTitle({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return <div className="section-title"><Eyebrow>{label}</Eyebrow><h2>{title}</h2>{copy && <p>{copy}</p>}</div>
}
