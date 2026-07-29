"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site, whatsappLink } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ivory/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(42,36,31,0.08)] py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6">
        <a href="#inicio" className="font-display text-xl tracking-tight text-ink">
          {site.nome}
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-[13px] uppercase tracking-widest2 text-ink/70 hover:text-sage-dark transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink("Olá, vim através do site, gostaria de mais informações")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center rounded-full bg-ink px-5 py-2.5 font-body text-[13px] uppercase tracking-widest2 text-ivory transition-colors hover:bg-sage-dark"
        >
          Agendar
        </a>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-6 mt-4 rounded-2xl bg-paper border border-line px-6 py-6 shadow-lg">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-body text-sm uppercase tracking-widest2 text-ink/80"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink("Olá, vim através do site, gostaria de mais informações")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex justify-center rounded-full bg-ink px-5 py-3 font-body text-[13px] uppercase tracking-widest2 text-ivory"
            >
              Agendar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
