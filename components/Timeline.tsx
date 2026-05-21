'use client'

import { motion } from 'framer-motion'
import { Code2, GraduationCap } from 'lucide-react'
import { useLang } from '@/app/context/LanguageContext'

const t = {
  pt: {
    label: 'Histórico',
    heading1: 'A jornada de',
    heading2: 'engenharia.',
    sub: 'Uma linha do tempo de projetos, sistemas e habilidades que moldaram minha prática de engenharia.',
    current: 'Atual',
    items: [
      {
        type: 'project' as const,
        title: 'Bring Platform',
        subtitle: 'Sistema Distribuído — Projeto Pessoal',
        period: '2024 – Presente',
        description: 'Projetando e construindo uma plataforma distribuída de inteligência de vagas de nível produção com 6+ microsserviços Quarkus, streaming Kafka, pipeline de enriquecimento por IA e dashboard Next.js. Propriedade total da arquitetura ao deploy.',
        tags: ['Java', 'Quarkus', 'Kafka', 'PostgreSQL', 'Next.js', 'Anthropic AI', 'Docker'],
        current: true,
      },
      {
        type: 'project' as const,
        title: 'Engenharia Backend — Java & Spring Boot',
        subtitle: 'Estudo Intensivo & Construção de Projetos',
        period: '2024',
        description: 'Imersão profunda em engenharia backend Java: design de APIs RESTful, JPA/Hibernate, Spring Security (OAuth2/JWT), TDD com JUnit 5, padrões de arquitetura limpa e otimização de banco de dados. Vários projetos de qualidade produção entregues.',
        tags: ['Java', 'Spring Boot', 'JPA', 'TDD', 'JUnit 5', 'OAuth2', 'JWT'],
        current: false,
      },
      {
        type: 'project' as const,
        title: 'Quarkus & Sistemas Reativos',
        subtitle: 'Engenharia Java Cloud-Native',
        period: '2024 – 2025',
        description: 'Adotei Quarkus como framework principal: programação reativa com Mutiny, SmallRye Reactive Messaging, Panache ORM, specs MicroProfile e containerização com Docker. Múltiplos serviços com padrões de resiliência em produção.',
        tags: ['Quarkus', 'Mutiny', 'SmallRye', 'Panache', 'MicroProfile', 'Docker'],
        current: false,
      },
      {
        type: 'project' as const,
        title: 'Python & Engenharia FastAPI',
        subtitle: 'Scraping, Automação & Pipelines IA',
        period: '2024 – Presente',
        description: 'Construí pipelines de scraping assíncrono com Playwright e httpx, workflows de enriquecimento NLP e microsserviços FastAPI. Integrado com Anthropic AI para análise e geração de conteúdo. Workflows de automação N8N desenvolvidos.',
        tags: ['Python', 'FastAPI', 'Playwright', 'httpx', 'NLP', 'Anthropic', 'N8N'],
        current: false,
      },
      {
        type: 'project' as const,
        title: 'Frontend — React & Next.js',
        subtitle: 'Engenharia de Integração Fullstack',
        period: '2024 – Presente',
        description: 'Construí frontends React e Next.js com TypeScript, TailwindCSS e Framer Motion. Foco em integração limpa de APIs, gerenciamento de estado e padrões de UI modernos que complementam arquiteturas backend-heavy.',
        tags: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
        current: false,
      },
      {
        type: 'education' as const,
        title: 'Fundamentos de Engenharia de Software',
        subtitle: 'Algoritmos, Estruturas de Dados & Sistemas',
        period: 'Em andamento',
        description: 'Estudo contínuo de fundamentos de ciência da computação: algoritmos, estruturas de dados, design de sistemas, teoria de sistemas distribuídos, clean code, padrões de projeto e arquitetura de software.',
        tags: ['Algoritmos', 'System Design', 'Design Patterns', 'Arquitetura', 'CS Fundamentals'],
        current: false,
      },
    ],
  },
  en: {
    label: 'Timeline',
    heading1: 'The engineering',
    heading2: 'journey.',
    sub: 'A timeline of projects, systems, and skills that shaped my engineering practice.',
    current: 'Current',
    items: [
      {
        type: 'project' as const,
        title: 'Bring Platform',
        subtitle: 'Distributed System — Personal Project',
        period: '2024 – Present',
        description: 'Designing and building a production-grade distributed job intelligence platform with 6+ Quarkus microservices, Kafka event streaming, AI enrichment pipeline, and a Next.js dashboard. Full-stack ownership from architecture to deployment.',
        tags: ['Java', 'Quarkus', 'Kafka', 'PostgreSQL', 'Next.js', 'Anthropic AI', 'Docker'],
        current: true,
      },
      {
        type: 'project' as const,
        title: 'Backend Engineering — Java & Spring Boot',
        subtitle: 'Intensive Study & Project Building',
        period: '2024',
        description: 'Deep dive into Java backend engineering: RESTful API design, JPA/Hibernate, Spring Security (OAuth2/JWT), TDD with JUnit 5, clean architecture patterns, and database optimization. Delivered multiple production-quality projects.',
        tags: ['Java', 'Spring Boot', 'JPA', 'TDD', 'JUnit 5', 'OAuth2', 'JWT'],
        current: false,
      },
      {
        type: 'project' as const,
        title: 'Quarkus & Reactive Systems',
        subtitle: 'Cloud-Native Java Engineering',
        period: '2024 – 2025',
        description: 'Adopted Quarkus as primary backend framework: reactive programming with Mutiny, SmallRye Reactive Messaging, Panache ORM, MicroProfile specs, and containerization with Docker.',
        tags: ['Quarkus', 'Mutiny', 'SmallRye', 'Panache', 'MicroProfile', 'Docker'],
        current: false,
      },
      {
        type: 'project' as const,
        title: 'Python & FastAPI Engineering',
        subtitle: 'Scraping, Automation & AI Pipelines',
        period: '2024 – Present',
        description: 'Built async web scraping pipelines with Playwright and httpx, NLP enrichment workflows, and FastAPI microservices. Integrated with Anthropic AI for content analysis and generation.',
        tags: ['Python', 'FastAPI', 'Playwright', 'httpx', 'NLP', 'Anthropic', 'N8N'],
        current: false,
      },
      {
        type: 'project' as const,
        title: 'Frontend — React & Next.js',
        subtitle: 'Fullstack Integration Engineering',
        period: '2024 – Present',
        description: 'Built React and Next.js frontends with TypeScript, TailwindCSS, and Framer Motion. Focus on clean API integration, state management, and modern UI patterns that complement backend-heavy architectures.',
        tags: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
        current: false,
      },
      {
        type: 'education' as const,
        title: 'Software Engineering — Foundation',
        subtitle: 'Algorithms, Data Structures & Systems',
        period: 'Ongoing',
        description: 'Continuous study of computer science fundamentals: algorithms, data structures, system design, distributed systems theory, clean code principles, design patterns, and software architecture.',
        tags: ['Algorithms', 'System Design', 'Design Patterns', 'Architecture', 'CS Fundamentals'],
        current: false,
      },
    ],
  },
}

