'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Accueil', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Galerie', href: '/galerie' },
  { label: 'Réservations', href: '/reservations' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-[#C5A059]/20 bg-white/70 backdrop-blur-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
      <div className="flex justify-between items-center px-20 py-8 w-full max-w-screen-2xl mx-auto">
        <Link href="/" className="text-2xl font-serif italic text-[#0077B6] tracking-tighter">
          Azure Mas
        </Link>
        <div className="hidden md:flex gap-12">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`font-serif tracking-widest uppercase text-xs antialiased transition-all duration-500 ${
                pathname === href
                  ? 'text-[#0077B6] border-b border-[#C5A059] pb-1'
                  : 'text-slate-500 hover:text-[#0077B6]'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
        <Link
          href="/reservations"
          className="gold-ripple gold-shimmer bg-white border border-[#C5A059] text-[#0077B6] px-8 py-3 font-serif tracking-widest uppercase text-xs antialiased"
        >
          Réserver
        </Link>
      </div>
    </nav>
  )
}
