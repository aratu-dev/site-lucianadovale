import { espaco } from "@/lib/content";
import PlaceholderImage from "./PlaceholderImage";

const icons: Array<"sparkles" | "droplet" | "scissors" | "wind"> = [
  "sparkles",
  "droplet",
  "scissors",
  "wind",
  "sparkles",
  "droplet",
];
const tones: Array<"sage" | "gold" | "ink"> = ["sage", "gold", "ink", "gold", "sage", "ink"];

export default function Espaco() {
  return (
    <section id="espaco" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <div className="max-w-xl">
          <span className="eyebrow">{espaco.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">
            {espaco.titulo}
          </h2>
          <p className="mt-5 font-body text-[15px] leading-relaxed text-muted">{espaco.texto}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-6 md:grid-rows-2">
          {espaco.fotos.map((_, i) => (
            <PlaceholderImage
              key={i}
              label={`Espaço · foto ${i + 1}`}
              icon={icons[i % icons.length]}
              tone={tones[i % tones.length]}
              className={`rounded-2xl aspect-square ${
                i === 0 ? "md:col-span-2 md:row-span-2 md:aspect-auto" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
