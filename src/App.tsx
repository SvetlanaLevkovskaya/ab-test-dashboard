import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { AppRoutes, routeConfig } from '@config/routeConfig.tsx'

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        {Object.values(AppRoutes).map((route) => (
          <Route key={route} path={routeConfig[route].path} element={routeConfig[route].element} />
        ))}
      </Routes>
    </Router>
  )
}

export default App
