import { Card, CardContent } from "@/components/ui/card";
import { goLiveCountdown } from "@/lib/dashboard-data";

export function GoLiveCountdownCard() {
  return (
    <Card className="border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">{goLiveCountdown.title}</p>
            <div className="mt-4 flex items-end gap-2">
              <p className="text-5xl font-semibold tracking-normal text-slate-950">{goLiveCountdown.days}</p>
              <p className="pb-1 text-sm font-semibold text-slate-500">{goLiveCountdown.label}</p>
            </div>
          </div>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
            <goLiveCountdown.icon className="h-5 w-5" />
          </span>
        </div>
        <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5">
          <p className="text-sm font-semibold text-slate-950">{goLiveCountdown.date}</p>
          <p className="mt-1 text-sm leading-5 text-slate-500">{goLiveCountdown.detail}</p>
        </div>
      </CardContent>
    </Card>
  );
}
