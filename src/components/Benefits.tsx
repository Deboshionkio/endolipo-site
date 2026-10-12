const benefits = [
  {
    title: "Reduz gordura localizada",
    description: "Atua diretamente nas células de gordura, ajudando a definir o contorno corporal.",
    icon: (
      <>
        <circle cx="8" cy="8" r="3.5" />
        <circle cx="16" cy="8" r="3.5" />
        <circle cx="6" cy="15" r="3.5" />
        <circle cx="12" cy="16.5" r="3.5" />
        <circle cx="18" cy="15" r="3.5" />
      </>
    ),
  },
  {
    title: "Estimula o colágeno",
    description: "A energia controlada estimula a produção de colágeno, melhorando a firmeza da pele.",
    icon: <path d="M4 7c2.1-2 4.5-2 6.5 0s4.4 2 6.5 0M4 12c2.1-2 4.5-2 6.5 0s4.4 2 6.5 0M4 17c2.1-2 4.5-2 6.5 0s4.4 2 6.5 0" />,
  },
  {
    title: "Favorece retração da pele",
    description: "Contribui para uma pele mais firme e com melhor elasticidade.",
    icon: <path d="M19 4C11 4 5 8.2 5 15.3 5 18 6.9 20 9.1 20c5.5 0 9.9-6.4 9.9-16ZM6 20c1.7-2.4 3.7-4.1 6.2-5.1" />,
  },
  {
    title: "Contorno mais definido",
    description: "Resultados naturais e harmoniosos, valorizando a sua melhor versão.",
    icon: <path d="M8 3c0 3-3 3.6-3 7.6 0 3.2 2.2 5.4 5.1 5.4h3.8c2.9 0 5.1-2.2 5.1-5.4C19 6.6 16 6 16 3M12 16v5m-5 0h10M3 8l2 2m14-2-2 2" />,
  },
];

export function Benefits() {
  return (
    <section
      aria-labelledby="benefits-title"
      className="overflow-hidden bg-[radial-gradient(circle_at_5%_100%,#f5bd50_0%,transparent_30%),linear-gradient(105deg,#d95b17_0%,#e77d24_47%,#a93b10_100%)] py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 border-b border-white/35 pb-7 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-4xl font-light tracking-[-0.05em] sm:text-5xl" id="benefits-title">
            Por que escolher <span className="font-display italic">Endolipo®</span>
          </h2>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/85 sm:text-right">Mais do que estética. Mais bem-estar.</p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {benefits.map((benefit, index) => (
            <li className={`flex gap-4 lg:block lg:px-7 ${index > 0 ? "lg:border-l lg:border-white/35" : "lg:pl-0"}`} key={benefit.title}>
              <svg aria-hidden="true" className="h-11 w-11 shrink-0 text-brand-yellow lg:mb-6" fill="none" viewBox="0 0 24 24">
                <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45">
                  {benefit.icon}
                </g>
              </svg>
              <div>
                <h3 className="text-lg font-semibold leading-tight">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/85">{benefit.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
