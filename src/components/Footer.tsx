import Link from "next/link";
import type { ReactNode } from "react";

const navigation = [
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Resultados", href: "#resultados" },
  { label: "Clínicas", href: "#clinicas" },
  { label: "Para profissionais", href: "#profissionais" },
];

const badges = [
  { label: "Atendimento em Santa Catarina", icon: <path d="M4 7.5 12 4l8 3.5v5.8c0 3.7-3 5.8-8 7.7-5-1.9-8-4-8-7.7V7.5Zm4 4.5h8m-4-4v8" /> },
  { label: "Clínicas certificadas e profissionais capacitados", icon: <path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" /> },
  { label: "Segurança, ciência e resultados", icon: <path d="M12 3 4.5 6v5.2c0 4.45 3.08 8.55 7.5 9.8 4.42-1.25 7.5-5.35 7.5-9.8V6L12 3Zm-3 9 2 2 4-4" /> },
];

function ArrowRight() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
      <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path d="M20.5 11.6a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5 5 15.9a8.4 8.4 0 1 1 15.5-4.3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M8.4 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.7 1.7c.1.3.1.5-.1.7l-.5.6c.6 1.1 1.4 1.9 2.5 2.5l.6-.5c.2-.2.4-.2.7-.1l1.7.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1.1.4-1.8.2-1.1-.3-2.7-1.2-4-2.5-1.3-1.3-2.2-2.9-2.5-4-.2-.7 0-1.4.2-1.8Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SocialIcon({ label, children }: { label: string; children: ReactNode }) {
  return (
    <a aria-label={label} className="text-white/75 transition hover:text-brand-yellow" href="#">
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer id="clinicas">
      <section
        aria-labelledby="footer-cta-title"
        className="relative isolate overflow-hidden bg-brand-ink py-16 text-white sm:py-20 lg:py-24"
      >
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_45%,rgba(238,139,45,0.65),transparent_32%),linear-gradient(120deg,#170c0a_5%,rgba(58,27,13,0.8)_47%,rgba(211,100,22,0.48)_100%)]" />
        <div aria-hidden="true" className="absolute -right-24 bottom-[-12rem] h-[30rem] w-[48rem] rounded-[50%] border border-brand-yellow/35 bg-[#24546a]/55" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow">Transforme o seu bem-estar</p>
            <h2 className="mt-4 text-5xl font-light leading-[0.91] tracking-[-0.055em] sm:text-6xl" id="footer-cta-title">
              Sua nova versão começa aqui.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/85 sm:text-lg">Encontre uma clínica Endolipo® e agende sua avaliação.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="cta-primary px-6 py-3.5" href="#clinicas">
                Encontre uma clínica
                <ArrowRight />
              </Link>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-[#08391c] transition hover:-translate-y-0.5 hover:bg-[#4ae081] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-brand-ink"
                href="https://wa.me/"
                rel="noreferrer"
                target="_blank"
              >
                <WhatsAppIcon />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-5 border-t border-white/25 pt-7 sm:grid-cols-3 sm:gap-7">
            {badges.map((badge) => (
              <li className="flex items-center gap-3" key={badge.label}>
                <svg aria-hidden="true" className="h-8 w-8 shrink-0 text-brand-yellow" fill="none" viewBox="0 0 24 24">
                  <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45">
                    {badge.icon}
                  </g>
                </svg>
                <span className="max-w-40 text-xs font-medium leading-snug text-white/85">{badge.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="bg-[#120806] py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <Link aria-label="Endolipo - página inicial" className="relative w-fit text-3xl font-medium leading-none tracking-[-0.075em]" href="/">
            endolipo
            <span className="absolute -right-3 top-0 text-[0.45rem] tracking-normal">®</span>
          </Link>

          <nav aria-label="Navegação do rodapé" className="flex flex-wrap gap-x-5 gap-y-3">
            {navigation.map((item) => (
              <Link className="text-xs text-white/75 transition hover:text-brand-yellow" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <SocialIcon label="Instagram">
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
                <rect height="16" rx="4" width="16" x="4" y="4" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.2" cy="6.8" fill="currentColor" r="1" />
              </svg>
            </SocialIcon>
            <SocialIcon label="Facebook">
              <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2H8v3h2.4v8h3.1Z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="YouTube">
              <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.6 7.2a2.9 2.9 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.9 2.9 0 0 0-2 2C2 9 2 12 2 12s0 3 .4 4.8a2.9 2.9 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.9 2.9 0 0 0 2-2C22 15 22 12 22 12s0-3-.4-4.8ZM10 15.2V8.8l5.3 3.2-5.3 3.2Z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="LinkedIn">
              <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.2 8.2H3.1V21h3.1V8.2ZM4.7 3A1.8 1.8 0 1 0 4.7 6.6 1.8 1.8 0 0 0 4.7 3ZM21 13.7c0-3.9-2.1-5.7-4.9-5.7-2.3 0-3.3 1.2-3.9 2V8.2H9.1V21h3.1v-6.3c0-1.7.3-3.4 2.4-3.4 2.1 0 2.1 2 2.1 3.5V21H21v-7.3Z" />
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}
