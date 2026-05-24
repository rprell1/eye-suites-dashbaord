import Link from "next/link";
import { Eye } from "lucide-react";

import { sidebarItems } from "@/lib/dashboard-data";
import { cn } from "@/lib/utils";

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-72 border-r border-slate-200 bg-white px-4 py-5 lg:block">
      <Link href="/dashboard" className="mb-8 flex items-center gap-3 px-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
          <Eye className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-sm font-semibold text-slate-950">Eye Suites</span>
          <span className="block text-xs text-slate-500">OBS command center</span>
        </span>
      </Link>

      <nav className="space-y-1">
        {sidebarItems.map((item) => {
          const isActive = item.label === "Dashboard";
          const external = item.href.startsWith("https://");
          return (
            <Link
              key={item.label}
              href={item.href}
              target={external ? "_blank" : undefined}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-sky-50 hover:text-slate-950",
                isActive && "bg-sky-50 text-primary ring-1 ring-sky-100"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
