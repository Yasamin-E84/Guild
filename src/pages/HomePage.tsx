import { Link } from 'react-router-dom'
import { featureCards, howItWorks } from '../data/mockData'
import { Button, Card, Disclaimer, Logo } from '../components/ui'

export default function HomePage() {
  return (
    <div className="min-h-svh">
      {/* Nav */}
      <nav className="border-b border-border bg-bg-secondary/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <div className="flex gap-3">
            <Link to="/games">
              <Button variant="ghost" size="sm">Choose Game</Button>
            </Link>
            <a href="#features">
              <Button variant="outline" size="sm">See Features</Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 text-center">
          <Badge />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight mt-6 mb-6">
            Manage your game community{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              with clarity
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-4">
            A server and alliance management platform for game communities.
          </p>
          <p className="text-sm text-muted/80 max-w-3xl mx-auto mb-10">
            Built for communities that need more than chat: member roles, event tracking, MVPs, titles,
            reminders, rules, and coordination between alliances and servers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/games">
              <Button size="lg">Choose Your Game</Button>
            </Link>
            <a href="#features">
              <Button variant="outline" size="lg">See Features</Button>
            </a>
          </div>
          <p className="text-xs text-muted mt-8">
            Currently supporting King&apos;s Choice in this prototype.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Everything your community needs</h2>
        <p className="text-muted text-center mb-10 max-w-xl mx-auto">
          Structured management for alliances, servers, events, and fairness — not just another chat app.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featureCards.map((f) => (
            <Card key={f.title} hover className="text-left">
              <span className="text-2xl mb-3 block">{f.icon}</span>
              <h3 className="font-semibold text-text mb-1.5">{f.title}</h3>
              <p className="text-sm text-muted">{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-bg-secondary border-y border-border py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {howItWorks.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 text-primary font-bold flex items-center justify-center mx-auto mb-3">
                  {s.step}
                </div>
                <h3 className="font-semibold text-text text-sm mb-1">{s.title}</h3>
                <p className="text-xs text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-left border-primary/20">
            <h3 className="font-semibold text-primary mb-2">For Alliance Leaders</h3>
            <p className="text-sm text-muted">
              Manage members, approve roles, track events and MVPs, and keep title rotations fair.
            </p>
          </Card>
          <Card className="text-left border-secondary/20">
            <h3 className="font-semibold text-secondary mb-2">For Server Stewards</h3>
            <p className="text-sm text-muted">
              Coordinate across alliances, enforce server rules, manage rotations, and handle diplomacy.
            </p>
          </Card>
          <Card className="text-left border-gold/20">
            <h3 className="font-semibold text-gold mb-2">For Members</h3>
            <p className="text-sm text-muted">
              See upcoming events, track your titles and rewards, and stay informed with alerts and reminders.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-16 text-center">
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 py-10">
          <h2 className="text-2xl font-bold mb-3">Ready to organize your community?</h2>
          <p className="text-muted mb-6 max-w-md mx-auto">
            Start with King&apos;s Choice and see how structured management changes everything.
          </p>
          <Link to="/games">
            <Button size="lg">Get Started</Button>
          </Link>
        </Card>
        <div className="mt-8">
          <Disclaimer />
        </div>
      </section>
    </div>
  )
}

function Badge() {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/15 text-primary border border-primary/25">
      Fan-made community tool
    </span>
  )
}
