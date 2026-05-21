'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, ChevronDown } from 'lucide-react'
import { useLang } from '@/app/context/LanguageContext'

const floatingCode = [
  { text: '@ApplicationScoped', color: 'text-accent-cyan', x: '5%', y: '20%', delay: 0 },
  { text: 'KafkaProducer<K,V>', color: 'text-accent-blue', x: '80%', y: '15%', delay: 0.5 },
  { text: 'CompletionStage<T>', color: 'text-accent-purple', x: '88%', y: '65%', delay: 1 },
  { text: '@QuarkusTest', color: 'text-accent-cyan', x: '2%', y: '72%', delay: 0.8 },
  { text: 'ReactiveRoutes', color: 'text-accent-blue', x: '75%', y: '85%', delay: 0.3 },
]

const t = {
  pt: {
    available: 'Disponível para oportunidades',
    subtitle: 'Backend Engineer & Distributed Systems Engineer',
    desc: 'Projetando e construindo sistemas distribuídos, microsserviços orientados a eventos e pipelines backend escaláveis com Java, Quarkus, Kafka e arquiteturas cloud-native.',
    viewProjects: 'Ver Projetos',
    stats: ['Microsserviços\nConstruídos', 'Linguagens &\nEcossistemas', 'Padrões de\nArquitetura', 'Sistemas em\nProdução'],
  },
  en: {
    available: 'Available for opportunities',
    subtitle: 'Backend Engineer & Distributed Systems Engineer',
    desc: 'Designing and building distributed systems, event-driven microservices, and scalable backend pipelines with Java, Quarkus, Kafka, and cloud-native architectures.',
    viewProjects: 'View Projects',
    stats: ['Microservices\nBuilt', 'Languages &\nEcosystems', 'Architectural\nPatterns', 'Production\nSystems'],
  },
}

const badges = ['Java', 'Python', 'Quarkus', 'Spring Boot', 'Kafka', 'Microservices', 'Distributed Systems']
const statValues = ['6+', '3+', '5+', 'Real']

export default function Hero() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/[0.07] rounded-full blur-3xl pointer-events-none" />

      {floatingCode.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: item.delay + 1.5, duration: 1 }}
          className={`absolute font-mono text-xs ${item.color} hidden lg:block select-none pointer-events-none`}
          style={{ left: item.x, top: item.y }}
        >
          {item.text}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="section-label">{tx.available}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight mb-4 leading-none"
        >
          Celso{' '}
          <span className="gradient-text">Marrima</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-6"
        >
          <p className="text-xl sm:text-2xl lg:text-3xl font-light text-text-subtle">
            {tx.subtitle}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-text-muted leading-relaxed mb-8"
        >
          {tx.desc}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {badges.map((badge, i) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.05 }}
              className="tech-badge border-slate-300 text-slate-700 bg-slate-100 hover:bg-slate-200 cursor-default"
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 px-6 py-3 bg-accent-cyan text-white font-semibold text-sm rounded-xl hover:bg-accent-cyan/90 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)]"
          >
            {tx.viewProjects}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="https://github.com/devmarrima"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-6 py-3 glass border border-border hover:border-accent-cyan/30 text-text-primary text-sm font-medium rounded-xl transition-all"
          >
            <Github size={16} />
            GitHub
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/marrimacelso"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-6 py-3 glass border border-border hover:border-accent-blue/30 text-text-primary text-sm font-medium rounded-xl transition-all"
          >
            <Linkedin size={16} />
            LinkedIn
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {statValues.map((val, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass gradient-border rounded-2xl p-5 text-center cursor-default"
            >
              <div className="text-3xl font-black gradient-text mb-1">{val}</div>
              <div className="text-sm text-text-muted leading-tight whitespace-pre-line">
                {tx.stats[i]}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  )
}
