function ModelStats({ stats }) {
  const defaultStats = {
    height: '176 cm',
    bust: '79 cm',
    waist: '62 cm',
    hips: '90 cm',
    dress: '34-36 EU',
    shoes: '39 EU',
    hair: 'Light Brown',
    eyes: 'Brown'
  }

  const displayStats = stats || defaultStats

  return (
    <div className="text-center space-y-1 text-sm">
      <p><span className="font-semibold">HEIGHT:</span> {displayStats.height}</p>
      <p><span className="font-semibold">BUST:</span> {displayStats.bust}</p>
      <p><span className="font-semibold">WAIST:</span> {displayStats.waist}</p>
      <p><span className="font-semibold">HIPS:</span> {displayStats.hips}</p>
      <p><span className="font-semibold">DRESS:</span> {displayStats.dress}</p>
      <p><span className="font-semibold">SHOES:</span> {displayStats.shoes}</p>
      <p><span className="font-semibold">HAIR:</span> {displayStats.hair}</p>
      <p><span className="font-semibold">EYES:</span> {displayStats.eyes}</p>
    </div>
  )
}

export default ModelStats
