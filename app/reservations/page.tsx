import type { Metadata } from 'next'
import ReservationsClient from './ReservationsClient'

export const metadata: Metadata = {
  title: 'Réservations — Azure Mas',
  description: 'Réservez votre table ou privatisez Azure Mas pour un événement inoubliable.',
}

export default function ReservationsPage() {
  return <ReservationsClient />
}
