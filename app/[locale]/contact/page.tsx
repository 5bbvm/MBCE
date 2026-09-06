import React from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { ContactForm } from "@/components/contact/ContactForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  CheckCircle,
  Building2,
} from "lucide-react";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactContent />;
}

function ContactContent() {
  const t = useTranslations("Contact");
  const tDetails = useTranslations("Contact.details");
  const tCommon = useTranslations("Common");

  const branchList = [
    {
      key: "jeddah",
      city: tDetails("branches.jeddah.city"),
      tag: tDetails("branches.jeddah.tag"),
      desc: tDetails("branches.jeddah.desc"),
      isHQ: true,
    },
    {
      key: "riyadh",
      city: tDetails("branches.riyadh.city"),
      tag: tDetails("branches.riyadh.tag"),
      desc: tDetails("branches.riyadh.desc"),
      isHQ: false,
    },
    {
      key: "makkah",
      city: tDetails("branches.makkah.city"),
      tag: tDetails("branches.makkah.tag"),
      desc: tDetails("branches.makkah.desc"),
      isHQ: false,
    },
    {
      key: "abha",
      city: tDetails("branches.abha.city"),
      tag: tDetails("branches.abha.tag"),
      desc: tDetails("branches.abha.desc"),
      isHQ: false,
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-brand-canvas dark:bg-brand-carbon text-start">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
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

        {/* Grid: Form on one side, Corporate Details on the other */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Inquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Official Information & Direct Liaison */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 space-y-6 shadow-card dark:border-white/10 dark:bg-brand-carbon-card dark:shadow-xl">
              <h3 className="text-lg font-bold text-brand-charcoal dark:text-white border-b border-slate-100 dark:border-white/10 pb-4">
                {tDetails("officeHeader")}
              </h3>

              <div className="space-y-4 text-sm text-brand-slate dark:text-neutral-300">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-neutral-400">
                      {tDetails("officeTitle")}
                    </h4>
                    <p className="text-brand-charcoal dark:text-white font-medium mt-0.5">
                      {tDetails("address")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-neutral-400">
                      {tDetails("workingHoursTitle")}
                    </h4>
                    <p className="text-brand-charcoal dark:text-white font-medium mt-0.5">
                      {tDetails("workingHours")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-neutral-400">
                      {tDetails("phoneTitle")}
                    </h4>
                    <a
                      href={`tel:${tCommon("phone").replace(/\s+/g, "")}`}
                      dir="ltr"
                      className="text-brand-charcoal dark:text-white font-mono font-medium hover:text-brand-orange transition-colors inline-block mt-0.5"
                    >
                      {tCommon("phone")}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-neutral-400">
                      {tDetails("emailTitle")}
                    </h4>
                    <div className="space-y-0.5 mt-0.5">
                      <a
                        href={`mailto:${tCommon("email")}`}
                        className="text-brand-charcoal dark:text-white font-medium hover:text-brand-orange transition-colors block"
                      >
                        {tCommon("email")}
                      </a>
                      <a
                        href={`mailto:${tCommon("directorEmail")}`}
                        className="text-slate-500 dark:text-neutral-400 text-xs hover:text-brand-orange transition-colors block"
                      >
                        {tCommon("directorEmail")} (Direct)
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accreditations badge */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/10 space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
                  {tDetails("licenseTitle")}
                </h4>
                <p className="text-xs text-brand-slate dark:text-neutral-400 leading-relaxed">
                  {tDetails("licenseText")}
                </p>
              </div>
            </div>

            {/* Branch Network Card */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 space-y-5 shadow-card dark:border-white/10 dark:bg-brand-carbon-card dark:shadow-xl">
              <div className="flex items-center gap-3 border-b border-slate-100 dark:border-white/10 pb-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-charcoal dark:text-white">
                    {tDetails("branchesTitle")}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-neutral-400">
                    {tDetails("branchesSubtitle")}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {branchList.map((b) => (
                  <div
                    key={b.key}
                    className="relative flex flex-col justify-between rounded-xl border border-slate-200/70 bg-slate-50/70 p-3.5 transition-all duration-200 hover:border-brand-orange/40 hover:bg-white dark:border-white/10 dark:bg-brand-carbon-elevated dark:hover:border-brand-orange/40 dark:hover:bg-brand-carbon-card"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-bold text-sm text-brand-charcoal dark:text-white flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-brand-orange shrink-0" />
                        {b.city}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          b.isHQ
                            ? "bg-brand-orange text-white"
                            : "bg-brand-orange/10 text-brand-orange border border-brand-orange/20"
                        }`}
                      >
                        {b.tag}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-neutral-400 leading-snug">
                      {b.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Assurance Box */}
            <div className="rounded-2xl border border-brand-orange/20 bg-brand-orange/5 p-6 space-y-3">
              <h4 className="text-sm font-bold text-brand-charcoal dark:text-white flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-brand-orange" />
                <span>{tDetails("assuranceTitle")}</span>
              </h4>
              <p className="text-xs text-brand-slate dark:text-neutral-300 leading-relaxed">
                {tDetails("assuranceDesc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
