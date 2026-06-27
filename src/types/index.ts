export type Role =
  | 'Member'
  | 'Officer'
  | 'Alliance Leader'
  | 'Server Deputy'
  | 'Server Steward'

export type PlayerStatus = 'active' | 'inactive' | 'vacation'

export type EventStatus = 'upcoming' | 'active' | 'completed'

export type RelationStatus =
  | 'friendly'
  | 'neutral'
  | 'conflict'
  | 'alliance partner'
  | 'event coordination'

export type RuleStatus = 'active' | 'draft' | 'archived'

export type TitleType = 'Baron' | 'Viscount' | 'Earl' | 'Duke' | 'King'

export interface Player {
  id: string
  name: string
  playerId?: string
  server: string
  alliance: string
  role: Role
  status: PlayerStatus
  activeHours: string
  currentTitle?: TitleType
  pastTitles: TitleType[]
  clothing: string[]
  eventWins: number
  mvpCount: number
  joinDate: string
  notes?: string
}

export interface Alliance {
  id: string
  name: string
  server: string
  memberCount: number
  leader: string
}

export interface Server {
  id: string
  name: string
  steward: string
  allianceCount: number
}

export interface Event {
  id: string
  name: string
  type: string
  status: EventStatus
  date: string
  time: string
  participants: string[]
  signedUp: string[]
  strategyNotes?: string
  result?: string
  mvp?: string
  titleReward?: TitleType
  clothingReward?: string
}

export interface MvpRecord {
  id: string
  eventName: string
  player: string
  title: TitleType
  clothing?: string
  startDate: string
  endDate: string
  rotationNote?: string
  hadRecentTitle: boolean
}

export interface Rule {
  id: string
  title: string
  description: string
  status: RuleStatus
}

export interface Relation {
  id: string
  name: string
  type: 'internal' | 'external'
  server: string
  status: RelationStatus
  notes: string
}

export interface Communication {
  id: string
  from: string
  to: string
  topic: string
  date: string
  status: string
}

export interface Alert {
  id: string
  title: string
  message: string
  type: 'urgent' | 'reminder' | 'info'
  time: string
}

export interface AuditEntry {
  id: string
  action: string
  actor: string
  timestamp: string
}

export interface JoinRequest {
  id: string
  playerName: string
  playerId?: string
  server: string
  alliance: string
  requestedRole: Role
  submittedAt: string
  notes?: string
  status: 'pending' | 'approved' | 'rejected' | 'pending verification'
}

export interface UserSession {
  name: string
  playerId?: string
  server: string
  alliance: string
  role: Role
  game: string
}

export type DashboardTab =
  | 'overview'
  | 'players'
  | 'alliance'
  | 'server'
  | 'events'
  | 'mvp'
  | 'rules'
  | 'relations'
  | 'alerts'
  | 'funding'
  | 'roles'
  | 'audit'
