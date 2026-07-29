import { Star } from "lucide-react";
import { depoimentos } from "@/lib/content";

export default function Depoimentos() {
  return (
    <section className="mx-auto max-w-content px-6 py-24 md:py-32">
      <div className="max-w-xl">
        <span className="eyebrow">Depoimentos</span>
        <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">
          Quem viveu a experiência Pur
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {depoimentos.map((d) => (
          <div key={d.nome} className="rounded-[24px] border border-line bg-paper p-7">
            <div className="flex gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="mt-5 font-body text-[15px] leading-relaxed text-ink/80">
              &ldquo;{d.texto}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-light/40 font-display text-sm text-sage-dark">
                {d.nome
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="font-body text-sm font-medium text-ink">{d.nome}</p>
                <p className="font-body text-xs text-muted">{d.contexto}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
