import {
  Activity,
  BadgeCheck,
  BookOpenCheck,
  Building2,
  CalendarClock,
  ClipboardCheck,
  FileBarChart,
  FileClock,
  FileText,
  FolderOpen,
  LayoutDashboard,
  MonitorUp,
  Settings,
  ShieldCheck,
  Stethoscope,
  TrendingDown,
  TrendingUp,
  UsersRound
} from "lucide-react";

export const sidebarItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Launch Portal", href: "https://portal.eyesuites.com", icon: MonitorUp },
  { label: "Compliance Logs", href: "https://logs.eyesuites.com", icon: ClipboardCheck },
  { label: "Staff Training", href: "https://training.eyesuites.com", icon: BookOpenCheck },
  { label: "Op Notes", href: "https://opnotes.eyesuites.com", icon: FileText },
  { label: "Documents", href: "/dashboard", icon: FolderOpen },
  { label: "Reports", href: "/dashboard", icon: FileBarChart },
  { label: "Settings", href: "/dashboard", icon: Settings }
] as const;

export const kpis = [
  {
    label: "Launch Readiness",
    value: "86%",
    change: "+9% MoM",
    detail: "24 of 28 milestones complete",
    trend: "up",
    tone: "info",
    icon: MonitorUp
  },
  {
    label: "Compliance Status",
    value: "On Track",
    change: "2 due",
    detail: "Logs due this week",
    trend: "steady",
    tone: "success",
    icon: ShieldCheck
  },
  {
    label: "Training Completion",
    value: "74%",
    change: "12 complete",
    detail: "4 staff pending renewal",
    trend: "up",
    tone: "info",
    icon: UsersRound
  },
  {
    label: "Open Alerts",
    value: "4",
    change: "1 high",
    detail: "Clinical operations queue",
    trend: "down",
    tone: "warning",
    icon: Activity
  }
] as const;

export const modules = [
  {
    title: "Launch Portal",
    description: "Track OBS launch milestones, site readiness, equipment, and go-live tasks.",
    href: "https://portal.eyesuites.com",
    icon: MonitorUp,
    metric: "21 of 28 tasks complete",
    status: "In Progress",
    tone: "info"
  },
  {
    title: "Compliance Logs",
    description: "Review sterilization checks, controlled logs, quality records, and attestations.",
    href: "https://logs.eyesuites.com",
    icon: ClipboardCheck,
    metric: "98% current",
    status: "Current",
    tone: "success"
  },
  {
    title: "Staff Training",
    description: "Monitor required clinical modules, role-based competencies, and renewals.",
    href: "https://training.eyesuites.com",
    icon: BookOpenCheck,
    metric: "6 modules in progress",
    status: "Action Needed",
    tone: "warning"
  },
  {
    title: "Op Notes",
    description: "Access procedure notes and ophthalmic documentation workflows.",
    href: "https://opnotes.eyesuites.com",
    icon: FileClock,
    metric: "14 notes pending review",
    status: "Review Queue",
    tone: "info"
  }
] as const;

export const workspace = {
  client: "Premier Ophthalmology Center",
  workspace: "OBS launch workspace",
  location: "North Scottsdale Surgical Suite",
  tier: "Premium",
  launchDate: "Jun 17, 2026",
  owner: "Dr. Maya Patel",
  readiness: "86%",
  status: "Active",
  icon: Building2
} as const;

export const executiveReadiness = {
  title: "ACHC / OBS Readiness Score",
  score: "91",
  label: "Executive-ready",
  detail: "Strong survey posture across policies, training, logs, and emergency systems.",
  icon: BadgeCheck,
  factors: [
    { label: "Critical standards", value: "96%" },
    { label: "Evidence binder", value: "88%" },
    { label: "Mock survey", value: "Jun 03" }
  ]
} as const;

export const goLiveCountdown = {
  title: "Go-Live Countdown",
  days: "24",
  label: "days remaining",
  date: "Jun 17, 2026",
  detail: "Final walkthrough and leadership attestation due before launch lock.",
  icon: CalendarClock
} as const;

export const surveyReadiness = [
  { label: "Policies", value: "94%", detail: "2 pending sign-offs", tone: "success", icon: FileText },
  { label: "Staff Training", value: "74%", detail: "4 renewals open", tone: "warning", icon: BookOpenCheck },
  { label: "Logs", value: "98%", detail: "Current through May", tone: "success", icon: ClipboardCheck },
  { label: "Emergency Preparedness", value: "87%", detail: "Cart attestation due", tone: "warning", icon: ShieldCheck },
  { label: "Sterile Processing", value: "91%", detail: "Cycle records complete", tone: "success", icon: Activity }
] as const;

export const readinessTimeline = [
  {
    phase: "Intake & Scope",
    date: "May 06",
    status: "Complete",
    detail: "Client scope, suite profile, and leadership contacts confirmed.",
    tone: "success"
  },
  {
    phase: "Policy Binder",
    date: "May 22",
    status: "In Review",
    detail: "Medication handling and emergency transfer policies need final sign-off.",
    tone: "warning"
  },
  {
    phase: "Mock Survey",
    date: "Jun 03",
    status: "Scheduled",
    detail: "ACHC-style readiness review with evidence binder walkthrough.",
    tone: "info"
  },
  {
    phase: "Final Walkthrough",
    date: "Jun 12",
    status: "Upcoming",
    detail: "Facilities, logs, staff competencies, and launch controls review.",
    tone: "info"
  },
  {
    phase: "Go-Live",
    date: "Jun 17",
    status: "Target",
    detail: "OBS launch support and day-one compliance command center monitoring.",
    tone: "success"
  }
] as const;

export const complianceItems = [
  {
    item: "Emergency cart weekly attestation",
    domain: "Emergency Preparedness",
    owner: "Clinical Lead",
    due: "Today",
    priority: "High",
    status: "Open",
    tone: "warning"
  },
  {
    item: "Medication handling policy v3.2 approval",
    domain: "Policies",
    owner: "Dr. Patel",
    due: "May 28",
    priority: "Medium",
    status: "In Review",
    tone: "info"
  },
  {
    item: "Laser safety renewal cohort",
    domain: "Staff Training",
    owner: "Training Admin",
    due: "Jun 01",
    priority: "Medium",
    status: "Assigned",
    tone: "warning"
  },
  {
    item: "Sterilizer biological indicator log audit",
    domain: "Sterile Processing",
    owner: "OBS Manager",
    due: "Jun 04",
    priority: "Low",
    status: "On Track",
    tone: "success"
  }
] as const;

export const trendIcons = {
  up: TrendingUp,
  down: TrendingDown,
  steady: Activity
} as const;

export const alerts = [
  {
    title: "Emergency cart check due",
    detail: "North suite needs weekly attestation by 4 PM.",
    time: "22 min ago",
    tone: "warning",
    label: "Due today"
  },
  {
    title: "Laser safety module assigned",
    detail: "Three clinical staff added to May cohort.",
    time: "1 hr ago",
    tone: "info",
    label: "Training"
  },
  {
    title: "Policy binder updated",
    detail: "Medication handling policy v3.2 is ready.",
    time: "Yesterday",
    tone: "success",
    label: "Approved"
  }
] as const;

export const activity = [
  { label: "Cataract pathway checklist approved", user: "Dr. Patel", time: "9:42 AM", icon: Stethoscope },
  { label: "Sterilizer cycle uploaded", user: "Clinical Lead", time: "8:15 AM", icon: ClipboardCheck },
  { label: "Monthly OBS report generated", user: "Operations", time: "Yesterday", icon: FileBarChart }
] as const;
