import { Link } from 'react-router-dom'
import { comingSoonGames } from '../data/mockData'
import { Badge, Button, Card, Disclaimer, Logo } from '../components/ui'

export default function GameSelection() {
  return (
    <div className="min-h-svh">
      <nav className="border-b border-border bg-bg-secondary/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/"><Logo size="sm" /></Link>
          <Link to="/"><Button variant="ghost" size="sm">← Back</Button></Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-2">Choose Your Game</h1>
        <p className="text-muted text-center mb-10">
          Select a game community to set up or join a server workspace.
        </p>

        <div className="grid gap-4 max-w-lg mx-auto">
          <Link to="/kings-choice/setup">
            <Card hover className="border-primary/30 bg-gradient-to-r from-primary/5 to-transparent">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/30 to-primary/30 flex items-center justify-center text-2xl shrink-0">
                  👑
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-text text-lg">King&apos;s Choice</h3>
                    <Badge color="success">Available</Badge>
                  </div>
                  <p className="text-sm text-muted">
                    Alliance events, titles, chess, negotiations, and server coordination.
                  </p>
                </div>
                <span className="text-primary text-xl">→</span>
              </div>
            </Card>
          </Link>

          {comingSoonGames.map((g) => (
            <Card key={g.name} className="opacity-50 cursor-not-allowed">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-border/50 flex items-center justify-center text-2xl shrink-0">
                  🎮
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-muted text-lg">{g.name}</h3>
                    <Badge color="muted">Coming soon</Badge>
                  </div>
                  <p className="text-sm text-muted/60">{g.genre}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-xs text-muted text-center mt-10 max-w-md mx-auto">
          More games will be supported in the future. The platform is designed to work across fantasy,
          strategy, and competitive social games.
        </p>
        <div className="text-center mt-4"><Disclaimer /></div>
      </div>
    </div>
  )
}
