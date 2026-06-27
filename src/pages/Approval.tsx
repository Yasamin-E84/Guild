import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import type { Role } from '../types'
import { Badge, Button, Card, Disclaimer, Logo, Modal } from '../components/ui'

export default function Approval() {
  const { requests, approveRequest, rejectRequest } = useApp()
  const navigate = useNavigate()
  const [changeRoleId, setChangeRoleId] = useState<string | null>(null)
  const [selectedRole, setSelectedRole] = useState<Role>('Member')

  const pending = requests.filter((r) => r.status === 'pending' || r.status === 'pending verification')

  const handleApproveWithRole = (id: string, role: Role) => {
    approveRequest(id, role)
    setChangeRoleId(null)
    navigate('/dashboard')
  }

  return (
    <div className="min-h-svh">
      <nav className="border-b border-border bg-bg-secondary/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/"><Logo size="sm" /></Link>
          <div className="flex items-center gap-3">
            <Badge color="warning">{pending.length} pending</Badge>
            <Link to="/dashboard">
              <Button variant="ghost" size="sm">Dashboard →</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-1">Leader Approval Inbox</h1>
        <p className="text-sm text-muted mb-2">
          Review and verify role requests. Approve, reject, or assign a different role.
        </p>
        <p className="text-xs text-muted/70 mb-8 italic">
          This solves the &quot;how do we know the role is correct?&quot; problem without an official game API.
        </p>

        {pending.length === 0 ? (
          <Card className="text-center py-12">
            <p className="text-muted mb-4">No pending requests.</p>
            <Link to="/kings-choice/setup">
              <Button variant="outline">Submit a Test Application</Button>
            </Link>
          </Card>
        ) : (
          <div className="space-y-4">
            {pending.map((req) => (
              <Card key={req.id}>
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-text text-lg">{req.playerName}</h3>
                      {req.status === 'pending verification' && (
                        <Badge color="warning">Needs verification</Badge>
                      )}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                      <div>
                        <span className="text-muted block text-xs">Server</span>
                        <span className="text-text">{req.server}</span>
                      </div>
                      <div>
                        <span className="text-muted block text-xs">Alliance</span>
                        <span className="text-text">{req.alliance}</span>
                      </div>
                      <div>
                        <span className="text-muted block text-xs">Requested role</span>
                        <Badge color="primary">{req.requestedRole}</Badge>
                      </div>
                      <div>
                        <span className="text-muted block text-xs">Submitted</span>
                        <span className="text-text">{req.submittedAt}</span>
                      </div>
                    </div>
                    {req.playerId && (
                      <p className="text-xs text-muted mt-2">Player ID: {req.playerId}</p>
                    )}
                    {req.notes && (
                      <p className="text-sm text-muted mt-2 bg-bg-secondary rounded-lg p-2 border border-border">
                        {req.notes}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 shrink-0">
                    <Button size="sm" onClick={() => handleApproveWithRole(req.id, req.requestedRole)}>
                      Approve
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleApproveWithRole(req.id, 'Member')}
                    >
                      Approve as Member
                    </Button>
                    <Button
                      size="sm"
                      variant="gold"
                      onClick={() => { setChangeRoleId(req.id); setSelectedRole(req.requestedRole) }}
                    >
                      Change Role
                    </Button>
                    <Button size="sm" variant="danger" onClick={() => rejectRequest(req.id)}>
                      Reject
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-8"><Disclaimer /></div>
      </div>

      <Modal
        open={!!changeRoleId}
        onClose={() => setChangeRoleId(null)}
        title="Approve with Different Role"
      >
        <p className="text-sm text-muted mb-4">
          Assign a verified role different from what was requested.
        </p>
        <select
          className="w-full bg-bg-secondary border border-border rounded-lg px-4 py-2.5 text-text text-sm mb-4"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value as Role)}
        >
          {['Member', 'Officer', 'Alliance Leader', 'Server Deputy', 'Server Steward'].map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        <div className="flex gap-2 justify-end">
          <Button variant="ghost" onClick={() => setChangeRoleId(null)}>Cancel</Button>
          <Button onClick={() => changeRoleId && handleApproveWithRole(changeRoleId, selectedRole)}>
            Approve as {selectedRole}
          </Button>
        </div>
      </Modal>
    </div>
  )
}
