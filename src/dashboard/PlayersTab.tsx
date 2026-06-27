import { useState } from 'react'
import { players } from '../data/mockData'
import type { Player } from '../types'
import { Badge, Card, Modal, SectionHeader } from '../components/ui'

const statusColor = { active: 'success', inactive: 'muted', vacation: 'warning' } as const

export default function PlayersTab() {
  const [selected, setSelected] = useState<Player | null>(null)

  return (
    <div>
      <SectionHeader title="Player Profiles" subtitle="Member directory with titles, rewards, and history" />

      <div className="grid gap-3">
        {players.map((p) => (
          <Card key={p.id} hover onClick={() => setSelected(p)}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm">
                  {p.name[0]}
                </div>
                <div>
                  <p className="font-medium text-text">{p.name}</p>
                  <p className="text-xs text-muted">{p.alliance} · {p.server}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge color="primary">{p.role}</Badge>
                <Badge color={statusColor[p.status]}>{p.status}</Badge>
                {p.currentTitle && <Badge color="gold">{p.currentTitle}</Badge>}
                <span className="text-xs text-muted">🏆 {p.mvpCount} MVPs</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.name ?? ''}>
        {selected && (
          <div className="space-y-4 text-sm">
            <div className="grid grid-cols-2 gap-3">
              <Info label="Server" value={selected.server} />
              <Info label="Alliance" value={selected.alliance} />
              <Info label="Role" value={selected.role} />
              <Info label="Status" value={selected.status} />
              <Info label="Active hours" value={selected.activeHours} />
              <Info label="Join date" value={selected.joinDate} />
              <Info label="Event wins" value={String(selected.eventWins)} />
              <Info label="MVP count" value={String(selected.mvpCount)} />
            </div>

            {selected.currentTitle && (
              <div>
                <p className="text-xs text-muted mb-1">Current title</p>
                <Badge color="gold">{selected.currentTitle}</Badge>
              </div>
            )}

            {selected.pastTitles.length > 0 && (
              <div>
                <p className="text-xs text-muted mb-1">Title history</p>
                <div className="flex gap-1 flex-wrap">
                  {selected.pastTitles.map((t) => <Badge key={t} color="muted">{t}</Badge>)}
                </div>
              </div>
            )}

            {selected.clothing.length > 0 && (
              <div>
                <p className="text-xs text-muted mb-1">Clothing won</p>
                <div className="flex gap-1 flex-wrap">
                  {selected.clothing.map((c) => <Badge key={c} color="secondary">{c}</Badge>)}
                </div>
              </div>
            )}

            {selected.notes && (
              <div className="p-3 rounded-lg bg-bg-secondary border border-border text-muted">
                {selected.notes}
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  )
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-muted">{label}</p>
      <p className="text-text">{value}</p>
    </div>
  )
}
