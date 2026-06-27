import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import type { DashboardTab } from '../types'
import { Badge, Button, Logo } from '../components/ui'
import OverviewTab from '../dashboard/OverviewTab'
import PlayersTab from '../dashboard/PlayersTab'
import AllianceTab from '../dashboard/AllianceTab'
import ServerTab from '../dashboard/ServerTab'
import EventsTab from '../dashboard/EventsTab'
import MvpTitlesTab from '../dashboard/MvpTitlesTab'
import RulesTab from '../dashboard/RulesTab'
import RelationsTab from '../dashboard/RelationsTab'
import AlertsTab from '../dashboard/AlertsTab'
import FundingTab from '../dashboard/FundingTab'
import RolesTab from '../dashboard/RolesTab'
import AuditTab from '../dashboard/AuditTab'

const tabs: { id: DashboardTab; label: string; icon: string }[] = [
  { id: 'overview', label: 'Overview', icon: '📊' },
  { id: 'players', label: 'Players', icon: '👥' },
  { id: 'alliance', label: 'Alliance', icon: '🏰' },
  { id: 'server', label: 'Server', icon: '🌐' },
  { id: 'events', label: 'Events', icon: '📅' },
  { id: 'mvp', label: 'MVP & Titles', icon: '👑' },
  { id: 'rules', label: 'Rules', icon: '📜' },
  { id: 'relations', label: 'Relations', icon: '🤝' },
  { id: 'alerts', label: 'Alerts', icon: '🚨' },
  { id: 'funding', label: 'Funding', icon: '💎' },
  { id: 'roles', label: 'Roles', icon: '⚔️' },
  { id: 'audit', label: 'Audit Log', icon: '📋' },
]

export default function Dashboard() {
  const { user, activeTab, setActiveTab, setDemoUser } = useApp()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (!user) setDemoUser()
  }, [user, setDemoUser])

  const renderTab = () => {
    switch (activeTab) {
      case 'overview': return <OverviewTab />
      case 'players': return <PlayersTab />
      case 'alliance': return <AllianceTab />
      case 'server': return <ServerTab />
      case 'events': return <EventsTab />
      case 'mvp': return <MvpTitlesTab />
      case 'rules': return <RulesTab />
      case 'relations': return <RelationsTab />
      case 'alerts': return <AlertsTab />
      case 'funding': return <FundingTab />
      case 'roles': return <RolesTab />
      case 'audit': return <AuditTab />
    }
  }

  const u = user ?? { name: 'Demo', server: 'S-145', alliance: 'Dragon Crown', role: 'Officer' as const, game: "King's Choice" }

  return (
    <div className="min-h-svh flex flex-col">
      <header className="border-b border-border bg-bg-secondary/90 backdrop-blur-md sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="lg:hidden text-muted hover:text-text cursor-pointer bg-transparent border-none text-xl"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              ☰
            </button>
            <Link to="/"><Logo size="sm" /></Link>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs">
            <Badge color="gold">{u.game}</Badge>
            <Badge color="muted">{u.server}</Badge>
            <Badge color="primary">{u.alliance}</Badge>
            <Badge color="secondary">{u.role}</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/approval">
              <Button variant="ghost" size="sm">Approvals</Button>
            </Link>
            <span className="text-sm text-text hidden sm:block">{u.name}</span>
          </div>
        </div>
        <div className="sm:hidden flex gap-1.5 px-4 pb-2 overflow-x-auto">
          <Badge color="gold">{u.game}</Badge>
          <Badge color="muted">{u.server}</Badge>
          <Badge color="primary">{u.alliance}</Badge>
          <Badge color="secondary">{u.role}</Badge>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside
          className={`${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-30 w-56 bg-bg-secondary border-r border-border pt-16 lg:pt-0 transition-transform duration-200 overflow-y-auto`}
        >
          <nav className="p-3 space-y-0.5">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => { setActiveTab(t.id); setSidebarOpen(false) }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-all cursor-pointer border-none ${
                  activeTab === t.id
                    ? 'bg-primary/15 text-primary font-medium'
                    : 'bg-transparent text-muted hover:text-text hover:bg-surface'
                }`}
              >
                <span>{t.icon}</span>
                {t.label}
              </button>
            ))}
          </nav>
        </aside>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {renderTab()}
        </main>
      </div>
    </div>
  )
}
