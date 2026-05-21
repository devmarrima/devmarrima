'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/app/context/LanguageContext'

const services = [
  { name: 'API Gateway', color: 'border-accent-cyan text-accent-cyan bg-accent-cyan/8' },
  { name: 'Auth Service', color: 'border-accent-blue text-accent-blue bg-accent-blue/8' },
  { name: 'Job Scraper', color: 'border-accent-purple text-accent-purple bg-accent-purple/8' },
  { name: 'Enrichment', color: 'border-green-500 text-green-700 bg-green-50' },
  { name: 'Dedup Engine', color: 'border-yellow-500 text-yellow-700 bg-yellow-50' },
  { name: 'Notification', color: 'border-rose-500 text-rose-700 bg-rose-50' },
]

const codeSnippets = [
  {
    title: 'Kafka Consumer (Quarkus)',
    lang: 'java',
    code: `@ApplicationScoped
public class JobEnrichmentConsumer {

    @Inject
    EnrichmentPort enrichmentPort;

    @Incoming("jobs.raw")
    @Outgoing("jobs.enriched")
    public Uni<EnrichedJob> process(RawJob job) {
        return enrichmentPort
            .enrich(job)
            .onFailure().retry()
            .withExponentialBackoff()
            .atMost(3);
    }
}`,
    color: 'text-accent-cyan',
  },
  {
    title: 'Hexagonal Port',
    lang: 'java',
    code: `// Domain port — no framework imports
public interface JobRepository {
    Uni<Job> save(Job job);
    Uni<Optional<Job>> findById(JobId id);
    Uni<List<Job>> findByStatus(JobStatus status);
    Uni<Void> markAsProcessed(JobId id);
}

// JPA Adapter implements the port
@ApplicationScoped
public class JpaJobAdapter implements JobRepository {
    @Inject PanacheRepository<JobEntity> repo;
    // ...
}`,
    color: 'text-accent-blue',
  },
]

