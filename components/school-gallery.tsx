'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { images, photo } from '@/lib/school-data'
import { SectionTitle } from '@/components/school-ui'
import { curious } from '@/lib/school-data'
export function SchoolGallery() {
  const [active, setActive] = useState<number | null>(null)
  return <>
    <section className="gallery-page section-pad"><SectionTitle label="LIFE AT CMS" title="A glimpse into our school days" copy="Learning, creating, playing and growing together."/><div className="gallery-grid">{images.map(([label, id], index) => <button key={label} className="gallery-button" onClick={() => setActive(index)} aria-label={`View photo: ${label}`}><Image src={photo(id, 900)} alt={label} fill sizes="(max-width: 700px) 50vw, 33vw"/><span>{label}<ArrowUpRight size={15}/></span></button>)}</div></section>
    <GalleryLightbox active={active} setActive={setActive}/>
  </>
}

function GalleryLightbox({ active, setActive }: { active: number | null; setActive: (index: number | null) => void }) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const returnFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (active === null) {
      returnFocusRef.current?.focus()
      returnFocusRef.current = null
      return
    }

    if (!returnFocusRef.current) returnFocusRef.current = document.activeElement as HTMLElement | null
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setActive(null)
        return
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setActive((active - 1 + images.length) % images.length)
        return
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        setActive((active + 1) % images.length)
        return
      }
      if (event.key !== 'Tab') return

      const buttons = dialogRef.current?.querySelectorAll<HTMLButtonElement>('button:not([disabled])')
      if (!buttons?.length) return
      const firstButton = buttons[0]
      const lastButton = buttons[buttons.length - 1]
      if (event.shiftKey && document.activeElement === firstButton) {
        event.preventDefault()
        lastButton.focus()
      } else if (!event.shiftKey && document.activeElement === lastButton) {
        event.preventDefault()
        firstButton.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [active, setActive])

  if (active === null) return null
  const [label, id] = images[active]
  const go = (direction: number) => setActive((active + direction + images.length) % images.length)

  return <div ref={dialogRef} className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image" onClick={() => setActive(null)}>
    <button ref={closeButtonRef} className="lightbox-close" aria-label="Close image" onClick={() => setActive(null)}><X/></button>
    <button className="lightbox-prev" aria-label="Previous image" onClick={event => { event.stopPropagation(); go(-1) }}><ChevronLeft/></button>
    <div className="lightbox-frame" onClick={event => event.stopPropagation()}><Image src={photo(id, 1400)} alt={label} fill sizes="90vw"/><span>{label} <small>{active + 1} / {images.length}</small></span></div>
    <button className="lightbox-next" aria-label="Next image" onClick={event => { event.stopPropagation(); go(1) }}><ChevronRight/></button>
  </div>
}
