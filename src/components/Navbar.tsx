'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = document.querySelectorAll<HTMLElement>('section, header')
      let current = ''
      sections.forEach((section) => {
        if (window.pageYOffset >= section.offsetTop - 200) {
          current = section.getAttribute('id') ?? ''
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    const target = document.querySelector(href)
    if (target) {
      window.scrollTo({ top: (target as HTMLElement).offsetTop - 80, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container nav-content">
        <a
          href="#home"
          className="logo"
          onClick={(e) => { e.preventDefault(); scrollTo('#home') }}
        >
          KR<span>.</span>
        </a>

        <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={activeSection === item.href.slice(1) ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href) }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="btn btn-primary nav-cta"
          onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
        >
          Let&apos;s Talk
        </a>

        <button
          className="mobile-menu-btn"
          id="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle mobile menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  )
}
