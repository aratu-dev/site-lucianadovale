import { hero, whatsappLink } from "@/lib/content";
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-sage-light/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold-light/30 blur-3xl" />

      <div className="mx-auto grid max-w-content gap-16 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="mt-5 font-display text-[2.5rem] leading-[1.08] tracking-tight text-ink text-balance md:text-6xl">
            {hero.titulo}
          </h1>
          <p className="mt-6 max-w-lg font-body text-[17px] leading-relaxed text-muted">
            {hero.subtitulo}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink("Olá, gostaria de agendar uma avaliação capilar")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 font-body text-[13px] uppercase tracking-widest2 text-ivory transition-colors hover:bg-sage-dark"
            >
              {hero.ctaPrimario}
            </a>
            <a
              href="#espaco"
              className="inline-flex items-center justify-center rounded-full border border-ink/20 px-7 py-3.5 font-body text-[13px] uppercase tracking-widest2 text-ink transition-colors hover:border-sage-dark hover:text-sage-dark"
            >
              {hero.ctaSecundario}
            </a>
          </div>
        </div>

        <BeforeAfterSlider
          legenda={hero.antesDepois.legenda}
          antesSrc={hero.antesDepois.antes || undefined}
          depoisSrc={hero.antesDepois.depois || undefined}
          alt="transformação capilar"
        />
      </div>
    </section>
  );
}
