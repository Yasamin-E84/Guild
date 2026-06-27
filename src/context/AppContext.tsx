import { createContext, useContext, useState, type ReactNode } from 'react'
import type { DashboardTab, JoinRequest, Role, UserSession } from '../types'
import { pendingRequests as initialRequests } from '../data/mockData'

interface AppState {
  user: UserSession | null
  requests: JoinRequest[]
  activeTab: DashboardTab
  applicationSubmitted: boolean
  setActiveTab: (tab: DashboardTab) => void
  submitApplication: (data: {
    name: string
    playerId?: string
    server: string
    alliance: string
    requestedRole: Role
  }) => void
  approveRequest: (id: string, role?: Role) => void
  rejectRequest: (id: string) => void
  setDemoUser: () => void
  loginAsApproved: (request: JoinRequest, role: Role) => void
  resetApplication: () => void
}

const AppContext = createContext<AppState | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserSession | null>(null)
  const [requests, setRequests] = useState<JoinRequest[]>(initialRequests)
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview')
  const [applicationSubmitted, setApplicationSubmitted] = useState(false)

  const submitApplication = (data: {
    name: string
    playerId?: string
    server: string
    alliance: string
    requestedRole: Role
  }) => {
    const newRequest: JoinRequest = {
      id: `jr-${Date.now()}`,
      playerName: data.name,
      playerId: data.playerId,
      server: data.server,
      alliance: data.alliance,
      requestedRole: data.requestedRole,
      submittedAt: new Date().toLocaleString(),
      status: 'pending',
    }
    setRequests((prev) => [newRequest, ...prev])
    setApplicationSubmitted(true)
  }

  const approveRequest = (id: string, role?: Role) => {
    setRequests((prev) => {
      const updated = prev.map((r) =>
        r.id === id ? { ...r, status: 'approved' as const, requestedRole: role ?? r.requestedRole } : r,
      )
      const req = updated.find((r) => r.id === id)
      if (req) {
        loginAsApproved(req, role ?? req.requestedRole)
      }
      return updated
    })
  }

  const rejectRequest = (id: string) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: 'rejected' as const } : r)),
    )
  }

  const loginAsApproved = (request: JoinRequest, role: Role) => {
    setUser({
      name: request.playerName,
      playerId: request.playerId,
      server: request.server,
      alliance: request.alliance,
      role,
      game: "King's Choice",
    })
  }

  const setDemoUser = () => {
    setUser({
      name: 'Yasi',
      playerId: 'KC-99201',
      server: 'S-145',
      alliance: 'Dragon Crown',
      role: 'Officer',
      game: "King's Choice",
    })
  }

  const resetApplication = () => setApplicationSubmitted(false)

  return (
    <AppContext.Provider
      value={{
        user,
        requests,
        activeTab,
        applicationSubmitted,
        setActiveTab,
        submitApplication,
        approveRequest,
        rejectRequest,
        setDemoUser,
        loginAsApproved,
        resetApplication,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
