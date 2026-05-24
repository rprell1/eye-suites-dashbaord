import { CalendarDays, MapPin, ShieldCheck, UserRound } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { workspace } from "@/lib/dashboard-data";

const workspaceDetails = [
  { label: "Target launch", value: workspace.launchDate, icon: CalendarDays },
  { label: "Clinical owner", value: workspace.owner, icon: UserRound },
  { label: "Suite location", value: workspace.location, icon: MapPin }
] as const;

export function ClientWorkspaceCard() {
  return (
    <Card className="overflow-hidden border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <CardContent className="p-0">
        <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_290px]">
          <div className="p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex min-w-0 gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#07182f] text-white">
                  <workspace.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold text-sky-700">{workspace.client}</p>
                    <Badge variant="success" className="rounded-md px-2 py-0.5 text-[11px] font-semibold">
                      {workspace.status}
                    </Badge>
                  </div>
                  <h2 className="mt-1 text-xl font-semibold tracking-normal text-slate-950">{workspace.workspace}</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                    Centralized readiness, compliance, training, and documentation oversight for ophthalmic office-based surgery operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-2.5 2xl:grid-cols-3">
              {workspaceDetails.map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5">
                  <item.icon className="h-4 w-4 shrink-0 text-slate-500" />
                  <div className="min-w-0">
                    <p className="truncate text-xs font-medium text-slate-500">{item.label}</p>
                    <p className="text-sm font-semibold leading-5 text-slate-950">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-200 bg-slate-50 p-5 lg:border-l lg:border-t-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Launch readiness</p>
                <p className="mt-2 text-3xl font-semibold tracking-normal text-slate-950">{workspace.readiness}</p>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
                <ShieldCheck className="h-5 w-5" />
              </span>
            </div>
            <div className="mt-5 h-2 rounded-full bg-white ring-1 ring-slate-200">
              <div className="h-2 rounded-full bg-sky-600" style={{ width: workspace.readiness }} />
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-slate-500">Client tier</span>
              <span className="font-semibold text-slate-950">{workspace.tier}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
