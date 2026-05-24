import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { executiveReadiness } from "@/lib/dashboard-data";

export function ExecutiveReadinessCard() {
  return (
    <Card className="overflow-hidden border-slate-200 bg-[#061a33] text-white shadow-[0_18px_45px_rgba(15,23,42,0.16)]">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-5">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-sky-100 ring-1 ring-white/15">
                <executiveReadiness.icon className="h-[18px] w-[18px]" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-sky-100/70">
                {executiveReadiness.title}
              </p>
            </div>
            <div className="mt-5 flex items-end gap-3">
              <p className="text-5xl font-semibold tracking-normal">{executiveReadiness.score}</p>
              <Badge className="mb-1 rounded-md bg-emerald-400/15 px-2 py-1 text-[11px] font-semibold text-emerald-100 ring-1 ring-emerald-300/25">
                {executiveReadiness.label}
              </Badge>
            </div>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">{executiveReadiness.detail}</p>
          </div>
          <div className="hidden h-24 w-24 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] lg:flex">
            <div className="h-16 w-16 rounded-full border-[6px] border-sky-300/80 border-r-white/15" />
          </div>
        </div>
        <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
          {executiveReadiness.factors.map((factor) => (
            <div key={factor.label} className="rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2.5">
              <p className="text-xs text-slate-300">{factor.label}</p>
              <p className="mt-1 text-sm font-semibold text-white">{factor.value}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
