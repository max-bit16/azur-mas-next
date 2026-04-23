'use client'
import { useReveal } from '@/hooks/useReveal'

export default function ReservationsClient() {
  useReveal()

  return (
    <main className="bg-surface text-on-surface">
      {/* Header */}
      <section className="pt-40 pb-20 px-20 bg-surface-container-lowest text-center">
        <div className="max-w-screen-2xl mx-auto">
          <span className="text-label-sm font-label-sm text-[#C5A059] uppercase tracking-[0.3em] block mb-4">
            Venir nous voir
          </span>
          <h1 className="text-display font-display text-primary mb-6">
            Réserver &amp; Privatiser
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
            Pour une table ou pour un événement entier — nous sommes à votre disposition.
          </p>
        </div>
      </section>

      {/* Contacts directs */}
      <section className="py-section-padding px-20 bg-surface">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="reveal glass-card p-12 text-center space-y-6">
            <span className="material-symbols-outlined text-[#C5A059] text-5xl">call</span>
            <div>
              <h3 className="text-h3 font-display text-primary mb-2">Téléphone</h3>
              <p className="text-body-md text-on-surface-variant mb-6">
                Du mardi au dimanche<br />12h–14h · 19h–22h
              </p>
            </div>
            <a
              href="tel:+33494001234"
              className="gold-ripple gold-shimmer inline-block bg-white border border-[#C5A059] text-[#0077B6] px-8 py-4 font-serif tracking-widest uppercase text-xs w-full text-center"
            >
              +33 (0)4 94 00 12 34
            </a>
          </div>

          <div className="reveal delay-100 glass-card p-12 text-center space-y-6">
            <span className="material-symbols-outlined text-[#C5A059] text-5xl">mail</span>
            <div>
              <h3 className="text-h3 font-display text-primary mb-2">Email</h3>
              <p className="text-body-md text-on-surface-variant mb-6">
                Réponse sous 24h<br />Devis privatisation sur demande
              </p>
            </div>
            <a
              href="mailto:contact@azuremas.fr?subject=Demande de réservation"
              className="gold-ripple gold-shimmer inline-block bg-white border border-[#C5A059] text-[#0077B6] px-8 py-4 font-serif tracking-widest uppercase text-xs w-full text-center"
            >
              contact@azuremas.fr
            </a>
          </div>

          <div className="reveal delay-200 glass-card p-12 text-center space-y-6">
            <span className="material-symbols-outlined text-[#C5A059] text-5xl">location_on</span>
            <div>
              <h3 className="text-h3 font-display text-primary mb-2">Adresse</h3>
              <p className="text-body-md text-on-surface-variant mb-6">
                12 Route des Calanques<br />83330 Le Castellet<br />Provence-Alpes-Côte d&apos;Azur
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=12+Route+des+Calanques+83330+Le+Castellet"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-ripple gold-shimmer inline-block bg-white border border-[#C5A059] text-[#0077B6] px-8 py-4 font-serif tracking-widest uppercase text-xs w-full text-center"
            >
              Ouvrir dans Maps
            </a>
          </div>
        </div>
      </section>

      {/* Privatisation */}
      <section className="py-section-padding px-20 bg-slate-50">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="reveal space-y-8">
            <span className="text-label-sm font-label-sm text-[#C5A059] uppercase tracking-[0.3em] block">
              Événements Privés
            </span>
            <h2 className="text-h1 font-display text-primary">Privatiser Azure Mas</h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              Anniversaires, mariages, séminaires, dîners d&apos;affaires — le restaurant peut accueillir jusqu&apos;à 80 convives en exclusivité. Menus sur mesure, décoration personnalisée, service dédié.
            </p>
            <ul className="space-y-4 text-body-md text-on-surface-variant">
              {[
                "Capacité : jusqu'à 80 personnes",
                'Terrasse panoramique privatisable',
                'Menu dégustation sur mesure',
                'Coordinateur événementiel dédié',
                'Devis gratuit sous 48h',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#C5A059] text-sm">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="mailto:evenements@azuremas.fr?subject=Demande de privatisation Azure Mas"
              className="gold-ripple gold-shimmer inline-block bg-white border border-[#C5A059] text-[#0077B6] px-12 py-5 font-serif tracking-widest uppercase text-sm mt-4"
            >
              DEMANDER UN DEVIS
            </a>
          </div>
          <div className="reveal delay-200 relative h-[500px] overflow-hidden rounded-lg shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80"
              alt="Salle privatisée Azure Mas - événements"
              className="w-full h-full object-cover"
              loading="lazy"
              width={800}
              height={500}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
