import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { modules } from "@/lib/dashboard-data";

type Module = (typeof modules)[number];

export function ModuleCard({ module }: { module: Module }) {
  return (
    <Card className="group border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_14px_34px_rgba(15,23,42,0.08)]">
      <CardHeader className="p-4 pb-2">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
              <module.icon className="h-[18px] w-[18px]" />
            </span>
            <div className="min-w-0">
              <CardTitle className="truncate text-[15px]">{module.title}</CardTitle>
              <Badge variant={module.tone} className="mt-2 rounded-md px-2 py-0.5 text-[11px] font-semibold">
                {module.status}
              </Badge>
            </div>
          </div>
          <Button asChild size="icon" variant="outline" className="h-8 w-8 shrink-0 rounded-xl bg-white transition-colors group-hover:border-sky-200 group-hover:text-sky-700" aria-label={`Open ${module.title}`}>
            <Link href={module.href} target="_blank">
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <CardDescription className="pt-2 text-[13px] leading-5">{module.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Current signal</span>
          <span className="text-sm font-semibold text-slate-900">{module.metric}</span>
        </div>
      </CardContent>
    </Card>
  );
}