const colorMap = {
  project: { dot: 'bg-accent-blue border-accent-blue', icon: 'text-accent-blue', border: 'border-accent-blue/20' },
  education: { dot: 'bg-accent-purple border-accent-purple', icon: 'text-accent-purple', border: 'border-accent-purple/20' },
}

export default function Timeline() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <section id="timeline" className="py-28 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">{tx.label}</p>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            {tx.heading1}{' '}
            <span className="gradient-text">{tx.heading2}</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-lg">{tx.sub}</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/40 via-accent-blue/20 to-transparent" />

          <div className="space-y-6">
            {tx.items.map((item, i) => {
              const colors = colorMap[item.type]
              const Icon = item.type === 'project' ? Code2 : GraduationCap

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="relative flex gap-6 sm:gap-8 pl-16 sm:pl-20"
                >
                  <div className={`absolute left-3.5 sm:left-5 top-5 w-5 h-5 rounded-full border-2 ${colors.dot} flex items-center justify-center shadow-lg`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  <motion.div
                    whileHover={{ x: 6 }}
                    className={`glass glass-hover rounded-2xl p-6 flex-1 border ${colors.border}`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Icon size={14} className={colors.icon} />
                          <h3 className="font-bold text-text-primary text-base">{item.title}</h3>
                          {item.current && (
                            <span className="text-xs font-mono text-green-700 bg-green-50 border border-green-300 px-2 py-0.5 rounded-full">
                              {tx.current}
                            </span>
                          )}
                        </div>
                        <p className={`text-sm font-medium ${colors.icon}`}>{item.subtitle}</p>
                      </div>
                      <span className="text-sm font-mono text-text-muted bg-surface border border-border px-3 py-1.5 rounded-lg shrink-0">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-sm text-text-muted leading-relaxed mb-4">{item.description}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="tech-badge border-slate-300 text-slate-700 bg-slate-100"
                          style={{ fontSize: '11px' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
