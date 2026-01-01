import Header from '../components/Header'
import ModelStats from '../components/ModelStats'
import Polaroids from '../components/Polaroids'
import Footer from '../components/Footer'

function PolaroidsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <section className="text-center mb-8">
          <h1 className="text-lg font-bold tracking-[0.2em] uppercase mb-6">
            POLAROIDS
          </h1>
          <ModelStats />
        </section>
        
        <section className="mt-12">
          <Polaroids />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default PolaroidsPage
