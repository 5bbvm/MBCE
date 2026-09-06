import type { Metadata } from "next";
import { Outfit, Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "@/app/globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === "ar";

  return {
    title: {
      default: isArabic
        ? "الابنية الحديثة للاستشارات الهندسية (MBEC) | استشارات السلامة وكود البناء والدفاع المدني"
        : "Modern Building For Engineering Consultancy (MBEC) | Fire & Life Safety Consultancy",
      template: "%s | MBEC",
    },
    description: isArabic
      ? "شركة استشارية سعودية رائدة متخصصة في هندسة السلامة والوقاية من الحريق وحماية الأرواح، والتدقيق الشامل لكود البناء السعودي، وإصدار اعتمادات وتراخيص الدفاع المدني."
      : "Premier Saudi engineering consultancy specializing in Fire & Life Safety (FLS) systems design, Saudi Building Code (SBC) compliance, and Civil Defense approvals across KSA.",
    metadataBase: new URL("https://modernbuildingceo.com.sa"),
    keywords: [
      "MBEC",
      "Modern Building For Engineering Consultancy",
      "Fire and Life Safety Saudi Arabia",
      "Civil Defense Approvals Jeddah Head Office",
      "Civil Defense Approvals Riyadh",
      "Civil Defense Approvals Makkah",
      "Civil Defense Approvals Abha",
      "Saudi Building Code SBC 801",
      "الابنية الحديثة للاستشارات الهندسية",
      "السلامة والوقاية من الحريق",
      "تراخيص الدفاع المدني جدة الرياض مكة ابها",
      "كود البناء السعودي",
    ],
    authors: [{ name: "MBEC Corporate Engineering" }],
    creator: "MBEC",
    icons: {
      icon: "/assets/brand/mbce-logo-light.svg",
      shortcut: "/assets/brand/mbce-logo-light.svg",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client side
  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${outfit.variable} ${inter.variable} ${ibmPlexArabic.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-brand-canvas text-brand-slate dark:bg-brand-carbon dark:text-brand-canvas antialiased selection:bg-brand-orange selection:text-white"
        suppressHydrationWarning
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <MotionProvider>
              <div className="relative flex min-h-screen flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </MotionProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
