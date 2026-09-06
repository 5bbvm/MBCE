"use client";

import React, { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Menu, X, ShieldCheck, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services") },
    { href: "/portfolio", label: t("portfolio") },
    { href: "/team", label: t("team") },
    { href: "/clients", label: t("clients") },
    { href: "/contact", label: t("contact") },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm dark:bg-brand-carbon/90 dark:border-white/10 dark:shadow-xl dark:shadow-black/20 py-3"
          : "bg-white/70 backdrop-blur-md border-b border-slate-200/50 dark:bg-brand-carbon/70 dark:border-white/5 py-4"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo - Auto switches with theme */}
          <div className="flex items-center gap-3">
            <BrandLogo variant="auto" format="svg" className="py-1" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3 py-1.5 text-xs xl:text-sm font-medium transition-colors duration-200 rounded-md",
                    active
                      ? "text-brand-charcoal font-semibold dark:text-white"
                      : "text-brand-slate hover:text-brand-charcoal hover:bg-slate-100/70 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-white/5"
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-2 -bottom-1 h-0.5 bg-brand-orange rounded-full shadow-[0_0_8px_rgba(255,87,0,0.6)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle, Language Switcher & Consultation CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
            <LanguageSwitcher />

            <Link
              href="/contact"
              className={cn(
                "group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs xl:text-sm font-semibold text-white",
                "bg-brand-orange hover:bg-brand-orange-hover shadow-md shadow-brand-orange/20 transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-brand-carbon"
              )}
            >
              <span>{t("requestConsultation")}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile triggers */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <LanguageSwitcher />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200/80 bg-white/95 backdrop-blur-2xl px-4 pt-3 pb-6 dark:border-white/10 dark:bg-brand-carbon-elevated/95 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-brand-orange/10 text-brand-orange font-semibold"
                      : "text-slate-700 hover:bg-slate-100 dark:text-neutral-300 dark:hover:bg-white/5 dark:hover:text-white"
                  )}
                >
                  <span>{link.label}</span>
                  {active && <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-200/80 dark:border-white/10">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-orange px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-orange/20"
              >
                <ShieldCheck className="h-4 w-4" />
                <span>{t("requestConsultation")}</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
