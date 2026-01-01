import Header from '../components/Header'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import InstagramSection from '../components/InstagramSection'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  )
}

export default Home
