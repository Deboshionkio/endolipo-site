const testimonials = [
  {
    name: "Juliana M.",
    quote: "Me senti mais confiante e leve.",
    detail: "O procedimento superou minhas expectativas. Me senti mais confiante com o meu corpo.",
    initials: "JM",
  },
  {
    name: "Carlos R.",
    quote: "Procedimento tranquilo e ótimo atendimento.",
    detail: "O processo foi leve e o resultado foi natural. Excelente equipe.",
    initials: "CR",
  },
  {
    name: "Mariana S.",
    quote: "Gostei do resultado e da praticidade.",
    detail: "Vi uma grande diferença na firmeza da pele e no contorno. Me sinto ainda mais eu.",
    initials: "MS",
  },
];

function Stars() {
  return (
    <div aria-label="Avaliação de 5 estrelas" className="flex gap-0.5 text-brand-orange" role="img">
      {Array.from({ length: 5 }, (_, index) => (
        <svg aria-hidden="true" className="h-3.5 w-3.5" fill="currentColor" key={index} viewBox="0 0 20 20">
          <path d="m10 1.5 2.55 5.17 5.7.83-4.13 4.03.98 5.68L10 14.53l-5.1 2.68.98-5.68L1.75 7.5l5.7-.83L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

export function Results() {
  return (
    <section aria-labelledby="results-title" className="bg-white py-16 text-brand-dark sm:py-20 lg:py-24" id="resultados">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 border-b border-brand-orange/25 pb-7 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-4xl font-light tracking-[-0.045em] sm:text-5xl" id="results-title">
            Resultados e experiência
          </h2>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange sm:max-w-xs sm:text-right">
            Histórias reais de mais confiança e bem-estar.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch">
          <figure className="grid min-h-[26rem] grid-cols-2 gap-1 overflow-hidden rounded-2xl bg-brand-dark p-1 sm:min-h-[30rem]">
            {["Antes", "Depois"].map((label, index) => (
              <div
                className={`relative overflow-hidden rounded-[0.85rem] ${
                  index === 0
                    ? "bg-[radial-gradient(ellipse_at_55%_28%,#eab18b_0%,#b76542_31%,#5c2b1f_79%)]"
                    : "bg-[radial-gradient(ellipse_at_53%_27%,#f5c7a1_0%,#d88858_31%,#7f351f_79%)]"
                }`}
                key={label}
              >
                <div aria-hidden="true" className="absolute bottom-0 left-[21%] h-[86%] w-[58%] rounded-[48%_48%_17%_17%] bg-gradient-to-r from-black/30 via-white/15 to-black/35" />
                <div aria-hidden="true" className="absolute left-[30%] top-[23%] h-24 w-[40%] rounded-[50%] bg-white/10 blur-md" />
                <figcaption className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-md border border-white/75 bg-brand-ink/25 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                  {label}
                </figcaption>
              </div>
            ))}
          </figure>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {testimonials.map((testimonial) => (
              <article className="rounded-2xl border border-brand-orange/15 bg-[#fffaf5] p-5 shadow-[0_8px_20px_rgba(75,30,8,0.05)]" key={testimonial.name}>
                <div className="flex items-center gap-3">
                  <div aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-orange/15 text-xs font-bold text-brand-orange">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-dark">{testimonial.name}</p>
                    <Stars />
                  </div>
                </div>
                <blockquote className="mt-4">
                  <p className="text-sm font-bold leading-snug text-brand-dark">“{testimonial.quote}”</p>
                  <p className="mt-2 text-xs leading-relaxed text-brand-dark/65">{testimonial.detail}</p>
                </blockquote>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
