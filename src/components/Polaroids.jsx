function Polaroids({ images }) {
  // Using placehold.co for placeholder polaroid-style images
  const sampleImages = images || [
    'https://placehold.co/600x750/e2e8f0/475569?text=Polaroid+1',
    'https://placehold.co/600x750/f1f5f9/334155?text=Polaroid+2',
    'https://placehold.co/600x750/e2e8f0/475569?text=Polaroid+3',
    'https://placehold.co/600x750/f1f5f9/334155?text=Polaroid+4',
    'https://placehold.co/600x750/e2e8f0/475569?text=Polaroid+5',
    'https://placehold.co/600x750/f1f5f9/334155?text=Polaroid+6',
    'https://placehold.co/600x750/e2e8f0/475569?text=Polaroid+7',
    'https://placehold.co/600x750/f1f5f9/334155?text=Polaroid+8',
    'https://placehold.co/600x750/e2e8f0/475569?text=Polaroid+9',
    'https://placehold.co/600x750/f1f5f9/334155?text=Polaroid+10',
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
