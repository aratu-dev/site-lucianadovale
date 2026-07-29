import { AtSign, MapPin, Phone, Mail, Clock } from "lucide-react";
import { nav, site, whatsappLink } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink py-16 text-ivory/70">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-xl text-ivory">{site.nome}</p>
            <p className="mt-3 font-body text-sm leading-relaxed">
              Salão de beleza, tricologia, terapia capilar e spa.
            </p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-body text-sm hover:text-ivory transition-colors"
            >
              <AtSign className="h-4 w-4" /> @purhairspa
            </a>
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-widest2 text-ivory/50">Navegação</p>
            <nav className="mt-4 flex flex-col gap-2">
              {nav.map((item) => (
                <a key={item.href} href={item.href} className="font-body text-sm hover:text-ivory transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-widest2 text-ivory/50">Contato</p>
            <div className="mt-4 flex flex-col gap-3 font-body text-sm">
              <a
                href={whatsappLink("Olá, vim através do site, gostaria de mais informações")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-ivory transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0" /> {site.telefone}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-ivory transition-colors">
                <Mail className="h-4 w-4 shrink-0" /> {site.email}
              </a>
            </div>
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-widest2 text-ivory/50">Endereço</p>
            <div className="mt-4 flex flex-col gap-3 font-body text-sm">
              <span className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" /> {site.endereco}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" /> {site.horario}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-ivory/10 pt-6 font-body text-xs text-ivory/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.nome}. Todos os direitos reservados.</p>
          <p>Políticas de privacidade · Termos e condições</p>
        </div>
      </div>
    </footer>
  );
}
