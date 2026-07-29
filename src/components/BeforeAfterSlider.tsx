"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";

export default function BeforeAfterSlider({
  legenda,
  compact = false,
  aspectClass = "aspect-[4/5]",
  antesSrc,
  depoisSrc,
  alt = "Resultado do tratamento capilar",
}: {
  legenda?: string;
  compact?: boolean;
  aspectClass?: string;
  /** Caminho da foto "antes", ex: "/images/antes-alopecia.jpg". Se vazio, mostra um placeholder. */
  antesSrc?: string;
  /** Caminho da foto "depois", ex: "/images/depois-alopecia.jpg". Se vazio, mostra um placeholder. */
  depoisSrc?: string;
  alt?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, ratio)));
  }, []);

  const handleSize = compact ? "h-8 w-8" : "h-11 w-11";
  const iconSize = compact ? "h-3.5 w-3.5" : "h-4 w-4";
  const badgeText = compact ? "text-[9px] px-2 py-0.5" : "text-[10px] px-3 py-1";

  return (
    <div className="flex flex-col gap-3">
      <div
        ref={containerRef}
        className={`relative w-full select-none overflow-hidden border border-line shadow-[0_30px_60px_-25px_rgba(42,36,31,0.35)] ${aspectClass} ${
          compact ? "rounded-2xl" : "rounded-[28px]"
        }`}
        onMouseDown={(e) => {
          dragging.current = true;
          updateFromClientX(e.clientX);
        }}
        onMouseMove={(e) => dragging.current && updateFromClientX(e.clientX)}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onTouchStart={(e) => updateFromClientX(e.touches[0].clientX)}
        onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
      >
        {/* DEPOIS (fundo, sempre visível) */}
        {depoisSrc ? (
          <Image src={depoisSrc} alt={`Depois — ${alt}`} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
        ) : (
          <PlaceholderImage icon="sparkles" tone="sage" className="absolute inset-0 h-full w-full" />
        )}

        {/* ANTES (recortado por clip-path conforme o slider) */}
        <div className="absolute inset-0 h-full w-full" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          {antesSrc ? (
            <Image src={antesSrc} alt={`Antes — ${alt}`} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
          ) : (
            <PlaceholderImage icon="wind" tone="ink" className="h-full w-full" />
          )}
        </div>

        {/* Linha e alça do slider */}
        <div className="absolute inset-y-0 w-[2px] bg-ivory/90" style={{ left: `${pos}%` }}>
          <div
            className={`absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ivory text-ink shadow-lg ${handleSize}`}
          >
            <MoveHorizontal className={iconSize} strokeWidth={1.5} />
          </div>
        </div>

        <span
          className={`absolute left-3 top-3 rounded-full bg-ink/80 font-body uppercase tracking-widest2 text-ivory ${badgeText}`}
        >
          Antes
        </span>
        <span
          className={`absolute right-3 top-3 rounded-full bg-sage-dark/85 font-body uppercase tracking-widest2 text-ivory ${badgeText}`}
        >
          Depois
        </span>
      </div>
      {legenda && <p className="font-body text-xs text-muted text-center px-4">{legenda}</p>}
    </div>
  );
}
