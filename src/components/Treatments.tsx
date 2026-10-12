"use client";

import { useId, useState } from "react";
import Image from "next/image";

type Audience = "women" | "men";

export function Treatments() {
  const [selectedAudience, setSelectedAudience] = useState<Audience>("women");
  const panelId = useId();

  return (
    <section aria-labelledby="treatments-title" className="bg-white pb-16 text-brand-dark sm:pb-20 lg:pb-24" id="tratamentos">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="border-t border-brand-orange/25 pt-12 sm:pt-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-orange">
                Tratamentos personalizados para diferentes regiões do corpo.
              </p>
              <h2 className="mt-3 text-4xl font-light tracking-[-0.045em] sm:text-5xl" id="treatments-title">
                Áreas tratadas
              </h2>
            </div>

            <div aria-label="Selecione o público" className="inline-flex w-full rounded-full border border-brand-orange p-1 sm:w-auto" role="tablist">
              <button
                aria-controls={panelId}
                aria-selected={selectedAudience === "women"}
                className={`flex-1 rounded-full px-6 py-2 text-sm font-semibold transition sm:flex-none ${
                  selectedAudience === "women" ? "bg-brand-orange text-white" : "text-brand-orange hover:bg-brand-orange/10"
                }`}
                id={`${panelId}-women`}
                onClick={() => setSelectedAudience("women")}
                role="tab"
                type="button"
              >
                Mulheres
              </button>
              <button
                aria-controls={panelId}
                aria-selected={selectedAudience === "men"}
                className={`flex-1 rounded-full px-6 py-2 text-sm font-semibold transition sm:flex-none ${
                  selectedAudience === "men" ? "bg-brand-orange text-white" : "text-brand-orange hover:bg-brand-orange/10"
                }`}
                id={`${panelId}-men`}
                onClick={() => setSelectedAudience("men")}
                role="tab"
                type="button"
              >
                Homens
              </button>
            </div>
          </div>

          <div aria-labelledby={`${panelId}-${selectedAudience}`} className="mt-10 flex justify-center items-center w-full min-h-[300px]" id={panelId} role="tabpanel">
            {selectedAudience === 'women' ? (
              <div className="w-full max-w-5xl animate-fadeIn">
                <Image
                  src="/areas-tratadas-mulheres.webp"
                  alt="Áreas tratadas para Mulheres"
                  width={1000}
                  height={350}
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>
            ) : (
              <div className="w-full max-w-4xl animate-fadeIn text-center">
                <h3 className="text-xl md:text-2xl font-semibold text-brand-dark mb-8 uppercase tracking-wide">
                  Tratamentos também para homens
                </h3>
                <Image
                  src="/areas-tratadas-homens.webp"
                  alt="Áreas tratadas para Homens"
                  width={800}
                  height={350}
                  className="w-full h-auto object-contain mx-auto"
                />
              </div>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}