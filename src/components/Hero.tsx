'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = contentRef.current
    if (el) {
      setTimeout(() => el.classList.add('active'), 100)
    }
  }, [])

  const scrollTo = (href: string) => {
    const target = document.querySelector(href)
    if (target) {
      window.scrollTo({ top: (target as HTMLElement).offsetTop - 80, behavior: 'smooth' })
    }
  }

  return (
    <header className="section hero" id="home">
      <div className="container">
        <div className="hero-content reveal" ref={contentRef}>
          <span className="badge">Open to Opportunities</span>
          <h1 className="hero-title">
            Karthik <span className="gradient-text">Rajiv</span>
          </h1>
          <p className="hero-tagline">Student Developer | FastAPI | Docker | PostgreSQL</p>
          <p className="hero-description">
            Building scalable backend systems and modern web applications with a focus on
            performance and containerization.
          </p>
          <div className="hero-btns">
            <button
              className="btn btn-primary"
              onClick={() => scrollTo('#projects')}
            >
              View Projects <ArrowRight size={18} />
            </button>
            <a href="/resume.pdf" className="btn btn-outline" download>
              Download Resume <Download size={18} />
            </a>
            <button
              className="btn btn-outline"
              onClick={() => scrollTo('#contact')}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
