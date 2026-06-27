import { events, alerts, activeTitleHolders, allianceFund, serverFund, pendingRequests, mvpRecords } from '../data/mockData'
import { Badge, Card, ProgressBar, SectionHeader } from '../components/ui'

export default function OverviewTab() {
  const upcoming = events.filter((e) => e.status === 'upcoming')
  const latestMvp = mvpRecords[0]
  const pending = pendingRequests.filter((r) => r.status === 'pending').length
  const urgentAlerts = alerts.filter((a) => a.type === 'urgent')

  return (
    <div>
      <SectionHeader title="Overview" subtitle="Your alliance and server at a glance" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard label="Upcoming Events" value={upcoming.length} color="primary" />
        <StatCard label="Pending Approvals" value={pending} color="warning" />
        <StatCard label="Urgent Alerts" value={urgentAlerts.length} color="danger" />
        <StatCard label="Active Titles" value={activeTitleHolders.length} color="gold" />
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mb-6">
        <Card>
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            Upcoming Events
            <Badge color="primary">{upcoming.length}</Badge>
          </h3>
          <div className="space-y-3">
            {upcoming.map((e) => (
              <div key={e.id} className="flex justify-between items-start p-3 rounded-lg bg-bg-secondary border border-border">
                <div>
                  <p className="font-medium text-sm text-text">{e.name}</p>
                  <p className="text-xs text-muted">{e.date} · {e.time}</p>
                </div>
                <Badge color="secondary">{e.type}</Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold mb-3">Latest MVP Result</h3>
          {latestMvp && (
            <div className="p-4 rounded-lg bg-gold/5 border border-gold/20">
              <p className="text-gold font-medium">{latestMvp.player}</p>
              <p className="text-sm text-muted mt-1">{latestMvp.eventName}</p>
              <div className="flex gap-2 mt-2">
                <Badge color="gold">{latestMvp.title}</Badge>
                {latestMvp.clothing && <Badge color="muted">{latestMvp.clothing}</Badge>}
              </div>
            </div>
          )}
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mb-6">
        <Card>
          <h3 className="font-semibold mb-3">Active Titles on Server</h3>
          <div className="space-y-2">
            {activeTitleHolders.map((t) => (
              <div key={t.player} className="flex justify-between items-center text-sm p-2 rounded-lg bg-bg-secondary">
                <span className="text-text">{t.player}</span>
                <div className="flex items-center gap-2">
                  <Badge color="gold">{t.title}</Badge>
                  <span className="text-xs text-muted">{t.expires}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 p-2 rounded-lg bg-warning/10 border border-warning/20 text-xs text-warning">
            Title rotation warning: QueenElena&apos;s King title expires soon. MiraK is next in queue.
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold mb-3">Urgent Alerts</h3>
          <div className="space-y-2">
            {urgentAlerts.map((a) => (
              <div key={a.id} className="p-3 rounded-lg bg-danger/10 border border-danger/20">
                <p className="text-sm font-medium text-danger">{a.title}</p>
                <p className="text-xs text-muted mt-1">{a.message}</p>
              </div>
            ))}
            {alerts.filter((a) => a.type !== 'urgent').slice(0, 2).map((a) => (
              <div key={a.id} className="p-3 rounded-lg bg-bg-secondary border border-border">
                <p className="text-sm font-medium text-text">{a.title}</p>
                <p className="text-xs text-muted mt-1">{a.message}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card>
          <h3 className="font-semibold mb-3">Alliance Fund</h3>
          <ProgressBar current={allianceFund.current} target={allianceFund.target} color="primary" />
        </Card>
        <Card>
          <h3 className="font-semibold mb-3">Server Fund</h3>
          <ProgressBar current={serverFund.current} target={serverFund.target} color="secondary" />
        </Card>
      </div>
    </div>
  )
}

function StatCard({ label, value, color }: { label: string; value: number; color: string }) {
  const colors: Record<string, string> = {
    primary: 'text-primary',
    warning: 'text-warning',
    danger: 'text-danger',
    gold: 'text-gold',
  }
  return (
    <Card>
      <p className="text-xs text-muted mb-1">{label}</p>
      <p className={`text-3xl font-bold ${colors[color]}`}>{value}</p>
    </Card>
  )
}
