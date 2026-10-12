const pillars = [
  {
    title: "Ação precisa",
    icon: <path d="M12 3v4m0 10v4M3 12h4m10 0h4m-3.6-5.4-2.8 2.8m-5.2 5.2-2.8 2.8m0-10.8 2.8 2.8m5.2 5.2 2.8 2.8M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />,
  },
  {
    title: "Atua na gordura",
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
    icon: <path d="M4 7c2.1-2 4.5-2 6.5 0s4.4 2 6.5 0M4 12c2.1-2 4.5-2 6.5 0s4.4 2 6.5 0M4 17c2.1-2 4.5-2 6.5 0s4.4 2 6.5 0" />,
  },
  {
    title: "Promove retração da pele",
    icon: <path d="M19 4C11 4 5 8.2 5 15.3 5 18 6.9 20 9.1 20c5.5 0 9.9-6.4 9.9-16ZM6 20c1.7-2.4 3.7-4.1 6.2-5.1" />,
  },
];

function FiberIllustration() {
  return (
    <div
      aria-label="Ilustração abstrata de uma fibra óptica atuando nas células de gordura"
      className="relative isolate min-h-80 overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_52%_65%,#ffc95e_0%,#ef8d23_12%,#d95b17_24%,transparent_43%),linear-gradient(135deg,#fff5e8_0%,#fde6ca_48%,#f5b768_100%)] sm:min-h-[25rem]"
      role="img"
    >
      <div aria-hidden="true" className="absolute -right-12 -top-32 h-72 w-72 rounded-full border-[18px] border-white/65" />
      <div aria-hidden="true" className="absolute -left-6 bottom-2 h-52 w-52 rounded-full border-[14px] border-[#e57a2b]/35" />
      <div aria-hidden="true" className="absolute left-[14%] top-[16%] h-[70%] w-2 rotate-[28deg] rounded-full bg-gradient-to-b from-white via-brand-yellow to-brand-orange shadow-[0_0_24px_7px_rgba(255,225,136,0.9)]" />
      <div aria-hidden="true" className="absolute left-[21%] top-[20%] h-3 w-3 rounded-full bg-white shadow-[0_0_20px_8px_white]" />
      <div aria-hidden="true" className="absolute bottom-[14%] left-[27%] h-28 w-28 rounded-full border border-brand-yellow/70 bg-[radial-gradient(circle_at_35%_30%,#fff4b8_0%,#f4d03f_18%,#e57a2b_47%,#ba4614_75%)] shadow-[0_0_35px_rgba(238,125,20,0.65)]" />
      <div aria-hidden="true" className="absolute bottom-[12%] left-[51%] h-24 w-24 rounded-full border border-brand-yellow/60 bg-[radial-gradient(circle_at_35%_30%,#fff4b8_0%,#f4d03f_18%,#e57a2b_47%,#ba4614_75%)]" />
      <div aria-hidden="true" className="absolute bottom-[25%] right-[11%] h-20 w-20 rounded-full border border-brand-yellow/50 bg-[radial-gradient(circle_at_35%_30%,#fff4b8_0%,#f4d03f_18%,#e57a2b_47%,#ba4614_75%)]" />
    </div>
  );
}

export function HowItWorks() {
  return (
    <section aria-labelledby="how-it-works-title" className="bg-white py-16 text-brand-dark sm:py-20 lg:py-24" id="como-funciona">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-orange">Tecnologia a favor do seu corpo.</p>
          <h2 className="mt-3 text-4xl font-light tracking-[-0.045em] sm:text-5xl" id="how-it-works-title">
            Como funciona
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-dark/70 sm:text-lg">
            Uma fibra óptica de precisão entrega energia controlada diretamente na camada tratada, promovendo ação na gordura localizada e estimulando retração da pele.
          </p>

          <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {pillars.map((pillar) => (
              <li className="flex items-center gap-4 lg:flex-col lg:items-start" key={pillar.title}>
                <svg aria-hidden="true" className="h-12 w-12 shrink-0 text-brand-orange" fill="none" viewBox="0 0 24 24">
                  <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45">
                    {pillar.icon}
                  </g>
                </svg>
                <span className="max-w-24 text-sm font-semibold leading-snug text-brand-dark">{pillar.title}</span>
              </li>
            ))}
          </ul>
        </div>

        <FiberIllustration />
      </div>
    </section>
  );
}
