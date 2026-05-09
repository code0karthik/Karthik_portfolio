'use client'

import { GraduationCap } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'

export default function Education() {
  const headerRef = useReveal()
  const cardRef = useReveal()

  return (
    <section className="section education" id="education">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
        </div>
        <div className="education-card reveal" ref={cardRef}>
          <div className="edu-icon">
            <GraduationCap size={32} />
          </div>
          <div className="edu-details">
            <h3>Bachelor of Computer Application</h3>
            <p className="college-name">Baselios Poulose II Catholicos College</p>
            <p className="edu-status">Currently Pursuing</p>
          </div>
        </div>
      </div>
    </section>
  )
}
