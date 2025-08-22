export type PropertyHomes = {
  name: string
  slug: string
  location: string
  rate: string
  duration?: string
  category?: string
  price?: string
  beds: number
  baths: number
  area: number
  images: PropertyImage[]
}

interface PropertyImage {
  src: string;
}
