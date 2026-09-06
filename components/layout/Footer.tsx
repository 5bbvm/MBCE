import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { BrandLogo } from "@/components/brand/BrandLogo";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Award,
  Flame,
  CheckCircle2,
} from "lucide-react";

export function Footer() {
  const tNav = useTranslations("Nav");
  const tCommon = useTranslations("Common");
  const tFooter = useTranslations("Footer");
  const tServices = useTranslations("Services.items");

  const quickLinks = [
    { href: "/", label: tNav("home") },
    { href: "/about", label: tNav("about") },
    { href: "/services", label: tNav("services") },
    { href: "/portfolio", label: tNav("portfolio") },
    { href: "/team", label: tNav("team") },
    { href: "/clients", label: tNav("clients") },
    { href: "/contact", label: tNav("contact") },
  ];

  const serviceLinks = [
    { href: "/services", label: tServices("fls.title") },
    { href: "/services", label: tServices("civilDefense.title") },
    { href: "/services", label: tServices("buildingCode.title") },
    { href: "/services", label: tServices("valueEngineering.title") },
    { href: "/services", label: tServices("testingCommissioning.title") },
    { href: "/services", label: tServices("mep.title") },
  ];

  return (
    <footer className="bg-brand-carbon-pure text-neutral-300 border-t border-white/10 pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Col 1: Corporate Profile & Bio */}
          <div className="lg:col-span-4 space-y-5 text-start">
            <BrandLogo variant="dark" format="svg" className="justify-start" />
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              {tFooter("aboutText")}
            </p>

            {/* Badges */}
            <div className="pt-2 flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-orange" />
                <span>Civil Defense Approved</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
                <Award className="h-3.5 w-3.5 text-brand-orange" />
                <span>SBC 201 / 801</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 text-start">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              {tFooter("quickLinks")}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-brand-orange transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Disciplines */}
          <div className="lg:col-span-3 text-start">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              {tFooter("disciplines")}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((s, idx) => (
                <li key={idx}>
                  <Link
                    href={s.href}
                    className="text-neutral-400 hover:text-brand-orange transition-colors line-clamp-1 inline-block"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Official Contact & Headquarters */}
          <div className="lg:col-span-3 space-y-4 text-start">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              {tFooter("contact")}
            </h3>

            <div className="space-y-3 text-sm text-neutral-400">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-brand-orange shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-neutral-300 font-medium block">
                    {tCommon("headquarters")}
                  </span>
                  <span className="text-xs text-neutral-400 block leading-relaxed">
                    {tCommon("branchesSummary")}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-orange shrink-0" />
                <a
                  href={`tel:${tCommon("phone").replace(/\s+/g, "")}`}
                  dir="ltr"
                  className="hover:text-brand-orange transition-colors font-mono"
                >
                  {tCommon("phone")}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-orange shrink-0" />
                <a
                  href={`mailto:${tCommon("email")}`}
                  className="hover:text-brand-orange transition-colors"
                >
                  {tCommon("email")}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <div className="rounded-xl border border-brand-orange/20 bg-brand-orange/5 p-3 text-xs text-neutral-300">
                <p className="font-semibold text-brand-orange mb-0.5">
                  {tCommon("vision2030")}
                </p>
                <p className="text-neutral-400 leading-normal">
                  {tFooter("civilDefenseNotice")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p className="text-start">
            &copy; {new Date().getFullYear()} {tCommon("companyName")} ({tCommon("companyShort")}). {tFooter("copyright")}
          </p>
          <div className="flex items-center gap-6">
            <span className="text-neutral-400">NFPA • SBC • IFC • IBC</span>
            <span className="inline-flex items-center gap-1 text-brand-orange font-medium">
              <Flame className="h-3.5 w-3.5" />
              <span>Fire & Life Safety Certified</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
