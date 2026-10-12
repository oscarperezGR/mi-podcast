import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mi Podcast",
    template: "%s | Mi Podcast",
  },
  description:
    "A weekly podcast about creative work, attention, and the ideas that shape how we live.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        <main id="main" className="container">
          {children}
        </main>
        <footer className="site-footer">
          <div className="container">
            <p>© 2026 Mi Podcast. All episodes are mocked demo content.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
