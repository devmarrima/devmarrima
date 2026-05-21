'use client'

import { motion } from 'framer-motion'
import { MapPin, Code2, Cpu, Layers } from 'lucide-react'
import { useLang } from '@/app/context/LanguageContext'

const t = {
  pt: {
    label: 'Sobre',
    heading1: 'Sistemas de engenharia',
    heading2: 'que escalam.',
    p1: (
      <>
        Sou um Engenheiro Backend baseado em{' '}
        <span className="text-text-subtle inline-flex items-center gap-1">
          <MapPin size={12} className="text-accent-cyan" />
          Goiânia, Brasil
        </span>{' '}
        com foco profundo em sistemas distribuídos, microsserviços orientados a eventos e arquiteturas backend escaláveis. Prospero na complexidade — projetando sistemas que lidam com carga real, falhas reais e lógica de negócio real.
      </>
    ),
    p2: (
      <>
        Meu stack principal é <span className="text-text-subtle">Java + Quarkus</span> para serviços reativos de alta performance, <span className="text-text-subtle">Python + FastAPI</span> para pipelines de ML e automação, e <span className="text-text-subtle">Kafka</span> para streaming de eventos entre serviços. No frontend, conecto esses backends a interfaces modernas <span className="text-text-primary font-semibold">React/Next.js</span> construídas com <span className="text-text-primary font-semibold">TypeScript</span>.
      </>
    ),
    p3: (
      <>
        Atualmente construindo a <span className="text-accent-cyan font-medium">plataforma Bring</span> — um sistema distribuído multi-serviço com enriquecimento por IA, scraping resiliente, pipelines de deduplicação e observabilidade completa.
      </>
    ),
    tags: ['Trabalho Remoto', 'Aberto a Relocação', 'Foco Backend', 'Fullstack'],
    highlights: [
      {
        icon: Cpu,
        title: 'Sistemas Distribuídos',
        description: 'Arquitetando pipelines orientados a eventos com Kafka, processamento assíncrono e padrões resilientes de comunicação entre microsserviços.',
        color: 'text-accent-cyan',
        bg: 'bg-accent-cyan/8',
        border: 'border-accent-cyan/15',
      },
      {
        icon: Layers,
        title: 'Arquitetura Limpa',
        description: 'Aplicando princípios Hexagonal, Clean e DDD para construir sistemas manuteníveis e focados no domínio que escalam com o negócio.',
        color: 'text-accent-blue',
        bg: 'bg-accent-blue/8',
        border: 'border-accent-blue/15',
      },
      {
        icon: Code2,
        title: 'Engenharia Fullstack',
        description: 'Conectando APIs backend robustas a frontends modernos React/Next.js com TypeScript e contratos de integração limpos.',
        color: 'text-accent-purple',
        bg: 'bg-accent-purple/8',
        border: 'border-accent-purple/15',
      },
    ],
  },
  en: {
    label: 'About',
    heading1: 'Engineering systems',
    heading2: 'that scale.',
    p1: (
      <>
        I'm a Backend Engineer based in{' '}
        <span className="text-text-subtle inline-flex items-center gap-1">
          <MapPin size={12} className="text-accent-cyan" />
          Goiânia, Brazil
        </span>{' '}
        with deep focus on distributed systems, event-driven microservices, and scalable backend architectures. I thrive in complexity — designing systems that handle real load, real failures, and real business logic.
      </>
    ),
    p2: (
      <>
        My core stack is <span className="text-text-subtle">Java + Quarkus</span> for high-performance reactive services, <span className="text-text-subtle">Python + FastAPI</span> for ML pipelines and automation, and <span className="text-text-subtle">Kafka</span> for event streaming between services. On the frontend, I connect these backends to modern <span className="text-text-primary font-semibold">React/Next.js</span> interfaces built with <span className="text-text-primary font-semibold">TypeScript</span>.
      </>
    ),
    p3: (
      <>
        Currently building the <span className="text-accent-cyan font-medium">Bring platform</span> — a multi-service distributed system with AI enrichment, resilient scraping, deduplication pipelines, and full observability.
      </>
    ),
    tags: ['Remote-first', 'Open to relocation', 'Backend-heavy', 'Fullstack capable'],
    highlights: [
      {
        icon: Cpu,
        title: 'Distributed Systems',
        description: 'Architecting event-driven pipelines with Kafka, async processing, and resilient microservice communication patterns.',
        color: 'text-accent-cyan',
        bg: 'bg-accent-cyan/8',
        border: 'border-accent-cyan/15',
      },
      {
        icon: Layers,
        title: 'Clean Architecture',
        description: 'Applying Hexagonal, Clean, and DDD principles to build maintainable, domain-focused systems that scale with the business.',
        color: 'text-accent-blue',
        bg: 'bg-accent-blue/8',
        border: 'border-accent-blue/15',
      },
      {
        icon: Code2,
        title: 'Fullstack Engineering',
        description: 'Bridging the gap between robust backend APIs and modern React/Next.js frontends with TypeScript and clean integration contracts.',
        color: 'text-accent-purple',
        bg: 'bg-accent-purple/8',
        border: 'border-accent-purple/15',
      },
    ],
  },
}

export default function About() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label mb-4">{tx.label}</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
              {tx.heading1}
              <br />
              <span className="gradient-text">{tx.heading2}</span>
            </h2>

            <div className="space-y-4 text-text-muted text-base leading-relaxed">
              <p>{tx.p1}</p>
              <p>{tx.p2}</p>
              <p>{tx.p3}</p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {tx.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm font-mono text-accent-cyan bg-accent-cyan/8 border border-accent-cyan/15 px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Spoken languages */}
            <div className="mt-8">
              <p className="text-xs font-mono font-bold tracking-widest uppercase text-text-subtle mb-4">
                {lang === 'pt' ? 'Idiomas' : 'Languages'}
              </p>
              <div className="space-y-3">
                {[
                  { flag: '🇧🇷', name: lang === 'pt' ? 'Português' : 'Portuguese', level: lang === 'pt' ? 'Nativo' : 'Native', pct: 100 },
                  { flag: '🇬🇧', name: 'English', level: lang === 'pt' ? 'Intermediário-Avançado' : 'Upper-Intermediate', pct: 75 },
                  { flag: '🇪🇸', name: 'Español', level: lang === 'pt' ? 'Intermediário-Avançado' : 'Upper-Intermediate', pct: 75 },
                ].map((l) => (
                  <div key={l.name} className="flex items-center gap-4">
                    <span className="text-2xl">{l.flag}</span>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-semibold text-text-primary">{l.name}</span>
                        <span className="text-xs font-mono text-text-subtle">{l.level}</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent-cyan rounded-full"
                          style={{ width: `${l.pct}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            {tx.highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 6 }}
                className={`glass glass-hover p-6 rounded-2xl border ${item.border} flex gap-4`}
              >
                <div className={`${item.bg} ${item.border} border rounded-xl p-3 h-fit shrink-0`}>
                  <item.icon size={20} className={item.color} />
                </div>
                <div>
                  <h3 className={`font-semibold text-base mb-1 ${item.color}`}>{item.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
