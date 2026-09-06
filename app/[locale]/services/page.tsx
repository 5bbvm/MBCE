import React from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  Flame,
  ShieldCheck,
  FileCheck2,
  TrendingDown,
  Gauge,
  Building2,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ServicesContent />;
}

function ServicesContent() {
  const t = useTranslations("Services");
  const tItems = useTranslations("Services.items");

  const services = [
    {
      id: "fls",
      title: tItems("fls.title"),
      desc: tItems("fls.description"),
      icon: Flame,
      points: [
        tItems("fls.points.0"),
        tItems("fls.points.1"),
        tItems("fls.points.2"),
        tItems("fls.points.3"),
      ],
      deliverables: "Hydraulic models, NFPA sprinkler layouts, smoke purge airflow simulations, egress capacity sheets",
    },
    {
      id: "civilDefense",
      title: tItems("civilDefense.title"),
      desc: tItems("civilDefense.description"),
      icon: ShieldCheck,
      points: [
        tItems("civilDefense.points.0"),
        tItems("civilDefense.points.1"),
        tItems("civilDefense.points.2"),
        tItems("civilDefense.points.3"),
      ],
      deliverables: "Salamah platform clearance approvals, official compliance certificates, occupancy licenses",
    },
    {
      id: "buildingCode",
      title: tItems("buildingCode.title"),
      desc: tItems("buildingCode.description"),
      icon: FileCheck2,
      points: [
        tItems("buildingCode.points.0"),
        tItems("buildingCode.points.1"),
        tItems("buildingCode.points.2"),
        tItems("buildingCode.points.3"),
      ],
      deliverables: "SBC 201/801 variance audits, fire resistance rating validation, hazardous storage compliance",
    },
    {
      id: "valueEngineering",
      title: tItems("valueEngineering.title"),
      desc: tItems("valueEngineering.description"),
      icon: TrendingDown,
      points: [
        tItems("valueEngineering.points.0"),
        tItems("valueEngineering.points.1"),
        tItems("valueEngineering.points.2"),
        tItems("valueEngineering.points.3"),
      ],
      deliverables: "CAPEX/OPEX optimization reports, alternative suppression system modeling, lifecycle cost savings",
    },
    {
      id: "testingCommissioning",
      title: tItems("testingCommissioning.title"),
      desc: tItems("testingCommissioning.description"),
      icon: Gauge,
      points: [
        tItems("testingCommissioning.points.0"),
        tItems("testingCommissioning.points.1"),
        tItems("testingCommissioning.points.2"),
        tItems("testingCommissioning.points.3"),
      ],
      deliverables: "Pump flow performance curves, stairwell differential pressure reports, integrated fire alarm cause & effect test matrices",
    },
    {
      id: "mep",
      title: tItems("mep.title"),
      desc: tItems("mep.description"),
      icon: Building2,
      points: [
        tItems("mep.points.0"),
        tItems("mep.points.1"),
        tItems("mep.points.2"),
        tItems("mep.points.3"),
      ],
      deliverables: "Dedicated fire water tank designs, server room clean gas suppression, commercial kitchen hoods, industrial plumbing",
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-brand-canvas dark:bg-brand-carbon text-start">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
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

        {/* Detailed Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-card transition-all duration-300 hover:border-brand-orange/50 hover:shadow-card-hover dark:border-white/10 dark:bg-brand-carbon-card dark:hover:border-brand-orange/50 dark:hover:bg-brand-carbon-elevated"
              >
                <div className="space-y-6">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange border border-brand-orange/25 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-brand-charcoal group-hover:text-brand-orange transition-colors dark:text-white">
                        {service.title}
                      </h2>
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-neutral-400">
                        MBCE Core Discipline
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-brand-slate dark:text-neutral-300 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Key Scope Points */}
                  <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-white/5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
                      Engineering Scope & Compliance
                    </h4>
                    <ul className="space-y-2.5">
                      {service.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-neutral-300">
                          <CheckCircle2 className="h-4 w-4 text-brand-orange shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-neutral-400 font-mono">
                    SBC & NFPA Compliant
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-orange hover:text-brand-orange-hover"
                  >
                    <span>Inquire for Project</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-card dark:border-white/10 dark:bg-brand-carbon-card">
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-charcoal dark:text-white">
            Need a Comprehensive Code Compliance Review?
          </h3>
          <p className="text-sm sm:text-base text-brand-slate dark:text-neutral-400 max-w-2xl mx-auto">
            Our certified engineering consultants review architectural blueprints, hydraulic calculations, and Salamah licensing submissions to eliminate delays.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-8 py-4 text-sm sm:text-base font-bold text-white shadow-lg shadow-brand-orange/25 hover:bg-brand-orange-hover transition-colors"
            >
              <span>Schedule an Engineering Consultation</span>
              <ArrowUpRight className="h-4 w-4 rtl:rotate-90" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