const t = {
  pt: {
    label: 'Arquitetura',
    heading1: 'Projetada para',
    heading2: 'produção.',
    sub: 'Decisões arquiteturais baseadas em restrições reais de engenharia — não tutoriais.',
    overview: 'Bring — Visão Geral do Sistema',
    patterns: [
      {
        title: 'Arquitetura Orientada a Eventos',
        description: 'Serviços se comunicam exclusivamente via tópicos Kafka — totalmente desacoplados, deployáveis independentemente e resilientes a falhas parciais. Sem chamadas síncronas entre serviços no caminho crítico.',
        diagram: ['Scraper → [kafka:jobs.raw]', '→ Enrichment → [kafka:jobs.enriched]', '→ Dedup → [kafka:jobs.final]', '→ Notification → [kafka:jobs.notified]'],
        color: 'text-accent-cyan', border: 'border-accent-cyan/15', bg: 'bg-accent-cyan/5',
      },
      {
        title: 'Arquitetura Hexagonal',
        description: 'O núcleo de domínio não contém referências a frameworks ou infraestrutura. Ports definem o que o domínio precisa; adapters implementam esses ports usando Quarkus, JPA, Kafka e REST.',
        diagram: ['[REST Adapter] → Port → Domain', '[Kafka Adapter] → Port → Domain', '[JPA Adapter] → Port → Domain', 'Domain use cases: pure Java'],
        color: 'text-accent-blue', border: 'border-accent-blue/15', bg: 'bg-accent-blue/5',
      },
      {
        title: 'Padrões de Resiliência',
        description: 'Circuit breakers, retry com backoff exponencial, dead-letter queues, consumidores idempotentes e tratamento estruturado de erros em todos os limites de serviço.',
        diagram: ['Retry: exp-backoff + jitter', 'Circuit: closed/open/half-open', 'DLQ: failed message recovery', 'Idempotency: dedup keys'],
        color: 'text-accent-purple', border: 'border-accent-purple/15', bg: 'bg-accent-purple/5',
      },
      {
        title: 'Stack de Observabilidade',
        description: 'Logging estruturado, rastreamento distribuído e health checks customizados em todos os serviços. Cada serviço Quarkus expõe endpoints /health, /metrics e /q/openapi.',
        diagram: ['Logs: structured JSON', 'Traces: OpenTelemetry', 'Metrics: MicroProfile', 'Health: Quarkus checks'],
        color: 'text-green-700', border: 'border-green-200', bg: 'bg-green-50',
      },
    ],
  },
  en: {
    label: 'Architecture',
    heading1: 'Designed for',
    heading2: 'production.',
    sub: 'Architectural decisions grounded in real engineering constraints — not tutorials.',
    overview: 'Bring — System Overview',
    patterns: [
      {
        title: 'Event-Driven Architecture',
        description: 'Services communicate exclusively through Kafka topics — fully decoupled, independently deployable, and resilient to partial failures. No synchronous inter-service calls in the hot path.',
        diagram: ['Scraper → [kafka:jobs.raw]', '→ Enrichment → [kafka:jobs.enriched]', '→ Dedup → [kafka:jobs.final]', '→ Notification → [kafka:jobs.notified]'],
        color: 'text-accent-cyan', border: 'border-accent-cyan/15', bg: 'bg-accent-cyan/5',
      },
      {
        title: 'Hexagonal Architecture',
        description: 'Domain core contains zero framework or infrastructure references. Ports define what the domain needs; adapters implement those ports using Quarkus, JPA, Kafka, and REST.',
        diagram: ['[REST Adapter] → Port → Domain', '[Kafka Adapter] → Port → Domain', '[JPA Adapter] → Port → Domain', 'Domain use cases: pure Java'],
        color: 'text-accent-blue', border: 'border-accent-blue/15', bg: 'bg-accent-blue/5',
      },
      {
        title: 'Resilience Patterns',
        description: 'Circuit breakers, retry with exponential backoff, dead-letter queues, idempotent consumers, and structured error handling across all service boundaries.',
        diagram: ['Retry: exp-backoff + jitter', 'Circuit: closed/open/half-open', 'DLQ: failed message recovery', 'Idempotency: dedup keys'],
        color: 'text-accent-purple', border: 'border-accent-purple/15', bg: 'bg-accent-purple/5',
      },
      {
        title: 'Observability Stack',
        description: 'Structured logging, distributed tracing, and custom health checks across all services. Each Quarkus service exposes /health, /metrics, and /q/openapi endpoints.',
        diagram: ['Logs: structured JSON', 'Traces: OpenTelemetry', 'Metrics: MicroProfile', 'Health: Quarkus checks'],
        color: 'text-green-700', border: 'border-green-200', bg: 'bg-green-50',
      },
    ],
  },
}

