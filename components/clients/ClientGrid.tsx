"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CLIENT_BRANDS } from "./clientsData";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export function ClientGrid() {
  const t = useTranslations("Clients.sectors");
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Clients" },
    { id: "giga", label: t("giga") },
    { id: "aviation", label: t("aviation") },
    { id: "financial", label: t("financial") },
    { id: "commercial", label: t("commercial") },
  ];

  const filteredBrands =
    filter === "all"
      ? CLIENT_BRANDS
      : CLIENT_BRANDS.filter((b) => b.category === filter);

  return (
    <div className="space-y-8">
      {/* Sector Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setFilter(cat.id)}
            className={cn(
              "rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200",
              filter === cat.id
                ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20"
                : "border border-slate-200/80 bg-white text-slate-700 hover:border-brand-orange/50 hover:text-brand-orange dark:border-white/10 dark:bg-brand-carbon-elevated/50 dark:text-neutral-300 dark:hover:border-white/20 dark:hover:text-white"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Standardized Grid - Authentic Persistent Full Color */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {filteredBrands.map((client) => (
          <div
            key={client.name}
            className="group relative flex aspect-[16/10] items-center justify-center rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-brand-orange/50 hover:shadow-md dark:border-white/10 dark:bg-brand-carbon-card dark:hover:bg-brand-carbon-elevated dark:hover:border-brand-orange/50"
          >
            <div className="relative h-12 w-full max-w-[130px]">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                sizes="(max-width: 640px) 140px, 200px"
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="sr-only">{client.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
