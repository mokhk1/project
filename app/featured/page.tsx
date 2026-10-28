
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

import { useApp } from '@/components/providers/app-provider';
import { PageHero } from '@/components/shared/page-hero';
import { featured } from '@/lib/data/featured';
import { HERO_MOUNTAIN_ALT } from '@/lib/data/images';
import { cn } from '@/lib/utils';

const HERO_IMAGE = HERO_MOUNTAIN_ALT;

type Tab = 'all' | 'highlight' | 'exhibit' | 'library';

export default function FeaturedPage() {
  const { t, locale } = useApp();
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

    if (tab === 'all') {
      return true;
    }

    if (tab === 'highlight') {
      return (
        tags.includes('highlight') ||
        tags.includes('highlights')
      );
    }

    if (tab === 'exhibit') {
      return (
        tags.includes('exhibit') ||
        tags.includes('exhibits') ||
        tags.includes('fossil') ||
        tags.includes('fossils')
      );
    }

    if (tab === 'library') {
      return tags.includes('library');
    }

    return false;
  });

  const sortedSpecimens = [...specimens].sort((a, b) => {
    const nameA =
      (locale === 'ar' ? a.arabicName : a.name)?.trim() ?? '';

    const nameB =
      (locale === 'ar' ? b.arabicName : b.name)?.trim() ?? '';

    return nameA.localeCompare(
      nameB,
      locale === 'ar' ? 'ar' : 'en',
      {
        sensitivity: 'base',
        numeric: true,
      }
    );
  });

  const counterTitle =
    tab === 'all'
      ? locale === 'ar'
        ? 'جميع المجموعات'
        : 'All Collections'
      : tab === 'highlight'
        ? t.featured.tabs.Highlights
        : tab === 'exhibit'
          ? t.featured.tabs.exhibits
          : t.featured.tabs.library;

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

          {/* Collection Count */}

          <div
            className="mb-6 flex items-center justify-between gap-4"
            aria-label={
              locale === 'ar'
                ? 'عدد عناصر المجموعة'
                : 'Collection item count'
            }
          >
            <p className="text-sm text-muted-foreground">
              {counterTitle}
            </p>

            <p
              className="text-sm font-medium text-muted-foreground"
              aria-live="polite"
            >
              <span className="font-bold tabular-nums text-foreground">
                {sortedSpecimens.length}
              </span>{' '}
              {locale === 'ar' ? 'عنصر' : 'items'}
            </p>
          </div>

          {/* Tabs */}

          <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2">
            {tabs.map((tb) => (
              <button
                key={tb.id}
                type="button"
                onClick={() => setTab(tb.id)}
                aria-pressed={tab === tb.id}
                className={cn(
                  'shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-colors',
                  tab === tb.id
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border bg-card text-foreground/70 hover:border-primary/40 hover:text-foreground'
                )}
              >
                {tb.label}
              </button>
            ))}
          </div>

          {/* Collection */}

          {sortedSpecimens.length > 0 ? (
            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
              {sortedSpecimens.map((specimen, i) => (
                <FeaturedCard
                  key={`${tab}-${specimen.id}`}
                  specimen={specimen}
                  priority={i < 3}
                />
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

  return (
    <Link
      href={`/featured/${specimen.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      {/* Image */}

      <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[4/5]">
        <Image
          src={specimen.image}
          alt={name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          priority={priority}
        />

        {/* Museum Number Only */}

        <span className="absolute left-1/2 top-3 z-10 -translate-x-1/2 rounded-full border border-white/20 bg-black/35 px-4 py-1.5 text-xs font-semibold tracking-wider text-white shadow-sm backdrop-blur-sm">
          {specimen.museumNumber}
        </span>
      </div>

      {/* Museum Label */}

      <div className="flex flex-1 flex-col p-3 sm:p-6">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {name}
        </h3>

        <p
          className="mt-1 text-sm font-medium leading-relaxed text-muted-foreground"
          dir={locale === 'ar' ? 'ltr' : 'rtl'}
        >
          {secondaryName}
        </p>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-primary">
          {t.home.viewDetails}

          <ArrowUpRight
            className="h-4 w-4 rtl:-scale-x-100"
          />
        </span>
      </div>
    </Link>
  );
}
