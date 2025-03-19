import Header from "@/components/header"
import Hero from "@/components/hero"
import RSModifierSection from "@/components/rsmodifier-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-950 to-slate-900 text-white">
      <Header />
      <Hero />
      <RSModifierSection />
    </main>
  )
}