export default function Architecture() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <section id="architecture" className="py-28 relative">
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
            {tx.heading1}{' '}
            <span className="gradient-text">{tx.heading2}</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-lg">{tx.sub}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 mb-8 border border-border"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm font-mono text-text-muted">{tx.overview}</span>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {services.map((svc, i) => (
              <motion.div
                key={svc.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4, ease: 'easeOut' }}
                whileHover={{ scale: 1.06, y: -2 }}
                className={`border rounded-xl px-4 py-2 text-sm font-mono font-medium ${svc.color} cursor-default shadow-sm`}
              >
                {svc.name}
              </motion.div>
            ))}
          </div>

          <div className="bg-slate-50/80 border border-border/60 rounded-2xl p-6 font-mono text-sm text-text-muted overflow-x-auto">
            <div className="flex flex-col gap-3 min-w-[500px]">
              {[
                {
                  indent: false,
                  nodes: [
                    { label: 'Client', cls: 'text-accent-cyan font-semibold' },
                    { label: '→', cls: 'text-slate-400' },
                    { label: 'API Gateway', cls: 'text-text-subtle border border-border px-2 py-0.5 rounded-lg bg-white' },
                    { label: '→', cls: 'text-slate-400' },
                    { label: 'Auth (JWT)', cls: 'text-text-subtle border border-border px-2 py-0.5 rounded-lg bg-white' },
                  ],
                  delay: 0.1,
                },
                {
                  indent: true,
                  nodes: [
                    { label: '→', cls: 'text-slate-400' },
                    { label: 'kafka: jobs.trigger', cls: 'text-accent-cyan border border-accent-cyan/30 bg-accent-cyan/8 px-2 py-0.5 rounded-lg font-semibold', pulse: true },
                    { label: '→', cls: 'text-slate-400' },
                    { label: 'Job Scraper', cls: 'text-text-subtle border border-border px-2 py-0.5 rounded-lg bg-white' },
                  ],
                  delay: 0.25,
                },
                {
                  indent: true,
                  nodes: [
                    { label: '→', cls: 'text-slate-400' },
                    { label: 'kafka: jobs.raw', cls: 'text-accent-blue border border-accent-blue/30 bg-accent-blue/8 px-2 py-0.5 rounded-lg font-semibold', pulse: true },
                    { label: '→', cls: 'text-slate-400' },
                    { label: 'Enrichment (AI)', cls: 'text-text-subtle border border-border px-2 py-0.5 rounded-lg bg-white' },
                  ],
                  delay: 0.4,
                },
                {
                  indent: true,
                  nodes: [
                    { label: '→', cls: 'text-slate-400' },
                    { label: 'kafka: jobs.enriched', cls: 'text-accent-purple border border-accent-purple/30 bg-accent-purple/8 px-2 py-0.5 rounded-lg font-semibold', pulse: true },
                    { label: '→', cls: 'text-slate-400' },
                    { label: 'Dedup Engine', cls: 'text-text-subtle border border-border px-2 py-0.5 rounded-lg bg-white' },
                    { label: '→', cls: 'text-slate-400' },
                    { label: 'PostgreSQL', cls: 'text-text-subtle border border-border px-2 py-0.5 rounded-lg bg-white' },
                  ],
                  delay: 0.55,
                },
              ].map((row, ri) => (
                <motion.div
                  key={ri}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: row.delay, duration: 0.4, ease: 'easeOut' }}
                  className={`flex items-center gap-2 flex-wrap ${row.indent ? 'pl-8' : ''}`}
                >
                  {row.nodes.map((node, ni) => (
                    node.pulse ? (
                      <motion.span
                        key={ni}
                        animate={{ opacity: [0.75, 1, 0.75] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: ri * 0.4 }}
                        className={node.cls}
                      >
                        {node.label}
                      </motion.span>
                    ) : (
                      <span key={ni} className={node.cls}>{node.label}</span>
                    )
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {tx.patterns.map((pattern, i) => (
            <motion.div
              key={pattern.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`glass glass-hover rounded-2xl p-6 border ${pattern.border}`}
            >
              <h3 className={`font-bold text-base mb-2 ${pattern.color}`}>{pattern.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">{pattern.description}</p>
              <div className={`${pattern.bg} rounded-xl p-4 font-mono text-sm text-text-muted space-y-1`}>
                {pattern.diagram.map((line, li) => (
                  <div key={li} className={li === 0 ? pattern.color : ''}>{line}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          {codeSnippets.map((snippet, i) => (
            <motion.div
              key={snippet.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl overflow-hidden border border-border"
            >
              <div className="flex items-center gap-2 px-5 py-3 border-b border-border/60">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
                <span className={`text-xs font-mono ml-2 ${snippet.color}`}>{snippet.title}</span>
              </div>
              <pre className="p-5 text-sm font-mono text-text-muted overflow-x-auto leading-6">
                <code>{snippet.code}</code>
              </pre>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
