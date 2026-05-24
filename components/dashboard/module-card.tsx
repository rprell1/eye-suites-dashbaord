import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { modules } from "@/lib/dashboard-data";

type Module = (typeof modules)[number];

export function ModuleCard({ module }: { module: Module }) {
  return (
    <Card className="group border-slate-200 bg-white shadow-sm transition-colors hover:border-sky-200">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-50 text-sky-700 ring-1 ring-sky-100">
            <module.icon className="h-5 w-5" />
          </span>
          <Button asChild size="icon" variant="ghost" aria-label={`Open ${module.title}`}>
            <Link href={module.href} target="_blank">
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <CardTitle className="pt-3">{module.title}</CardTitle>
        <CardDescription className="leading-6">{module.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">{module.metric}</div>
      </CardContent>
    </Card>
  );
}
