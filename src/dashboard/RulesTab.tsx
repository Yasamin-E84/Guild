import { rules } from '../data/mockData'
import { Badge, Card, SectionHeader } from '../components/ui'

const statusColor = { active: 'success', draft: 'warning', archived: 'muted' } as const

export default function RulesTab() {
  return (
    <div>
      <SectionHeader title="Rules & Rotations" subtitle="Server rules, rotation orders, and violation tracking" />

      <div className="grid lg:grid-cols-2 gap-4 mb-6">
        <Card>
          <h3 className="font-semibold mb-3">Title Rotation Order</h3>
          <div className="space-y-2">
            {['Baron', 'Viscount', 'Earl', 'Duke', 'King'].map((t, i) => (
              <div key={t} className="flex items-center gap-3 text-sm p-2 rounded-lg bg-bg-secondary">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold">
                  {i + 1}
                </span>
                <Badge color="gold">{t}</Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold mb-3">Alliance Event Rotation</h3>
          <div className="space-y-2 text-sm">
            {['Dragon Crown', 'Royal Dawn', 'Night Court', 'Iron Throne'].map((a, i) => (
              <div key={a} className="flex justify-between p-2 rounded-lg bg-bg-secondary">
                <span className="text-text">{a}</span>
                <span className="text-muted">Week {i + 1}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="mb-6">
        <h3 className="font-semibold mb-3">Server Rules</h3>
        <div className="space-y-3">
          {rules.map((r) => (
            <div key={r.id} className="p-4 rounded-lg bg-bg-secondary border border-border">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-medium text-sm text-text">{r.title}</p>
                <Badge color={statusColor[r.status]}>{r.status}</Badge>
              </div>
              <p className="text-xs text-muted">{r.description}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="font-semibold mb-3">Violation / Issue Log</h3>
        <div className="space-y-2 text-sm">
          <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
            <p className="text-warning font-medium">Title stacking attempt — resolved</p>
            <p className="text-xs text-muted mt-1">Player redirected to rotation queue · Jun 18</p>
          </div>
          <div className="p-3 rounded-lg bg-danger/10 border border-danger/20">
            <p className="text-danger font-medium">Missed event coordination — under review</p>
            <p className="text-xs text-muted mt-1">Cross-alliance communication failure · Jun 12</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
