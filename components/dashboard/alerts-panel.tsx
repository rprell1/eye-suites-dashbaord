import { Activity, AlertTriangle, CheckCircle2 } from "lucide-react";

import { alerts, activity } from "@/lib/dashboard-data";
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
    <aside className="space-y-5 xl:sticky xl:top-24 xl:self-start">
      <Card className="border-slate-200 bg-white shadow-sm">
        <CardHeader>
          <CardTitle>Alerts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {alerts.map((alert) => {
            const Icon = alertIcon[alert.tone as keyof typeof alertIcon];
            return (
              <div key={alert.title} className="flex gap-3">
                <span
                  className={cn(
                    "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ring-1",
                    alertTone[alert.tone as keyof typeof alertTone]
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{alert.title}</p>
                  <p className="mt-1 text-sm leading-5 text-slate-500">{alert.detail}</p>
                  <p className="mt-1 text-xs text-slate-400">{alert.time}</p>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card className="border-slate-200 bg-white shadow-sm">
        <CardHeader>
          <CardTitle>Activity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {activity.map((item) => (
            <div key={item.label} className="flex gap-3">
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
