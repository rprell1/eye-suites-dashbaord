import Link from "next/link";
import { Activity, ArrowRight, Eye, LockKeyhole, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(14,116,144,0.16),_transparent_32%),linear-gradient(135deg,#f8fafc_0%,#eef6fb_48%,#ffffff_100%)]">
      <div className="mx-auto grid min-h-screen w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 py-10 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="max-w-xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-sky-100 bg-white/75 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
              <Eye className="h-4 w-4" />
            </span>
            dashboard.eyesuites.com
          </div>
          <h1 className="text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
            Eye Suites command center
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            A clinical operations dashboard for ophthalmic OBS launch readiness, compliance visibility,
            training progress, and practice activity.
          </p>
          <div className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
            {[
              ["Surgery-ready workflows", ShieldCheck],
              ["Compliance signals", Activity],
              ["Protected access", LockKeyhole]
            ].map(([label, Icon]) => (
              <div key={label as string} className="flex items-center gap-2 rounded-lg border border-white bg-white/70 px-3 py-3 shadow-sm">
                <Icon className="h-4 w-4 text-sky-700" />
                <span>{label as string}</span>
              </div>
            ))}
          </div>
        </section>

        <Card className="border-white/80 bg-white/88 shadow-clinical backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl">Sign in</CardTitle>
            <p className="text-sm text-muted-foreground">Access your Eye Suites dashboard workspace.</p>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700" htmlFor="email">
                  Email
                </label>
                <Input id="email" type="email" placeholder="admin@practice.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700" htmlFor="password">
                  Password
                </label>
                <Input id="password" type="password" placeholder="Enter password" />
              </div>
              <Button asChild className="h-11 w-full gap-2">
                <Link href="/dashboard">
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </form>
            <div className="mt-5 rounded-lg bg-slate-50 p-4 text-sm leading-6 text-slate-600">
              Sample MVP only. Authentication wiring can connect to your production identity provider next.
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
