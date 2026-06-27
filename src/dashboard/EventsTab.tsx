import { useState } from 'react'
import { events } from '../data/mockData'
import type { Event } from '../types'
import { Badge, Card, Modal, SectionHeader } from '../components/ui'

const statusColor = { upcoming: 'secondary', active: 'warning', completed: 'success' } as const

export default function EventsTab() {
  const [selected, setSelected] = useState<Event | null>(null)

  return (
    <div>
      <SectionHeader title="Events" subtitle="Alliance and server events — sign-ups, strategy, and results" />

      <div className="space-y-3">
        {events.map((e) => (
          <Card key={e.id} hover onClick={() => setSelected(e)}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="font-medium text-text">{e.name}</p>
                <p className="text-xs text-muted">{e.date} · {e.time}</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Badge color="muted">{e.type}</Badge>
                <Badge color={statusColor[e.status]}>{e.status}</Badge>
                {e.mvp && <Badge color="gold">MVP: {e.mvp}</Badge>}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.name ?? ''}>
        {selected && (
          <div className="space-y-4 text-sm">
            <div className="flex gap-2 flex-wrap">
              <Badge color="muted">{selected.type}</Badge>
              <Badge color={statusColor[selected.status]}>{selected.status}</Badge>
            </div>
            <p className="text-muted">{selected.date} at {selected.time}</p>

            <div>
              <p className="text-xs text-muted mb-1">Signed up ({selected.signedUp.length})</p>
              <div className="flex gap-1 flex-wrap">
                {selected.signedUp.map((s) => <Badge key={s} color="primary">{s}</Badge>)}
              </div>
            </div>

            {selected.strategyNotes && (
              <div className="p-3 rounded-lg bg-bg-secondary border border-border">
                <p className="text-xs text-muted mb-1">Strategy notes</p>
                <p className="text-text">{selected.strategyNotes}</p>
              </div>
            )}

            {selected.result && (
              <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                <p className="text-xs text-muted mb-1">Result</p>
                <p className="text-success">{selected.result}</p>
              </div>
            )}

            {(selected.mvp || selected.titleReward) && (
              <div className="flex gap-2 flex-wrap">
                {selected.mvp && <Badge color="gold">MVP: {selected.mvp}</Badge>}
                {selected.titleReward && <Badge color="gold">Title: {selected.titleReward}</Badge>}
                {selected.clothingReward && <Badge color="secondary">{selected.clothingReward}</Badge>}
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  )
}
