import { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from './MobileMenu'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex flex-col items-center py-4">
          <Link to="/" className="text-lg md:text-xl font-bold tracking-[0.2em] text-black uppercase">
            ANAIS SOUALMIA
          </Link>
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="mt-2 p-2 focus:outline-none"
            aria-label="Open menu"
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div>
          </button>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}

export default Header
