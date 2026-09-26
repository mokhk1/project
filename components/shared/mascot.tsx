'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

/* ═══════════════════════════════════════════════════════════════
   Mascot Images
═══════════════════════════════════════════════════════════════ */

const SAKHR_IMAGE = '/phmu/Sakhr.webp';
const YAQOOT_IMAGE = '/phmu/Yaqoot.webp';

/* ═══════════════════════════════════════════════════════════════
   Sakhr — Rock Guide
═══════════════════════════════════════════════════════════════ */

export function SakhrMascot({
  className,
  size = 180,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      className={cn(
        'mascot-float relative shrink-0',
        className
      )}
      style={{
        width: size,
        height: size,
      }}
    >
      {/* Small subtle glow */}
      <div
        className="pointer-events-none absolute inset-[8%] rounded-full bg-primary/10 blur-lg"
        aria-hidden="true"
      />

      {/* Mascot image — larger than the glow */}
      <div className="absolute inset-[-18%]">
        <Image
          src={SAKHR_IMAGE}
          alt="Sakhr — rock guide mascot"
          fill
          sizes={`${size * 1.4}px`}
          className="object-contain drop-shadow-[0_8px_18px_rgba(123,97,255,0.30)]"
          priority
        />
      </div>

      {/* Small image highlight */}
      <div
        className="pointer-events-none absolute left-[18%] top-[12%] h-[16%] w-[16%] rounded-full bg-white/15 blur-sm"
        aria-hidden="true"
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Yaqoot — Crystal Guide
═══════════════════════════════════════════════════════════════ */

export function YaqootMascot({
  className,
  size = 180,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      className={cn(
        'mascot-float-slow relative shrink-0',
        className
      )}
      style={{
        width: size,
        height: size,
      }}
    >
      {/* Small subtle glow */}
      <div
        className="pointer-events-none absolute inset-[8%] rounded-full bg-secondary/12 blur-lg"
        aria-hidden="true"
      />

      {/* Mascot image — larger than the glow */}
      <div className="absolute inset-[-18%]">
        <Image
          src={YAQOOT_IMAGE}
          alt="Yaqoot — crystal guide mascot"
          fill
          sizes={`${size * 1.4}px`}
          className="object-contain drop-shadow-[0_8px_20px_rgba(167,139,250,0.35)]"
          priority
        />
      </div>

      {/* Small crystal highlight */}
      <div
        className="pointer-events-none absolute left-[20%] top-[10%] h-[16%] w-[14%] rounded-full bg-white/18 blur-sm"
        aria-hidden="true"
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Mascot with Speech Bubble
═══════════════════════════════════════════════════════════════ */

export function MascotWithBubble({
  mascot,
  message,
  side = 'right',
  className,
  size = 180,
}: {
  mascot: 'sakhr' | 'yaqoot';
  message: string;
  side?: 'left' | 'right';
  className?: string;
  size?: number;
}) {
  const Mascot =
    mascot === 'sakhr'
      ? SakhrMascot
      : YaqootMascot;

  return (
    <div
      className={cn(
        'flex items-end gap-3',
        side === 'left' && 'flex-row-reverse',
        className
      )}
    >
      <Mascot size={size} />

      <div className="speech-bubble max-w-xs rounded-2xl border border-border bg-card px-5 py-3.5 text-sm font-medium text-foreground shadow-sm">
        {message}
      </div>
    </div>
  );
}