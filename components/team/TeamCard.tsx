"use client";

import React from "react";
import Image from "next/image";
import { Award, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TeamMemberData {
  id: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  imageSrc?: string;
}

interface TeamCardProps {
  member: TeamMemberData;
  className?: string;
}

export function TeamCard({ member, className }: TeamCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300",
        "border-slate-200/80 bg-white p-6 shadow-card hover:border-brand-orange/40 hover:shadow-card-hover text-start",
        "dark:border-white/10 dark:bg-brand-carbon-card dark:hover:border-brand-orange/40 dark:hover:shadow-2xl dark:hover:shadow-black/50",
        className
      )}
    >
      {/* 1:1 Avatar Frame with Subtle Gradient Border */}
      <div className="relative mx-auto mb-6 w-full max-w-[220px] aspect-square rounded-2xl p-1 bg-gradient-to-b from-brand-orange/20 via-slate-100 to-slate-50 dark:from-brand-orange/30 dark:via-white/10 dark:to-transparent shadow-inner">
        <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-50 border border-slate-200/80 dark:bg-gradient-to-b dark:from-brand-carbon-elevated dark:to-brand-carbon dark:border-white/10 flex items-center justify-center">
          {member.imageSrc ? (
            <Image
              src={member.imageSrc}
              alt={member.name}
              fill
              unoptimized
              sizes="(max-width: 640px) 180px, 220px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-slate-100 text-brand-orange dark:bg-brand-carbon-elevated">
              <Shield className="h-16 w-16 opacity-40" />
            </div>
          )}

          {/* Subtle bottom vignette */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white/70 to-transparent dark:from-brand-carbon-card/90" />
        </div>
      </div>

      {/* Member Details */}
      <div className="flex flex-1 flex-col justify-between space-y-3">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-orange">
            <Award className="h-3.5 w-3.5 shrink-0" />
            <span>{member.role}</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-brand-charcoal tracking-tight group-hover:text-brand-orange transition-colors dark:text-white">
            {member.name}
          </h3>

          <p className="text-xs font-medium text-slate-500 font-mono dark:text-neutral-400">
            {member.credentials}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-brand-slate leading-relaxed pt-2 border-t border-slate-100 dark:border-white/5 dark:text-neutral-300">
          {member.bio}
        </p>
      </div>
    </div>
  );
}
