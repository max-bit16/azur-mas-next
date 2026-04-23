import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Nous Trouver — Azure Mas',
  description: 'Azure Mas — 12 Route des Calanques, 83330 Le Castellet. Horaires, carte et contact.',
}

export default function ContactPage() {
  return <ContactClient />
}
