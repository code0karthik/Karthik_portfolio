'use client'

import { useReveal } from '@/hooks/useReveal'

export default function Experience() {
  const headerRef = useReveal()
  const cardRef = useReveal()

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <h2 className="section-title">
            Internship <span className="gradient-text">Journey</span>
          </h2>
        </div>
        <div className="experience-card reveal" ref={cardRef}>
          <div className="exp-header">
            <h3>Web Development Intern</h3>
            <span className="exp-date">2023 – Present</span>
          </div>
          <div className="exp-content">
            <ul>
              <li>Learned and implemented FastAPI application development for scalable backends.</li>
              <li>Mastered Docker container basics and multi-container orchestration.</li>
              <li>Integrated PostgreSQL databases and optimized API query performance.</li>
              <li>Developed RESTful API concepts and basic networking integrations.</li>
            </ul>
            <div className="exp-tools">
              {['FastAPI', 'Docker', 'PostgreSQL', 'GitHub'].map((tool) => (
                <span key={tool} className="badge">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
