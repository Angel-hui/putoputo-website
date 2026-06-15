"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  ["/", "首页", "Home"],
  ["/about", "关于我们", "About"],
  ["/services", "产品服务", "Services"],
  ["/cases", "案例", "Cases"],
  ["/contact", "联系我们", "Contact"]
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-paper/85 backdrop-blur-xl">
      <div className="container-shell flex h-[78px] items-center justify-between">
        <Link href="/" aria-label="PUTOPUTO 首页"><Logo className="w-[155px] sm:w-[180px]" /></Link>
        <nav className="hidden items-center gap-10 lg:flex">
          {links.map(([href, cn, en]) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} className={`text-[17px] font-bold transition ${pathname === href ? "text-pulse" : "text-ink/75 hover:text-ink"}`}>
              {cn}<span className="ml-2 text-[11px] uppercase tracking-wide opacity-45">{en}</span>
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="hidden rounded-full bg-ink px-7 py-3.5 text-base font-bold text-white transition hover:bg-pulse lg:block"
        </Link>
        <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-black/10 lg:hidden" onClick={() => setOpen(!open)} aria-label="切换导航" aria-expanded={open} aria-controls="mobile-navigation">
          <span className="text-xl">{open ? "×" : "≡"}</span>
        </button>
      </div>
      {open && (
        <nav id="mobile-navigation" className="border-t border-black/5 bg-paper px-5 py-5 lg:hidden">
          <div className="container-shell grid gap-1">
            {links.map(([href, cn, en]) => (
              <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)} className={`flex items-center justify-between rounded-xl px-4 py-3 font-bold hover:bg-mist ${pathname === href ? "text-pulse" : ""}`}>
                {cn}<span className="text-xs uppercase text-black/40">{en}</span>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
