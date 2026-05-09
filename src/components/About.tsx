'use client'

import { useReveal } from '@/hooks/useReveal'

export default function About() {
  const headerRef = useReveal()
  const textRef = useReveal()
  const statsRef = useReveal()

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="divider" />
        </div>
        <div className="about-grid">
          <div className="about-text reveal" ref={textRef}>
            <p>
              I am a student developer passionate about{' '}
              <strong>backend development</strong>, APIs, Docker, and modern web
              technologies. I enjoy building scalable applications and learning new
              technologies related to web development and networking.
            </p>
            <p>
              Currently pursuing a{' '}
              <strong>Bachelor of Computer Application</strong> at Baselios Poulose
              II Catholicos College, I focus on mastering the full stack while
              deep-diving into backend architectures and containerized environments.
            </p>
          </div>
          <div className="about-stats reveal" ref={statsRef}>
            <div className="stat-card">
              <h3>10+</h3>
              <p>Projects Built</p>
            </div>
            <div className="stat-card">
              <h3>L2</h3>
              <p>Docker Knowledge</p>
            </div>
            <div className="stat-card">
              <h3>99%</h3>
              <p>Code Cleanliness</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
