import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { complianceItems } from "@/lib/dashboard-data";

export function ComplianceItemsTable() {
  return (
    <Card className="border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <CardHeader className="flex flex-col gap-2 p-4 pb-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <CardTitle className="text-base">Open Compliance Items</CardTitle>
          <p className="mt-1 text-sm text-slate-500">Priority work queue for survey and launch readiness.</p>
        </div>
        <Badge variant="warning" className="w-fit rounded-md px-2 py-1 text-[11px] font-semibold">
          {complianceItems.length} active
        </Badge>
      </CardHeader>
      <CardContent className="p-4">
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <div className="hidden grid-cols-[minmax(220px,1.5fr)_1fr_0.9fr_0.7fr_0.7fr_0.8fr] gap-3 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500 lg:grid">
            <span>Item</span>
            <span>Domain</span>
            <span>Owner</span>
            <span>Due</span>
            <span>Priority</span>
            <span>Status</span>
          </div>
          <div className="divide-y divide-slate-100">
            {complianceItems.map((item) => (
              <div
                key={item.item}
                className="grid gap-3 px-4 py-3 text-sm transition-colors hover:bg-slate-50 lg:grid-cols-[minmax(220px,1.5fr)_1fr_0.9fr_0.7fr_0.7fr_0.8fr] lg:items-center"
              >
                <div>
                  <p className="font-semibold text-slate-950">{item.item}</p>
                  <p className="mt-1 text-xs text-slate-500 lg:hidden">
                    {item.domain} · {item.owner}
                  </p>
                </div>
                <p className="hidden text-slate-600 lg:block">{item.domain}</p>
                <p className="hidden text-slate-600 lg:block">{item.owner}</p>
                <p className="font-medium text-slate-700">{item.due}</p>
                <p className="text-slate-600">{item.priority}</p>
                <Badge variant={item.tone} className="w-fit rounded-md px-2 py-1 text-[11px] font-semibold">
                  {item.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
