export interface ServiceImage {
  src: string;
}

export interface Service {
  name: string;
  slug: string;
  provider: string;
  category: string;
  price: string;
  duration: string;
  rating: number;
  reviews: number;
  images: ServiceImage[];
}