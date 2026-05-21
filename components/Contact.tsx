'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, ArrowRight, Copy, Check, Phone } from 'lucide-react'
import { useState } from 'react'
import { useLang } from '@/app/context/LanguageContext'

const t = {
  pt: {
    label: 'Contato',
    heading1: 'Vamos construir algo',
    heading2: 'notável.',
    phoneNote: 'WhatsApp & chamadas — somente contato profissional',
    desc: (
      <>
        Estou aberto a posições de engenharia backend, fullstack e arquitetura de sistemas. Baseado em{' '}
        <span className="text-text-subtle inline-flex items-center gap-1">
          <MapPin size={12} className="text-accent-cyan" />
          Goiânia, Brasil
        </span>{' '}
        — disponível para oportunidades remotas no mundo todo.
      </>
    ),
    sendEmail: 'Enviar email',
    copyEmail: 'Copiar email',
    copied: 'Copiado!',
    builtWith: 'Construído com',
    rights: 'Todos os direitos reservados.',
  },
  en: {
    label: 'Contact',
    heading1: "Let's build something",
    heading2: 'remarkable.',
    phoneNote: 'WhatsApp & calls — professional contact only',
    desc: (
      <>
        I'm open to backend engineering roles, fullstack positions, and systems architecture work. Based in{' '}
        <span className="text-text-subtle inline-flex items-center gap-1">
          <MapPin size={12} className="text-accent-cyan" />
          Goiânia, Brazil
        </span>{' '}
        — available for remote opportunities worldwide.
      </>
    ),
    sendEmail: 'Send me an email',
    copyEmail: 'Copy email',
    copied: 'Copied!',
    builtWith: 'Built with',
    rights: 'All rights reserved.',
  },
}

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const { lang } = useLang()
  const tx = t[lang]

  const copyEmail = () => {
    navigator.clipboard.writeText('marrimatra@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const links = [
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/devmarrima',
      href: 'https://github.com/devmarrima',
      color: 'text-text-primary',
      border: 'border-border hover:border-slate-400',
      bg: 'bg-slate-50',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/marrimacelso',
      href: 'https://linkedin.com/in/marrimacelso',
      color: 'text-blue-700',
      border: 'border-blue-200 hover:border-blue-400',
      bg: 'bg-blue-50',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'marrimatra@gmail.com',
      href: 'mailto:marrimatra@gmail.com',
      color: 'text-accent-cyan',
      border: 'border-accent-cyan/20 hover:border-accent-cyan/40',
      bg: 'bg-accent-cyan/5',
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+55 62 99297-6992',
      href: 'https://wa.me/5562992976992',
      color: 'text-green-700',
      border: 'border-green-200 hover:border-green-400',
      bg: 'bg-green-50',
      note: tx.phoneNote,
    },
  ]

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="glass rounded-3xl p-10 sm:p-14 border border-border text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/[0.04] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-blue/[0.04] rounded-full blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <p className="section-label mb-4">{tx.label}</p>

            <h2 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">
              {tx.heading1}
              <br />
              <span className="gradient-text">{tx.heading2}</span>
            </h2>

            <p className="text-text-muted max-w-lg mx-auto leading-relaxed mb-10 text-base">{tx.desc}</p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.a
                href="mailto:marrimatra@gmail.com"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 px-8 py-4 bg-accent-cyan text-white font-semibold rounded-xl shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.45)] transition-all"
              >
                <Mail size={16} />
                {tx.sendEmail}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.button
                onClick={copyEmail}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-4 glass border border-border hover:border-accent-cyan/30 rounded-xl text-text-subtle hover:text-text-primary text-sm transition-all"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-green-600" />
                    <span className="text-green-700 text-sm">{tx.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    {tx.copyEmail}
                  </>
                )}
              </motion.button>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-xl mx-auto">
              {links.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ y: -3 }}
                  className={`flex items-center gap-3 px-5 py-3.5 ${link.bg} border ${link.border} rounded-xl transition-all flex-1 group`}
                >
                  <link.icon size={16} className={link.color} />
                  <div className="text-left min-w-0">
                    <div className={`text-xs font-semibold ${link.color}`}>{link.label}</div>
                    <div className="text-xs text-text-muted font-mono truncate">{link.value}</div>
                    {'note' in link && link.note && (
                      <div className="text-xs text-text-muted/70 mt-0.5 leading-tight">{link.note}</div>
                    )}
                  </div>
                  <ArrowRight size={12} className="ml-auto text-text-muted group-hover:translate-x-1 transition-transform" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 text-sm text-text-muted font-mono"
        >
          <p>
            {tx.builtWith}{' '}
            <span className="text-accent-cyan">Next.js</span> ·{' '}
            <span className="text-accent-blue">TypeScript</span> ·{' '}
            <span className="text-sky-600">TailwindCSS</span> ·{' '}
            <span className="text-pink-600">Framer Motion</span>
          </p>
          <p className="mt-2 text-text-muted/60">
            © {new Date().getFullYear()} Celso Marrima. {tx.rights}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
