import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { alliances, roleOptions, servers } from '../data/mockData'
import { useApp } from '../context/AppContext'
import type { Role } from '../types'
import { Badge, Button, Card, Disclaimer, Input, Logo, Select } from '../components/ui'

type Step = 'server' | 'alliance' | 'role' | 'success'

export default function Onboarding() {
  const navigate = useNavigate()
  const { submitApplication, setDemoUser, applicationSubmitted, resetApplication } = useApp()
  const [step, setStep] = useState<Step>(applicationSubmitted ? 'success' : 'server')
  const [server, setServer] = useState('')
  const [alliance, setAlliance] = useState('')
  const [createServer, setCreateServer] = useState(false)
  const [newServerName, setNewServerName] = useState('')
  const [name, setName] = useState('')
  const [playerId, setPlayerId] = useState('')
  const [role, setRole] = useState<Role>('Member')
  const [search, setSearch] = useState('')

  const filteredServers = servers.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()),
  )
  const serverAlliances = alliances.filter((a) => a.server === (createServer ? newServerName : server))

  const handleSubmit = () => {
    submitApplication({
      name,
      playerId: playerId || undefined,
      server: createServer ? newServerName : server,
      alliance,
      requestedRole: role,
    })
    setStep('success')
  }

  const steps: Step[] = ['server', 'alliance', 'role', 'success']
  const stepIndex = steps.indexOf(step)

  return (
    <div className="min-h-svh">
      <nav className="border-b border-border bg-bg-secondary/80 backdrop-blur-md">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/games"><Logo size="sm" /></Link>
          <Badge color="gold">King&apos;s Choice</Badge>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Progress */}
        <div className="flex items-center gap-2 mb-8">
          {['Server', 'Alliance', 'Role', 'Done'].map((label, i) => (
            <div key={label} className="flex items-center gap-2 flex-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  i <= stepIndex
                    ? 'bg-primary text-white'
                    : 'bg-border text-muted'
                }`}
              >
                {i + 1}
              </div>
              <span className={`text-xs hidden sm:block ${i <= stepIndex ? 'text-text' : 'text-muted'}`}>
                {label}
              </span>
              {i < 3 && <div className={`flex-1 h-0.5 ${i < stepIndex ? 'bg-primary' : 'bg-border'}`} />}
            </div>
          ))}
        </div>

        {step === 'server' && (
          <Card>
            <h2 className="text-xl font-semibold mb-1">Select Server</h2>
            <p className="text-sm text-muted mb-6">Choose an existing server or create a new workspace.</p>

            <div className="flex gap-2 mb-4">
              <Button
                variant={!createServer ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setCreateServer(false)}
              >
                Join Existing
              </Button>
              <Button
                variant={createServer ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setCreateServer(true)}
              >
                Create New Server
              </Button>
            </div>

            {!createServer ? (
              <>
                <Input
                  label="Search servers"
                  placeholder="e.g. S-145"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div className="mt-3 space-y-2 max-h-60 overflow-y-auto">
                  {filteredServers.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setServer(s.name)}
                      className={`w-full text-left p-3 rounded-lg border transition-all cursor-pointer ${
                        server === s.name
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/30 bg-bg-secondary'
                      }`}
                    >
                      <div className="font-medium text-text">{s.name}</div>
                      <div className="text-xs text-muted">
                        Steward: {s.steward} · {s.allianceCount} alliances
                      </div>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <Input
                label="New server name"
                placeholder="e.g. S-400"
                value={newServerName}
                onChange={(e) => setNewServerName(e.target.value)}
              />
            )}

            <div className="flex justify-between mt-6">
              <Link to="/games"><Button variant="ghost">Back</Button></Link>
              <Button
                disabled={createServer ? !newServerName : !server}
                onClick={() => setStep('alliance')}
              >
                Continue
              </Button>
            </div>
          </Card>
        )}

        {step === 'alliance' && (
          <Card>
            <h2 className="text-xl font-semibold mb-1">Select Alliance</h2>
            <p className="text-sm text-muted mb-6">
              Alliances on {createServer ? newServerName : server}
            </p>

            {serverAlliances.length > 0 ? (
              <div className="space-y-2">
                {serverAlliances.map((a) => (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => setAlliance(a.name)}
                    className={`w-full text-left p-3 rounded-lg border transition-all cursor-pointer ${
                      alliance === a.name
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/30 bg-bg-secondary'
                    }`}
                  >
                    <div className="font-medium text-text">{a.name}</div>
                    <div className="text-xs text-muted">
                      Leader: {a.leader} · {a.memberCount} members
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-4 rounded-lg bg-bg-secondary border border-border text-sm text-muted">
                No alliances listed yet. You can still continue and request to create one as a leader.
                <button
                  type="button"
                  onClick={() => setAlliance('New Alliance')}
                  className="block mt-2 text-primary cursor-pointer bg-transparent border-none text-sm"
                >
                  Request new alliance setup →
                </button>
              </div>
            )}

            <div className="flex justify-between mt-6">
              <Button variant="ghost" onClick={() => setStep('server')}>Back</Button>
              <Button disabled={!alliance} onClick={() => setStep('role')}>Continue</Button>
            </div>
          </Card>
        )}

        {step === 'role' && (
          <Card>
            <h2 className="text-xl font-semibold mb-1">Request Role</h2>
            <p className="text-sm text-muted mb-4">
              Fill in your details. Your role will be verified by a leader or steward.
            </p>

            <div className="p-3 rounded-lg bg-warning/10 border border-warning/20 text-sm text-warning mb-6">
              Since game data is not connected through an official API, roles and memberships are
              verified through leader approval.
            </div>

            <div className="space-y-4">
              <Input label="In-game name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your character name" />
              <Input label="Player ID (optional)" value={playerId} onChange={(e) => setPlayerId(e.target.value)} placeholder="e.g. KC-99201" />
              <div className="grid grid-cols-2 gap-4">
                <Input label="Server" value={createServer ? newServerName : server} readOnly />
                <Input label="Alliance" value={alliance} readOnly />
              </div>
              <Select label="Requested role" value={role} onChange={(e) => setRole(e.target.value as Role)}>
                {roleOptions.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </Select>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-between mt-6">
              <Button variant="ghost" onClick={() => setStep('alliance')}>Back</Button>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="gold" onClick={() => { setDemoUser(); navigate('/dashboard') }}>
                  Continue as Demo User
                </Button>
                <Button disabled={!name} onClick={handleSubmit}>Submit Application</Button>
              </div>
            </div>
          </Card>
        )}

        {step === 'success' && (
          <Card className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4 text-3xl">
              ✓
            </div>
            <h2 className="text-xl font-semibold mb-2">Application Submitted</h2>
            <p className="text-sm text-muted mb-2">
              Your request for <strong className="text-text">{role}</strong> in{' '}
              <strong className="text-text">{alliance}</strong> on{' '}
              <strong className="text-text">{createServer ? newServerName : server}</strong> has been sent.
            </p>
            <p className="text-sm text-muted mb-6">
              A leader or steward will review and approve your role. This is not instant — roles are verified manually.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" onClick={() => { resetApplication(); setStep('server'); setName(''); }}>
                Submit Another
              </Button>
              <Button onClick={() => navigate('/approval')}>
                View Leader Approval (Demo)
              </Button>
              <Button variant="gold" onClick={() => { setDemoUser(); navigate('/dashboard') }}>
                Skip to Dashboard (Demo)
              </Button>
            </div>
          </Card>
        )}

        <div className="text-center mt-6"><Disclaimer /></div>
      </div>
    </div>
  )
}
