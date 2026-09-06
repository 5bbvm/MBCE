import React from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  ShieldCheck,
  Target,
  Compass,
  Award,
  ArrowUpRight,
} from "lucide-react";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutContent />;
}

function AboutContent() {
  const t = useTranslations("About");
  const tCommon = useTranslations("Common");

  const codes = [
    {
      code: "SBC 801",
      title: "Saudi Fire Code",
      desc: "Mandatory Kingdom code governing active fire protection, egress, hazard classification, and chemical storage.",
    },
    {
      code: "SBC 201",
      title: "Saudi Building Code - General",
      desc: "Structural fire resistance ratings, occupancy classifications, building height & area limitations.",
    },
    {
      code: "NFPA Standards",
      title: "National Fire Protection Association",
      desc: "NFPA 13 (Sprinklers), NFPA 14 (Standpipes), NFPA 20 (Fire Pumps), NFPA 72 (Fire Alarms), NFPA 101 (Life Safety).",
    },
    {
      code: "IFC / IBC",
      title: "International Fire & Building Codes",
      desc: "Global baseline for complex mixed-use developments, smoke control modeling, and high-rise life safety.",
    },
    {
      code: "Civil Defense",
      title: "General Directorate of Saudi Civil Defense",
      desc: "Salamah statutory clearances, field inspection compliance, and final occupancy certifications.",
    },
    {
      code: "MODON / RC",
      title: "Industrial Cities & Royal Commission",
      desc: "Specialized industrial fire safety standards and high-hazard storage regulations.",
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-brand-canvas dark:bg-brand-carbon text-start">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Page Header */}
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3.5 py-1.5 text-xs font-semibold text-brand-orange">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>{t("badge")}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-charcoal dark:text-white tracking-tight leading-tight">
            {t("title")}
          </h1>

          <p className="text-base sm:text-xl text-brand-slate dark:text-neutral-300 leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Company Overview & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-brand-slate dark:text-neutral-300 leading-relaxed">
            <h2 className="text-2xl font-bold text-brand-charcoal dark:text-white tracking-tight">
              {t("overviewTitle")}
            </h2>
            <p className="border-s-2 border-brand-orange ps-4">
              {t("overviewP1")}
            </p>
            <p>{t("overviewP2")}</p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white hover:bg-brand-orange-hover shadow-sm transition-colors"
              >
                <span>{tCommon("viewAllProjects")}</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:border-slate-300 hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 transition-colors"
              >
                <span>{tCommon("allServices")}</span>
              </Link>
            </div>
          </div>

          {/* Quick Pillars Panel */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 space-y-6 shadow-card dark:border-white/10 dark:bg-brand-carbon-card dark:shadow-xl">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                <Target className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-brand-charcoal dark:text-white">{t("visionTitle")}</h3>
                <p className="text-xs sm:text-sm text-brand-slate dark:text-neutral-400 leading-relaxed">
                  {t("visionText")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-4 border-t border-slate-100 dark:border-white/10">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                <Compass className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-brand-charcoal dark:text-white">{t("missionTitle")}</h3>
                <p className="text-xs sm:text-sm text-brand-slate dark:text-neutral-400 leading-relaxed">
                  {t("missionText")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Stewardship Note */}
        <div className="rounded-2xl border border-brand-orange/20 bg-gradient-to-r from-brand-orange/10 via-white to-slate-50 p-8 sm:p-10 shadow-card dark:from-brand-orange/10 dark:via-brand-carbon-card dark:to-brand-carbon-card">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              {t("chairmanMessageTitle")}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-brand-charcoal dark:text-white">
              Executive Leadership & Strategic Stewardship
            </h3>
            <p className="text-sm sm:text-base text-brand-slate dark:text-neutral-300 leading-relaxed">
              {t("chairmanMessage")}
            </p>
            <div className="pt-2">
              <Link
                href="/team"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-orange hover:underline"
              >
                <span>Meet Executive Leadership & Specialists</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Regulatory Codes Grid */}
        <div className="space-y-8">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-charcoal dark:text-white">
              {t("codesTitle")}
            </h2>
            <p className="text-sm sm:text-base text-brand-slate dark:text-neutral-400">
              {t("codesSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {codes.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 space-y-3 shadow-card transition-all duration-200 hover:border-brand-orange/40 hover:shadow-card-hover dark:border-white/10 dark:bg-brand-carbon-card dark:hover:border-brand-orange/40 dark:hover:bg-brand-carbon-elevated"
              >
                <div className="inline-flex items-center gap-2 rounded-md bg-brand-orange/10 px-2.5 py-1 font-mono text-xs font-bold text-brand-orange">
                  <Award className="h-3.5 w-3.5" />
                  <span>{item.code}</span>
                </div>
                <h3 className="text-base font-bold text-brand-charcoal dark:text-white">{item.title}</h3>
                <p className="text-xs sm:text-sm text-brand-slate dark:text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
