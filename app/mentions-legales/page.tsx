import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales — Azure Mas',
}

export default function MentionsLegalesPage() {
  return (
    <main className="pt-40 pb-40 px-20 bg-surface min-h-screen">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-h1 font-display text-primary">Mentions Légales</h1>
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          <strong>Éditeur :</strong> Azure Mas SAS — 12 Route des Calanques, 83330 Le Castellet<br />
          <strong>Hébergement :</strong> Vercel Inc. — 340 Pine Street, San Francisco, CA 94104<br />
          <strong>Contact :</strong> contact@azuremas.fr
        </p>
      </div>
    </main>
  )
}
