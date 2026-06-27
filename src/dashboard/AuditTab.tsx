import { auditLog } from '../data/mockData'
import { Card, SectionHeader } from '../components/ui'

export default function AuditTab() {
  return (
    <div>
      <SectionHeader
        title="Audit Log"
        subtitle="Important actions are logged for trust and transparency"
      />

      <div className="space-y-2">
        {auditLog.map((entry) => (
          <Card key={entry.id}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <p className="text-sm text-text">{entry.action}</p>
                <p className="text-xs text-muted">by {entry.actor}</p>
              </div>
              <span className="text-xs text-muted shrink-0">{entry.timestamp}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
