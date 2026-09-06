"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Send, CheckCircle2, AlertCircle, Building2, User, Mail, Phone, MapPin, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  location: string;
  message: string;
}

interface FormErrors {
  fullName?: boolean;
  email?: boolean;
  phone?: boolean;
  serviceType?: boolean;
  message?: boolean;
}

export function ContactForm() {
  const t = useTranslations("Contact.form");

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = true;
    if (!formData.email.trim() || !formData.email.includes("@")) newErrors.email = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    if (!formData.serviceType) newErrors.serviceType = true;
    if (!formData.message.trim()) newErrors.message = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Format mailto payload
    const recipient = "info@modernbuildingceo.com.sa";
    const ccRecipient = "mmaayah@modernbuildingceo.com.sa";
    const subject = encodeURIComponent(
      `[MBEC Engineering Consultation] ${formData.serviceType} - ${formData.company || formData.fullName}`
    );

    const bodyText = [
      "MBEC ENGINEERING INQUIRY SUBMISSION",
      "==================================",
      "",
      `Client / Engineer: ${formData.fullName}`,
      `Company / Developer: ${formData.company || "N/A"}`,
      `Email Address: ${formData.email}`,
      `Direct Contact Number: ${formData.phone}`,
      `Service Discipline: ${formData.serviceType}`,
      `Project Location: ${formData.location || "Kingdom of Saudi Arabia"}`,
      "",
      "PROJECT SCOPE & TECHNICAL REQUIREMENTS:",
      "----------------------------------------",
      formData.message,
      "",
      "==================================",
      "Submitted via MBEC Official Corporate Profile Portal",
    ].join("\n");

    const mailtoUrl = `mailto:${recipient}?cc=${ccRecipient}&subject=${subject}&body=${encodeURIComponent(
      bodyText
    )}`;

    setSubmitted(true);

    // Trigger user mail client fallback cleanly
    window.location.href = mailtoUrl;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 md:p-10 shadow-card text-start dark:border-white/10 dark:bg-brand-carbon-card dark:shadow-2xl">
      <div className="mb-8 space-y-2 border-b border-slate-100 dark:border-white/10 pb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-brand-charcoal dark:text-white tracking-tight">
          {t("title")}
        </h3>
        <p className="text-xs sm:text-sm text-brand-slate dark:text-neutral-400">
          {t("mailtoFallbackNotice")}
        </p>
      </div>

      {submitted && (
        <div className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-800 dark:text-emerald-300">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
          <div className="space-y-1 text-sm">
            <p className="font-semibold">{t("successTitle")}</p>
            <p className="opacity-90">{t("successMessage")}</p>
          </div>
        </div>
      )}

      {Object.keys(errors).length > 0 && (
        <div className="mb-6 flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-800 dark:text-rose-300">
          <AlertCircle className="h-4 w-4 shrink-0 text-rose-600 dark:text-rose-400" />
          <span>{t("validationError")}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-neutral-300">
              <User className="h-3.5 w-3.5 text-brand-orange" />
              <span>{t("fullName")} *</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder={t("fullNamePlaceholder")}
              className={cn(
                "w-full rounded-xl border px-4 py-3 text-sm transition-colors",
                "bg-slate-50 border-slate-200 text-brand-charcoal placeholder:text-slate-400 focus:bg-white",
                "dark:bg-brand-carbon-elevated dark:border-white/10 dark:text-white dark:placeholder:text-neutral-400",
                "focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange",
                errors.fullName && "border-rose-500"
              )}
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-neutral-300">
              <Mail className="h-3.5 w-3.5 text-brand-orange" />
              <span>{t("email")} *</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder={t("emailPlaceholder")}
              dir="ltr"
              className={cn(
                "w-full rounded-xl border px-4 py-3 text-sm transition-colors",
                "bg-slate-50 border-slate-200 text-brand-charcoal placeholder:text-slate-400 focus:bg-white",
                "dark:bg-brand-carbon-elevated dark:border-white/10 dark:text-white dark:placeholder:text-neutral-400",
                "focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange",
                errors.email && "border-rose-500"
              )}
            />
          </div>
        </div>

        {/* Row 2: Phone & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-neutral-300">
              <Phone className="h-3.5 w-3.5 text-brand-orange" />
              <span>{t("phone")} *</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("phonePlaceholder")}
              dir="ltr"
              className={cn(
                "w-full rounded-xl border px-4 py-3 text-sm transition-colors",
                "bg-slate-50 border-slate-200 text-brand-charcoal placeholder:text-slate-400 focus:bg-white",
                "dark:bg-brand-carbon-elevated dark:border-white/10 dark:text-white dark:placeholder:text-neutral-400",
                "focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange",
                errors.phone && "border-rose-500"
              )}
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-neutral-300">
              <Building2 className="h-3.5 w-3.5 text-brand-orange" />
              <span>{t("company")}</span>
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder={t("companyPlaceholder")}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-brand-charcoal placeholder:text-slate-400 focus:border-brand-orange focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-orange dark:border-white/10 dark:bg-brand-carbon-elevated dark:text-white dark:placeholder:text-neutral-400 transition-colors"
            />
          </div>
        </div>

        {/* Row 3: Service Discipline & Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-neutral-300">
              <Layers className="h-3.5 w-3.5 text-brand-orange" />
              <span>{t("serviceType")} *</span>
            </label>
            <select
              name="serviceType"
              required
              value={formData.serviceType}
              onChange={handleChange}
              className={cn(
                "w-full rounded-xl border px-4 py-3 text-sm transition-colors",
                "bg-slate-50 border-slate-200 text-brand-charcoal focus:bg-white",
                "dark:bg-brand-carbon-elevated dark:border-white/10 dark:text-white",
                "focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange",
                errors.serviceType && "border-rose-500"
              )}
            >
              <option value="" disabled className="text-slate-400">
                {t("serviceOptions.select")}
              </option>
              <option value={t("serviceOptions.fireProtection")}>
                {t("serviceOptions.fireProtection")}
              </option>
              <option value={t("serviceOptions.fireAlarm")}>
                {t("serviceOptions.fireAlarm")}
              </option>
              <option value={t("serviceOptions.lifeSafety")}>
                {t("serviceOptions.lifeSafety")}
              </option>
              <option value={t("serviceOptions.smokeControl")}>
                {t("serviceOptions.smokeControl")}
              </option>
              <option value={t("serviceOptions.ventilation")}>
                {t("serviceOptions.ventilation")}
              </option>
              <option value={t("serviceOptions.pressurization")}>
                {t("serviceOptions.pressurization")}
              </option>
              <option value={t("serviceOptions.cfd")}>
                {t("serviceOptions.cfd")}
              </option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-neutral-300">
              <MapPin className="h-3.5 w-3.5 text-brand-orange" />
              <span>{t("location")}</span>
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder={t("locationPlaceholder")}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-brand-charcoal placeholder:text-slate-400 focus:border-brand-orange focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-orange dark:border-white/10 dark:bg-brand-carbon-elevated dark:text-white dark:placeholder:text-neutral-400 transition-colors"
            />
          </div>
        </div>

        {/* Row 4: Message */}
        <div className="space-y-2">
          <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-neutral-300">
            <span>{t("message")} *</span>
          </label>
          <textarea
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder={t("messagePlaceholder")}
            className={cn(
              "w-full rounded-xl border px-4 py-3 text-sm transition-colors resize-y",
              "bg-slate-50 border-slate-200 text-brand-charcoal placeholder:text-slate-400 focus:bg-white",
              "dark:bg-brand-carbon-elevated dark:border-white/10 dark:text-white dark:placeholder:text-neutral-400",
              "focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange",
              errors.message && "border-rose-500"
            )}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="group relative flex w-full items-center justify-center gap-3 rounded-xl bg-brand-orange px-6 py-4 text-sm sm:text-base font-bold text-white shadow-lg shadow-brand-orange/25 transition-all duration-200 hover:bg-brand-orange-hover hover:shadow-brand-orange/40 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
        >
          <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          <span>{t("submitButton")}</span>
        </button>
      </form>
    </div>
  );
}
