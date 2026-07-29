import { Check } from "lucide-react";
import { diferenciais } from "@/lib/content";

export default function Diferenciais() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <div className="max-w-xl mx-auto text-center">
          <span className="eyebrow">{diferenciais.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl text-balance">
            {diferenciais.titulo}
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto">
          {diferenciais.lista.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-line bg-ivory px-5 py-4"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sage-light/40 text-sage-dark">
                <Check className="h-4 w-4" strokeWidth={2} />
              </span>
              <p className="font-body text-sm text-ink/85">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
