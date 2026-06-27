import type {
  Alliance,
  Alert,
  AuditEntry,
  Communication,
  Event,
  JoinRequest,
  MvpRecord,
  Player,
  Relation,
  Rule,
  Server,
} from '../types'

export const servers: Server[] = [
  { id: 's145', name: 'S-145', steward: 'LordAshford', allianceCount: 4 },
  { id: 's146', name: 'S-146', steward: 'QueenElena', allianceCount: 3 },
  { id: 's200', name: 'S-200', steward: 'MarshalKai', allianceCount: 5 },
  { id: 's201', name: 'S-201', steward: 'DukeTheron', allianceCount: 4 },
  { id: 's312', name: 'S-312', steward: 'StewardMira', allianceCount: 6 },
]

export const alliances: Alliance[] = [
  { id: 'dc', name: 'Dragon Crown', server: 'S-145', memberCount: 42, leader: 'LordAshford' },
  { id: 'rd', name: 'Royal Dawn', server: 'S-145', memberCount: 38, leader: 'QueenElena' },
  { id: 'nc', name: 'Night Court', server: 'S-145', memberCount: 35, leader: 'ShadowVex' },
  { id: 'it', name: 'Iron Throne', server: 'S-145', memberCount: 40, leader: 'IronWolf' },
  { id: 'sf', name: 'Silver Flame', server: 'S-146', memberCount: 33, leader: 'FlameKeeper' },
]

export const roleOptions = [
  'Member',
  'Officer',
  'Alliance Leader',
  'Server Deputy',
  'Server Steward',
] as const

export const players: Player[] = [
  {
    id: 'p1',
    name: 'LordAshford',
    playerId: 'KC-88421',
    server: 'S-145',
    alliance: 'Dragon Crown',
    role: 'Alliance Leader',
    status: 'active',
    activeHours: 'Evenings (UTC+3)',
    currentTitle: 'Duke',
    pastTitles: ['Earl', 'Viscount'],
    clothing: ['Royal Mantle', 'Crown of Valor'],
    eventWins: 12,
    mvpCount: 8,
    joinDate: '2024-03-15',
    notes: 'Primary event coordinator',
  },
  {
    id: 'p2',
    name: 'Yasi',
    playerId: 'KC-99201',
    server: 'S-145',
    alliance: 'Dragon Crown',
    role: 'Officer',
    status: 'active',
    activeHours: 'Flexible',
    currentTitle: 'Earl',
    pastTitles: ['Baron', 'Viscount'],
    clothing: ['Noble Attire'],
    eventWins: 7,
    mvpCount: 5,
    joinDate: '2024-08-20',
  },
  {
    id: 'p3',
    name: 'ShadowVex',
    server: 'S-145',
    alliance: 'Night Court',
    role: 'Alliance Leader',
    status: 'active',
    activeHours: 'Late night',
    currentTitle: 'Viscount',
    pastTitles: ['Baron'],
    clothing: ['Shadow Cloak'],
    eventWins: 9,
    mvpCount: 6,
    joinDate: '2024-01-10',
  },
  {
    id: 'p4',
    name: 'QueenElena',
    server: 'S-145',
    alliance: 'Royal Dawn',
    role: 'Alliance Leader',
    status: 'vacation',
    activeHours: 'Mornings',
    currentTitle: 'King',
    pastTitles: ['Duke', 'Earl'],
    clothing: ['Imperial Robes', 'Golden Scepter'],
    eventWins: 15,
    mvpCount: 11,
    joinDate: '2023-11-05',
    notes: 'On vacation until June 30',
  },
  {
    id: 'p5',
    name: 'IronWolf',
    server: 'S-145',
    alliance: 'Iron Throne',
    role: 'Alliance Leader',
    status: 'active',
    activeHours: 'Afternoons',
    pastTitles: ['Baron'],
    clothing: [],
    eventWins: 4,
    mvpCount: 2,
    joinDate: '2024-06-01',
  },
  {
    id: 'p6',
    name: 'MiraK',
    server: 'S-145',
    alliance: 'Dragon Crown',
    role: 'Member',
    status: 'inactive',
    activeHours: 'Weekends',
    pastTitles: [],
    clothing: [],
    eventWins: 1,
    mvpCount: 0,
    joinDate: '2025-01-12',
    notes: 'Inactive 2 weeks',
  },
]

