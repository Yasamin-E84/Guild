import { alerts } from '../data/mockData'
import { Badge, Button, Card, SectionHeader } from '../components/ui'

export default function AlertsTab() {
  const typeColor = { urgent: 'danger', reminder: 'warning', info: 'secondary' } as const

  return (
    <div>
      <SectionHeader
        title="Alerts & Reminders"
        subtitle="Urgent alerts, reminders, and notification channels"
        action={<Button variant="danger" size="sm">🚨 Need Help Now</Button>}
      />

      <Card className="mb-6 border-danger/20">
        <h3 className="font-semibold text-danger mb-2">Urgent Alert</h3>
        <p className="text-sm text-muted mb-3">
          Send immediate alerts to officers and active members. Use for time-critical situations.
        </p>
        <Button variant="danger" size="sm">Send Urgent Alert</Button>
      </Card>

      <div className="space-y-3 mb-6">
        {alerts.map((a) => (
          <Card key={a.id}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium text-sm text-text">{a.title}</p>
                <p className="text-xs text-muted mt-1">{a.message}</p>
              </div>
              <div className="flex flex-col items-end gap-1 shrink-0">
                <Badge color={typeColor[a.type]}>{a.type}</Badge>
                <span className="text-xs text-muted">{a.time}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card>
          <h3 className="font-semibold mb-3">Reminder Channels</h3>
          <div className="space-y-2 text-sm">
            {[
              { ch: 'In-app', status: 'Active', color: 'success' as const },
              { ch: 'Email', status: 'Active', color: 'success' as const },
              { ch: 'Discord', status: 'Connected', color: 'secondary' as const },
              { ch: 'SMS', status: 'Premium / Optional', color: 'gold' as const },
            ].map((c) => (
              <div key={c.ch} className="flex justify-between items-center p-2 rounded-lg bg-bg-secondary">
                <span className="text-text">{c.ch}</span>
                <Badge color={c.color}>{c.status}</Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold mb-3">Event Reminder Templates</h3>
          <div className="space-y-2 text-sm text-muted">
            <p className="p-2 rounded-lg bg-bg-secondary border border-border">
              &quot;Alliance event begins in 30 minutes. Confirm attendance.&quot;
            </p>
            <p className="p-2 rounded-lg bg-bg-secondary border border-border">
              &quot;Server event tomorrow at 18:00 UTC. Officers please coordinate.&quot;
            </p>
            <p className="p-2 rounded-lg bg-bg-secondary border border-border">
              &quot;Title rotation review needed before next event.&quot;
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
