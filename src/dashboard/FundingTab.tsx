import { allianceFund, serverFund } from '../data/mockData'
import { Badge, Card, ProgressBar, SectionHeader } from '../components/ui'

export default function FundingTab() {
  return (
    <div>
      <SectionHeader
        title="Funding & Support"
        subtitle="Community-funded workspace — fair support for all"
      />

      <Card className="mb-6 border-primary/20 bg-primary/5">
        <p className="text-sm text-text mb-2">
          Supporting the workspace keeps advanced features active for your entire community.
        </p>
        <p className="text-sm text-muted">
          <strong className="text-warning">Important:</strong> Paying supports the workspace only.
          It does <strong className="text-text">not</strong> give political power or extra voting power.
          Donors may receive a small supporter badge only.
        </p>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <h3 className="font-semibold mb-1">Alliance Fund</h3>
          <p className="text-xs text-muted mb-4">Dragon Crown monthly target</p>
          <ProgressBar current={allianceFund.current} target={allianceFund.target} color="primary" />
          <div className="mt-4">
            <p className="text-xs text-muted mb-2">Recent supporters</p>
            <div className="flex gap-1 flex-wrap">
              {allianceFund.supporters.map((s) => (
                <Badge key={s} color="primary">{s}</Badge>
              ))}
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold mb-1">Server Fund</h3>
          <p className="text-xs text-muted mb-4">S-145 monthly target</p>
          <ProgressBar current={serverFund.current} target={serverFund.target} color="secondary" />
          <div className="mt-4">
            <p className="text-xs text-muted mb-2">Recent supporters</p>
            <div className="flex gap-1 flex-wrap">
              {serverFund.supporters.map((s) => (
                <Badge key={s} color="secondary">{s}</Badge>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <h3 className="font-semibold mb-3">Supporter Badge Preview</h3>
        <div className="flex items-center gap-3">
          <Badge color="gold">💎 Supporter</Badge>
          <span className="text-sm text-muted">Displayed next to your name — cosmetic only, no extra privileges</span>
        </div>
      </Card>
    </div>
  )
}
