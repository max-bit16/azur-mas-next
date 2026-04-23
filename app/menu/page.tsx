import type { Metadata } from 'next'
import MenuClient from './MenuClient'

export const metadata: Metadata = {
  title: 'Menu — Azure Mas',
  description: "La carte saisonnière d'Azure Mas : produits de la mer et du terroir provençal.",
}

export default function MenuPage() {
  return <MenuClient />
}
