"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CLIENT_BRANDS, ClientCategory } from "./clientsData";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export function ClientGrid() {
  const t = useTranslations("Clients.sectors");
  const [filter, setFilter] = useState<string>("all");

  const categories: { id: "all" | ClientCategory; label: string; count: number }[] = [
    { id: "all", label: t("all"), count: CLIENT_BRANDS.length },
    {
      id: "owners",
      label: t("owners"),
      count: CLIENT_BRANDS.filter((b) => b.category === "owners").length,
    },
    {
      id: "contractors",
      label: t("contractors"),
      count: CLIENT_BRANDS.filter((b) => b.category === "contractors").length,
    },
    {
      id: "developers",
      label: t("developers"),
      count: CLIENT_BRANDS.filter((b) => b.category === "developers").length,
    },
  ];

  const sectionsToDisplay: {
    id: ClientCategory;
    label: string;
    brands: typeof CLIENT_BRANDS;
  }[] =
    filter === "all"
      ? [
          {
            id: "owners",
            label: t("owners"),
            brands: CLIENT_BRANDS.filter((b) => b.category === "owners"),
          },
          {
            id: "contractors",
            label: t("contractors"),
            brands: CLIENT_BRANDS.filter((b) => b.category === "contractors"),
          },
          {
            id: "developers",
            label: t("developers"),
            brands: CLIENT_BRANDS.filter((b) => b.category === "developers"),
          },
        ]
      : [
          {
            id: filter as ClientCategory,
            label: t(filter),
            brands: CLIENT_BRANDS.filter((b) => b.category === filter),
          },
        ];

  return (
    <div className="space-y-12">
      {/* Category Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setFilter(cat.id)}
            className={cn(
              "rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 inline-flex items-center gap-2",
              filter === cat.id
                ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20"
                : "border border-slate-200/80 bg-white text-slate-700 hover:border-brand-orange/50 hover:text-brand-orange dark:border-white/10 dark:bg-brand-carbon-elevated/50 dark:text-neutral-300 dark:hover:border-white/20 dark:hover:text-white"
            )}
          >
            <span>{cat.label}</span>
            <span
              className={cn(
                "px-1.5 py-0.5 rounded-full text-[10px] font-semibold leading-none",
                filter === cat.id
                  ? "bg-white/25 text-white"
                  : "bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-neutral-400"
              )}
            >
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Sections by Category */}
      <div className="space-y-12">
        {sectionsToDisplay.map((section) => (
          <div key={section.id} className="space-y-6">
            {/* Section Header */}
            <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-3">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-brand-orange" />
                <h3 className="text-lg sm:text-xl font-bold text-brand-charcoal dark:text-white">
                  {section.label}
                </h3>
              </div>
              <span className="text-xs font-semibold text-brand-slate dark:text-neutral-400 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-full">
                {section.brands.length}
              </span>
            </div>

            {/* Standardized Grid - Authentic Persistent Full Color */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 items-center justify-items-center">
              {section.brands.map((client) => (
                <div
                  key={client.name}
                  className="group relative flex h-28 sm:h-36 w-full items-center justify-center p-2 transition-all duration-300"
                >
                  <div className="relative h-24 sm:h-28 md:h-32 w-full max-w-[95%] flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      sizes="(max-width: 640px) 200px, 300px"
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                      unoptimized
                    />
                  </div>
                  <span className="sr-only">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
