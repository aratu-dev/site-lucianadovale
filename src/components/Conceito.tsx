import { conceito } from "@/lib/content";
import PlaceholderImage from "./PlaceholderImage";

export default function Conceito() {
  return (
    <section id="conceito" className="mx-auto max-w-content px-6 py-24 md:py-32">
      <div className="grid gap-14 md:grid-cols-2 md:items-center">
        <PlaceholderImage
          label="Interior do Pur Hair Spa"
          icon="droplet"
          tone="gold"
          className="aspect-[4/5] rounded-[28px] order-2 md:order-1"
        />
        <div className="order-1 md:order-2">
          <span className="eyebrow">{conceito.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">
            {conceito.titulo}
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {conceito.paragrafos.map((p, i) => (
              <p key={i} className="font-body text-[15px] leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
