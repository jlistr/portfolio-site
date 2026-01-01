function Hero({ image }) {
  return (
    <section className="w-full h-screen pt-20">
      <div className="w-full h-full">
        <img 
          src={image || "/images/hero.jpg"} 
          alt="Hero" 
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  )
}

export default Hero
