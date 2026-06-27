import { players, guideTemplates, pendingRequests } from '../data/mockData'
import { Badge, Card, SectionHeader } from '../components/ui'

export default function AllianceTab() {
  const members = players.filter((p) => p.alliance === 'Dragon Crown')
  const officers = members.filter((p) => p.role === 'Officer' || p.role === 'Alliance Leader')
  const pending = pendingRequests.filter((r) => r.alliance === 'Dragon Crown' && r.status === 'pending')

  return (
    <div>
      <SectionHeader title="Alliance Management" subtitle="Dragon Crown — members, roles, and communication" />

      <div className="grid lg:grid-cols-3 gap-4 mb-6">
        <Card>
          <p className="text-xs text-muted">Members</p>
          <p className="text-2xl font-bold text-primary">{members.length}</p>
        </Card>
        <Card>
          <p className="text-xs text-muted">Officers</p>
          <p className="text-2xl font-bold text-secondary">{officers.length}</p>
        </Card>
        <Card>
          <p className="text-xs text-muted">Pending joins</p>
          <p className="text-2xl font-bold text-warning">{pending.length}</p>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mb-6">
        <Card>
          <h3 className="font-semibold mb-3">Officer List</h3>
          {officers.map((o) => (
            <div key={o.id} className="flex justify-between items-center py-2 border-b border-border last:border-0">
              <span className="text-sm text-text">{o.name}</span>
              <Badge color="primary">{o.role}</Badge>
            </div>
          ))}
        </Card>

        <Card>
          <h3 className="font-semibold mb-3">Activity Snapshot</h3>
          <div className="space-y-2">
            {members.map((m) => (
              <div key={m.id} className="flex justify-between text-sm">
                <span className="text-text">{m.name}</span>
                <Badge color={m.status === 'active' ? 'success' : m.status === 'vacation' ? 'warning' : 'muted'}>
                  {m.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="mb-6">
        <h3 className="font-semibold mb-3">Announcements</h3>
        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
          <p className="text-sm text-text font-medium">Server Dragon Hunt — July 5</p>
          <p className="text-xs text-muted mt-1">
            All officers please confirm cross-alliance coordination by July 3. Sign up in Events tab.
          </p>
        </div>
      </Card>

      <div>
        <h3 className="font-semibold mb-3">Guide Templates</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {guideTemplates.map((t) => (
            <Card key={t.id} hover>
              <p className="font-medium text-sm text-text mb-1">{t.title}</p>
              <p className="text-xs text-muted">{t.preview}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
