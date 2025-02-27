import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import './App.css'

import { Dashboard } from './pages/Dashboard/Dashboard'
import { Finalize } from './pages/Finalize/Finalize'
import { Results } from './pages/Results/Results'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/results/:testId" element={<Results />} />
        <Route path="/finalize/:testId" element={<Finalize />} />
      </Routes>
    </Router>
  )
}

export default App
