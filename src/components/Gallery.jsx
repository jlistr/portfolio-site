function Gallery({ images }) {
  // Using placehold.co for placeholder images with varying heights for masonry effect
  const sampleImages = images || [
    'https://placehold.co/400x500/e2e8f0/475569?text=Photo+1',
    'https://placehold.co/400x600/f1f5f9/334155?text=Photo+2',
    'https://placehold.co/400x450/e2e8f0/475569?text=Photo+3',
    'https://placehold.co/400x550/f1f5f9/334155?text=Photo+4',
    'https://placehold.co/400x480/e2e8f0/475569?text=Photo+5',
    'https://placehold.co/400x620/f1f5f9/334155?text=Photo+6',
    'https://placehold.co/400x520/e2e8f0/475569?text=Photo+7',
    'https://placehold.co/400x580/f1f5f9/334155?text=Photo+8',
    'https://placehold.co/400x460/e2e8f0/475569?text=Photo+9',
    'https://placehold.co/400x540/f1f5f9/334155?text=Photo+10',
    'https://placehold.co/400x590/e2e8f0/475569?text=Photo+11',
    'https://placehold.co/400x510/f1f5f9/334155?text=Photo+12',
    'https://placehold.co/400x570/e2e8f0/475569?text=Photo+13',
    'https://placehold.co/400x490/f1f5f9/334155?text=Photo+14',
    'https://placehold.co/400x530/e2e8f0/475569?text=Photo+15',
    'https://placehold.co/400x610/f1f5f9/334155?text=Photo+16',
    'https://placehold.co/400x470/e2e8f0/475569?text=Photo+17',
    'https://placehold.co/400x560/f1f5f9/334155?text=Photo+18',
    'https://placehold.co/400x500/e2e8f0/475569?text=Photo+19',
    'https://placehold.co/400x600/f1f5f9/334155?text=Photo+20',
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
