import { alliances, rules, serverCouncil, deputyStewards, servers } from '../data/mockData'
import { Badge, Card, SectionHeader } from '../components/ui'

export default function ServerTab() {
  const server = servers.find((s) => s.name === 'S-145')
  const serverAlliances = alliances.filter((a) => a.server === 'S-145')
  const activeRules = rules.filter((r) => r.status === 'active')

  return (
    <div>
      <SectionHeader title="Server Management" subtitle="S-145 — server-level coordination and rules" />

      <Card className="mb-6 border-secondary/20 bg-secondary/5">
        <p className="text-sm text-text">
          This server uses shared rules for title rotation, alliance event fairness, and communication between alliances.
        </p>
      </Card>

      <div className="grid lg:grid-cols-2 gap-4 mb-6">
        <Card>
          <h3 className="font-semibold mb-3">Server Overview</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted">Server</span><span className="text-text">S-145</span></div>
            <div className="flex justify-between"><span className="text-muted">Steward</span><span className="text-text">{server?.steward}</span></div>
            <div className="flex justify-between"><span className="text-muted">Alliances</span><span className="text-text">{server?.allianceCount}</span></div>
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold mb-3">Server Council</h3>
          {serverCouncil.map((m) => (
            <div key={m} className="flex justify-between py-1.5 text-sm border-b border-border last:border-0">
              <span className="text-text">{m}</span>
              <Badge color="gold">Council</Badge>
            </div>
          ))}
        </Card>
      </div>

      <Card className="mb-6">
        <h3 className="font-semibold mb-3">Deputy Stewards</h3>
        <div className="flex gap-2 flex-wrap">
          {deputyStewards.map((d) => (
            <Badge key={d} color="secondary">{d}</Badge>
          ))}
        </div>
      </Card>

      <Card className="mb-6">
        <h3 className="font-semibold mb-3">Alliance Directory</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {serverAlliances.map((a) => (
            <div key={a.id} className="p-3 rounded-lg bg-bg-secondary border border-border">
              <p className="font-medium text-text">{a.name}</p>
              <p className="text-xs text-muted">Leader: {a.leader} · {a.memberCount} members</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="mb-6">
        <h3 className="font-semibold mb-3">Server Rules</h3>
        <div className="space-y-2">
          {activeRules.map((r) => (
            <div key={r.id} className="p-3 rounded-lg bg-bg-secondary border border-border">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm font-medium text-text">{r.title}</p>
                <Badge color="success">{r.status}</Badge>
              </div>
              <p className="text-xs text-muted">{r.description}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="font-semibold mb-3">Title Fairness Notes</h3>
        <ul className="text-sm text-muted space-y-1 list-disc list-inside">
          <li>30-day cooldown between title assignments for same player</li>
          <li>Rotation queue maintained by Server Steward</li>
          <li>Stacking prevention: recent title holders yield to queue</li>
          <li>Rule changes require council majority approval</li>
        </ul>
      </Card>
    </div>
  )
}
