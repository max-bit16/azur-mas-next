import type { Metadata } from 'next'
import GalerieClient from './GalerieClient'

export const metadata: Metadata = {
  title: 'Galerie — Azure Mas',
  description: "L'âme du Mas en images — salle, cuisine, terrasse et cave à vins.",
}

export default function GaleriePage() {
  return <GalerieClient />
}
