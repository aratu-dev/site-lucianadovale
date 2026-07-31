import Image from "next/image";
import { conceito } from "@/lib/content";
import PlaceholderImage from "./PlaceholderImage";

export default function Conceito() {
  return (
    <section id="conceito" className="mx-auto max-w-content px-6 py-24 md:py-32">
      <div className="grid gap-14 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] order-2 md:order-1">
          {conceito.imagem ? (
            <Image
              src={conceito.imagem}
              alt="Ambiente da Clínica Luciana do Vale"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            <PlaceholderImage label="Ambiente da clínica" icon="droplet" tone="gold" className="h-full w-full" />
          )}
        </div>
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
