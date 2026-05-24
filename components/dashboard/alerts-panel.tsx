import { Activity, AlertTriangle, CheckCircle2 } from "lucide-react";

import { alerts, activity } from "@/lib/dashboard-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const alertTone = {
  warning: "bg-amber-50 text-amber-700 ring-amber-100",
  info: "bg-sky-50 text-sky-700 ring-sky-100",
  success: "bg-emerald-50 text-emerald-700 ring-emerald-100"
};

const alertIcon = {
  warning: AlertTriangle,
  info: Activity,
  success: CheckCircle2
};

export function AlertsPanel() {
  return (
    <aside className="space-y-4 xl:sticky xl:top-20 xl:self-start">
      <Card className="border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-3">
          <div>
            <CardTitle className="text-[15px]">Alerts</CardTitle>
            <p className="mt-1 text-xs text-slate-500">Current operational signals</p>
          </div>
          <Badge variant="warning" className="rounded-md px-2 py-0.5 text-[11px] font-semibold">
            4 open
          </Badge>
        </CardHeader>
        <CardContent className="space-y-1 p-2 pt-0">
          {alerts.map((alert) => {
            const Icon = alertIcon[alert.tone as keyof typeof alertIcon];
            return (
              <div key={alert.title} className="rounded-xl px-2 py-3 transition-colors hover:bg-slate-50">
                <div className="flex gap-3">
                <span
                  className={cn(
                    "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ring-1",
                    alertTone[alert.tone as keyof typeof alertTone]
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold leading-5 text-slate-900">{alert.title}</p>
                    <span className="shrink-0 rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-slate-500">
                      {alert.label}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-5 text-slate-500">{alert.detail}</p>
                  <p className="mt-1 text-xs text-slate-400">{alert.time}</p>
                </div>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card className="border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
        <CardHeader className="p-4 pb-3">
          <CardTitle className="text-[15px]">Activity</CardTitle>
          <p className="mt-1 text-xs text-slate-500">Latest workspace movement</p>
        </CardHeader>
        <CardContent className="space-y-1 p-2 pt-0">
          {activity.map((item) => (
            <div key={item.label} className="flex gap-3 rounded-xl px-2 py-3 transition-colors hover:bg-slate-50">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-600 ring-1 ring-slate-100">
                <item.icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-medium leading-5 text-slate-900">{item.label}</p>
                <p className="mt-1 text-xs text-slate-500">
                  {item.user} · {item.time}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </aside>
  );
}
