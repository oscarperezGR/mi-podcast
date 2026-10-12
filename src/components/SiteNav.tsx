"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/episodes", label: "Episodes" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container site-nav">
        <Link href="/" className="site-nav__brand">
          Mi Podcast
        </Link>
        <nav aria-label="Primary">
          <ul className="site-nav__links">
            {links.map(({ href, label }) => {
              const current = pathname === href;
              return (
                <li key={href}>
                  <Link href={href} aria-current={current ? "page" : undefined}>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
