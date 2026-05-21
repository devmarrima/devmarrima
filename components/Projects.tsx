'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, Zap, Shield, Database, GitBranch, Lock } from 'lucide-react'
import { useLang } from '@/app/context/LanguageContext'
import { Lang } from '@/app/context/LanguageContext'

type Project = {
  title: string
  subtitle: { pt: string; en: string }
  description: { pt: string; en: string }
  tags: string[]
  metrics: { label: { pt: string; en: string }; value: string }[]
  highlights: { icon: React.ElementType; text: { pt: string; en: string } }[]
  github?: string
  status: { pt: string; en: string }
  statusColor: string
  accentColor: string
  featured: boolean
  isPrivate?: boolean
}

const projects: Project[] = [
  {
    title: 'Bring Platform',
    subtitle: { pt: 'Sistema Distribuído de Inteligência de Vagas com IA', en: 'Distributed AI-Powered Job Intelligence System' },
    description: {
      pt: 'Plataforma backend multi-serviço para descoberta automatizada de vagas, enriquecimento por IA e matching de candidatos — construída em microsserviços Quarkus com streaming Kafka.',
      en: 'Multi-service backend platform for automated job discovery, AI enrichment, and candidate matching — built on Quarkus microservices with Kafka event streaming.',
    },
    tags: ['Java', 'Quarkus', 'Kafka', 'PostgreSQL', 'Docker', 'Anthropic AI', 'Next.js', 'TypeScript'],
    metrics: [
      { label: { pt: 'Microsserviços', en: 'Microservices' }, value: '6+' },
      { label: { pt: 'Arquitetura', en: 'Architecture' }, value: 'Event-Driven' },
      { label: { pt: 'Integração IA', en: 'AI Integration' }, value: 'Anthropic' },
      { label: { pt: 'Transporte', en: 'Transport' }, value: 'Kafka' },
    ],
    highlights: [
      { icon: Zap, text: { pt: 'Processamento reativo assíncrono com Mutiny & SmallRye', en: 'Reactive async processing with Mutiny & SmallRye' } },
      { icon: Shield, text: { pt: 'Autenticação JWT com RBAC detalhado', en: 'JWT authentication with fine-grained RBAC' } },
      { icon: Database, text: { pt: 'Deduplicação inteligente entre fontes distribuídas', en: 'Intelligent deduplication across distributed data sources' } },
      { icon: GitBranch, text: { pt: 'Arquitetura Hexagonal — isolamento limpo do domínio', en: 'Hexagonal architecture — clean domain isolation' } },
    ],
    status: { pt: 'Privado', en: 'Private' },
    statusColor: 'text-slate-600 bg-slate-100 border-slate-300',
    accentColor: 'accent-cyan',
    featured: true,
    isPrivate: true,
  },
  {
    title: 'Bring Workers Pipeline',
    subtitle: { pt: 'Motor de Scraping & Enriquecimento Resiliente', en: 'Resilient Web Scraping & Enrichment Engine' },
    description: {
      pt: 'Pipeline de scraping assíncrono de alto throughput com Playwright e httpx, lógica de retry inteligente, rate limiting, rotação de proxy e enriquecimento NLP.',
      en: 'High-throughput async scraping pipeline using Playwright and httpx with intelligent retry logic, rate limiting, proxy rotation, and NLP-based enrichment.',
    },
    tags: ['Python', 'FastAPI', 'Playwright', 'httpx', 'Kafka', 'NLP', 'Docker'],
    metrics: [
      { label: { pt: 'Retry', en: 'Retry Logic' }, value: 'Smart' },
      { label: { pt: 'Async', en: 'Async' }, value: '100%' },
      { label: { pt: 'Transporte', en: 'Transport' }, value: 'Kafka' },
      { label: { pt: 'Enriquecimento', en: 'Enrichment' }, value: 'NLP AI' },
    ],
    highlights: [
      { icon: Zap, text: { pt: 'Playwright + httpx async para scraping concorrente e resiliente', en: 'Async Playwright + httpx for resilient, concurrent scraping' } },
      { icon: Shield, text: { pt: 'Padrões circuit-breaker para falhas em serviços externos', en: 'Circuit-breaker patterns for external service failures' } },
      { icon: Database, text: { pt: 'Pipeline NLP para extração de entidades e classificação', en: 'NLP pipeline for entity extraction and classification' } },
      { icon: GitBranch, text: { pt: 'Integração Kafka producer/consumer com schema registry', en: 'Kafka producer/consumer integration with schema registry' } },
    ],
    status: { pt: 'Privado', en: 'Private' },
    statusColor: 'text-slate-600 bg-slate-100 border-slate-300',
    accentColor: 'accent-blue',
    featured: true,
    isPrivate: true,
  },
  {
    title: 'Hexagonal Orders & Products',
    subtitle: { pt: 'Demo de Arquitetura Limpa — Domain-Driven Design', en: 'Clean Architecture Demo — Domain-Driven Design' },
    description: {
      pt: 'Serviço Java totalmente hexagonal implementando o padrão ports & adapters para um domínio de pedidos e produtos, com separação limpa entre lógica de negócio e infraestrutura.',
      en: 'A fully hexagonal Java service implementing the ports & adapters pattern for an orders and products domain, demonstrating clean separation between business logic and infrastructure.',
    },
    tags: ['Java', 'Spring Boot', 'Hexagonal Arch', 'DDD', 'JPA', 'JUnit 5'],
    metrics: [
      { label: { pt: 'Padrão', en: 'Pattern' }, value: 'Hexagonal' },
      { label: { pt: 'Acoplamento', en: 'Coupling' }, value: 'Zero Infra' },
      { label: { pt: 'Testes', en: 'Testing' }, value: 'TDD' },
      { label: { pt: 'Domínio', en: 'Domain' }, value: 'DDD' },
    ],
    highlights: [
      { icon: Zap, text: { pt: 'Modelo de domínio puro sem dependências de framework', en: 'Pure domain model with no framework dependencies' } },
      { icon: Shield, text: { pt: 'Ports & adapters para isolamento total de infraestrutura', en: 'Ports & adapters for full infrastructure isolation' } },
      { icon: Database, text: { pt: 'Adapter JPA implementando ports de repositório', en: 'JPA adapter implementing repository ports' } },
      { icon: GitBranch, text: { pt: 'Camada de aplicação orientada a casos de uso', en: 'Use-case driven application layer' } },
    ],
    github: 'https://github.com/devmarrima/Hexagonal-orders-products',
    status: { pt: 'Concluído', en: 'Complete' },
    statusColor: 'text-green-700 bg-green-50 border-green-300',
    accentColor: 'accent-purple',
    featured: false,
  },
  {
    title: 'Employee Auth System',
    subtitle: { pt: 'Segurança OAuth2 / JWT — Spring Security', en: 'OAuth2 / JWT Security — Spring Security' },
    description: {
      pt: 'Serviço enterprise de autenticação e autorização com OAuth2, JWT, controle de acesso baseado em roles e fluxos de refresh token usando Spring Security.',
      en: 'Enterprise-grade authentication and authorization service with OAuth2, JWT, role-based access control, and token refresh flows using Spring Security.',
    },
    tags: ['Java', 'Spring Boot', 'Spring Security', 'OAuth2', 'JWT', 'RBAC'],
    metrics: [
      { label: { pt: 'Auth', en: 'Auth' }, value: 'OAuth2/JWT' },
      { label: { pt: 'Acesso', en: 'Access' }, value: 'RBAC' },
      { label: { pt: 'Tokens', en: 'Tokens' }, value: 'Refresh Flow' },
      { label: { pt: 'Segurança', en: 'Security' }, value: 'Enterprise' },
    ],
    highlights: [
      { icon: Shield, text: { pt: 'Configuração de servidor de autorização + recurso OAuth2', en: 'OAuth2 authorization + resource server setup' } },
      { icon: Zap, text: { pt: 'Emissão, validação e fluxos de refresh JWT', en: 'JWT issuance, validation, and refresh flows' } },
      { icon: Database, text: { pt: 'Controle de acesso baseado em roles com permissões granulares', en: 'Role-based access control with granular permissions' } },
      { icon: GitBranch, text: { pt: 'Segurança de API stateless com introspecção de tokens', en: 'Stateless API security with token introspection' } },
    ],
    github: 'https://github.com/devmarrima/Employee-auth',
    status: { pt: 'Concluído', en: 'Complete' },
    statusColor: 'text-green-700 bg-green-50 border-green-300',
    accentColor: 'accent-cyan',
    featured: false,
  },
  {
    title: 'DSCommerce List',
    subtitle: { pt: 'API de E-commerce — Catálogo & Pedidos', en: 'E-commerce API — Catalog & Orders' },
    description: {
      pt: 'API RESTful de e-commerce com catálogo de produtos, gestão de pedidos e clientes, construída com Spring Boot e boas práticas de arquitetura em camadas.',
      en: 'RESTful e-commerce API with product catalog, order and customer management, built with Spring Boot and layered architecture best practices.',
    },
    tags: ['Java', 'Spring Boot', 'JPA', 'PostgreSQL', 'REST API'],
    metrics: [
      { label: { pt: 'API', en: 'API' }, value: 'RESTful' },
      { label: { pt: 'Catálogo', en: 'Catalog' }, value: 'Full CRUD' },
      { label: { pt: 'Pedidos', en: 'Orders' }, value: 'Managed' },
      { label: { pt: 'Padrão', en: 'Pattern' }, value: 'Layered' },
    ],
    highlights: [
      { icon: Zap, text: { pt: 'CRUD completo de produtos com paginação e filtros', en: 'Full product CRUD with pagination and filters' } },
      { icon: Shield, text: { pt: 'Gestão de pedidos com controle de status', en: 'Order management with status control' } },
      { icon: Database, text: { pt: 'Repositórios Spring Data JPA com relacionamentos', en: 'Spring Data JPA repositories with entity relationships' } },
      { icon: GitBranch, text: { pt: 'Projeções DTO para contratos de API limpos', en: 'DTO projections for clean API contracts' } },
    ],
    github: 'https://github.com/devmarrima/dscommerce-list',
    status: { pt: 'Concluído', en: 'Complete' },
    statusColor: 'text-green-700 bg-green-50 border-green-300',
    accentColor: 'accent-blue',
    featured: false,
  },
  {
    title: 'TDD Event-City',
    subtitle: { pt: 'CRUD com Cobertura Total via TDD', en: 'CRUD with Full TDD Coverage' },
    description: {
      pt: 'Gerenciamento de eventos e cidades desenvolvido inteiramente com TDD — ciclo red-green-refactor, cobertura de testes completa com JUnit 5 e Mockito.',
      en: 'Event and city management built entirely with TDD — red-green-refactor cycle, full test coverage with JUnit 5 and Mockito.',
    },
    tags: ['Java', 'Spring Boot', 'JUnit 5', 'Mockito', 'TDD'],
    metrics: [
      { label: { pt: 'Metodologia', en: 'Methodology' }, value: 'TDD' },
      { label: { pt: 'Cobertura', en: 'Coverage' }, value: 'Full' },
      { label: { pt: 'Framework', en: 'Framework' }, value: 'JUnit 5' },
      { label: { pt: 'Mocks', en: 'Mocks' }, value: 'Mockito' },
    ],
    highlights: [
      { icon: Zap, text: { pt: 'Ciclo red-green-refactor aplicado em todas as features', en: 'Red-green-refactor cycle applied across all features' } },
      { icon: Shield, text: { pt: 'Testes unitários e de integração com Mockito', en: 'Unit and integration tests with Mockito' } },
      { icon: Database, text: { pt: 'CRUD completo de eventos vinculados a cidades', en: 'Full CRUD for events linked to cities' } },
      { icon: GitBranch, text: { pt: 'Cobertura de testes end-to-end nos endpoints REST', en: 'End-to-end test coverage on REST endpoints' } },
    ],
    github: 'https://github.com/devmarrima/TDD-Event-City',
    status: { pt: 'Concluído', en: 'Complete' },
    statusColor: 'text-green-700 bg-green-50 border-green-300',
    accentColor: 'accent-purple',
    featured: false,
  },
  {
    title: 'TDD Department Employee',
    subtitle: { pt: 'Gestão de Departamentos com TDD', en: 'Department Management with TDD' },
    description: {
      pt: 'Sistema de gestão de departamentos e funcionários desenvolvido com TDD, aplicando testes em cada camada da aplicação antes da implementação.',
      en: 'Department and employee management system built with TDD, applying tests across every application layer before implementation.',
    },
    tags: ['Java', 'Spring Boot', 'JUnit 5', 'Mockito', 'TDD'],
    metrics: [
      { label: { pt: 'Metodologia', en: 'Methodology' }, value: 'TDD' },
      { label: { pt: 'Camadas', en: 'Layers' }, value: 'All tested' },
      { label: { pt: 'Framework', en: 'Framework' }, value: 'JUnit 5' },
      { label: { pt: 'Padrão', en: 'Pattern' }, value: 'Layered' },
    ],
    highlights: [
      { icon: Zap, text: { pt: 'Testes escritos antes da implementação em toda a camada', en: 'Tests written before implementation across all layers' } },
      { icon: Shield, text: { pt: 'Gestão de vínculo entre funcionários e departamentos', en: 'Employee-department relationship management' } },
      { icon: Database, text: { pt: 'Repositórios testados com dados em memória', en: 'Repositories tested with in-memory data' } },
      { icon: GitBranch, text: { pt: 'Refatoração contínua guiada pela suíte de testes', en: 'Continuous refactoring guided by the test suite' } },
    ],
    github: 'https://github.com/devmarrima/tdd-department-employee',
    status: { pt: 'Concluído', en: 'Complete' },
    statusColor: 'text-green-700 bg-green-50 border-green-300',
    accentColor: 'accent-cyan',
    featured: false,
  },
  {
    title: 'Desafio Validação & Segurança',
    subtitle: { pt: 'Spring Security + Bean Validation', en: 'Spring Security + Bean Validation' },
    description: {
      pt: 'Desafio focado em validação de dados e segurança de API com Spring Security, JWT e Bean Validation — tratamento de erros padronizado e controle de acesso por roles.',
      en: 'Challenge focused on API data validation and security with Spring Security, JWT, and Bean Validation — standardized error handling and role-based access control.',
    },
    tags: ['Java', 'Spring Security', 'JWT', 'Bean Validation', 'REST API'],
    metrics: [
      { label: { pt: 'Auth', en: 'Auth' }, value: 'JWT' },
      { label: { pt: 'Validação', en: 'Validation' }, value: 'Bean Val.' },
      { label: { pt: 'Acesso', en: 'Access' }, value: 'RBAC' },
      { label: { pt: 'Erros', en: 'Errors' }, value: 'Global' },
    ],
    highlights: [
      { icon: Shield, text: { pt: 'Autenticação JWT com controle de roles por endpoint', en: 'JWT authentication with per-endpoint role control' } },
      { icon: Zap, text: { pt: 'Bean Validation com mensagens de erro personalizadas', en: 'Bean Validation with custom error messages' } },
      { icon: Database, text: { pt: 'Handler global de exceções com respostas padronizadas', en: 'Global exception handler with standardized responses' } },
      { icon: GitBranch, text: { pt: 'Segurança stateless aplicada na camada de filtros', en: 'Stateless security applied at the filter layer' } },
    ],
    github: 'https://github.com/devmarrima/Desafio-validacao-seguranca',
    status: { pt: 'Concluído', en: 'Complete' },
    statusColor: 'text-green-700 bg-green-50 border-green-300',
    accentColor: 'accent-purple',
    featured: false,
  },
  {
    title: 'Desafio Consulta de Vendas',
    subtitle: { pt: 'Relatórios e Queries Otimizadas — JPQL', en: 'Optimized Sales Reports — JPQL' },
    description: {
      pt: 'Desafio de consultas avançadas sobre dados de vendas com JPQL, projeções DTO e relatórios otimizados sem N+1.',
      en: 'Advanced sales data query challenge using JPQL, DTO projections, and optimized reports without N+1 issues.',
    },
    tags: ['Java', 'Spring Boot', 'JPQL', 'PostgreSQL', 'DTO'],
    metrics: [
      { label: { pt: 'Queries', en: 'Queries' }, value: 'JPQL' },
      { label: { pt: 'Projeções', en: 'Projections' }, value: 'DTO' },
      { label: { pt: 'N+1', en: 'N+1' }, value: 'Resolvido' },
      { label: { pt: 'Relatórios', en: 'Reports' }, value: 'Custom' },
    ],
    highlights: [
      { icon: Zap, text: { pt: 'Consultas JPQL customizadas com agregações e filtros', en: 'Custom JPQL queries with aggregations and filters' } },
      { icon: Shield, text: { pt: 'Projeções DTO para evitar over-fetching de dados', en: 'DTO projections to prevent data over-fetching' } },
      { icon: Database, text: { pt: 'Relatórios de vendas com agrupamento e totalizadores', en: 'Sales reports with grouping and totals' } },
      { icon: GitBranch, text: { pt: 'Queries otimizadas sem o problema N+1', en: 'Optimized queries without N+1 problem' } },
    ],
    github: 'https://github.com/devmarrima/desafio-consulta-vendas',
    status: { pt: 'Concluído', en: 'Complete' },
    statusColor: 'text-green-700 bg-green-50 border-green-300',
    accentColor: 'accent-blue',
    featured: false,
  },
  {
    title: 'Queries JPA',
    subtitle: { pt: 'Laboratório de Consultas JPA & JPQL', en: 'JPA & JPQL Query Lab' },
    description: {
      pt: 'Laboratório prático de consultas JPA explorando JPQL, Criteria API, projeções e estratégias de otimização de queries em cenários reais.',
      en: 'Practical JPA query lab exploring JPQL, Criteria API, projections, and query optimization strategies in real-world scenarios.',
    },
    tags: ['Java', 'Spring Boot', 'JPA', 'JPQL', 'Criteria API'],
    metrics: [
      { label: { pt: 'JPQL', en: 'JPQL' }, value: 'Advanced' },
      { label: { pt: 'API', en: 'API' }, value: 'Criteria' },
      { label: { pt: 'Fetch', en: 'Fetch' }, value: 'Tuned' },
      { label: { pt: 'Projeções', en: 'Projections' }, value: 'DTO' },
    ],
    highlights: [
      { icon: Zap, text: { pt: 'JPQL avançado com joins, subqueries e parâmetros nomeados', en: 'Advanced JPQL with joins, subqueries, and named parameters' } },
      { icon: Shield, text: { pt: 'Criteria API para consultas dinâmicas e type-safe', en: 'Criteria API for dynamic, type-safe queries' } },
      { icon: Database, text: { pt: 'Projeções DTO com construtores e interfaces', en: 'DTO projections with constructors and interfaces' } },
      { icon: GitBranch, text: { pt: 'Estratégias de fetch para otimização de performance', en: 'Fetch strategies for performance optimization' } },
    ],
    github: 'https://github.com/devmarrima/queries-jpa1',
    status: { pt: 'Concluído', en: 'Complete' },
    statusColor: 'text-green-700 bg-green-50 border-green-300',
    accentColor: 'accent-purple',
    featured: false,
  },
  {
    title: 'N+1 Consultas',
    subtitle: { pt: 'Resolução do Problema N+1 — Hibernate/JPA', en: 'N+1 Problem Resolution — Hibernate/JPA' },
    description: {
      pt: 'Estudo aprofundado e resolução do problema N+1 em JPA/Hibernate — comparativo de estratégias de fetch, join fetch, EntityGraph e projeções eficientes.',
      en: 'In-depth study and resolution of the N+1 problem in JPA/Hibernate — comparative analysis of fetch strategies, join fetch, EntityGraph, and efficient projections.',
    },
    tags: ['Java', 'Spring Boot', 'Hibernate', 'JPA', 'EntityGraph'],
    metrics: [
      { label: { pt: 'Problema', en: 'Problem' }, value: 'N+1' },
      { label: { pt: 'Estratégia', en: 'Strategy' }, value: 'Join Fetch' },
      { label: { pt: 'Graph', en: 'Graph' }, value: 'EntityGraph' },
      { label: { pt: 'Perf.', en: 'Perf.' }, value: 'Optimized' },
    ],
    highlights: [
      { icon: Zap, text: { pt: 'Diagnóstico e comparação de queries com e sem N+1', en: 'Diagnosis and comparison of queries with and without N+1' } },
      { icon: Shield, text: { pt: 'Join Fetch e EntityGraph para carregamento eficiente', en: 'Join Fetch and EntityGraph for efficient loading' } },
      { icon: Database, text: { pt: 'Análise de logs SQL para identificar queries excessivas', en: 'SQL log analysis to identify excessive queries' } },
      { icon: GitBranch, text: { pt: 'Projeções DTO como alternativa ao carregamento de entidades', en: 'DTO projections as alternative to full entity loading' } },
    ],
    github: 'https://github.com/devmarrima/N-mais1-consultas',
    status: { pt: 'Concluído', en: 'Complete' },
    statusColor: 'text-green-700 bg-green-50 border-green-300',
    accentColor: 'accent-cyan',
    featured: false,
  },
]

