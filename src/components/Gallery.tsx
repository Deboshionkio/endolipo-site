const galleryItems = [
  { type: "Foto", gradient: "from-[#e8bd9f] via-[#bb704b] to-[#65311d]" },
  { type: "Vídeo", gradient: "from-[#f0c8aa] via-[#bd6c45] to-[#74341d]" },
  { type: "Foto", gradient: "from-[#e9c0a4] via-[#c7835f] to-[#6d321d]" },
  { type: "Vídeo", gradient: "from-[#e7b998] via-[#aa5c3e] to-[#562719]" },
  { type: "Vídeo", gradient: "from-[#f3d0b3] via-[#c67a54] to-[#72351f]" },
];

function PlayIcon() {
  return (
    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/80 bg-brand-ink/25 text-white backdrop-blur-sm">
      <svg aria-hidden="true" className="ml-0.5 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 5.5v13l11-6.5-11-6.5Z" />
      </svg>
    </span>
  );
}

export function Gallery() {
  return (
    <section aria-labelledby="gallery-title" className="bg-[#fff7ee] py-16 text-brand-dark sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-4xl font-light tracking-[-0.045em] sm:text-5xl" id="gallery-title">
            Galeria de resultados
          </h2>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange sm:max-w-xs sm:text-right">
            Fotos e vídeos reais de pacientes Endolipo®.
          </p>
        </div>

        <div aria-label="Galeria de resultados de pacientes" className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]">
          {galleryItems.map((item, index) => {
            const isVideo = item.type === "Vídeo";

            return (
              <article
                className={`relative h-64 w-64 shrink-0 snap-start overflow-hidden rounded-xl bg-gradient-to-br ${item.gradient} shadow-[0_10px_25px_rgba(105,49,15,0.14)]`}
                key={`${item.type}-${index}`}
              >
                <div aria-hidden="true" className="absolute bottom-[-14%] left-[24%] h-[100%] w-[57%] rounded-[48%_48%_15%_15%] bg-gradient-to-r from-black/25 via-white/20 to-black/30" />
                <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(130deg,transparent_37%,rgba(255,255,255,0.21)_48%,transparent_58%)]" />
                {isVideo ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayIcon />
                  </div>
                ) : null}
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-brand-ink/55 px-2.5 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                  {isVideo ? (
                    <svg aria-hidden="true" className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 5.5v13l11-6.5-11-6.5Z" />
                    </svg>
                  ) : (
                    <svg aria-hidden="true" className="h-3 w-3" fill="none" viewBox="0 0 24 24">
                      <path d="M4 7h3l1.2-2h7.6L17 7h3v12H4V7Zm4.5 6a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  )}
                  {item.type}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
