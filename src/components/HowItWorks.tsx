import Image from "next/image";

export function HowItWorks() {
  return (
    <div className="flex flex-col h-full text-brand-dark" id="como-funciona">
      <div className="flex-1">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-orange">
          Tecnologia a favor do seu corpo.
        </p>
        <h2 className="mt-3 text-4xl font-light tracking-[-0.045em] sm:text-5xl">
          Como funciona
        </h2>
        <p className="mt-6 mb-10 max-w-xl text-base leading-relaxed text-brand-dark/70 sm:text-lg">
          Uma fibra óptica de precisão entrega energia controlada diretamente na camada tratada, promovendo ação na gordura localizada e estimulando retração da pele.
        </p>
      </div>

      <div className="mt-auto w-full">
        <Image
          src="/como-funciona-img.webp"
          alt="Ilustração do funcionamento da fibra óptica e retração da pele"
          width={800}
          height={500}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}