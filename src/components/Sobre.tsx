import { sobre } from "@/lib/content";
import PlaceholderImage from "./PlaceholderImage";

export default function Sobre() {
  return (
    <section id="sobre" className="mx-auto max-w-content px-6 py-24 md:py-32">
      <div className="grid gap-14 md:grid-cols-2 md:items-center">
        <PlaceholderImage
          icon="sparkles"
          tone="gold"
          className="aspect-[4/5] rounded-[28px]"
        />
        <div>
          <span className="eyebrow">{sobre.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">
            {sobre.titulo}
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {sobre.paragrafos.map((p, i) => (
              <p key={i} className="font-body text-[15px] leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-6 border-l-2 border-sage pl-4">
            <p className="font-display text-lg text-ink">{sobre.nome}</p>
            <p className="font-body text-xs uppercase tracking-widest2 text-muted mt-1">
              {sobre.credencial}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
