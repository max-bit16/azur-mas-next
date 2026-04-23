'use client'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useReveal } from '@/hooks/useReveal'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { useTilt } from '@/hooks/useTilt'
import { useMagneticZoom } from '@/hooks/useMagneticZoom'

export default function AccueilClient() {
  useReveal()
  useScrollProgress()
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const bentoRef = useRef<HTMLDivElement>(null)
  const duoRef = useRef<HTMLDivElement>(null)
  useTilt(testimonialsRef)
  useMagneticZoom(bentoRef)
  useMagneticZoom(duoRef)

  return (
    <main className="bg-surface text-on-surface">
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-[#C5A059]/20 z-[60]">
        <div id="scroll-progress" className="h-full bg-[#C5A059]" style={{ width: '0%' }} />
      </div>

      {/* Hero */}
      <section className="relative min-h-screen pt-32 flex items-center bg-surface overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
          <div className="space-y-8 reveal">
            <div className="space-y-2">
              <span className="text-label-sm font-label-sm text-[#C5A059] uppercase tracking-[0.3em]">La Table Azure Mas</span>
              <h1 className="text-display font-display text-primary leading-tight">
                Produits d&apos;Exception,<br />Saveurs du Sud
              </h1>
            </div>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-lg leading-relaxed">
              L&apos;essence de la Méditerranée dans chaque assiette. Produits locaux d&apos;exception, vins soigneusement sélectionnés, face à l&apos;horizon azuréen.
            </p>
            <div className="pt-4">
              <Link
                href="/reservations"
                className="gold-ripple gold-shimmer inline-block bg-white border border-[#C5A059] text-[#0077B6] px-12 py-5 font-serif tracking-widest uppercase text-sm shadow-lg hover:shadow-xl transition-shadow duration-500"
              >
                RÉSERVER UNE TABLE
              </Link>
            </div>
          </div>
          <div className="relative h-[600px] md:h-[700px] w-full rounded-lg overflow-hidden shadow-2xl reveal delay-200">
            <Image
              src="/images/hero.webp"
              alt="Table gastronomique Azure Mas"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-[#C5A059]/10 rounded-lg" />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30 animate-bounce">
          <span className="material-symbols-outlined text-primary text-3xl">expand_more</span>
        </div>
      </section>

      {/* Héritage Culinaire */}
      <section className="py-section-padding bg-surface-container-lowest">
        <div className="max-w-screen-2xl mx-auto px-20 grid grid-cols-12 gap-gutter items-center">
          <div className="col-span-12 md:col-span-5 space-y-8 reveal">
            <span className="text-label-sm font-label-sm text-[#C5A059] uppercase tracking-[0.3em]">Héritage Culinaire</span>
            <h2 className="text-h1 font-display text-primary">L&apos;Art de Vivre Méditerranéen</h2>
            <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
              Azure Mas n&apos;est pas seulement un restaurant, c&apos;est une célébration du terroir. Chaque plat raconte une histoire de pêcheurs locaux, de maraîchers passionnés et de traditions revisitées avec une précision contemporaine.
            </p>
            <a
              className="font-serif italic text-primary border-b border-[#C5A059] pb-2 hover:text-[#C5A059] transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
              }}
              href="#experience"
            >
              Découvrir notre philosophie
            </a>
          </div>
          <div ref={duoRef} className="col-span-12 md:col-span-7 grid grid-cols-2 gap-8">
            <div className="magnetic-img relative aspect-[4/5] overflow-hidden rounded-lg shadow-2xl translate-y-12">
              <img
                src="/images/heritage-left.webp"
                alt="Plat méditerranéen Azure Mas"
                className="w-full h-full object-cover"
                width={600}
                height={750}
                loading="lazy"
              />
            </div>
            <div className="magnetic-img relative aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
              <img
                src="/images/heritage-right.webp"
                alt="Cuisine méditerranéenne Azure Mas"
                className="w-full h-full object-cover"
                width={600}
                height={750}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-screen-2xl mx-auto px-20">
          <div className="text-center mb-24 reveal">
            <h2 className="text-h2 font-display text-[#0077B6]">Échos de Nos Convives</h2>
            <div className="w-24 h-[1px] bg-[#C5A059] mx-auto mt-6" />
          </div>
          <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { quote: "Produits impeccables, accords vins parfaits. Une expérience hors du temps face à l'horizon.", name: 'Jean-Marc D.', title: 'Critique Gastronomique' },
              { quote: "Le bar sauvage en croûte de sel est une révélation. Service d'une élégance rare.", name: 'Hélène R.', title: 'Épicurienne' },
              { quote: 'Un cadre idyllique pour des saveurs qui explosent en bouche. Le Mas est magique.', name: 'Thomas L.', title: 'Voyageur' },
              { quote: "La carte des vins est un trésor. Les conseils du sommelier sont d'une justesse infinie.", name: 'Sophie M.', title: 'Œnologue' },
            ].map((t, i) => (
              <div
                key={i}
                className={`tilt-card glass-card p-10 flex flex-col justify-between hover:-translate-y-4 transition-all duration-700 shadow-sunlight reveal delay-${i}00`}
              >
                <span className="material-symbols-outlined text-[#C5A059] text-4xl mb-6">format_quote</span>
                <p className="text-body-md font-body-md italic text-on-surface-variant leading-relaxed mb-8">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-[#C5A059]/10 pt-6">
                  <p className="font-serif text-sm text-[#0077B6] font-bold">{t.name}</p>
                  <p className="text-label-sm text-slate-400">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section id="experience" className="py-section-padding bg-slate-50">
        <div className="max-w-screen-2xl mx-auto px-20">
          <div ref={bentoRef} className="grid grid-cols-12 gap-8 h-[800px]">
            <div className="magnetic-img col-span-12 md:col-span-8 relative overflow-hidden group rounded-lg">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 z-10" />
              <img
                src="/images/bento-terrasse.webp"
                alt="La terrasse panoramique Azure Mas"
                className="w-full h-full object-cover"
                width={1200}
                height={800}
                loading="lazy"
              />
              <div className="absolute bottom-12 left-12 z-20">
                <h3 className="text-h2 font-display text-white mb-2">La Terrasse Panoramique</h3>
                <p className="text-white/80 font-serif italic">Le bleu à perte de vue.</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-8">
              <div className="magnetic-img relative overflow-hidden group rounded-lg">
                <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/10 transition-colors duration-700 z-10" />
                <img
                  src="/images/bento-cave.webp"
                  alt="La cave à vins Azure Mas"
                  className="w-full h-full object-cover"
                  width={600}
                  height={400}
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <span className="text-white font-serif uppercase tracking-widest text-sm border-b border-white pb-2">La Cave d&apos;Or</span>
                </div>
              </div>
              <div className="magnetic-img relative overflow-hidden group rounded-lg">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 z-10" />
                <img
                  src="/images/bento-chef.webp"
                  alt="Chef en cuisine Azure Mas"
                  className="w-full h-full object-cover"
                  width={600}
                  height={400}
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <span className="text-white font-serif uppercase tracking-widest text-sm border-b border-white pb-2">Le Geste Pur</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAB */}
      <div className="fixed bottom-12 right-12 z-40 hidden md:block">
        <Link
          href="/reservations"
          className="group flex items-center gap-4 bg-[#0077B6] text-white pl-6 pr-3 py-3 rounded-full shadow-2xl hover:scale-105 transition-all duration-500"
        >
          <span className="font-serif tracking-widest uppercase text-xs">Book a Table</span>
          <div className="bg-white/20 p-2 rounded-full">
            <span className="material-symbols-outlined text-white">calendar_month</span>
          </div>
        </Link>
      </div>
    </main>
  )
}
