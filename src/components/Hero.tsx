import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full bg-[#1e293b] overflow-hidden" id="inicio">
      {/* Container da imagem */}
      <div className="w-full mx-auto">
        <Image
          src="/hero-bg.webp"
          alt="Endolipo - Menos gordura localizada. Mais você."
          width={1920}
          height={800}
          priority
          className="w-full h-auto object-cover"
        />
      </div>
      
      {/* Texto invisível para SEO (Para o Google e leitores de ecrã encontrarem o teu site) */}
      <div className="sr-only">
        <h1>Menos gordura localizada. Mais você.</h1>
        <p>Endolipo é um protocolo exclusivo de lipo sem cirurgia, minimamente invasivo, que reduz a gordura localizada, firma a pele e modela o seu corpo.</p>
        <ul>
          <li>Procedimento seguro</li>
          <li>Retorno no mesmo dia</li>
          <li>Sem tempo de recuperação</li>
          <li>Tecnologia de precisão</li>
        </ul>
      </div>
    </section>
  );
}