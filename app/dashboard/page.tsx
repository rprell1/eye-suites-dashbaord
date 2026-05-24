import { AlertsPanel } from "@/components/dashboard/alerts-panel";
import { Header } from "@/components/dashboard/header";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { ModuleCard } from "@/components/dashboard/module-card";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { kpis, modules } from "@/lib/dashboard-data";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <Header />
          <div className="grid gap-6 px-5 py-6 md:px-7 xl:grid-cols-[minmax(0,1fr)_360px]">
            <section className="min-w-0 space-y-6">
              <div className="rounded-lg border border-sky-100 bg-white px-5 py-5 shadow-sm">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-medium text-sky-700">Premier Ophthalmology Center</p>
                    <h2 className="mt-1 text-xl font-semibold tracking-normal text-slate-950">
                      OBS launch workspace
                    </h2>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-slate-500">Target launch</p>
                      <p className="font-semibold text-slate-900">Jun 17</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Client tier</p>
                      <p className="font-semibold text-slate-900">Premium</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Status</p>
                      <p className="font-semibold text-emerald-700">Active</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
                {kpis.map((kpi) => (
                  <KpiCard key={kpi.label} kpi={kpi} />
                ))}
              </div>

              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold tracking-normal text-slate-950">Core modules</h2>
                    <p className="mt-1 text-sm text-slate-500">Operational workspaces for launch and ongoing oversight.</p>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {modules.map((module) => (
                    <ModuleCard key={module.title} module={module} />
                  ))}
                </div>
              </div>

              <Card className="border-slate-200 bg-white shadow-sm">
                <CardHeader>
                  <CardTitle>Readiness snapshot</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    {[
                      ["Facilities", "92%", "Site walkthrough complete"],
                      ["Clinical Protocols", "81%", "Two policies in final review"],
                      ["Go-Live Support", "88%", "Staff schedule confirmed"]
                    ].map(([label, value, note]) => (
                      <div key={label} className="rounded-lg bg-slate-50 p-4">
                        <div className="flex items-baseline justify-between gap-3">
                          <p className="text-sm font-medium text-slate-600">{label}</p>
                          <p className="text-lg font-semibold text-slate-950">{value}</p>
                        </div>
                        <div className="mt-3 h-2 rounded-full bg-white">
                          <div className="h-2 rounded-full bg-sky-500" style={{ width: value }} />
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
