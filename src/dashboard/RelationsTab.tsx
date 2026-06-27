import { relations, communications } from '../data/mockData'
import { Badge, Card, SectionHeader } from '../components/ui'

const relationColor: Record<string, 'success' | 'muted' | 'danger' | 'gold' | 'secondary'> = {
  friendly: 'success',
  neutral: 'muted',
  conflict: 'danger',
  'alliance partner': 'gold',
  'event coordination': 'secondary',
}

export default function RelationsTab() {
  const internal = relations.filter((r) => r.type === 'internal')
  const external = relations.filter((r) => r.type === 'external')

  return (
    <div>
      <SectionHeader
        title="Cross-Alliance / Cross-Server Relations"
        subtitle="Diplomacy board and communication records"
      />

      <div className="grid lg:grid-cols-2 gap-4 mb-6">
        <Card>
          <h3 className="font-semibold mb-3">Same-Server Alliances</h3>
          {internal.map((r) => (
            <div key={r.id} className="p-3 rounded-lg bg-bg-secondary border border-border mb-2">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-medium text-sm text-text">{r.name}</p>
                <Badge color={relationColor[r.status]}>{r.status}</Badge>
              </div>
              <p className="text-xs text-muted">{r.notes}</p>
            </div>
          ))}
        </Card>

        <Card>
          <h3 className="font-semibold mb-3">External Server Relations</h3>
          {external.map((r) => (
            <div key={r.id} className="p-3 rounded-lg bg-bg-secondary border border-border mb-2">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-medium text-sm text-text">{r.name}</p>
                <Badge color={relationColor[r.status]}>{r.status}</Badge>
              </div>
              <p className="text-xs text-muted">{r.notes}</p>
            </div>
          ))}
        </Card>
      </div>

      <Card>
        <h3 className="font-semibold mb-3">Communications Record</h3>
        <div className="space-y-3">
          {communications.map((c) => (
            <div key={c.id} className="p-4 rounded-lg bg-bg-secondary border border-border">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <p className="text-sm text-text font-medium">{c.topic}</p>
                <Badge color="muted">{c.status}</Badge>
              </div>
              <p className="text-xs text-muted">
                {c.from} → {c.to} · {c.date}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
