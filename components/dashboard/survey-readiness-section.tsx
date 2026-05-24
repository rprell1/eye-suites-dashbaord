import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { surveyReadiness } from "@/lib/dashboard-data";
import { cn } from "@/lib/utils";

const toneStyles = {
  success: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  warning: "bg-amber-50 text-amber-700 ring-amber-200",
  info: "bg-sky-50 text-sky-700 ring-sky-200"
};

export function SurveyReadinessSection() {
  return (
    <Card className="border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-base">Survey Readiness</CardTitle>
        <p className="text-sm text-slate-500">ACHC-facing evidence domains for ophthalmic OBS operations.</p>
      </CardHeader>
      <CardContent className="grid gap-3 p-4 sm:grid-cols-2 xl:grid-cols-5">
        {surveyReadiness.map((item) => (
          <div key={item.label} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
            <div className="flex items-center justify-between gap-3">
              <span className={cn("flex h-8 w-8 items-center justify-center rounded-lg ring-1", toneStyles[item.tone])}>
                <item.icon className="h-4 w-4" />
              </span>
              <span className="text-lg font-semibold text-slate-950">{item.value}</span>
            </div>
            <p className="mt-3 text-sm font-semibold text-slate-900">{item.label}</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">{item.detail}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
