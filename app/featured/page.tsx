'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

import { useApp } from '@/components/providers/app-provider';
import { PageHero } from '@/components/shared/page-hero';
import { Reveal } from '@/components/shared/reveal';
import { featured } from '@/lib/data/featured';
import { HERO_MOUNTAIN_ALT } from '@/lib/data/images';
import { cn } from '@/lib/utils';

const HERO_IMAGE = HERO_MOUNTAIN_ALT;

type Tab = 'all' | 'highlight' | 'exhibit' | 'library';

export default function FeaturedPage() {
  const { t } = useApp();

  const [tab, setTab] = useState<Tab>('all');

  const tabs = [
    { id: 'all', label: t.featured.tabs.all },
    { id: 'highlight', label: t.featured.tabs.Highlights },
    { id: 'exhibit', label: t.featured.tabs.exhibits },
    { id: 'library', label: t.featured.tabs.library },
  ] as const;

  const specimens = featured.filter((specimen) => {
    const tags =
      specimen.tags?.map((tag) => tag.toLowerCase()) ?? [];

    /* جميع العناصر */
    if (tab === 'all') {
      return true;
    }

    /* العينات المميزة */
    if (tab === 'highlight') {
      return (
        tags.includes('highlight') ||
        tags.includes('highlights')
      );
    }

    /* الأحافير والمعروضات */
    if (tab === 'exhibit') {
      return (
        tags.includes('exhibit') ||
        tags.includes('exhibits') ||
        tags.includes('fossil') ||
        tags.includes('fossils')
      );
    }

    /* المكتبة */
    if (tab === 'library') {
      return tags.includes('library');
    }

    return false;
  });

  return (
    <>
      <PageHero
        eyebrow={t.featured.eyebrow}
        title={t.featured.title}
        subtitle={t.featured.subtitle}
        image={HERO_IMAGE}
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Tabs */}

          <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2">
            {tabs.map((tb) => (
              <button
                key={tb.id}
                type="button"
                onClick={() => setTab(tb.id)}
                className={cn(
                  'shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-all',
                  tab === tb.id
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'border border-border bg-card text-foreground/70 hover:border-primary/40 hover:text-foreground'
                )}
              >
                {tb.label}
              </button>
            ))}
          </div>

          {/* Collection */}

          {specimens.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {specimens.map((specimen, i) => (
                <Reveal
                  key={`${tab}-${specimen.id}`}
                  delay={(i % 3) * 80}
                >
                  <FeaturedCard
                    specimen={specimen}
                    priority={i < 3}
                  />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="flex min-h-[350px] items-center justify-center">
              <p className="text-center text-muted-foreground">
                {t.rocks.empty}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Featured Card
═══════════════════════════════════════════════════════════════ */

function FeaturedCard({
  specimen,
  priority,
}: {
  specimen: {
    id: string;
    name: string;
    arabicName: string;
    image: string;
    museumNumber: string;
    tags?: string[];
  };
  priority: boolean;
}) {
  const { locale, t } = useApp();

  const name =
    locale === 'ar'
      ? specimen.arabicName
      : specimen.name;

  const secondaryName =
    locale === 'ar'
      ? specimen.name
      : specimen.arabicName;

  const tags =
    specimen.tags?.map((tag) => tag.toLowerCase()) ?? [];

  const isHighlight =
    tags.includes('highlight') ||
    tags.includes('highlights');

  const isExhibit =
    tags.includes('exhibit') ||
    tags.includes('exhibits') ||
    tags.includes('fossil') ||
    tags.includes('fossils');

  const isLibrary =
    tags.includes('library');

  let badge =
    locale === 'ar'
      ? 'عينة مميزة'
      : 'Featured';

  if (isExhibit) {
    badge =
      locale === 'ar'
        ? 'أحفورة'
        : 'Fossil';
  } else if (isLibrary) {
    badge =
      locale === 'ar'
        ? 'مكتبة'
        : 'Library';
  } else if (isHighlight) {
    badge =
      locale === 'ar'
        ? 'عينة مميزة'
        : 'Highlight';
  }

  return (
    <Link
      href={`/featured/${specimen.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
    >
      {/* Image */}

      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={specimen.image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          priority={priority}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

        {/* Museum Number */}

        <span className="absolute start-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur-md">
          {specimen.museumNumber}
        </span>

        {/* Category */}

        <span className="absolute end-3 top-3 rounded-full bg-secondary/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-secondary-foreground">
          {badge}
        </span>
      </div>

      {/* Museum Label */}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {name}
        </h3>

        <p
          className="mt-1 text-sm font-medium leading-relaxed text-muted-foreground"
          dir={locale === 'ar' ? 'ltr' : 'rtl'}
        >
          {secondaryName}
        </p>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-primary transition-all group-hover:gap-2.5">
          {t.home.viewDetails}

          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100"
          />
        </span>
      </div>
    </Link>
  );
}