import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Architecture from '@/components/Architecture'
import Timeline from '@/components/Timeline'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <div className="fixed inset-0 grid-bg pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-radial from-accent-cyan/[0.03] via-transparent to-transparent pointer-events-none" />
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Architecture />
      <Timeline />
      <Contact />
    </main>
  )
}
