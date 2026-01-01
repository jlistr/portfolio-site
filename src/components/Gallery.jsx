function Gallery({ images }) {
  const sampleImages = images || [
    '/images/gallery-1.jpg',
    '/images/gallery-2.jpg',
    '/images/gallery-3.jpg',
    '/images/gallery-4.jpg',
    '/images/gallery-5.jpg',
    '/images/gallery-6.jpg',
    '/images/gallery-7.jpg',
    '/images/gallery-8.jpg',
    '/images/gallery-9.jpg',
    '/images/gallery-10.jpg',
    '/images/gallery-11.jpg',
    '/images/gallery-12.jpg',
  ]

  return (
    <section className="px-4 py-16 bg-white">
      <h2 className="text-center text-lg font-bold tracking-[0.2em] uppercase mb-12">
        GALLERY
      </h2>
      
      <div className="masonry max-w-7xl mx-auto">
        {sampleImages.map((image, index) => (
          <div key={index} className="masonry-item">
            <img 
              src={image} 
              alt={`Gallery image ${index + 1}`}
              className="w-full h-auto object-cover rounded-sm hover:opacity-90 transition-opacity cursor-pointer"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
