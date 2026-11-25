import type { StaticImageData } from 'next/image'

export type SchoolPageData = {
  slug: string
  title: string
  group: string
  intro: string
  image: string | StaticImageData
  body: string
}