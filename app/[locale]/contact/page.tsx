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
                Corporate Headquarters
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

            {/* Quick Assurance Box */}
            <div className="rounded-2xl border border-brand-orange/20 bg-brand-orange/5 p-6 space-y-3">
              <h4 className="text-sm font-bold text-brand-charcoal dark:text-white flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-brand-orange" />
                <span>Rapid Regulatory Turnaround</span>
              </h4>
              <p className="text-xs text-brand-slate dark:text-neutral-300 leading-relaxed">
                Direct statutory communication with Saudi Civil Defense and Salamah licensing officers allows MBCE to fast-track code compliance reviews and clearance approvals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
