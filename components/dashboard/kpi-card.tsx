import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { kpis } from "@/lib/dashboard-data";

type Kpi = (typeof kpis)[number];

const toneStyles = {
  success: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  warning: "bg-amber-50 text-amber-700 ring-amber-100",
  info: "bg-sky-50 text-sky-700 ring-sky-100"
};

export function KpiCard({ kpi }: { kpi: Kpi }) {
  return (
    <Card className="border-slate-200 bg-white shadow-sm">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-slate-500">{kpi.label}</p>
            <p className="mt-3 text-2xl font-semibold tracking-normal text-slate-950">{kpi.value}</p>
          </div>
          <span className={cn("flex h-10 w-10 items-center justify-center rounded-lg ring-1", toneStyles[kpi.tone])}>
            <kpi.icon className="h-5 w-5" />
          </span>
        </div>
        <Badge variant={kpi.tone} className="mt-5">
          {kpi.change}
        </Badge>
      </CardContent>
    </Card>
  );
}
