"use client";

import { useId, useState } from "react";
import Image from "next/image";

type Audience = "women" | "men";

export function Treatments() {
  const [selectedAudience, setSelectedAudience] = useState<Audience>("women");
  const panelId = useId();

  return (
    <div className="flex flex-col h-full w-full text-brand-dark" id="tratamentos">
      
      {/* Linha superior e espaçamento perfeitamente alinhados com o lado esquerdo */}
      <div className="border-t border-brand-orange/30 pt-4 sm:pt-10 flex flex-col h-full">
        
        {/* Cabeçalho: Títulos e Botões na mesma linha nos ecrãs maiores */}
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          
          <div className="text-left">
            {/* Título gigante primeiro, exatamente com as mesmas classes do Como Funciona */}
            <h2 className="mb-3 text-5xl font-light tracking-[-0.04em] sm:text-6xl" id="treatments-title">
              Áreas tratadas
            </h2>
            {/* Subtítulo laranja depois, com largura controlada para quebrar linhas com elegância */}
            <p className="mb-8 max-w-[280px] text-xs font-bold uppercase tracking-[0.22em] text-brand-orange leading-relaxed">
              Tratamentos personalizados para diferentes regiões do corpo.
            </p>
          </div>

          {/* Botões Mulheres/Homens */}
          <div aria-label="Selecione o público" className="inline-flex w-full rounded-full border border-brand-orange/50 p-1 sm:w-auto" role="tablist">
            <button
              aria-controls={panelId}
              aria-selected={selectedAudience === "women"}
              className={`flex-1 rounded-full px-8 py-2 text-sm font-semibold transition sm:flex-none ${
                selectedAudience === "women" ? "bg-brand-orange text-white shadow-sm" : "text-brand-orange hover:bg-brand-orange/10"
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
              className={`flex-1 rounded-full px-8 py-2 text-sm font-semibold transition sm:flex-none ${
                selectedAudience === "men" ? "bg-brand-orange text-white shadow-sm" : "text-brand-orange hover:bg-brand-orange/10"
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

        {/* Container das Imagens (mt-auto empurra-as para baixo para alinharem perfeitamente) */}
        <div aria-labelledby={`${panelId}-${selectedAudience}`} className="mt-auto pt-8 flex justify-center items-center w-full min-h-[300px]" id={panelId} role="tabpanel">
          {selectedAudience === 'women' ? (
            <div className="w-full max-w-2xl animate-fadeIn">
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
            <div className="w-full max-w-xl animate-fadeIn text-center">
              <h3 className="text-lg md:text-xl font-semibold text-brand-dark mb-6 uppercase tracking-wide">
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
  );
}