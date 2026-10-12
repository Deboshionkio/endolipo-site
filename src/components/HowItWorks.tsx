import Image from "next/image";

export function HowItWorks() {
  return (
    <div className="relative flex flex-col h-full min-h-[500px] text-brand-dark overflow-hidden" id="como-funciona">
      
      {/* Bloco de Texto na frente (z-10) com margens arejadas e fonte maior */}
      <div className="relative z-10 pt-4 sm:pt-10 w-full text-left">
        <h2 className="mb-3 text-5xl font-light tracking-[-0.04em] sm:text-6xl">
          Como funciona
        </h2>
        <p className="mb-8 text-xs font-bold uppercase tracking-[0.22em] text-brand-orange">
          Tecnologia a favor do seu corpo.
        </p>
        
        <p className="max-w-[420px] text-lg leading-loose text-brand-dark/75 sm:text-xl">
          Uma fibra óptica de precisão entrega energia controlada diretamente na camada tratada, promovendo ação na gordura localizada e estimulando retração da pele.
        </p>
      </div>

      {/* Imagem como background no canto inferior direito */}
      <div className="absolute bottom-0 right-0 z-0 w-[95%] max-w-[600px] sm:-right-4">
        <Image
          src="/como-funciona-img.webp"
          alt="Ilustração do funcionamento da fibra óptica e retração da pele"
          width={800}
          height={500}
          className="w-full h-auto object-contain object-right-bottom"
          priority
        />
      </div>
      
    </div>
  );
}