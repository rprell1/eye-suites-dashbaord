import {
  Activity,
  BookOpenCheck,
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
    change: "+9% this month",
    tone: "info",
    icon: MonitorUp
  },
  {
    label: "Compliance Status",
    value: "On Track",
    change: "2 logs due this week",
    tone: "success",
    icon: ShieldCheck
  },
  {
    label: "Training Completion",
    value: "74%",
    change: "12 staff complete",
    tone: "info",
    icon: UsersRound
  },
  {
    label: "Open Alerts",
    value: "4",
    change: "1 high priority",
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
    metric: "21 of 28 tasks complete"
  },
  {
    title: "Compliance Logs",
    description: "Review sterilization checks, controlled logs, quality records, and attestations.",
    href: "https://logs.eyesuites.com",
    icon: ClipboardCheck,
    metric: "98% current"
  },
  {
    title: "Staff Training",
    description: "Monitor required clinical modules, role-based competencies, and renewals.",
    href: "https://training.eyesuites.com",
    icon: BookOpenCheck,
    metric: "6 modules in progress"
  },
  {
    title: "Op Notes",
    description: "Access procedure notes and ophthalmic documentation workflows.",
    href: "https://opnotes.eyesuites.com",
    icon: FileClock,
    metric: "14 notes pending review"
  }
] as const;

export const alerts = [
  {
    title: "Emergency cart check due",
    detail: "North suite needs weekly attestation by 4 PM.",
    time: "22 min ago",
    tone: "warning"
  },
  {
    title: "Laser safety module assigned",
    detail: "Three clinical staff added to May cohort.",
    time: "1 hr ago",
    tone: "info"
  },
  {
    title: "Policy binder updated",
    detail: "Medication handling policy v3.2 is ready.",
    time: "Yesterday",
    tone: "success"
  }
] as const;

export const activity = [
  { label: "Cataract pathway checklist approved", user: "Dr. Patel", time: "9:42 AM", icon: Stethoscope },
  { label: "Sterilizer cycle uploaded", user: "Clinical Lead", time: "8:15 AM", icon: ClipboardCheck },
  { label: "Monthly OBS report generated", user: "Operations", time: "Yesterday", icon: FileBarChart }
] as const;
