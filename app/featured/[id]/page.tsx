
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import { useApp } from '@/components/providers/app-provider';
import { featured } from '@/lib/data/featured';

export default function FeaturedDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { locale } = useApp();
  const isArabic = locale === 'ar';

  const specimen = featured.find((item) => item.id === params.id);

  if (!specimen) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-background px-4 py-20">
        <div className="max-w-lg text-center">
          <h1 className="text-2xl font-bold text-foreground">
            {isArabic ? 'العينة غير موجودة' : 'Specimen Not Found'}
          </h1>

          <p className="mt-3 leading-7 text-muted-foreground">
            {isArabic
              ? 'لم نتمكن من العثور على هذه العينة في مجموعة المتحف.'
              : 'This specimen could not be found in the museum collection.'}
          </p>

          <Link
            href="/featured"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
            {isArabic ? 'العودة إلى المعروضات' : 'Back to Collection'}
          </Link>
        </div>
      </main>
    );
  }

  const currentIndex = featured.findIndex(
    (item) => item.id === specimen.id
  );

  const previousSpecimen =
    currentIndex > 0 ? featured[currentIndex - 1] : null;

  const nextSpecimen =
    currentIndex < featured.length - 1
      ? featured[currentIndex + 1]
      : null;

  const name = isArabic ? specimen.arabicName : specimen.name;
  const secondaryName = isArabic ? specimen.name : specimen.arabicName;

  const subtitle = isArabic
    ? specimen.arabicSubtitle
    : specimen.subtitle;

  const description = isArabic
    ? specimen.arabicDescription
    : specimen.description;

  const geologicalDescription = isArabic
    ? specimen.arabicGeologicalDescription
    : specimen.geologicalDescription;

  const location = isArabic
    ? specimen.arabicLocation
    : specimen.location;

  const material = isArabic
    ? specimen.arabicMaterial
    : specimen.material;

  const origin = isArabic
    ? specimen.arabicOrigin
    : specimen.origin;

  const discovery = isArabic
    ? specimen.arabicDiscovery
    : specimen.discovery;

  const significance = isArabic
    ? specimen.arabicSignificance
    : specimen.significance;

  const type = isArabic ? specimen.arabicType : specimen.type;

  const color = isArabic ? specimen.arabicColor : specimen.color;

  const environment = isArabic
    ? specimen.arabicEnvironment
    : specimen.environment;

  const exhibitStory = isArabic
    ? specimen.arabicExhibitStory
    : specimen.exhibitStory;

  const specimenWithAge = specimen as typeof specimen & {
    age?: string;
    arabicAge?: string;
  };

  const age = isArabic
    ? specimenWithAge.arabicAge
    : specimenWithAge.age;

  const details = [
    {
      label: isArabic ? 'التصنيف' : 'Classification',
      value: type,
    },
    {
      label: isArabic ? 'المادة' : 'Material',
      value: material,
    },
    {
      label: isArabic ? 'الموقع' : 'Location',
      value: location,
    },
    {
      label: isArabic ? 'الأصل' : 'Origin',
      value: origin,
    },
    {
      label: isArabic ? 'سنة الاكتشاف' : 'Discovery',
      value: discovery,
    },
    {
      label: isArabic ? 'العمر الجيولوجي' : 'Geological Age',
      value: age,
    },
    {
      label: isArabic ? 'اللون' : 'Color',
      value: color,
    },
    {
      label: isArabic ? 'البيئة الجيولوجية' : 'Geological Environment',
      value: environment,
    },
    {
      label: isArabic ? 'الأهمية' : 'Significance',
      value: significance,
    },
  ].filter((item) => item.value);

  const previousName = previousSpecimen
    ? isArabic
      ? previousSpecimen.arabicName
      : previousSpecimen.name
    : '';

  const nextName = nextSpecimen
    ? isArabic
      ? nextSpecimen.arabicName
      : nextSpecimen.name
    : '';

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumb and back link */}

      <div className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/featured"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
            {isArabic ? 'جميع المعروضات' : 'All Exhibits'}
          </Link>

          <span className="text-xs font-medium text-muted-foreground">
            {specimen.museumNumber}
          </span>
        </div>
      </div>

      {/* Main specimen information */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Specimen image */}

          <div className="min-w-0">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
              <div className="relative aspect-[4/3] sm:aspect-[5/4]">
                <Image
                  src={specimen.image}
                  alt={name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="border-t border-border bg-card px-4 py-3 sm:px-5">
                <p className="text-xs text-muted-foreground">
                  {isArabic ? 'رقم المتحف' : 'Museum Number'}
                </p>
                <p className="mt-1 font-semibold text-foreground">
                  {specimen.museumNumber}
                </p>
              </div>
            </div>
          </div>

          {/* Specimen description */}

          <div className="min-w-0 lg:py-3">
            {subtitle && (
              <p className="text-sm font-medium text-primary">
                {subtitle}
              </p>
            )}

            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              {name}
            </h1>

            {secondaryName && (
              <p
                className="mt-2 text-base text-muted-foreground"
                dir={isArabic ? 'ltr' : 'rtl'}
              >
                {secondaryName}
              </p>
            )}

            {description && (
              <div className="mt-6">
                <h2 className="text-lg font-semibold text-foreground">
                  {isArabic ? 'نبذة عن المعروض' : 'About This Exhibit'}
                </h2>

                <p className="mt-3 whitespace-pre-line text-sm leading-8 text-muted-foreground sm:text-base">
                  {description}
                </p>
              </div>
            )}

            {geologicalDescription && (
              <div className="mt-6 rounded-xl border border-border bg-card p-5 sm:p-6">
                <h2 className="text-lg font-semibold text-foreground">
                  {isArabic ? 'الوصف الجيولوجي' : 'Geological Description'}
                </h2>

                <p className="mt-3 whitespace-pre-line text-sm leading-8 text-muted-foreground sm:text-base">
                  {geologicalDescription}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Specimen details */}

      {details.length > 0 && (
        <section className="border-y border-border bg-card/40">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                {isArabic ? 'معلومات المعروض' : 'Exhibit Information'}
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {isArabic
                  ? 'البيانات الجيولوجية المتوفرة عن هذا المعروض.'
                  : 'Available geological information about this exhibit.'}
              </p>
            </div>

            <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="min-w-0 rounded-xl border border-border bg-background p-4 sm:p-5"
                >
                  <dt className="text-sm text-muted-foreground">
                    {item.label}
                  </dt>

                  <dd className="mt-2 break-words text-sm font-semibold leading-7 text-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Exhibit story */}

      {exhibitStory && (
        <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-foreground">
              {isArabic ? 'قصة المعروض' : 'The Story Behind the Exhibit'}
            </h2>

            <p className="mt-4 whitespace-pre-line text-sm leading-8 text-muted-foreground sm:text-base">
              {exhibitStory}
            </p>
          </div>
        </section>
      )}

      {/* Image gallery */}

      {specimen.gallery && specimen.gallery.length > 1 && (
        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              {isArabic ? 'معرض الصور' : 'Image Gallery'}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {specimen.gallery.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card"
              >
                <Image
                  src={image}
                  alt={`${name} - ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Previous and next exhibits */}

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-foreground">
              {isArabic ? 'استكشف المزيد' : 'Explore More'}
            </h2>

            <span className="text-sm tabular-nums text-muted-foreground">
              {currentIndex + 1} / {featured.length}
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {/* Previous exhibit */}

            {previousSpecimen ? (
              <Link
                href={`/featured/${previousSpecimen.id}`}
                className="flex min-w-0 items-center gap-4 rounded-xl border border-border bg-background p-4 transition-colors hover:border-primary/50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground">
                  {isArabic ? (
                    <ChevronRight className="h-5 w-5" />
                  ) : (
                    <ChevronLeft className="h-5 w-5" />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs text-muted-foreground">
                    {isArabic ? 'المعروض السابق' : 'Previous Exhibit'}
                  </p>

                  <p className="mt-1 truncate font-semibold text-foreground">
                    {previousName}
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    {previousSpecimen.museumNumber}
                  </p>
                </div>
              </Link>
            ) : (
              <div className="flex items-center gap-4 rounded-xl border border-border bg-background p-4 opacity-60">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border">
                  {isArabic ? (
                    <ChevronRight className="h-5 w-5" />
                  ) : (
                    <ChevronLeft className="h-5 w-5" />
                  )}
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">
                    {isArabic ? 'المعروض السابق' : 'Previous Exhibit'}
                  </p>

                  <p className="mt-1 text-sm font-medium text-foreground">
                    {isArabic ? 'أول معروض' : 'First Exhibit'}
                  </p>
                </div>
              </div>
            )}

            {/* Next exhibit */}

            {nextSpecimen ? (
              <Link
                href={`/featured/${nextSpecimen.id}`}
                className="flex min-w-0 items-center gap-4 rounded-xl border border-border bg-background p-4 transition-colors hover:border-primary/50 sm:flex-row-reverse sm:text-end"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground">
                  {isArabic ? (
                    <ChevronLeft className="h-5 w-5" />
                  ) : (
                    <ChevronRight className="h-5 w-5" />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs text-muted-foreground">
                    {isArabic ? 'المعروض التالي' : 'Next Exhibit'}
                  </p>

                  <p className="mt-1 truncate font-semibold text-foreground">
                    {nextName}
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    {nextSpecimen.museumNumber}
                  </p>
                </div>
              </Link>
            ) : (
              <div className="flex items-center gap-4 rounded-xl border border-border bg-background p-4 opacity-60 sm:flex-row-reverse sm:text-end">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border">
                  {isArabic ? (
                    <ChevronLeft className="h-5 w-5" />
                  ) : (
                    <ChevronRight className="h-5 w-5" />
                  )}
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">
                    {isArabic ? 'المعروض التالي' : 'Next Exhibit'}
                  </p>

                  <p className="mt-1 text-sm font-medium text-foreground">
                    {isArabic ? 'آخر معروض' : 'Last Exhibit'}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              href="/featured"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {isArabic ? 'عرض جميع المعروضات' : 'View All Exhibits'}
              <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
