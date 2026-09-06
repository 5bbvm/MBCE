import React from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { ClientGrid } from "@/components/clients/ClientGrid";
import { ClientMarquee } from "@/components/clients/ClientMarquee";
import { Handshake } from "lucide-react";

export default async function ClientsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ClientsContent />;
}

function ClientsContent() {
  const t = useTranslations("Clients");

  return (
    <div className="py-16 sm:py-24 bg-brand-canvas dark:bg-brand-carbon text-start">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3.5 py-1.5 text-xs font-semibold text-brand-orange">
            <Handshake className="h-3.5 w-3.5" />
            <span>{t("badge")}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-charcoal dark:text-white tracking-tight leading-tight">
            {t("title")}
          </h1>

          <p className="text-base sm:text-xl text-brand-slate dark:text-neutral-300 leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Continuous Dynamic Marquee - True Color */}
        <div className="overflow-hidden py-2">
          <ClientMarquee />
        </div>

        {/* Categorized Filterable Grid */}
        <div className="space-y-6">
          <div className="border-b border-slate-200/80 dark:border-white/10 pb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-charcoal dark:text-white">
              Strategic Partners &amp; Client Registry
            </h2>
            <p className="text-xs sm:text-sm text-brand-slate dark:text-neutral-400 mt-1">
              Filter by industry sector to explore MBEC&apos;s Fire &amp; Life Safety track record.
            </p>
          </div>

          <ClientGrid />
        </div>
      </div>
    </div>
  );
}
