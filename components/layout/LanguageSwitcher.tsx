"use client";

import React, { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "header" | "footer" | "mobile";
}

export function LanguageSwitcher({ className, variant = "header" }: LanguageSwitcherProps) {
  const currentLocale = useLocale();
  const t = useTranslations("Nav");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const nextLocale = currentLocale === "en" ? "ar" : "en";
  const label = currentLocale === "en" ? "العربية" : "English";

  const handleToggle = () => {
    startTransition(() => {
      // pathname is preserved cleanly across route switches
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={isPending}
      aria-label={`Switch language to ${label}`}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200",
        "border-slate-200/80 bg-white/90 text-slate-700 shadow-sm hover:border-brand-orange/50 hover:bg-slate-50 hover:text-brand-orange",
        "dark:border-white/10 dark:bg-brand-carbon-elevated/70 dark:text-neutral-200 dark:hover:border-brand-orange/50 dark:hover:bg-brand-carbon-elevated dark:hover:text-white",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-brand-carbon",
        isPending && "opacity-60 cursor-wait",
        className
      )}
    >
      <Languages className="h-3.5 w-3.5 text-brand-orange transition-transform duration-300 group-hover:rotate-12" />
      <span className={cn("font-medium", currentLocale === "en" ? "font-arabic" : "font-sans")}>
        {label}
      </span>
      <span className="sr-only">{t("switchLanguage")}</span>
    </button>
  );
}
