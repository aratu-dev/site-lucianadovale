import { tratamentos, whatsappLink } from "@/lib/content";
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function Tratamentos() {
  return (
    <section id="tratamentos" className="mx-auto max-w-content px-6 py-24 md:py-32">
      <div className="max-w-xl">
        <span className="eyebrow">{tratamentos.eyebrow}</span>
        <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl text-balance">
          {tratamentos.titulo}
        </h2>
        <p className="mt-5 font-body text-[15px] leading-relaxed text-muted">{tratamentos.texto}</p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {tratamentos.destaques.map((item) => (
          <div key={item.titulo} className="flex flex-col gap-4">
            <BeforeAfterSlider
              compact
              aspectClass="aspect-square"
              antesSrc={item.antes || undefined}
              depoisSrc={item.depois || undefined}
              alt={item.titulo}
            />
            <p className="font-body text-sm leading-snug text-ink/85">{item.titulo}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <span className="font-body text-xs uppercase tracking-widest2 text-muted mr-1">
          Também tratamos
        </span>
        {tratamentos.outros.map((item) => (
          <span
            key={item}
            className="rounded-full border border-line bg-paper px-4 py-2 font-body text-sm text-ink/80"
          >
            {item}
          </span>
        ))}
      </div>

      <a
        href={whatsappLink("Olá, gostaria de agendar uma consulta capilar personalizada")}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 font-body text-[13px] uppercase tracking-widest2 text-ivory transition-colors hover:bg-sage-dark"
      >
        Agendar consulta
      </a>
    </section>
  );
}
