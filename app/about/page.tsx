'use client';

import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';

import { useApp } from '@/components/providers/app-provider';
import { PageHero } from '@/components/shared/page-hero';
import { Reveal } from '@/components/shared/reveal';

import { HERO_MOUNTAIN, ABOUT_FIELDWORK } from '@/lib/data/images';

const HERO_IMAGE = HERO_MOUNTAIN;
const STORY_IMAGE = ABOUT_FIELDWORK;

export default function AboutPage() {
  const { t } = useApp();

  const team = [
    {
      name: t.about.teamMember1,
      role: t.about.teamMember1Role,

      // صورة محمد
      image: '/phmu/mohammed.jpg',

      // LinkedIn
      linkedin:
        'https://www.linkedin.com/in/mohammed-a-khubrani-1619763a1?utm_source=share_via&utm_content=profile&utm_medium=member_ios',

      // X
      x: 'https://x.com/geo_moha1?s=11',

      // Email
      email: 'mohakhbr@gmail.com',
    },

    {
      name: t.about.teamMember2,
      role: t.about.teamMember2Role,

      // صورة ليان
      image: '/phmu/layan.jpg',

      // LinkedIn
      linkedin:
        'https://www.linkedin.com/in/layan-hakami?utm_source=share_via&utm_content=profile&utm_medium=member_ios',

      // Email
      email: 'layan.ahmed.hakami@gmail.com',
    },
  ];

  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <PageHero
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        image={HERO_IMAGE}
      />

      {/* ───────────────────────── Our Story ───────────────────────── */}
      <section className="bg-background py-32 sm:py-40">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">

            <Reveal>
              <div className="relative aspect-[5/6] overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src={STORY_IMAGE}
                  alt={t.about.storyTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                <span className="h-px w-8 bg-accent/60" />
                {t.about.eyebrow}
              </span>

              <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {t.about.storyTitle}
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                {t.about.storyBody}
              </p>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ───────────────────────── Project Team ───────────────────────── */}
      <section className="bg-muted/30 py-32 sm:py-40">
        <div className="mx-auto max-w-5xl px-6 sm:px-6 lg:px-8">

          {/* Section Header */}
          <Reveal className="flex flex-col items-center gap-5 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              <span className="h-px w-8 bg-primary/50" />

              {t.about.teamEyebrow}

              <span className="h-px w-8 bg-primary/50" />
            </span>

            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {t.about.teamTitle}
            </h2>

            <p className="text-base font-medium text-muted-foreground">
              {t.about.teamSubtitle}
            </p>
          </Reveal>

          {/* ───────────────────────── Team Cards ───────────────────────── */}
          <div className="mt-20 grid gap-8 sm:grid-cols-2 sm:gap-10">

            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 100}>

                <div className="card-luxury group flex h-full flex-col items-center rounded-[2rem] border border-border bg-card p-9 text-center shadow-sm">

                  {/* ───────────────────────── Profile Image ───────────────────────── */}
                  <div className="relative h-20 w-20">

                    {/* Soft subtle glow */}
                    <div
                      className="absolute -inset-2 rounded-full blur-xl opacity-10 transition-all duration-700 group-hover:opacity-20 group-hover:blur-2xl"
                      style={{
                        background:
                          i === 0
                            ? 'hsl(var(--primary))'
                            : 'hsl(var(--secondary))',
                      }}
                    />

                    {/* Image Circle */}
                    <div className="relative h-20 w-20 overflow-hidden rounded-full border border-border bg-background shadow-md transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>

                  </div>

                  {/* Name */}
                  <h3 className="mt-7 text-xl font-bold tracking-tight text-foreground">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="mt-1.5 text-sm font-medium text-muted-foreground">
                    {member.role}
                  </p>

                  {/* ───────────────────────── Social Links ───────────────────────── */}
                  <div className="mt-7 flex items-center gap-3">

                    {/* LinkedIn */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} — ${t.about.teamLinkedIn}`}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/50 text-muted-foreground backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary hover:shadow-md"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>

                    {/* X — Mohammed only */}
                    {'x' in member && member.x && (
                      <a
                        href={member.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} — X`}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/50 text-muted-foreground backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary hover:shadow-md"
                      >
                        <span className="text-[17px] font-semibold leading-none">
                          𝕏
                        </span>
                      </a>
                    )}

                    {/* Email */}
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`${member.name} — ${t.about.teamEmail}`}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/50 text-muted-foreground backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary hover:shadow-md"
                    >
                      <Mail className="h-5 w-5" />
                    </a>

                  </div>

                </div>

              </Reveal>
            ))}

          </div>

          {/* ───────────────────────── Collaboration Statement ───────────────────────── */}
          <Reveal delay={200}>
            <div className="mx-auto mt-16 max-w-3xl">

              <div className="rounded-[1.5rem] border border-border bg-card/50 px-8 py-8 text-center shadow-sm sm:px-10 sm:py-10">

                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {t.about.teamStatement}
                </p>

              </div>

            </div>
          </Reveal>

        </div>
      </section>
    </>
  );
}