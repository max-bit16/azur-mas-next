'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#C5A059]/10 bg-slate-50">
      <div className="flex flex-col md:flex-row justify-between items-center px-20 py-32 max-w-screen-2xl mx-auto">
        <div className="mb-8 md:mb-0 space-y-4 text-center md:text-left">
          <span className="text-lg font-serif text-slate-900 block">Azure Mas</span>
          <p className="font-serif italic text-sm text-slate-600 max-w-xs">
            © 2025 Azure Mas. Crafted for the Mediterranean Soul.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-12 text-center md:text-left mb-8 md:mb-0">
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: 'Accueil', to: '/' },
                { label: 'Menu', to: '/menu' },
                { label: 'Galerie', to: '/galerie' },
                { label: 'Réservations', to: '/reservations' },
                { label: 'Contact', to: '/contact' },
                { label: 'Mentions légales', to: '/mentions-legales' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    href={to}
                    className="font-serif italic text-sm text-slate-600 hover:text-[#0077B6] transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400">Suivez-nous</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <a className="text-slate-400 hover:text-[#0077B6] transition-colors" href="#">
                <span className="material-symbols-outlined">photo_camera</span>
              </a>
              <a className="text-slate-400 hover:text-[#0077B6] transition-colors" href="#">
                <span className="material-symbols-outlined">public</span>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center md:text-right">
          <span className="text-label-sm font-label-sm text-[#C5A059] uppercase tracking-[0.2em] mb-4 block">Newsletter</span>
          <div className="relative">
            <input
              type="email"
              placeholder="Votre email"
              className="bg-transparent border-b border-[#C5A059] py-2 px-0 focus:ring-0 focus:border-[#0077B6] text-sm italic font-serif w-64 placeholder:text-slate-400 outline-none"
            />
            <button className="absolute right-0 bottom-2 text-primary hover:text-[#C5A059] transition-colors">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
