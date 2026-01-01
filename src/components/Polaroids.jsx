function Polaroids({ images }) {
  const sampleImages = images || [
    '/images/polaroid-1.jpg',
    '/images/polaroid-2.jpg',
    '/images/polaroid-3.jpg',
    '/images/polaroid-4.jpg',
    '/images/polaroid-5.jpg',
    '/images/polaroid-6.jpg',
  ]

  return (
    <div className="space-y-2 max-w-2xl mx-auto px-4">
      {sampleImages.map((image, index) => (
        <div key={index} className="w-full">
          <img 
            src={image} 
            alt={`Polaroid ${index + 1}`}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}

export default Polaroids
