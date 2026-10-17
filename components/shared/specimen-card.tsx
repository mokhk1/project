
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useApp } from '@/components/providers/app-provider';
import type { Specimen } from '@/lib/data';
import { cn } from '@/lib/utils';

type SpecimenCardProps = {
  specimen: Specimen;
  href: string;
  kind?: 'rock' | 'mineral';
  className?: string;
  priority?: boolean;
};

export function SpecimenCard({
  specimen,
  href,
  kind = 'rock',
  className,
  priority,
}: SpecimenCardProps) {
  const { locale, t } = useApp();

  const name = locale === 'ar' ? specimen.arabicName : specimen.name;
  const subtitle =
    locale === 'ar' ? specimen.arabicSubtitle : specimen.subtitle;

  return (
    <Link
      href={href}
      className={cn(
        'group relative flex min-w-0 flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl',
        className,
      )}
    >
      {/* Museum specimen image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={specimen.image}
          alt={name}
          fill
          sizes="(max-width: 639px) 50vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          priority={priority}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Museum number */}
        <span className="absolute start-1.5 top-1.5 sm:start-3 sm:top-3 max-w-[65%] truncate rounded-full bg-black/40 px-2 py-1 sm:px-2.5 text-[10px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur-md">
          {specimen.museumNumber}
        </span>

        {/* Specimen type */}
        <span
          className={cn(
            'absolute end-1.5 top-1.5 sm:end-3 sm:top-3 rounded-full px-2 py-1 sm:px-2.5 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md',
            kind === 'rock'
              ? 'bg-primary/85 text-primary-foreground'
              : 'bg-secondary/85 text-secondary-foreground',
          )}
        >
          {kind === 'rock'
            ? locale === 'ar'
              ? 'صخر'
              : 'Rock'
            : locale === 'ar'
              ? 'معدن'
              : 'Mineral'}
        </span>
      </div>

      {/* Museum display label */}
      <div className="flex min-w-0 flex-1 flex-col p-3 sm:p-5">
        {/* Scientific name */}
        <h3 className="line-clamp-2 text-base sm:text-lg font-semibold leading-snug tracking-tight text-foreground">
          {name}
        </h3>

        {/* Classification / subtitle */}
        {subtitle && (
          <p className="mt-1 line-clamp-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        )}

        {/* View specimen link */}
        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 sm:pt-5 text-xs sm:text-sm font-medium text-primary transition-all group-hover:gap-2.5">
          <span className="line-clamp-1">{t.home.viewDetails}</span>
          <ArrowUpRight
            className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100"
          />
        </span>
      </div>
    </Link>
  );
}
