import Link from "next/link";

const professionalBenefits = [
  {
    label: "Protocolos exclusivos",
    icon: <path d="M7 4h10v16H7zM9.5 8h5m-5 3.5h5m-5 3.5h3" />,
  },
  {
    label: "Formação especializada",
    icon: <path d="m4 10 8-4 8 4-8 4-8-4Zm3 1.5V16c2.9 1.7 6.1 1.7 10 0v-4.5M20 11v5" />,
  },
  {
    label: "Suporte científico",
    icon: <path d="M8 3h8m-4 0v5l5.3 9.1A2.5 2.5 0 0 1 15.1 21H8.9a2.5 2.5 0 0 1-2.2-3.9L12 8m-3 7h6" />,
  },
  {
    label: "Oportunidades na rede",
    icon: <path d="M12 12a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM5 21a7 7 0 0 1 14 0M4 5v4m-2-2h4m14-2v4m-2-2h4" />,
  },
];

function ArrowRight() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
      <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
    </svg>
  );
}

export function Professional() {
  return (
    <section
      aria-labelledby="professional-title"
      className="overflow-hidden bg-[radial-gradient(circle_at_8%_0%,#f7bf50_0%,transparent_25%),linear-gradient(110deg,#ae3d11_0%,#e66f1d_52%,#c44d14_100%)] py-16 text-white sm:py-20 lg:py-24"
      id="profissionais"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20 lg:px-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow">Para profissionais da saúde</p>
          <h2 className="mt-4 max-w-lg text-4xl font-light leading-[0.98] tracking-[-0.05em] sm:text-5xl lg:text-6xl" id="professional-title">
            É profissional da saúde?
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Conheça a área exclusiva da Endolipo® para profissionais e descubra protocolos, formações e oportunidades na rede.
          </p>
          <Link className="cta-primary mt-8 px-6 py-3.5" href="#area-profissional">
            Acessar área do profissional
            <ArrowRight />
          </Link>
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {professionalBenefits.map((benefit) => (
            <li className="flex items-center gap-4 border-b border-white/25 py-3 last:border-b-0" key={benefit.label}>
              <svg aria-hidden="true" className="h-8 w-8 shrink-0 text-brand-yellow" fill="none" viewBox="0 0 24 24">
                <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45">
                  {benefit.icon}
                </g>
              </svg>
              <span className="text-base font-semibold">{benefit.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