const accentMap: Record<string, string> = {
  'accent-cyan': 'border-accent-cyan/20 hover:border-accent-cyan/40',
  'accent-blue': 'border-accent-blue/20 hover:border-accent-blue/40',
  'accent-purple': 'border-accent-purple/20 hover:border-accent-purple/40',
}
const accentTextMap: Record<string, string> = {
  'accent-cyan': 'text-accent-cyan',
  'accent-blue': 'text-accent-blue',
  'accent-purple': 'text-accent-purple',
}
const accentBgMap: Record<string, string> = {
  'accent-cyan': 'bg-accent-cyan/8',
  'accent-blue': 'bg-accent-blue/8',
  'accent-purple': 'bg-accent-purple/8',
}

const t = {
  pt: { label: 'Projetos', heading1: 'Sistemas reais.', heading2: 'Complexidade real.', sub: 'Projetos de nível produção construídos com arquiteturas distribuídas, design orientado a eventos e melhores práticas de engenharia.', featured: 'Destaque', viewGithub: 'Ver no GitHub', private: 'Repositório privado' },
  en: { label: 'Projects', heading1: 'Real systems.', heading2: 'Real complexity.', sub: 'Production-grade projects built around distributed architectures, event-driven design, and engineering best practices.', featured: 'Featured', viewGithub: 'View on GitHub', private: 'Private repository' },
}

