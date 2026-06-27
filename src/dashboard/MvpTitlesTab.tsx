import { mvpRecords, activeTitleHolders, rotationQueue } from '../data/mockData'
import { Badge, Card, SectionHeader } from '../components/ui'

export default function MvpTitlesTab() {
  return (
    <div>
      <SectionHeader
        title="MVP / Titles / Clothing"
        subtitle="Event-based rewards, rotation fairness, and transparency"
      />

      <Card className="mb-6 border-gold/20 bg-gold/5">
        <h3 className="font-semibold text-gold mb-2">Who is next in rotation?</h3>
        <div className="flex gap-2 flex-wrap">
          {rotationQueue.map((p, i) => (
            <Badge key={p} color={i === 0 ? 'gold' : 'muted'}>
              {i + 1}. {p}
            </Badge>
          ))}
        </div>
      </Card>

      <div className="grid lg:grid-cols-2 gap-4 mb-6">
        <Card>
          <h3 className="font-semibold mb-3">Current Active Title Holders</h3>
          {activeTitleHolders.map((t) => (
            <div key={t.player} className="flex justify-between items-center py-2 border-b border-border last:border-0 text-sm">
              <span className="text-text">{t.player}</span>
              <div className="flex items-center gap-2">
                <Badge color="gold">{t.title}</Badge>
                <span className="text-xs text-muted">{t.expires}</span>
              </div>
            </div>
          ))}
        </Card>

        <Card>
          <h3 className="font-semibold mb-3">Clothing Reward Gallery</h3>
          <div className="grid grid-cols-2 gap-2">
            {['Royal Mantle', 'Crown of Valor', 'Noble Attire', 'Imperial Robes', 'Shadow Cloak', 'Golden Scepter'].map((c) => (
              <div key={c} className="p-3 rounded-lg bg-bg-secondary border border-border text-center text-sm text-text">
                👘 {c}
              </div>
            ))}
          </div>
        </Card>
      </div>

      <h3 className="font-semibold mb-3">Event MVP History</h3>
      <div className="space-y-3">
        {mvpRecords.map((m) => (
          <Card key={m.id}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="font-medium text-text">{m.eventName}</p>
                <p className="text-sm text-gold">{m.player}</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Badge color="gold">{m.title}</Badge>
                {m.clothing && <Badge color="secondary">{m.clothing}</Badge>}
                {m.hadRecentTitle && <Badge color="warning">Had recent title</Badge>}
              </div>
            </div>
            <div className="flex gap-4 mt-2 text-xs text-muted">
              <span>{m.startDate} → {m.endDate}</span>
            </div>
            {m.rotationNote && (
              <p className="text-xs text-muted mt-2 italic">{m.rotationNote}</p>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
