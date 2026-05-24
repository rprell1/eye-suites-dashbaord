import { AlertsPanel } from "@/components/dashboard/alerts-panel";
import { ClientWorkspaceCard } from "@/components/dashboard/client-workspace-card";
import { ExecutiveReadinessCard } from "@/components/dashboard/executive-readiness-card";
import { GoLiveCountdownCard } from "@/components/dashboard/go-live-countdown-card";
import { Header } from "@/components/dashboard/header";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { ModuleCard } from "@/components/dashboard/module-card";
import { Sidebar } from "@/components/dashboard/sidebar";
import { SurveyReadinessSection } from "@/components/dashboard/survey-readiness-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { kpis, modules } from "@/lib/dashboard-data";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f6f8fb]">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <Header />
          <div className="grid gap-5 px-5 py-5 md:px-6 xl:grid-cols-[minmax(0,1fr)_340px] 2xl:grid-cols-[minmax(0,1fr)_360px]">
            <section className="min-w-0 space-y-5">
              <ClientWorkspaceCard />

              <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_310px]">
                <ExecutiveReadinessCard />
                <GoLiveCountdownCard />
              </div>

              <div className="grid gap-3 sm:grid-cols-2 2xl:grid-cols-4">
                {kpis.map((kpi) => (
                  <KpiCard key={kpi.label} kpi={kpi} />
                ))}
              </div>

              <SurveyReadinessSection />

              <div>
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-semibold tracking-normal text-slate-950">OBS Operations Modules</h2>
                    <p className="mt-1 text-sm text-slate-500">Operational workspaces for launch readiness and ongoing oversight.</p>
                  </div>
                </div>
                <div className="grid gap-3 lg:grid-cols-2">
                  {modules.map((module) => (
                    <ModuleCard key={module.title} module={module} />
                  ))}
                </div>
              </div>

              <Card className="border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-base">Executive Readiness Snapshot</CardTitle>
                  <p className="text-sm text-slate-500">Key operational domains for the next leadership review.</p>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="grid gap-3 md:grid-cols-3">
                    {[
                      ["Facilities", "92%", "Site walkthrough complete"],
                      ["Clinical Protocols", "81%", "Two policies in final review"],
                      ["Go-Live Support", "88%", "Staff schedule confirmed"]
                    ].map(([label, value, note]) => (
                      <div key={label} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                        <div className="flex items-baseline justify-between gap-3">
                          <p className="text-sm font-semibold text-slate-700">{label}</p>
                          <p className="text-lg font-semibold text-slate-950">{value}</p>
                        </div>
                        <div className="mt-3 h-2 rounded-full bg-white ring-1 ring-slate-200">
                          <div className="h-2 rounded-full bg-sky-600" style={{ width: value }} />
                        </div>
                        <p className="mt-3 text-sm text-slate-500">{note}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
            <AlertsPanel />
          </div>
        </div>
      </div>
    </main>
  );
}