export default function Projects() {
  const { lang } = useLang()
  const tx = t[lang]
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-28 relative">
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

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`glass rounded-3xl p-8 border ${accentMap[project.accentColor]} transition-all duration-300 flex flex-col`}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className={`text-xs font-mono ${accentTextMap[project.accentColor]} ${accentBgMap[project.accentColor]} border border-current/20 px-2.5 py-1 rounded-full inline-block mb-3`}>
                    {tx.featured}
                  </span>
                  <h3 className="text-xl font-bold text-text-primary mb-1">{project.title}</h3>
                  <p className={`text-sm font-medium ${accentTextMap[project.accentColor]}`}>
                    {project.subtitle[lang]}
                  </p>
                </div>
                <span className={`text-xs font-mono border px-2.5 py-1 rounded-full shrink-0 ml-4 ${project.statusColor}`}>
                  {project.status[lang]}
                </span>
              </div>

              <p className="text-text-muted text-base leading-relaxed mb-6">{project.description[lang]}</p>

              <div className="grid grid-cols-4 gap-3 mb-6">
                {project.metrics.map((m) => (
                  <div key={m.label.en} className={`${accentBgMap[project.accentColor]} rounded-xl p-3 text-center`}>
                    <div className={`text-sm font-bold ${accentTextMap[project.accentColor]} font-mono`}>{m.value}</div>
                    <div className="text-xs text-text-muted mt-0.5">{m.label[lang]}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-6 flex-1">
                {project.highlights.map((h, hi) => (
                  <div key={hi} className="flex items-start gap-2 text-sm text-text-muted">
                    <h.icon size={14} className={`${accentTextMap[project.accentColor]} mt-0.5 shrink-0`} />
                    <span>{h.text[lang]}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-badge border-slate-300 text-slate-700 bg-slate-100">
                    {tag}
                  </span>
                ))}
              </div>

              {project.isPrivate ? (
                <span className="inline-flex items-center gap-1.5 text-sm text-slate-400 font-medium">
                  <Lock size={13} />
                  {tx.private}
                </span>
              ) : project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm ${accentTextMap[project.accentColor]} hover:opacity-80 font-medium transition-opacity`}
                >
                  <Github size={14} />
                  {tx.viewGithub}
                  <ArrowRight size={12} />
                </a>
              ) : null}
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={`glass glass-hover rounded-2xl p-6 border ${accentMap[project.accentColor]} flex flex-col`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`text-xs font-mono ${accentTextMap[project.accentColor]}`}>◈ Project</span>
                <span className={`text-xs border px-2 py-0.5 rounded-full ${project.statusColor}`}>
                  {project.status[lang]}
                </span>
              </div>

              <h3 className="font-bold text-text-primary mb-1 text-base">{project.title}</h3>
              <p className={`text-xs font-medium ${accentTextMap[project.accentColor]} mb-3`}>
                {project.subtitle[lang]}
              </p>
              <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">{project.description[lang]}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="tech-badge border-slate-300 text-slate-700 bg-slate-100" style={{ fontSize: '11px' }}>
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="tech-badge border-slate-300 text-slate-700 bg-slate-100" style={{ fontSize: '11px' }}>
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 text-xs ${accentTextMap[project.accentColor]} hover:opacity-80 transition-opacity font-medium`}
                >
                  <Github size={11} />
                  GitHub
                  <ExternalLink size={10} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
