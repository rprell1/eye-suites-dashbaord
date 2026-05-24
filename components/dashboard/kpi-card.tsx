import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { trendIcons, type kpis } from "@/lib/dashboard-data";

type Kpi = (typeof kpis)[number];

const toneStyles = {
  success: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  warning: "bg-amber-50 text-amber-700 ring-amber-200",
  info: "bg-sky-50 text-sky-700 ring-sky-200"
};

export function KpiCard({ kpi }: { kpi: Kpi }) {
  const TrendIcon = trendIcons[kpi.trend];

  return (
    <Card className="border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">{kpi.label}</p>
            <p className="mt-2 text-2xl font-semibold tracking-normal text-slate-950">{kpi.value}</p>
            <p className="mt-1 truncate text-xs text-slate-500">{kpi.detail}</p>
          </div>
          <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ring-1", toneStyles[kpi.tone])}>
            <kpi.icon className="h-[18px] w-[18px]" />
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between gap-3">
          <Badge variant={kpi.tone} className="rounded-md px-2 py-1 text-[11px] font-semibold">
            {kpi.change}
          </Badge>
          <span
            className={cn(
              "inline-flex items-center gap-1 text-xs font-semibold",
              kpi.trend === "down" ? "text-amber-700" : kpi.trend === "up" ? "text-emerald-700" : "text-slate-500"
            )}
          >
            <TrendIcon className="h-3.5 w-3.5" />
            Trend
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
