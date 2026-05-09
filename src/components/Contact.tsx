'use client'

import { useState } from 'react'
import { Mail, Phone, Send, Loader2, Check } from 'lucide-react'
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa'
import { useReveal } from '@/hooks/useReveal'

type FormState = 'idle' | 'sending' | 'sent'

export default function Contact() {
  const headerRef = useReveal()
  const infoRef = useReveal()
  const formRef = useReveal()

  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('sending')
    setTimeout(() => {
      setFormState('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setFormState('idle'), 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p>Have a project in mind or just want to say hi?</p>
        </div>
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info reveal" ref={infoRef}>
            <div className="contact-item">
              <div className="icon"><Mail size={22} /></div>
              <div>
                <h4>Email</h4>
                <a href="mailto:karthikrajiv2006@gmail.com">karthikrajiv2006@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon"><Phone size={22} /></div>
              <div>
                <h4>Phone</h4>
                <a href="tel:8078333888">8078333888</a>
              </div>
            </div>
            <div className="contact-socials">
              <a
                href="https://github.com/code0karthik"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/karthik-rajiv-bab03a409"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form reveal" ref={formRef}>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={formState !== 'idle'}
                style={formState === 'sent' ? { background: '#10b981' } : {}}
              >
                {formState === 'idle' && <><Send size={18} /> Send Message</>}
                {formState === 'sending' && <><Loader2 size={18} className="spin" /> Sending...</>}
                {formState === 'sent' && <><Check size={18} /> Message Sent!</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
