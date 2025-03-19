import Header from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-950 to-slate-900 text-white">
      <Header />
      <div className="pt-32 pb-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300">
            Welcome to our Project
          </h1>
          <p className="mt-6 text-lg text-violet-200">
            This is the homepage of our project. The header above has all the navigation items with beautiful color
            styling.
          </p>
        </div>
      </div>
    </main>
  )
}

