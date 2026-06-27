import type { ButtonHTMLAttributes, ReactNode } from 'react'

const variants = {
  primary: 'bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/20',
  secondary: 'bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/30',
  ghost: 'bg-transparent hover:bg-surface text-muted hover:text-text',
  danger: 'bg-danger/20 hover:bg-danger/30 text-danger border border-danger/30',
  gold: 'bg-gold/20 hover:bg-gold/30 text-gold border border-gold/30',
  outline: 'bg-transparent border border-border hover:border-primary/50 text-text',
} as const

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
} as const

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function Card({
  children,
  className = '',
  onClick,
  hover = false,
}: {
  children: ReactNode
  className?: string
  onClick?: () => void
  hover?: boolean
}) {
  return (
    <div
      onClick={onClick}
      className={`bg-surface border border-border rounded-xl p-5 ${hover ? 'hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

const badgeColors = {
  primary: 'bg-primary/20 text-primary border-primary/30',
  secondary: 'bg-secondary/20 text-secondary border-secondary/30',
  success: 'bg-success/20 text-success border-success/30',
  warning: 'bg-warning/20 text-warning border-warning/30',
  danger: 'bg-danger/20 text-danger border-danger/30',
  gold: 'bg-gold/20 text-gold border-gold/30',
  muted: 'bg-border/50 text-muted border-border',
} as const

export function Badge({
  children,
  color = 'primary',
  className = '',
}: {
  children: ReactNode
  color?: keyof typeof badgeColors
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${badgeColors[color]} ${className}`}
    >
      {children}
    </span>
  )
}

export function Chip({
  children,
  active = false,
  onClick,
}: {
  children: ReactNode
  active?: boolean
  onClick?: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all cursor-pointer ${
        active
          ? 'bg-primary/20 border-primary/50 text-primary'
          : 'bg-surface border-border text-muted hover:border-primary/30 hover:text-text'
      }`}
    >
      {children}
    </button>
  )
}

export function ProgressBar({
  current,
  target,
  color = 'primary',
}: {
  current: number
  target: number
  color?: 'primary' | 'secondary' | 'gold' | 'success'
}) {
  const pct = Math.min(100, Math.round((current / target) * 100))
  const barColors = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    gold: 'bg-gold',
    success: 'bg-success',
  }
  return (
    <div className="w-full">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-muted">{current} / {target}</span>
        <span className="text-muted">{pct}%</span>
      </div>
      <div className="h-2.5 bg-bg-secondary rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${barColors[color]}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
}) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-surface border border-border rounded-2xl p-6 max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-text">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="text-muted hover:text-text text-xl cursor-pointer bg-transparent border-none"
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export function Input({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-sm text-muted mb-1.5 block">{label}</span>
      <input
        className="w-full bg-bg-secondary border border-border rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
        {...props}
      />
    </label>
  )
}

export function Select({
  label,
  children,
  ...props
}: { label: string; children: ReactNode } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="block">
      <span className="text-sm text-muted mb-1.5 block">{label}</span>
      <select
        className="w-full bg-bg-secondary border border-border rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all cursor-pointer"
        {...props}
      >
        {children}
      </select>
    </label>
  )
}

export function SectionHeader({
  title,
  subtitle,
  action,
}: {
  title: string
  subtitle?: string
  action?: ReactNode
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
      <div>
        <h2 className="text-xl font-semibold text-text">{title}</h2>
        {subtitle && <p className="text-sm text-muted mt-1">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}

export function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = { sm: 'text-lg', md: 'text-2xl', lg: 'text-3xl' }
  return (
    <div className={`flex items-center gap-2 font-bold ${sizes[size]}`}>
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm">
        FG
      </div>
      <span>
        Foryxo <span className="text-primary">Guilds</span>
      </span>
    </div>
  )
}

export function Disclaimer() {
  return (
    <p className="text-xs text-muted/70 italic">
      Fan-made tool — not affiliated with any game company. Not an official King&apos;s Choice product.
    </p>
  )
}
