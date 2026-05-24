import Link from "next/link";
import { ArrowUpRight, Eye, ShieldCheck } from "lucide-react";

import { sidebarItems } from "@/lib/dashboard-data";
import { cn } from "@/lib/utils";

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-72 shrink-0 border-r border-[#14243a] bg-[#041225] px-4 py-5 text-white shadow-[18px_0_42px_rgba(15,23,42,0.14)] md:block">
      <Link href="/dashboard" className="mb-7 flex items-center gap-3 rounded-xl px-2 py-1.5">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#041225] shadow-sm ring-1 ring-white/15">
          <Eye className="h-5 w-5" strokeWidth={2.35} />
        </span>
        <span className="min-w-0">
          <span className="block text-[17px] font-semibold tracking-normal">Eye Suites</span>
          <span className="block text-xs font-medium text-sky-100/70">OBS executive command</span>
        </span>
      </Link>

      <div className="mb-5 rounded-2xl border border-white/10 bg-white/[0.065] p-3.5 shadow-inner shadow-white/[0.02]">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.08em] text-sky-100/70">
          <ShieldCheck className="h-3.5 w-3.5" />
          Compliance
        </div>
        <p className="mt-2 text-sm font-semibold">Launch controls active</p>
        <p className="mt-1 text-xs leading-5 text-slate-300">Premium workspace monitored across readiness, logs, and training.</p>
      </div>

      <nav className="space-y-1.5">
        {sidebarItems.map((item) => {
          const isActive = item.label === "Dashboard";
          const external = item.href.startsWith("https://");
          return (
            <Link
              key={item.label}
              href={item.href}
              target={external ? "_blank" : undefined}
              className={cn(
                "group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-white/[0.09] hover:text-white hover:shadow-sm",
                isActive && "bg-white text-[#041225] shadow-[0_12px_28px_rgba(0,0,0,0.16)]"
              )}
            >
              <span className="flex items-center gap-3">
                <item.icon className="h-4 w-4 shrink-0" strokeWidth={2} />
                {item.label}
              </span>
              {external ? <ArrowUpRight className="h-3.5 w-3.5 opacity-55 transition-opacity group-hover:opacity-100" /> : null}
            </Link>
          );
        })}
      </nav>

      <div className="mt-8 border-t border-white/10 pt-5">
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-sky-100/60">Environment</p>
        <div className="mt-3 flex items-center justify-between rounded-xl bg-white/[0.06] px-3 py-2.5 text-sm">
          <span className="text-slate-200">Production</span>
          <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-xs font-semibold text-emerald-200 ring-1 ring-emerald-300/20">
            Secure
          </span>
        </div>
      </div>
    </aside>
  );
}