export const events: Event[] = [
  {
    id: 'e1',
    name: 'Alliance Chess Championship',
    type: 'Chess',
    status: 'upcoming',
    date: '2025-07-02',
    time: '20:00 UTC',
    participants: ['LordAshford', 'Yasi', 'MiraK'],
    signedUp: ['LordAshford', 'Yasi'],
    strategyNotes: 'Focus on mid-board control. Yasi leads negotiation if needed.',
  },
  {
    id: 'e2',
    name: 'Server Dragon Hunt',
    type: 'Server event',
    status: 'upcoming',
    date: '2025-07-05',
    time: '18:00 UTC',
    participants: ['Dragon Crown', 'Royal Dawn', 'Night Court', 'Iron Throne'],
    signedUp: ['LordAshford', 'ShadowVex', 'QueenElena'],
    strategyNotes: 'Cross-alliance coordination required.',
  },
  {
    id: 'e3',
    name: 'Cross-Server Negotiation',
    type: 'Cross-server event',
    status: 'active',
    date: '2025-06-28',
    time: '19:00 UTC',
    participants: ['S-145', 'S-146'],
    signedUp: ['LordAshford', 'FlameKeeper'],
    strategyNotes: 'Diplomatic approach — avoid conflict escalation.',
  },
  {
    id: 'e4',
    name: 'Alliance Tournament',
    type: 'Alliance event',
    status: 'completed',
    date: '2025-06-20',
    time: '20:00 UTC',
    participants: ['LordAshford', 'Yasi', 'MiraK', 'IronWolf'],
    signedUp: ['LordAshford', 'Yasi', 'MiraK', 'IronWolf'],
    result: 'Dragon Crown placed 1st',
    mvp: 'Yasi',
    titleReward: 'Earl',
    clothingReward: 'Noble Attire',
  },
  {
    id: 'e5',
    name: 'Royal Banquet',
    type: 'Negotiation',
    status: 'completed',
    date: '2025-06-15',
    time: '21:00 UTC',
    participants: ['QueenElena', 'LordAshford'],
    signedUp: ['QueenElena', 'LordAshford'],
    result: 'Treaty signed with Royal Dawn',
    mvp: 'QueenElena',
    titleReward: 'King',
  },
]

export const mvpRecords: MvpRecord[] = [
  {
    id: 'm1',
    eventName: 'Alliance Tournament',
    player: 'Yasi',
    title: 'Earl',
    clothing: 'Noble Attire',
    startDate: '2025-06-20',
    endDate: '2025-07-20',
    rotationNote: 'Next in rotation after Baron holders',
    hadRecentTitle: false,
  },
  {
    id: 'm2',
    eventName: 'Royal Banquet',
    player: 'QueenElena',
    title: 'King',
    startDate: '2025-06-15',
    endDate: '2025-07-15',
    hadRecentTitle: true,
  },
  {
    id: 'm3',
    eventName: 'Winter Siege',
    player: 'LordAshford',
    title: 'Duke',
    clothing: 'Royal Mantle',
    startDate: '2025-05-10',
    endDate: '2025-06-10',
    rotationNote: 'Title expired — eligible for re-rotation',
    hadRecentTitle: false,
  },
  {
    id: 'm4',
    eventName: 'Chess Masters',
    player: 'ShadowVex',
    title: 'Viscount',
    startDate: '2025-04-22',
    endDate: '2025-05-22',
    hadRecentTitle: false,
  },
]

export const activeTitleHolders = [
  { player: 'QueenElena', title: 'King' as const, expires: '2025-07-15' },
  { player: 'LordAshford', title: 'Duke' as const, expires: 'Expired' },
  { player: 'Yasi', title: 'Earl' as const, expires: '2025-07-20' },
  { player: 'ShadowVex', title: 'Viscount' as const, expires: '2025-05-22' },
]

export const rotationQueue = ['MiraK', 'IronWolf', 'FlameKeeper', 'LordAshford']

