import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://azur-mas-next-2tja.vercel.app'
  return [
    { url: `${base}/`,               lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/menu`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/galerie`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/reservations`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/contact`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/mentions-legales`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
}
