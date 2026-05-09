'use client'

import { useReveal } from '@/hooks/useReveal'

const skills = [
  {
    category: 'Frontend',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    category: 'Backend',
    tags: ['Python', 'FastAPI', 'PostgreSQL'],
  },
  {
    category: 'DevOps & Tools',
    tags: ['Docker', 'Git & GitHub', 'Networking Basics'],
  },
]

export default function Skills() {
  const headerRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </div>
        <div className="skills-grid reveal" ref={gridRef}>
          {skills.map((group) => (
            <div key={group.category} className="skill-category">
              <h3>{group.category}</h3>
              <div className="skill-tags">
                {group.tags.map((tag) => (
                  <span key={tag} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