export const rules: Rule[] = [
  {
    id: 'r1',
    title: 'Do not stack titles unfairly',
    description: 'Players who held a title within 30 days must yield to rotation queue.',
    status: 'active',
  },
  {
    id: 'r2',
    title: 'Follow agreed rotation order',
    description: 'Title assignments follow the published rotation list maintained by Server Steward.',
    status: 'active',
  },
  {
    id: 'r3',
    title: 'Server council approval for rule changes',
    description: 'Any rule modification requires majority vote from server council.',
    status: 'active',
  },
  {
    id: 'r4',
    title: 'Same-server respect during major events',
    description: 'Alliances must coordinate during server-wide events. No sabotage.',
    status: 'active',
  },
  {
    id: 'r5',
    title: 'Cross-alliance communication protocol',
    description: 'Diplomatic messages must be logged in the relations board.',
    status: 'draft',
  },
  {
    id: 'r6',
    title: 'Legacy event scoring (2024)',
    description: 'Archived scoring rules from previous season.',
    status: 'archived',
  },
]

export const relations: Relation[] = [
  {
    id: 'rel1',
    name: 'Royal Dawn',
    type: 'internal',
    server: 'S-145',
    status: 'alliance partner',
    notes: 'Event coordination partner for server events',
  },
  {
    id: 'rel2',
    name: 'Night Court',
    type: 'internal',
    server: 'S-145',
    status: 'friendly',
    notes: 'Regular chess event participants',
  },
  {
    id: 'rel3',
    name: 'Iron Throne',
    type: 'internal',
    server: 'S-145',
    status: 'neutral',
    notes: 'Limited interaction — new alliance',
  },
  {
    id: 'rel4',
    name: 'Silver Flame (S-146)',
    type: 'external',
    server: 'S-146',
    status: 'event coordination',
    notes: 'Cross-server negotiation partners',
  },
  {
    id: 'rel5',
    name: 'Crimson Legion (S-200)',
    type: 'external',
    server: 'S-200',
    status: 'conflict',
    notes: 'Territorial dispute — steward mediation ongoing',
  },
]

export const communications: Communication[] = [
  {
    id: 'c1',
    from: 'LordAshford (Dragon Crown)',
    to: 'QueenElena (Royal Dawn)',
    topic: 'Server Dragon Hunt coordination',
    date: '2025-06-26',
    status: 'Agreed',
  },
  {
    id: 'c2',
    from: 'ShadowVex (Night Court)',
    to: 'LordAshford (Dragon Crown)',
    topic: 'Chess event scheduling',
    date: '2025-06-24',
    status: 'Pending response',
  },
  {
    id: 'c3',
    from: 'Steward (S-145)',
    to: 'FlameKeeper (S-146)',
    topic: 'Cross-server treaty draft',
    date: '2025-06-22',
    status: 'Under review',
  },
]

export const alerts: Alert[] = [
  {
    id: 'a1',
    title: 'Alliance event begins in 30 minutes',
    message: 'Alliance Chess Championship starts at 20:00 UTC. Confirm your participation.',
    type: 'reminder',
    time: '30 min',
  },
  {
    id: 'a2',
    title: 'Need immediate participation',
    message: 'Cross-Server Negotiation is active. Officers requested on standby.',
    type: 'urgent',
    time: 'Now',
  },
  {
    id: 'a3',
    title: 'Server rule update pending review',
    message: 'Cross-alliance communication protocol draft awaits council vote.',
    type: 'info',
    time: '2 days ago',
  },
  {
    id: 'a4',
    title: 'Title rotation warning',
    message: 'QueenElena holds King title expiring in 17 days. Rotation queue: MiraK next.',
    type: 'reminder',
    time: '1 day ago',
  },
]

export const auditLog: AuditEntry[] = [
  { id: 'al1', action: 'Rule updated: rotation order revised', actor: 'Server Steward', timestamp: '2025-06-27 14:30' },
  { id: 'al2', action: 'Player approved: IronWolf as Member', actor: 'Alliance Leader', timestamp: '2025-06-26 09:15' },
  { id: 'al3', action: 'Title assigned: Earl to Yasi after Alliance Tournament', actor: 'LordAshford', timestamp: '2025-06-20 22:45' },
  { id: 'al4', action: 'Rotation updated: MiraK moved to front of queue', actor: 'Server Steward', timestamp: '2025-06-18 11:00' },
  { id: 'al5', action: 'Deputy added: Yasi as Officer', actor: 'LordAshford', timestamp: '2025-06-10 16:20' },
  { id: 'al6', action: 'Join request rejected: unverified player ID', actor: 'LordAshford', timestamp: '2025-06-08 08:30' },
]

