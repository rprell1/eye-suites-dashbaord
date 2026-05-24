import { Bell, CalendarDays, Search, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-background/92 px-5 py-4 backdrop-blur md:px-7">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-sky-700">
            <ShieldCheck className="h-4 w-4" />
            Verified clinical workspace
          </div>
          <h1 className="mt-1 text-2xl font-semibold tracking-normal text-slate-950">Dashboard</h1>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 min-w-72 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-500 shadow-sm">
            <Search className="h-4 w-4" />
            <span>Search clients, logs, training</span>
          </div>
          <Button variant="outline" className="gap-2 bg-white">
            <CalendarDays className="h-4 w-4" />
            May 2026
          </Button>
          <Button size="icon" variant="outline" className="bg-white" aria-label="Notifications">
            <Bell className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
