import React from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { ProjectCard, ProjectData } from "@/components/projects/ProjectCard";
import { PROJECTS_CATALOG } from "@/components/projects/projectsData";
import { ShieldCheck } from "lucide-react";

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PortfolioContent />;
}

function PortfolioContent() {
  const t = useTranslations("Portfolio");
  const tItems = useTranslations("Portfolio.items");

  const projects: ProjectData[] = PROJECTS_CATALOG.map((p) => ({
    id: p.key,
    title: tItems(`${p.key}.title`),
    category: tItems(`${p.key}.category`),
    location: tItems(`${p.key}.location`),
    description: tItems(`${p.key}.description`),
    imageSrc: p.imageSrc,
    focalAnchor: p.focalAnchor,
  }));

  return (
    <div className="py-16 sm:py-24 bg-brand-canvas dark:bg-brand-carbon text-start">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
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

        {/* Standardized Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              aspectRatio="16/10"
              priority={idx < 3}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
