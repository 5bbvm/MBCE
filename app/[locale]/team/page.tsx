import React from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { TeamCard, TeamMemberData } from "@/components/team/TeamCard";
import { TEAM_MEMBERS_CATALOG } from "@/components/team/teamData";
import { Users, Award, ShieldCheck, CheckCircle } from "lucide-react";

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <TeamContent />;
}

function TeamContent() {
  const t = useTranslations("Team");
  const tMembers = useTranslations("Team.members");

  const members: TeamMemberData[] = TEAM_MEMBERS_CATALOG.map((m) => ({
    id: m.key,
    name: tMembers(`${m.key}.name`),
    role: tMembers(`${m.key}.role`),
    credentials: tMembers(`${m.key}.credentials`),
    bio: tMembers(`${m.key}.bio`),
    imageSrc: m.imageSrc,
  }));

  return (
    <div className="py-16 sm:py-24 bg-brand-canvas dark:bg-brand-carbon text-start">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3.5 py-1.5 text-xs font-semibold text-brand-orange">
            <Users className="h-3.5 w-3.5" />
            <span>{t("badge")}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-charcoal dark:text-white tracking-tight leading-tight">
            {t("title")}
          </h1>

          <p className="text-base sm:text-xl text-brand-slate dark:text-neutral-300 leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        {/* Professional Qualifications Banner */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-card dark:border-white/10 dark:bg-brand-carbon-card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-start">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-brand-orange font-bold text-sm">
                <Award className="h-4 w-4" />
                <span>Saudi Council of Engineers</span>
              </div>
              <p className="text-xs sm:text-sm text-brand-slate dark:text-neutral-400 leading-relaxed">
                Licensed consultant engineers holding top-tier professional classifications across the Kingdom.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-brand-orange font-bold text-sm">
                <ShieldCheck className="h-4 w-4" />
                <span>Civil Defense Authorized</span>
              </div>
              <p className="text-xs sm:text-sm text-brand-slate dark:text-neutral-400 leading-relaxed">
                Direct statutory clearance authorization via the official Salamah regulatory licensing platform.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-brand-orange font-bold text-sm">
                <CheckCircle className="h-4 w-4" />
                <span>NFPA & SBC Specialists</span>
              </div>
              <p className="text-xs sm:text-sm text-brand-slate dark:text-neutral-400 leading-relaxed">
                Certified knowledge across international life safety standards and Saudi Building Code mandates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
