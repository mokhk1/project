'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

import { useApp } from '@/components/providers/app-provider';
import { Reveal } from '@/components/shared/reveal';
import { featured } from '@/lib/data/featured';

export default function FeaturedDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { locale } = useApp();

  const specimen = featured.find((item) => item.id === params.id);

  if (!specimen) {
    return (
      <main className="min-h-screen bg-background px-4 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-foreground">
            {locale === 'ar'
              ? 'العينة غير موجودة'
              : 'Specimen Not Found'}
          </h1>

          <p className="mt-4 text-muted-foreground">
            {locale === 'ar'
              ? 'لم نتمكن من العثور على هذه العينة في مجموعة المتحف.'
              : 'This specimen could not be found in the museum collection.'}
          </p>

          <Link
            href="/featured"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" />

            {locale === 'ar'
              ? 'العودة إلى المعروضات'
              : 'Back to Featured'}
          </Link>
        </div>
      </main>
    );
  }

  /* ═══════════════════════════════════════════════════════════════
     Basic Information
  ═══════════════════════════════════════════════════════════════ */

  const name =
    locale === 'ar'
      ? specimen.arabicName
      : specimen.name;

  const secondaryName =
    locale === 'ar'
      ? specimen.name
      : specimen.arabicName;

  const description =
    locale === 'ar'
      ? specimen.arabicDescription
      : specimen.description;

  const geologicalDescription =
    locale === 'ar'
      ? specimen.arabicGeologicalDescription
      : specimen.geologicalDescription;

  const subtitle =
    locale === 'ar'
      ? specimen.arabicSubtitle
      : specimen.subtitle;

  const location =
    locale === 'ar'
      ? specimen.arabicLocation
      : specimen.location;

  const material =
    locale === 'ar'
      ? specimen.arabicMaterial
      : specimen.material;

  const significance =
    locale === 'ar'
      ? specimen.arabicSignificance
      : specimen.significance;

  const origin =
    locale === 'ar'
      ? specimen.arabicOrigin
      : specimen.origin;

  const discovery =
    locale === 'ar'
      ? specimen.arabicDiscovery
      : specimen.discovery;

  const exhibitType =
    locale === 'ar'
      ? specimen.arabicExhibitType
      : specimen.exhibitType;

  const exhibitStory =
    locale === 'ar'
      ? specimen.arabicExhibitStory
      : specimen.exhibitStory;

  const museumNote =
    locale === 'ar'
      ? specimen.arabicMuseumNote
      : specimen.museumNote;

  const type =
    locale === 'ar'
      ? specimen.arabicType
      : specimen.type;

  const color =
    locale === 'ar'
      ? specimen.arabicColor
      : specimen.color;

  const environment =
    locale === 'ar'
      ? specimen.arabicEnvironment
      : specimen.environment;

  /* ═══════════════════════════════════════════════════════════════
     Geological Age
     Optional so old specimens without age do not cause errors.
  ═══════════════════════════════════════════════════════════════ */

  const specimenWithAge = specimen as typeof specimen & {
    age?: string;
    arabicAge?: string;
  };

  const age =
    locale === 'ar'
      ? specimenWithAge.arabicAge
      : specimenWithAge.age;

  /* ═══════════════════════════════════════════════════════════════
     Details
  ═══════════════════════════════════════════════════════════════ */

  const details = [
    {
      label: locale === 'ar'
        ? 'نوع المعروض'
        : 'Exhibit Type',
      value: exhibitType,
    },

    {
      label: locale === 'ar'
        ? 'النوع'
        : 'Type',
      value: type,
    },

    {
      label: locale === 'ar'
        ? 'المادة'
        : 'Material',
      value: material,
    },

    {
      label: locale === 'ar'
        ? 'الموقع'
        : 'Location',
      value: location,
    },

    {
      label: locale === 'ar'
        ? 'الأصل'
        : 'Origin',
      value: origin,
    },

    {
      label: locale === 'ar'
        ? 'سنة الاكتشاف'
        : 'Discovery',
      value: discovery,
    },

    {
      label: locale === 'ar'
        ? 'العمر الجيولوجي'
        : 'Geological Age',
      value: age,
    },

    {
      label: locale === 'ar'
        ? 'اللون'
        : 'Color',
      value: color,
    },

    {
      label: locale === 'ar'
        ? 'البيئة'
        : 'Environment',
      value: environment,
    },

    {
      label: locale === 'ar'
        ? 'الأهمية'
        : 'Significance',
      value: significance,
    },
  ].filter((item) => item.value);

  return (
    <main className="min-h-screen bg-background">

      {/* ═══════════════════════════════════════════════════════════════
         Back
      ═══════════════════════════════════════════════════════════════ */}

      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Link
          href="/featured"
          className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1" />

          {locale === 'ar'
            ? 'العودة إلى المعروضات'
            : 'Back to Featured'}
        </Link>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
         Hero
      ═══════════════════════════════════════════════════════════════ */}

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">

          {/* Image */}
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
              <div className="relative aspect-[4/5] sm:aspect-[16/11]">
                <Image
                  src={specimen.image}
                  alt={name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 pt-24">
                <span className="inline-flex rounded-full bg-black/40 px-3 py-1.5 text-xs font-semibold tracking-wider text-white backdrop-blur-md">
                  {specimen.museumNumber}
                </span>
              </div>
            </div>
          </Reveal>

          {/* Information */}
          <Reveal delay={100}>
            <div className="lg:pt-6">

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                {subtitle}
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {name}
              </h1>

              <p
                className="mt-2 text-lg font-medium text-muted-foreground"
                dir={locale === 'ar' ? 'ltr' : 'rtl'}
              >
                {secondaryName}
              </p>

              <p className="mt-8 text-base leading-8 text-muted-foreground">
                {description}
              </p>

              <div className="mt-8 rounded-2xl border border-border bg-card p-6">
                <h2 className="text-lg font-semibold text-foreground">
                  {locale === 'ar'
                    ? 'الوصف الجيولوجي'
                    : 'Geological Description'}
                </h2>

                <p className="mt-3 leading-8 text-muted-foreground">
                  {geologicalDescription}
                </p>
              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
         Details
      ═══════════════════════════════════════════════════════════════ */}

      {details.length > 0 && (
        <section className="border-y border-border bg-card/40">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

            <Reveal>
              <div className="mb-8">

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  {locale === 'ar'
                    ? 'معلومات العينة'
                    : 'Specimen Information'}
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
                  {locale === 'ar'
                    ? 'تفاصيل المعروض'
                    : 'Exhibit Details'}
                </h2>

              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {details.map((item, index) => (
                <Reveal
                  key={item.label}
                  delay={(index % 3) * 70}
                >
                  <div className="rounded-2xl border border-border bg-background p-5">

                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>

                    <p className="mt-2 text-base font-semibold leading-7 text-foreground">
                      {item.value}
                    </p>

                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
         Story
      ═══════════════════════════════════════════════════════════════ */}

      {exhibitStory && (
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                {locale === 'ar'
                  ? 'قصة المعروض'
                  : 'Exhibit Story'}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
                {locale === 'ar'
                  ? `قصة ${name}`
                  : `The Story Behind ${name}`}
              </h2>

              <p className="mt-6 text-base leading-8 text-muted-foreground">
                {exhibitStory}
              </p>

            </div>
          </Reveal>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
         Museum Note
      ═══════════════════════════════════════════════════════════════ */}

      {museumNote && (
        <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl bg-primary/10 p-8 sm:p-10">

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                {locale === 'ar'
                  ? 'ملاحظة المتحف'
                  : 'Museum Note'}
              </p>

              <p className="mt-4 text-lg leading-8 text-foreground">
                {museumNote}
              </p>

            </div>
          </Reveal>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
         Gallery
      ═══════════════════════════════════════════════════════════════ */}

      {specimen.gallery && specimen.gallery.length > 1 && (
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">

          <h2 className="mb-8 text-3xl font-bold text-foreground">
            {locale === 'ar'
              ? 'معرض الصور'
              : 'Gallery'}
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {specimen.gallery.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card"
              >
                <Image
                  src={image}
                  alt={`${name} ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>

        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
         Bottom Navigation
      ═══════════════════════════════════════════════════════════════ */}

      <section className="border-t border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-8 sm:px-6 lg:px-8">

          <Link
            href="/featured"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" />

            {locale === 'ar'
              ? 'جميع المعروضات'
              : 'All Featured Specimens'}
          </Link>

          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            DETHAR Geological Museum
          </span>

        </div>
      </section>

    </main>
  );
}