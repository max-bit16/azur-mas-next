import type { Metadata } from 'next'
import AccueilClient from './AccueilClient'

export const metadata: Metadata = {
  title: 'Azure Mas — Restaurant Gastronomique Méditerranéen | Provence',
}

export default function AccueilPage() {
  return <AccueilClient />
}
