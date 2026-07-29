import { jornada } from "@/lib/content";

export default function Jornada() {
  return (
    <section id="jornada" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <div className="max-w-xl">
          <span className="font-body text-xs uppercase tracking-widest2 text-gold-light font-medium">
            {jornada.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ivory md:text-4xl">
            {jornada.titulo}
          </h2>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-4">
          {jornada.etapas.map((etapa, i) => (
            <div key={etapa.numero} className="relative">
              <span className="font-display text-5xl text-ivory/20">{etapa.numero}</span>
              <h3 className="mt-4 font-display text-xl text-ivory">{etapa.titulo}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ivory/55">{etapa.texto}</p>
              {i < jornada.etapas.length - 1 && (
                <div className="mt-8 hidden h-px w-full bg-ivory/10 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
