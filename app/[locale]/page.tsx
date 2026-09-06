import React from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ProjectCard, ProjectData } from "@/components/projects/ProjectCard";
import { PROJECTS_CATALOG } from "@/components/projects/projectsData";
import { ClientMarquee } from "@/components/clients/ClientMarquee";
import {
  Flame,
  FileCheck2,
  CheckCircle2,
  ArrowUpRight,
  ChevronRight,
  TrendingDown,
  Gauge,
  ShieldCheck,
  Building2,
} from "lucide-react";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent />;
}

function HomeContent() {
  const tHome = useTranslations("Home");
  const tNav = useTranslations("Nav");
  const tServices = useTranslations("Services.items");
  const tPortfolio = useTranslations("Portfolio.items");

  const servicesList = [
    {
      key: "fls",
      title: tServices("fls.title"),
      desc: tServices("fls.description"),
      icon: Flame,
      points: [
        tServices("fls.points.0"),
        tServices("fls.points.1"),
        tServices("fls.points.2"),
      ],
    },
    {
      key: "civilDefense",
      title: tServices("civilDefense.title"),
      desc: tServices("civilDefense.description"),
      icon: ShieldCheck,
      points: [
        tServices("civilDefense.points.0"),
        tServices("civilDefense.points.1"),
        tServices("civilDefense.points.2"),
      ],
    },
    {
      key: "buildingCode",
      title: tServices("buildingCode.title"),
      desc: tServices("buildingCode.description"),
      icon: FileCheck2,
      points: [
        tServices("buildingCode.points.0"),
        tServices("buildingCode.points.1"),
        tServices("buildingCode.points.2"),
      ],
    },
    {
      key: "valueEngineering",
      title: tServices("valueEngineering.title"),
      desc: tServices("valueEngineering.description"),
      icon: TrendingDown,
      points: [
        tServices("valueEngineering.points.0"),
        tServices("valueEngineering.points.1"),
        tServices("valueEngineering.points.2"),
      ],
    },
    {
      key: "testingCommissioning",
      title: tServices("testingCommissioning.title"),
      desc: tServices("testingCommissioning.description"),
      icon: Gauge,
      points: [
        tServices("testingCommissioning.points.0"),
        tServices("testingCommissioning.points.1"),
        tServices("testingCommissioning.points.2"),
      ],
    },
    {
      key: "mep",
      title: tServices("mep.title"),
      desc: tServices("mep.description"),
      icon: Building2,
      points: [
        tServices("mep.points.0"),
        tServices("mep.points.1"),
        tServices("mep.points.2"),
      ],
    },
  ];

  const featuredProjects: ProjectData[] = PROJECTS_CATALOG.filter(
    (p) => p.featured
  )
    .slice(0, 4)
    .map((p) => ({
      id: p.key,
      title: tPortfolio(`${p.key}.title`),
      category: tPortfolio(`${p.key}.category`),
      location: tPortfolio(`${p.key}.location`),
      description: tPortfolio(`${p.key}.description`),
      imageSrc: p.imageSrc,
      focalAnchor: p.focalAnchor,
    }));

  return (
    <div className="flex flex-col">
      {/* Hero Section - Airy Executive Light Base */}
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36 bg-gradient-to-b from-white via-brand-canvas to-slate-100/60 dark:from-brand-carbon dark:via-brand-carbon-card/50 dark:to-brand-carbon">
        {/* Architectural Grid Backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* Ambient Focal Glow */}
        <div className="absolute top-1/4 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-orange/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-1.5 text-xs font-semibold text-brand-orange shadow-sm mb-8 backdrop-blur-sm">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>{tHome("badge")}</span>
          </div>

          {/* Headline */}
          <h1 className="mx-auto max-w-5xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-charcoal dark:text-white leading-[1.15]">
            {tHome("heroTitle")}
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-3xl text-sm sm:text-base md:text-lg text-brand-slate dark:text-neutral-300 leading-relaxed">
            {tHome("heroSubtitle")}
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-brand-orange/25 transition-all duration-200 hover:bg-brand-orange-hover hover:scale-105"
            >
              <span>{tHome("ctaPrimary")}</span>
              <ArrowUpRight className="h-4 w-4 rtl:rotate-90" />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/90 px-7 py-3.5 text-sm sm:text-base font-semibold text-slate-800 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-slate-300 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              <span>{tHome("ctaSecondary")}</span>
              <ChevronRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>

          {/* Stats Metric Bar */}
          <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-200/80 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-start sm:text-center space-y-1">
              <p className="text-2xl sm:text-4xl font-black text-brand-charcoal dark:text-white font-mono tracking-tight">
                {tHome("stats.projects")}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-400 font-medium">
                {tHome("stats.projectsLabel")}
              </p>
            </div>

            <div className="text-start sm:text-center space-y-1">
              <p className="text-2xl sm:text-4xl font-black text-brand-charcoal dark:text-white font-mono tracking-tight">
                {tHome("stats.experience")}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-400 font-medium">
                {tHome("stats.experienceLabel")}
              </p>
            </div>

            <div className="text-start sm:text-center space-y-1">
              <p className="text-2xl sm:text-4xl font-black text-brand-orange font-mono tracking-tight">
                {tHome("stats.approvals")}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-400 font-medium">
                {tHome("stats.approvalsLabel")}
              </p>
            </div>

            <div className="text-start sm:text-center space-y-1">
              <p className="text-2xl sm:text-4xl font-black text-brand-charcoal dark:text-white font-mono tracking-tight">
                {tHome("stats.specialists")}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-400 font-medium">
                {tHome("stats.specialistsLabel")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Marquee Section - Continuous True Color */}
      <section className="border-y border-slate-200/80 bg-slate-50/50 py-10 dark:border-white/10 dark:bg-brand-carbon-pure">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-6">
          <p className="text-xs uppercase tracking-widest font-semibold text-slate-500 dark:text-neutral-400">
            {tHome("clientsSectionTitle")}
          </p>
        </div>
        <ClientMarquee />
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-28 bg-brand-canvas dark:bg-brand-carbon">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              {tNav("services")}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-charcoal dark:text-white tracking-tight">
              {tHome("servicesSectionTitle")}
            </h2>
            <p className="text-sm sm:text-base text-brand-slate dark:text-neutral-400">
              {tHome("servicesSectionSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesList.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.key}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-card transition-all duration-300 hover:border-brand-orange/40 hover:shadow-card-hover dark:border-white/10 dark:bg-brand-carbon-card dark:hover:border-brand-orange/40 dark:hover:shadow-2xl text-start"
                >
                  <div className="space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange border border-brand-orange/20 transition-transform group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-brand-charcoal group-hover:text-brand-orange transition-colors dark:text-white">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-brand-slate leading-relaxed dark:text-neutral-400">
                      {service.desc}
                    </p>

                    <ul className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/5">
                      {service.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-neutral-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-brand-orange shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-orange hover:text-brand-orange-hover"
                    >
                      <span>Explore Technical Scope</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:border-brand-orange/50 hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 transition-colors"
            >
              <span>View All 6 Engineering Disciplines</span>
              <ChevronRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section className="py-20 sm:py-28 bg-slate-50/50 border-t border-slate-200/80 dark:bg-brand-carbon-pure dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 text-start">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                {tNav("portfolio")}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-charcoal dark:text-white tracking-tight">
                {tHome("projectsSectionTitle")}
              </h2>
              <p className="text-sm sm:text-base text-brand-slate dark:text-neutral-400 max-w-2xl">
                {tHome("projectsSectionSubtitle")}
              </p>
            </div>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange hover:text-brand-orange-hover shrink-0"
            >
              <span>All 9 Landmark Projects</span>
              <ArrowUpRight className="h-4 w-4 rtl:rotate-90" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                aspectRatio="4/3"
                priority={idx === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Direct Call to Action Banner */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-brand-orange/15 via-brand-orange/10 to-slate-100 border-y border-brand-orange/25 dark:from-brand-orange/20 dark:via-brand-orange/10 dark:to-brand-carbon">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-start sm:flex sm:items-center sm:justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal dark:text-white">
              {tHome("ctaBannerTitle")}
            </h2>
            <p className="text-sm sm:text-base text-brand-slate dark:text-neutral-300">
              {tHome("ctaBannerSubtitle")}
            </p>
          </div>

          <div className="mt-6 sm:mt-0 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-brand-orange/25 hover:bg-brand-orange-hover transition-all duration-200"
            >
              <span>{tHome("ctaBannerButton")}</span>
              <ArrowUpRight className="h-4 w-4 rtl:rotate-90" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
