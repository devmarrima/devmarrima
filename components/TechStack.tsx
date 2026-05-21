'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/app/context/LanguageContext'

type Tech = { name: string }
type Category = { label: { pt: string; en: string }; icon: string; techs: Tech[] }

const categories: Category[] = [
  {
    label: { pt: 'Linguagens', en: 'Languages' },
    icon: '{}',
    techs: [
      { name: 'Java' },
      { name: 'Python' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'SQL' },
    ],
  },
  {
    label: { pt: 'Frameworks Backend', en: 'Backend Frameworks' },
    icon: '⚙',
    techs: [
      { name: 'Quarkus' },
      { name: 'Spring Boot' },
      { name: 'FastAPI' },
      { name: 'Hibernate ORM' },
      { name: 'Panache' },
    ],
  },
  {
    label: { pt: 'Frontend', en: 'Frontend' },
    icon: '◈',
    techs: [
      { name: 'Next.js' },
      { name: 'React' },
      { name: 'TailwindCSS' },
      { name: 'Framer Motion' },
    ],
  },
  {
    label: { pt: 'Mensageria & Streaming', en: 'Messaging & Streaming' },
    icon: '⇆',
    techs: [
      { name: 'Apache Kafka' },
      { name: 'RabbitMQ' },
      { name: 'SmallRye Reactive' },
      { name: 'Event-Driven' },
    ],
  },
  {
    label: { pt: 'Dados & Armazenamento', en: 'Data & Storage' },
    icon: '◉',
    techs: [
      { name: 'PostgreSQL' },
      { name: 'Redis' },
      { name: 'JPA / JPQL' },
      { name: 'Flyway' },
    ],
  },
  {
    label: { pt: 'Cloud & DevOps', en: 'Cloud & DevOps' },
    icon: '▣',
    techs: [
      { name: 'AWS' },
      { name: 'Azure' },
      { name: 'GCP' },
      { name: 'Kubernetes' },
      { name: 'Docker' },
      { name: 'GitHub Actions' },
      { name: 'CI/CD' },
      { name: 'Linux' },
    ],
  },
  {
    label: { pt: 'Padrões de Arquitetura', en: 'Architecture Patterns' },
    icon: '◇',
    techs: [
      { name: 'Microservices' },
      { name: 'Hexagonal Arch' },
      { name: 'Clean Arch' },
      { name: 'REST APIs' },
      { name: 'DDD' },
      { name: 'CQRS' },
    ],
  },
  {
    label: { pt: 'Testes & Qualidade', en: 'Testing & Quality' },
    icon: '✓',
    techs: [
      { name: 'JUnit 5' },
      { name: 'TDD' },
      { name: 'Mockito' },
      { name: 'REST-Assured' },
    ],
  },
  {
    label: { pt: 'IA & Automação', en: 'AI & Automation' },
    icon: '◈',
    techs: [
      { name: 'Anthropic API' },
      { name: 'Playwright' },
      { name: 'NLP Pipelines' },
      { name: 'N8N' },
    ],
  },
]

const t = {
  pt: {
    label: 'Stack',
    heading: 'Ferramentas do ofício.',
    sub: 'Um conjunto de tecnologias que uso para projetar, construir e entregar sistemas em produção.',
  },
  en: {
    label: 'Tech Stack',
    heading: 'Tools of the trade.',
    sub: 'A curated set of technologies I use to design, build, and ship production systems.',
  },
}

export default function TechStack() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <section id="stack" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">{tx.label}</p>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            {lang === 'pt' ? 'Ferramentas do ' : 'Tools of the '}<span className="gradient-text">{lang === 'pt' ? 'ofício.' : 'trade.'}</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-lg">{tx.sub}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label.en}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: ci * 0.06 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="font-mono text-accent-cyan text-base">{cat.icon}</span>
                <h3 className="text-sm font-bold text-text-subtle tracking-widest uppercase">
                  {cat.label[lang]}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech) => (
                  <span
                    key={tech.name}
                    className="tech-badge bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200 cursor-default"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
