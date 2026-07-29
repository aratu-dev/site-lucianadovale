import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/content";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Olá, vim através do site, gostaria de mais informações")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-sage-dark text-ivory shadow-[0_10px_30px_-8px_rgba(79,91,65,0.6)] transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={1.75} />
    </a>
  );
}
