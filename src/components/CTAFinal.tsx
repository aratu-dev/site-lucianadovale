import { ctaFinal, whatsappLink } from "@/lib/content";

export default function CTAFinal() {
  return (
    <section id="contato" className="relative overflow-hidden bg-sage-dark py-20 md:py-24">
      <div className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-ivory/10 blur-3xl" />
      <div className="mx-auto max-w-content px-6 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl leading-tight text-ivory text-balance md:text-4xl">
          {ctaFinal.titulo}
        </h2>
        <p className="mt-4 font-body text-[15px] text-ivory/70">{ctaFinal.texto}</p>
        <a
          href={whatsappLink("Olá, vim através do site, gostaria de mais informações")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-ivory px-8 py-3.5 font-body text-[13px] uppercase tracking-widest2 text-ink transition-colors hover:bg-ivory/90"
        >
          {ctaFinal.cta}
        </a>
      </div>
    </section>
  );
}
