import { Link } from 'react-router-dom'

function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="flex flex-col items-center pt-4">
        <Link 
          to="/" 
          className="text-lg md:text-xl font-bold tracking-[0.2em] text-gray-400 uppercase"
          onClick={onClose}
        >
          ANAIS SOUALMIA
        </Link>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-2xl"
          aria-label="Close menu"
        >
          ×
        </button>
      </div>
      
      <nav className="flex flex-col items-center justify-center h-[60vh] space-y-6">
        <Link 
          to="/" 
          className="text-base text-gray-800 hover:text-black transition-colors"
          onClick={onClose}
        >
          Portfolio Soualmia Anais
        </Link>
        <Link 
          to="/polaroids" 
          className="text-base text-gray-800 hover:text-black transition-colors"
          onClick={onClose}
        >
          Polaroids
        </Link>
      </nav>
    </div>
  )
}

export default MobileMenu
