import React from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  Flame,
  Bell,
  DoorOpen,
  Wind,
  AirVent,
  Gauge,
  Activity,
  ShieldCheck,
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
      id: "fireProtection",
      number: "01",
      title: tItems("fireProtection.title"),
      desc: tItems("fireProtection.description"),
      icon: Flame,
      points: [
        tItems("fireProtection.points.0"),
        tItems("fireProtection.points.1"),
        tItems("fireProtection.points.2"),
        tItems("fireProtection.points.3"),
      ],
      deliverables: "Hydraulic models, NFPA sprinkler layouts, foam/clean-agent drawings, fire pump calculations",
    },
    {
      id: "fireAlarm",
      number: "02",
      title: tItems("fireAlarm.title"),
      desc: tItems("fireAlarm.description"),
      icon: Bell,
      points: [
        tItems("fireAlarm.points.0"),
        tItems("fireAlarm.points.1"),
        tItems("fireAlarm.points.2"),
        tItems("fireAlarm.points.3"),
      ],
      deliverables: "Control panel schematics, detector layout plans, cause-and-effect matrix, BMS integration",
    },
    {
      id: "lifeSafety",
      number: "03",
      title: tItems("lifeSafety.title"),
      desc: tItems("lifeSafety.description"),
      icon: DoorOpen,
      points: [
        tItems("lifeSafety.points.0"),
        tItems("lifeSafety.points.1"),
        tItems("lifeSafety.points.2"),
        tItems("lifeSafety.points.3"),
      ],
      deliverables: "Egress capacity sheets, travel distance audits, fire-rated compartment plans, exit signage schedules",
    },
    {
      id: "smokeControl",
      number: "04",
      title: tItems("smokeControl.title"),
      desc: tItems("smokeControl.description"),
      icon: Wind,
      points: [
        tItems("smokeControl.points.0"),
        tItems("smokeControl.points.1"),
        tItems("smokeControl.points.2"),
        tItems("smokeControl.points.3"),
      ],
      deliverables: "Smoke zone layouts, fan exhaust rate calculations, damper schedules, sequence of operations",
    },
    {
      id: "ventilation",
      number: "05",
      title: tItems("ventilation.title"),
      desc: tItems("ventilation.description"),
      icon: AirVent,
      points: [
        tItems("ventilation.points.0"),
        tItems("ventilation.points.1"),
        tItems("ventilation.points.2"),
        tItems("ventilation.points.3"),
      ],
      deliverables: "Air-change rate models, car park & basement ventilation schematics, fan selection curves, IAQ audits",
    },
    {
      id: "pressurization",
      number: "06",
      title: tItems("pressurization.title"),
      desc: tItems("pressurization.description"),
      icon: Gauge,
      points: [
        tItems("pressurization.points.0"),
        tItems("pressurization.points.1"),
        tItems("pressurization.points.2"),
        tItems("pressurization.points.3"),
      ],
      deliverables: "Differential pressure calculations, leakage assessments, door-opening force checks, fan sizing",
    },
    {
      id: "cfd",
      number: "07",
      title: tItems("cfd.title"),
      desc: tItems("cfd.description"),
      icon: Activity,
      points: [
        tItems("cfd.points.0"),
        tItems("cfd.points.1"),
        tItems("cfd.points.2"),
        tItems("cfd.points.3"),
      ],
      deliverables: "3D smoke spread simulations, temperature & visibility contours, ASET vs RSET comparative validation",
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
                      <div className="flex items-center gap-2 mb-1">
                        <span className="inline-block rounded-md bg-brand-orange/10 px-2 py-0.5 text-xs font-mono font-bold text-brand-orange dark:bg-brand-orange/20">
                          {service.number}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-neutral-400">
                          {t("disciplineTag")}
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-brand-charcoal group-hover:text-brand-orange transition-colors dark:text-white">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-brand-slate dark:text-neutral-300 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Key Scope Points */}
                  <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-white/5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
                      {t("engineeringScope")}
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
                    {t("complianceBadge")}
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-orange hover:text-brand-orange-hover"
                  >
                    <span>{t("inquireButton")}</span>
                    <ArrowUpRight className="h-4 w-4 rtl:rotate-90" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scope Note Banner from Document */}
        <div className="rounded-2xl border border-brand-orange/20 bg-brand-orange/5 p-6 sm:p-8 text-center max-w-4xl mx-auto dark:border-brand-orange/30 dark:bg-brand-orange/10 shadow-sm">
          <p className="text-xs sm:text-sm text-brand-charcoal dark:text-neutral-200 leading-relaxed font-medium">
            {t("scopeNote")}
          </p>
        </div>

        {/* Bottom Consultation Banner */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-card dark:border-white/10 dark:bg-brand-carbon-card">
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-charcoal dark:text-white">
            {t("ctaTitle")}
          </h3>
          <p className="text-sm sm:text-base text-brand-slate dark:text-neutral-400 max-w-2xl mx-auto">
            {t("ctaSubtitle")}
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-8 py-4 text-sm sm:text-base font-bold text-white shadow-lg shadow-brand-orange/25 hover:bg-brand-orange-hover transition-colors"
            >
              <span>{t("ctaButton")}</span>
              <ArrowUpRight className="h-4 w-4 rtl:rotate-90" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
