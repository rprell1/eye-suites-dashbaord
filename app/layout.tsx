import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Eye Suites Dashboard",
  description: "Master command center for ophthalmic office-based surgery clients",
  metadataBase: new URL("https://dashboard.eyesuites.com")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
