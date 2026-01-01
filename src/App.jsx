import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PolaroidsPage from './pages/PolaroidsPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/polaroids" element={<PolaroidsPage />} />
      </Routes>
    </Router>
  )
}

export default App
