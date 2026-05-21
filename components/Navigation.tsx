'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal } from 'lucide-react'
import { useLang } from '@/app/context/LanguageContext'

const links = {
  pt: [
    { label: 'Sobre', href: '#about' },
    { label: 'Stack', href: '#stack' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Arquitetura', href: '#architecture' },
    { label: 'Histórico', href: '#timeline' },
    { label: 'Contato', href: '#contact' },
  ],
  en: [
    { label: 'About', href: '#about' },
    { label: 'Stack', href: '#stack' },
    { label: 'Projects', href: '#projects' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Contact', href: '#contact' },
  ],
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('')
  const { lang, toggle } = useLang()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    )
    links.en.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const navLinks = links[lang]

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass border-b border-border/60 shadow-[0_1px_0_rgba(37,99,235,0.06)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.a href="#" className="flex items-center gap-2 group" whileHover={{ scale: 1.02 }}>
            <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center group-hover:bg-accent-cyan/20 transition-colors">
              <Terminal size={14} className="text-accent-cyan" />
            </div>
            <span className="font-mono text-sm font-semibold text-text-primary">
              devmarrima<span className="text-accent-cyan">.</span>dev
            </span>
          </motion.a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  active === link.href.slice(1)
                    ? 'text-accent-cyan'
                    : 'text-text-subtle hover:text-text-primary'
                }`}
              >
                {active === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-accent-cyan/8 rounded-lg"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggle}
              className="flex items-center gap-2 text-sm font-semibold text-accent-cyan bg-accent-cyan/10 hover:bg-accent-cyan/20 border-2 border-accent-cyan/40 hover:border-accent-cyan px-4 py-2 rounded-xl transition-all shadow-sm"
            >
              <span className="text-base">{lang === 'pt' ? '🇧🇷' : '🇬🇧'}</span>
              <span>{lang === 'pt' ? 'PT → EN' : 'EN → PT'}</span>
            </button>
            <a
              href="https://github.com/devmarrima"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-text-subtle hover:text-accent-cyan transition-colors border border-border hover:border-accent-cyan/40 px-3 py-1.5 rounded-lg"
            >
              GitHub
            </a>
            <a
              href="#contact"
              className="text-xs font-mono bg-accent-cyan/10 hover:bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/20 hover:border-accent-cyan/40 px-3 py-1.5 rounded-lg transition-all"
            >
              {lang === 'pt' ? 'Contratar' : 'Hire me'}
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-text-subtle hover:text-text-primary transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 glass border-b border-border/60 md:hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm text-text-subtle hover:text-accent-cyan rounded-lg hover:bg-accent-cyan/5 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 mt-3 pt-3 border-t border-border/60">
                <button
                  onClick={toggle}
                  className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold text-accent-cyan bg-accent-cyan/10 border-2 border-accent-cyan/40 py-2 rounded-lg"
                >
                  <span>{lang === 'pt' ? '🇧🇷' : '🇬🇧'}</span>
                  <span>{lang === 'pt' ? 'PT → EN' : 'EN → PT'}</span>
                </button>
                <a
                  href="mailto:marrimatra@gmail.com"
                  className="flex-1 text-center text-xs font-mono text-accent-cyan border border-accent-cyan/20 bg-accent-cyan/10 py-2 rounded-lg"
                >
                  {lang === 'pt' ? 'Contratar' : 'Hire me'}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
