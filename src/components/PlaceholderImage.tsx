import { Sparkles, Droplet, Scissors, Wind } from "lucide-react";

const ICONS = { sparkles: Sparkles, droplet: Droplet, scissors: Scissors, wind: Wind };

export default function PlaceholderImage({
  label,
  icon = "sparkles",
  tone = "sage",
  className = "",
}: {
  label?: string;
  icon?: keyof typeof ICONS;
  tone?: "sage" | "gold" | "ink";
  className?: string;
}) {
  const Icon = ICONS[icon];
  const tones = {
    sage: "from-sage-light/40 via-ivory to-sage/20 text-sage-dark",
    gold: "from-gold-light/50 via-ivory to-gold/25 text-gold",
    ink: "from-ink/10 via-ivory to-ink/5 text-ink/60",
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden bg-gradient-to-br ${tones[tone]} ${className}`}
    >
      <Icon className="h-7 w-7 opacity-70" strokeWidth={1.25} />
      {label && (
        <span className="font-body text-[11px] uppercase tracking-widest2 opacity-60 text-center px-4">
          {label}
        </span>
      )}
    </div>
  );
}
