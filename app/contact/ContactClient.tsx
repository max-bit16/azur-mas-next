'use client'
import { useReveal } from '@/hooks/useReveal'

export default function ContactClient() {
  useReveal()

  return (
    <main className="bg-surface text-on-surface pt-[160px]">
      {/* Header */}
      <section className="max-w-screen-2xl mx-auto px-20 pb-section-padding">
        <div className="mb-gutter text-center max-w-2xl mx-auto reveal">
          <span className="text-label-sm font-label-sm text-primary uppercase tracking-[0.3em] mb-4 block">Un Souffle de Mer</span>
          <h1 className="font-display text-display text-on-surface mb-6">Nous Trouver</h1>
          <p className="text-body-lg font-body-lg text-secondary italic">
            L&apos;art de la table rencontre la sérénité architecturale au cœur de la Provence.
          </p>
        </div>

        {/* Info + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
          {/* Gauche */}
          <div className="lg:col-span-5 flex flex-col gap-8 reveal">
            <div className="glass-card p-12 flex flex-col gap-10 h-full">
              <div className="space-y-2">
                <h3 className="font-display text-h3 text-primary flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary-container">location_on</span>
                  Le Mas
                </h3>
                <p className="text-body-md text-on-surface-variant pl-9 leading-relaxed">
                  12 Route des Calanques<br />83330 Le Castellet, France
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-h3 text-primary flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary-container">call</span>
                  Réservations
                </h3>
                <a href="tel:+33494001234" className="text-body-md text-on-surface-variant pl-9 block hover:text-primary transition-colors">
                  +33 (0)4 94 00 12 34
                </a>
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-h3 text-primary flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary-container">mail</span>
                  Conciergerie
                </h3>
                <a href="mailto:contact@azuremas.fr" className="text-body-md text-on-surface-variant pl-9 block hover:text-primary transition-colors">
                  contact@azuremas.fr
                </a>
              </div>
              <div className="pt-8 border-t border-[#C5A059]/10">
                <h3 className="font-display text-h3 text-primary mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary-container">schedule</span>
                  Heures de Service
                </h3>
                <div className="grid grid-cols-2 gap-y-4 pl-9">
                  <div className="text-label-sm uppercase text-slate-400">Mercredi — Dimanche</div>
                  <div className="text-body-md text-on-surface">12:00 — 14:30</div>
                  <div className="text-label-sm uppercase text-slate-400">Dîner Étoilé</div>
                  <div className="text-body-md text-on-surface">19:30 — 22:30</div>
                  <div className="text-label-sm text-tertiary italic">Lundi &amp; Mardi</div>
                  <div className="text-body-md text-tertiary italic">Fermeture Hebdomadaire</div>
                </div>
              </div>
              <div className="pt-8 border-t border-[#C5A059]/10 flex gap-8">
                <a href="#" className="text-slate-400 hover:text-[#0077B6] transition-colors flex items-center gap-2 text-label-sm uppercase tracking-[0.2em] text-[10px]">
                  <span className="material-symbols-outlined">photo_camera</span> Instagram
                </a>
                <a href="#" className="text-slate-400 hover:text-[#0077B6] transition-colors flex items-center gap-2 text-label-sm uppercase tracking-[0.2em] text-[10px]">
                  <span className="material-symbols-outlined">public</span> Web
                </a>
              </div>
            </div>
          </div>

          {/* Carte */}
          <div className="lg:col-span-7 h-[600px] lg:h-auto rounded-xl overflow-hidden shadow-sunlight border border-[#C5A059]/20 group reveal delay-200">
            <iframe
              title="Azure Mas — Le Castellet, Provence"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.0!2d5.7761!3d43.1994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9b5c77e8b1c1d%3A0x0!2sLe+Castellet!5e0!3m2!1sfr!2sfr!4v1714000000000!5m2!1sfr!2sfr"
              className="w-full h-full min-h-[600px] border-0 grayscale contrast-125 sepia-[20%]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Trio photos */}
      <section className="max-w-screen-2xl mx-auto px-20 pb-section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="relative overflow-hidden group aspect-[4/5] rounded-lg reveal">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"
              alt="Rue d'Antibes Azure Mas"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              width={600}
              height={750}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
          </div>
          <div className="relative overflow-hidden group aspect-[4/5] mt-0 md:mt-24 rounded-lg reveal delay-100">
            <img
              src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&q=80"
              alt="Intérieur restaurant Azure Mas"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              width={600}
              height={750}
              loading="lazy"
            />
          </div>
          <div className="relative overflow-hidden group aspect-[4/5] rounded-lg reveal delay-200">
            <img
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80"
              alt="Cocktails élégants Azure Mas"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              width={600}
              height={750}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
          </div>
        </div>
      </section>
    </main>
  )
}
