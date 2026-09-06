"use client";

import React from "react";
import Image from "next/image";
import { MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  imageSrc: string;
  focalAnchor?: "top" | "center" | "bottom";
  aspectRatio?: "16/10" | "4/3" | "3/4";
}

interface ProjectCardProps {
  project: ProjectData;
  className?: string;
  aspectRatio?: "16/10" | "4/3" | "3/4";
  priority?: boolean;
}

export function ProjectCard({
  project,
  className,
  aspectRatio = "16/10",
  priority = false,
}: ProjectCardProps) {
  const aspectClass =
    aspectRatio === "4/3"
      ? "aspect-[4/3]"
      : aspectRatio === "3/4"
      ? "aspect-[3/4]"
      : "aspect-[16/10]";

  const focalClass =
    project.focalAnchor === "top"
      ? "object-top"
      : project.focalAnchor === "bottom"
      ? "object-bottom"
      : "object-center";

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300",
        "border-slate-200/80 bg-white shadow-card hover:border-brand-orange/40 hover:shadow-card-hover",
        "dark:border-white/10 dark:bg-brand-carbon-card dark:hover:border-brand-orange/40 dark:hover:shadow-2xl dark:hover:shadow-black/50",
        className
      )}
    >
      {/* Media Container with explicit aspect ratio */}
      <div className={cn("relative w-full overflow-hidden bg-slate-100 dark:bg-brand-carbon-pure", aspectClass)}>
        <Image
          src={project.imageSrc}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className={cn(
            "object-cover transition-transform duration-700 ease-out group-hover:scale-105",
            focalClass
          )}
        />

        {/* Ambient Gradient Overlay for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-75 group-hover:opacity-60 transition-opacity" />

        {/* Sector Tag Badge */}
        <div className="absolute top-3.5 start-3.5 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-900/80 backdrop-blur-md px-3 py-1 text-xs font-medium text-white shadow-md">
            <ShieldCheck className="h-3 w-3 text-brand-orange" />
            <span>{project.category}</span>
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 text-start">
        <div className="space-y-2">
          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs text-brand-orange font-semibold">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span>{project.location}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-brand-charcoal group-hover:text-brand-orange transition-colors dark:text-white">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-brand-slate line-clamp-2 leading-relaxed dark:text-neutral-400">
            {project.description}
          </p>
        </div>

        {/* Bottom Status bar */}
        <div className="mt-4 pt-3 flex items-center justify-between border-t border-slate-100 dark:border-white/5 text-xs text-slate-500 dark:text-neutral-400">
          <span className="font-mono text-slate-500 dark:text-neutral-400">MBEC Fire & Life Safety</span>
          <div className="inline-flex items-center gap-1 text-brand-orange font-semibold group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
            <span>SBC 801 Compliant</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
