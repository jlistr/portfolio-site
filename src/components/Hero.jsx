function Hero({ image }) {
  return (
    <section className="w-full h-screen pt-20">
      <div className="w-full h-full">
        <img 
          src={image || "https://placehold.co/1200x800/1e293b/f8fafc?text=Hero+Image"} 
          alt="Hero" 
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  )
}

export default Hero
