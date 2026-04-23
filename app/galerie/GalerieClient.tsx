'use client'
import { useRef, useState, useEffect } from 'react'
import { useReveal } from '@/hooks/useReveal'
import { useMagneticZoom } from '@/hooks/useMagneticZoom'

const images = [
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', alt: 'Table gastronomique Azure Mas', label: 'La Salle Principale', span: 'col-span-8 row-span-3' },
  { src: 'https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=800&q=80', alt: 'Plat de la mer Azure Mas', label: 'Produits de la Mer', span: 'col-span-4 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80', alt: 'Cuisine ouverte Azure Mas', label: 'La Cuisine Ouverte', span: 'col-span-4 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80', alt: 'Intérieur restaurant Azure Mas', label: 'Architecture Sereine', span: 'col-span-4 row-span-4' },
  { src: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=80', alt: 'Cave à vins Azure Mas', label: "La Cave d'Or", span: 'col-span-4 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80', alt: 'Cocktail Azure Mas', label: "L'Heure de l'Apéritif", span: 'col-span-4 row-span-1' },
]

export default function GalerieClient() {
  useReveal()
  const gridRef = useRef<HTMLDivElement>(null)
  useMagneticZoom(gridRef)
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIdx(null)
      if (e.key === 'ArrowRight' && selectedIdx !== null) setSelectedIdx((selectedIdx + 1) % images.length)
      if (e.key === 'ArrowLeft' && selectedIdx !== null) setSelectedIdx((selectedIdx - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selectedIdx])

  return (
    <main className="bg-surface text-on-surface">
      {/* Header */}
      <section className="pt-40 pb-20 px-20">
        <div className="max-w-screen-2xl mx-auto text-center space-y-6">
          <h1 className="font-display text-display text-on-surface tracking-widest uppercase reveal">L&apos;Âme du Mas</h1>
          <div className="w-24 h-[1px] bg-[#C5A059] mx-auto" />
          <p className="font-display italic text-body-lg text-on-surface-variant max-w-2xl mx-auto reveal delay-100">
            Une symphonie visuelle de saveurs méditerranéennes et d&apos;architecture sereine.
          </p>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="max-w-screen-2xl mx-auto px-20 pb-section-padding">
        <div ref={gridRef} className="grid grid-cols-12 grid-rows-6 gap-8 h-[1600px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.span} magnetic-img relative overflow-hidden group rounded shadow-sunlight border border-[#C5A059]/10 cursor-pointer reveal`}
              onClick={() => setSelectedIdx(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out"
                width={800}
                height={600}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-700 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">fullscreen</span>
              </div>
              {img.label && (
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
                  <p className="font-serif uppercase tracking-[0.2em] text-sm">{img.label}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-[60] bg-slate-900/90 backdrop-blur-xl flex items-center justify-center p-20"
          onClick={() => setSelectedIdx(null)}
        >
          <button
            className="absolute top-10 right-10 text-white hover:text-[#C5A059] transition-colors z-10"
            aria-label="Fermer la galerie"
            onClick={() => setSelectedIdx(null)}
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
          <button
            className="absolute left-10 text-white/40 hover:text-white z-10"
            aria-label="Image précédente"
            onClick={(e) => { e.stopPropagation(); setSelectedIdx((selectedIdx - 1 + images.length) % images.length) }}
          >
            <span className="material-symbols-outlined text-6xl">chevron_left</span>
          </button>
          <div
            className="relative flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedIdx].src}
              alt={images[selectedIdx].alt}
              className="max-h-[80vh] max-w-full border border-white/20 shadow-2xl"
              width={800}
              height={600}
            />
            <div className="mt-8 text-center text-white">
              <p className="font-display text-xl tracking-widest uppercase">{images[selectedIdx].label}</p>
              <p className="font-serif italic text-white/60 mt-2">{images[selectedIdx].alt}</p>
            </div>
          </div>
          <button
            className="absolute right-10 text-white/40 hover:text-white z-10"
            aria-label="Image suivante"
            onClick={(e) => { e.stopPropagation(); setSelectedIdx((selectedIdx + 1) % images.length) }}
          >
            <span className="material-symbols-outlined text-6xl">chevron_right</span>
          </button>
        </div>
      )}
    </main>
  )
}
