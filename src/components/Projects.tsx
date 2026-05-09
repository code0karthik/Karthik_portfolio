'use client'

import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { FaGithub as Github } from 'react-icons/fa'
import { useReveal } from '@/hooks/useReveal'

const projects = [
  {
    title: 'Student Management System',
    description:
      'Backend application using FastAPI and PostgreSQL with full CRUD operations and Dockerized setup.',
    image: '/assets/project-student.png',
    alt: 'Student Management System',
    tech: ['FastAPI', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/code0karthik',
    demo: '#',
  },
  {
    title: 'Personal Portfolio',
    description:
      'Professional static portfolio website showcasing skills and projects using modern web tech.',
    image: '/assets/project-portfolio.png',
    alt: 'Portfolio Website',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/code0karthik',
    demo: null,
  },
  {
    title: 'Dockerized Web App',
    description:
      'Application containerized using Docker with basic networking integration and volume management.',
    image: '/assets/project-docker.png',
    alt: 'Dockerized App',
    tech: ['Docker', 'Python', 'Networking'],
    github: 'https://github.com/code0karthik',
    demo: null,
  },
]

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const cardRef = useReveal()
  return (
    <div className="project-card reveal" ref={cardRef}>
      <div className="project-image">
        <Image
          src={project.image}
          alt={project.alt}
          width={600}
          height={220}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            <Github size={16} /> Code
          </a>
          {project.demo && (
            <a href={project.demo} className="btn btn-outline btn-sm">
              <ExternalLink size={16} /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const headerRef = useReveal()

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <h2 className="section-title">
            Selected <span className="gradient-text">Projects</span>
          </h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
