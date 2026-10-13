"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Resultados", href: "#resultados" },
  { label: "Clínicas", href: "#clinicas" },
  { label: "Para profissionais", href: "#profissionais" },
];

function ArrowRight() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
      <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
    </svg>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      {/* 1. MUDANÇA NO ESPAÇAMENTO: pt-1 empurra quase para o limite do topo do celular */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 pt-1 pb-4 sm:px-8 lg:px-10 lg:py-7">
        <Link
          aria-label="Endolipo - página inicial"
          {/* 2. MUDANÇA NA FONTE: text-[1.75rem] no mobile (era 2rem), mantendo sm:text-[2.35rem] no PC */}
          className="relative text-[1.75rem] font-medium leading-none tracking-[-0.075em] text-white sm:text-[2.35rem]"
          href="/"
          onClick={() => setIsMenuOpen(false)}
        >
          endolipo
          <span className="absolute -right-4 top-0 text-[0.55rem] tracking-normal">®</span>
          <span aria-hidden="true" className="absolute -bottom-1 -right-3 h-5 w-5">
            <span className="absolute left-1/2 top-0 h-full w-px bg-brand-yellow" />
            <span className="absolute left-0 top-1/2 h-px w-full bg-brand-yellow" />
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              className="text-xs font-medium text-white/90 transition hover:text-brand-yellow xl:text-sm"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="cta-primary hidden px-5 py-3 text-xs sm:text-sm lg:inline-flex" href="#agendar">
          Agende sua avaliação
          <ArrowRight />
        </Link>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/35 text-white transition hover:border-brand-yellow hover:text-brand-yellow lg:hidden"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          <span className="sr-only">Menu</span>
          <span className="relative h-4 w-5">
            <span className={`absolute left-0 top-0 block h-px w-5 bg-current transition ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] block h-px w-5 bg-current transition ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`absolute bottom-0 left-0 block h-px w-5 bg-current transition ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-b border-white/10 bg-brand-ink/95 backdrop-blur transition-[max-height] duration-300 lg:hidden ${
          isMenuOpen ? "max-h-[32rem]" : "max-h-0"
        }`}
        id="mobile-navigation"
      >
        <nav aria-label="Navegação móvel" className="mx-auto flex max-w-7xl flex-col px-5 py-5 sm:px-8">
          {navigation.map((item) => (
            <Link
              className="border-b border-white/10 py-4 text-base font-medium text-white transition hover:text-brand-yellow"
              href={item.href}
              key={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link className="cta-primary mt-5" href="#agendar" onClick={() => setIsMenuOpen(false)}>
            Agende sua avaliação
            <ArrowRight />
          </Link>
        </nav>
      </div>
    </header>
  );
}