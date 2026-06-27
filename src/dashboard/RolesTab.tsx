import { Badge, Card, SectionHeader } from '../components/ui'

const roles = [
  { name: 'Member', desc: 'View events, sign up, track personal titles and rewards', level: 1 },
  { name: 'Officer / Deputy', desc: 'Manage events, send reminders, assist with approvals', level: 2 },
  { name: 'Alliance Leader', desc: 'Approve members, assign roles, manage alliance fund', level: 3 },
  { name: 'Server Deputy', desc: 'Assist steward with server rules and cross-alliance coordination', level: 4 },
  { name: 'Server Steward', desc: 'Full server authority — rules, rotations, council, transfers', level: 5 },
]

export default function RolesTab() {
  return (
    <div>
      <SectionHeader title="Roles & Transfers" subtitle="Role structure and authority transfer flows" />

      <div className="space-y-3 mb-6">
        {roles.map((r) => (
          <Card key={r.name}>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center text-sm font-bold shrink-0">
                {r.level}
              </div>
              <div>
                <p className="font-medium text-text">{r.name}</p>
                <p className="text-sm text-muted">{r.desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card>
          <h3 className="font-semibold mb-3">Transfer Flows</h3>
          <div className="space-y-3 text-sm">
            <div className="p-3 rounded-lg bg-bg-secondary border border-border">
              <p className="font-medium text-text">Alliance Leadership Transfer</p>
              <p className="text-xs text-muted mt-1">Current leader initiates → successor confirms → logged in audit</p>
            </div>
            <div className="p-3 rounded-lg bg-bg-secondary border border-border">
              <p className="font-medium text-text">Server Stewardship Transfer</p>
              <p className="text-xs text-muted mt-1">Requires confirmation from council majority</p>
            </div>
            <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
              <p className="font-medium text-warning">Emergency Transfer</p>
              <p className="text-xs text-muted mt-1">If leader inactive 30+ days, council can initiate emergency transfer</p>
            </div>
          </div>
        </Card>

        <Card className="border-secondary/20">
          <h3 className="font-semibold mb-3">Audit Requirement</h3>
          <p className="text-sm text-muted mb-3">
            Steward transfer requires confirmation and is logged in audit history.
          </p>
          <Badge color="secondary">All transfers are logged</Badge>
        </Card>
      </div>
    </div>
  )
}
