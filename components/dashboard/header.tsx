import { Bell, CalendarDays, ChevronDown, Search, ShieldCheck, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200/80 bg-slate-50/92 px-5 py-3.5 backdrop-blur md:px-6">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <button className="flex w-full min-w-0 items-center gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-left shadow-sm transition-all hover:border-sky-200 hover:shadow-md sm:w-[300px]">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-700 ring-1 ring-sky-100">
              <ShieldCheck className="h-[18px] w-[18px]" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold text-slate-950">Premier Ophthalmology Center</span>
              <span className="block truncate text-xs text-slate-500">Premium OBS launch workspace</span>
            </span>
            <ChevronDown className="h-4 w-4 shrink-0 text-slate-400" />
          </button>
          <div className="hidden border-l border-slate-200 pl-3 lg:block">
            <h1 className="text-xl font-semibold tracking-normal text-slate-950">Command Center</h1>
            <p className="text-xs font-medium text-slate-500">Ophthalmic OBS compliance operations</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="flex h-10 w-full items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-500 shadow-sm transition-colors hover:border-sky-200 sm:w-80">
            <Search className="h-4 w-4 shrink-0 text-slate-400" />
            <span className="truncate">Search logs, staff, documents</span>
          </div>
          <Button variant="outline" className="h-10 gap-2 rounded-xl bg-white px-3.5 text-slate-700 shadow-sm">
            <CalendarDays className="h-4 w-4" />
            May 2026
          </Button>
          <Button size="icon" variant="outline" className="h-10 w-10 rounded-xl bg-white shadow-sm" aria-label="Notifications">
            <Bell className="h-4 w-4" />
          </Button>
          <button className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-2.5 text-left shadow-sm transition-all hover:border-sky-200 hover:shadow-md">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#07182f] text-white">
              <UserRound className="h-4 w-4" />
            </span>
            <span className="hidden min-w-0 sm:block">
              <span className="block text-xs font-semibold text-slate-950">M. Patel</span>
              <span className="block text-[11px] text-slate-500">Admin</span>
            </span>
            <ChevronDown className="hidden h-3.5 w-3.5 text-slate-400 sm:block" />
          </button>
        </div>
      </div>
    </header>
  );
}
