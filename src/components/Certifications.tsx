'use client'

import { Award } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'

const certs = [
  {
    title: 'Web Development Internship',
    description: 'Practical experience in building responsive web applications.',
  },
  {
    title: 'Python Certificate',
    description: 'Proficiency in Python programming and backend logic.',
  },
  {
    title: 'Docker Basics',
    description: 'Containerization and deployment fundamentals.',
  },
  {
    title: 'Network Basics',
    description: 'Foundational knowledge of networking protocols and security.',
  },
]

function CertCard({ cert }: { cert: (typeof certs)[number] }) {
  const ref = useReveal()
  return (
    <div className="cert-card reveal" ref={ref}>
      <div className="cert-icon">
        <Award size={24} />
      </div>
      <h3>{cert.title}</h3>
      <p>{cert.description}</p>
    </div>
  )
}

export default function Certifications() {
  const headerRef = useReveal()

  return (
    <section className="section certifications" id="certifications">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <h2 className="section-title">
            Licenses &amp; <span className="gradient-text">Certifications</span>
          </h2>
        </div>
        <div className="cert-grid">
          {certs.map((cert) => (
            <CertCard key={cert.title} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  )
}
