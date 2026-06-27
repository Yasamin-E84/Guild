import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import HomePage from './pages/HomePage'
import GameSelection from './pages/GameSelection'
import Onboarding from './pages/Onboarding'
import Approval from './pages/Approval'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GameSelection />} />
          <Route path="/kings-choice/setup" element={<Onboarding />} />
          <Route path="/approval" element={<Approval />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}
