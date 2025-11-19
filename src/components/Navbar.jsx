import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 ring-2 ring-white/10" />
            <div className="leading-tight">
              <p className="text-white font-semibold tracking-wide">Red-Hot Concepts</p>
              <p className="text-xs text-white/60">Omotola Jalade</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `text-sm uppercase tracking-wide transition-colors ${isActive ? 'text-amber-300' : 'text-white/80 hover:text-white'}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-white/70 hover:text-white transition-colors"><Instagram size={18} /></a>
            <a href="#" aria-label="Facebook" className="text-white/70 hover:text-white transition-colors"><Facebook size={18} /></a>
            <a href="#" aria-label="X" className="text-white/70 hover:text-white transition-colors"><Twitter size={18} /></a>
            <a href="#" aria-label="YouTube" className="text-white/70 hover:text-white transition-colors"><Youtube size={18} /></a>
            <Link to="/contact" className="ml-2 inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-amber-500 text-white text-sm font-medium shadow-lg shadow-red-900/30 hover:opacity-95 transition">Booking</Link>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-md">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `block py-2 text-sm uppercase tracking-wide ${isActive ? 'text-amber-300' : 'text-white/80'}`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
