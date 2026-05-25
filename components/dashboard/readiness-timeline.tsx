import { CheckCircle2, Circle, Clock3 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { readinessTimeline } from "@/lib/dashboard-data";
import { cn } from "@/lib/utils";

const toneStyles = {
  success: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  warning: "bg-amber-50 text-amber-700 ring-amber-200",
  info: "bg-sky-50 text-sky-700 ring-sky-200"
};

const statusIcon = {
  Complete: CheckCircle2,
  "In Review": Clock3,
  Scheduled: Circle,
  Upcoming: Circle,
  Target: CheckCircle2
};

export function ReadinessTimeline() {
  return (
    <Card className="border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-base">Launch Readiness Timeline</CardTitle>
        <p className="text-sm text-slate-500">Executive milestones from onboarding through supported go-live.</p>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid gap-3 lg:grid-cols-5">
          {readinessTimeline.map((step) => {
            const Icon = statusIcon[step.status];

            return (
              <div key={step.phase} className="relative rounded-xl border border-slate-100 bg-slate-50 p-3">
                <div className="flex items-center justify-between gap-3">
                  <span className={cn("flex h-8 w-8 items-center justify-center rounded-lg ring-1", toneStyles[step.tone])}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-semibold text-slate-500">{step.date}</span>
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-950">{step.phase}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.07em] text-sky-700">{step.status}</p>
                <p className="mt-2 text-xs leading-5 text-slate-500">{step.detail}</p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
