
'use client';

import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  Building2,
  GraduationCap,
} from 'lucide-react';
import { useApp } from '@/components/providers/app-provider';
import { PageHero } from '@/components/shared/page-hero';
import { Reveal } from '@/components/shared/reveal';

import { CONTACT_COAST } from '@/lib/data/images';

const HERO_IMAGE = CONTACT_COAST;

// College location
const COLLEGE_LAT = 21.4964374;
const COLLEGE_LNG = 39.2460327;

const COLLEGE_MAP_URL =
  `https://www.google.com/maps/search/?api=1&query=${COLLEGE_LAT},${COLLEGE_LNG}`;

const COLLEGE_WEBSITE =
  'https://kau.edu.sa/faculty/ar/earth-sciences';

const UNIVERSITY_WEBSITE = 'https://kau.edu.sa/ar';

export default function ContactPage() {
  const { t } = useApp();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status === 'sending') return;

    setStatus('sending');

    setTimeout(() => {
      setStatus('sent');
      e.currentTarget?.reset();
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  const info = [
    {
      icon: Mail,
      label: t.contact.emailLabel,
      value: 'rekhalil@kau.edu.sa',
      dir: 'ltr',
    },
    {
      icon: Phone,
      label: t.contact.phoneLabel,
      value: '0565345304',
      dir: 'ltr',
    },
    {
      icon: MapPin,
      label: t.contact.locationLabel,
      value: t.contact.location,
      dir: undefined,
    },
    {
      icon: Clock,
      label: t.contact.hoursLabel,
      value: t.contact.hours,
      dir: undefined,
    },
  ];

  const locations = [
    {
      icon: GraduationCap,
      title: 'King Abdulaziz University',
      description: 'Jeddah, Saudi Arabia',
      href: UNIVERSITY_WEBSITE,
      linkText: 'Visit University Website',
    },
    {
      icon: Building2,
      title: 'The School of Mines',
      description: 'King Abdulaziz University, Jeddah',
      href: COLLEGE_WEBSITE,
      linkText: 'Visit College Website',
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
        image={HERO_IMAGE}
      />

      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <Reveal>
              <form
                onSubmit={onSubmit}
                className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      {t.contact.name}
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      {t.contact.email}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      dir="ltr"
                      className="rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-foreground"
                  >
                    {t.contact.subject}
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    required
                    className="rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="resize-none rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className="ripple group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md hover:brightness-110 disabled:opacity-70"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground" />
                      {t.contact.sending}
                    </>
                  ) : status === 'sent' ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      {t.contact.success}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {t.contact.send}
                    </>
                  )}
                </button>
              </form>
            </Reveal>

            {/* Contact Information, Map and Official Websites */}
            <Reveal delay={120}>
              <div className="flex flex-col gap-6">
                {/* Contact Information */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {info.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <item.icon className="h-5 w-5" />
                      </div>

                      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {item.label}
                      </p>

                      <p
                        className="mt-1 text-sm font-medium text-foreground"
                        dir={item.dir as 'ltr' | 'rtl' | undefined}
                      >
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* College Location Map */}
                <a
                  href={COLLEGE_MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open The School of Mines location in Google Maps"
                  className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
                >
                  <iframe
                    title="The School of Mines location"
                    src={`https://maps.google.com/maps?q=${COLLEGE_LAT},${COLLEGE_LNG}&z=16&output=embed`}
                    className="pointer-events-none absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-card/95 px-4 py-3 backdrop-blur-sm">
                    <div className="flex min-w-0 items-center gap-2">
                      <MapPin className="h-5 w-5 shrink-0 text-primary" />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-foreground">
                          The School of Mines
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {COLLEGE_LAT}, {COLLEGE_LNG}
                        </p>
                      </div>
                    </div>

                    <ExternalLink className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </a>

                {/* Official University and College Websites */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Official Websites -------- مواقع رسمية
                  </h3>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {locations.map((location) => (
                      <a
                        key={location.title}
                        href={location.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex min-w-0 items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <location.icon className="h-5 w-5" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-foreground">
                            {location.title}
                          </p>

                          <p className="mt-1 text-xs leading-5 text-muted-foreground">
                            {location.description}
                          </p>

                          <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                            {location.linkText}
                            <ExternalLink className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