export const pendingRequests: JoinRequest[] = [
  {
    id: 'jr1',
    playerName: 'NewPlayer42',
    playerId: 'KC-55102',
    server: 'S-145',
    alliance: 'Dragon Crown',
    requestedRole: 'Officer',
    submittedAt: '2025-06-27 10:30',
    notes: 'Experienced officer from S-146, references available',
    status: 'pending',
  },
  {
    id: 'jr2',
    playerName: 'RookieKnight',
    server: 'S-145',
    alliance: 'Dragon Crown',
    requestedRole: 'Member',
    submittedAt: '2025-06-26 18:45',
    notes: 'New to server, needs verification',
    status: 'pending',
  },
  {
    id: 'jr3',
    playerName: 'VeteranSage',
    playerId: 'KC-33019',
    server: 'S-145',
    alliance: 'Night Court',
    requestedRole: 'Alliance Leader',
    submittedAt: '2025-06-25 14:00',
    notes: 'Claiming leadership transfer from inactive leader',
    status: 'pending verification',
  },
]

export const guideTemplates = [
  { id: 'gt1', title: 'Event Reminder', preview: 'Reminder: [Event Name] begins at [Time]. Please confirm attendance.' },
  { id: 'gt2', title: 'Welcome Message', preview: 'Welcome to [Alliance]! Please read server rules and introduce yourself.' },
  { id: 'gt3', title: 'Warning Message', preview: 'Please note: [Issue]. Further violations may result in role review.' },
  { id: 'gt4', title: 'Diplomacy Message', preview: 'Greetings from [Alliance]. We propose coordination for [Event].' },
  { id: 'gt5', title: 'Need Help Now', preview: 'URGENT: Immediate participation needed for [Event/Situation]. Respond ASAP.' },
]

export const allianceFund = {
  target: 50,
  current: 32,
  supporters: ['Yasi', 'MiraK', 'LordAshford', 'ShadowVex'],
}

export const serverFund = {
  target: 100,
  current: 67,
  supporters: ['LordAshford', 'QueenElena', 'StewardMira', 'IronWolf', 'FlameKeeper'],
}

export const serverCouncil = ['LordAshford', 'QueenElena', 'ShadowVex', 'IronWolf']
export const deputyStewards = ['MarshalKai', 'DukeTheron']

export const featureCards = [
  { title: 'Member Management', desc: 'Track roles, status, and activity across your alliance.', icon: '👥' },
  { title: 'Event Planning', desc: 'Schedule, sign up, and coordinate alliance and server events.', icon: '📅' },
  { title: 'Event MVP Tracking', desc: 'Record MVPs per event with full transparency.', icon: '🏆' },
  { title: 'Title & Clothing History', desc: 'Track who earned what, when, and rotation eligibility.', icon: '👑' },
  { title: 'Server Rules & Rotations', desc: 'Shared rules, rotation orders, and fairness enforcement.', icon: '📜' },
  { title: 'Cross-Alliance Communication', desc: 'Log diplomacy and coordinate between alliances and servers.', icon: '🤝' },
  { title: 'Urgent Alerts', desc: 'Send time-sensitive alerts when immediate action is needed.', icon: '🚨' },
  { title: 'Approval Workflows', desc: 'Leaders verify roles and memberships — no unofficial API needed.', icon: '✅' },
  { title: 'Shared Alliance / Server Funding', desc: 'Community-funded workspace — fair support, not leader-only burden.', icon: '💎' },
]

export const howItWorks = [
  { step: 1, title: 'Choose game', desc: 'Select your game community workspace' },
  { step: 2, title: 'Join your server', desc: 'Pick or create a server workspace' },
  { step: 3, title: 'Apply to your alliance', desc: 'Request your role with in-game details' },
  { step: 4, title: 'Get approved', desc: 'Leaders verify and assign your role' },
  { step: 5, title: 'Manage everything', desc: 'Events, titles, rules, and coordination in one place' },
]

export const comingSoonGames = [
  { name: 'Rise of Kingdoms', genre: 'Strategy' },
  { name: 'Game of Sultans', genre: 'Simulation' },
  { name: 'Evony', genre: 'Strategy' },
]
