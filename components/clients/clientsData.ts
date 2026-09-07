export type ClientCategory = "owners" | "contractors" | "developers";

export interface ClientBrand {
  name: string;
  logo: string;
  category: ClientCategory;
}

export const CLIENT_BRANDS: ClientBrand[] = [
  // ==========================================
  // 1. Owners (الملاك)
  // ==========================================
  { name: "Saudi National Bank (SNB)", logo: "/assets/clients/snb.jpg", category: "owners" },
  { name: "DP World", logo: "/assets/clients/dp.png", category: "owners" },
  { name: "National Water Company (NWC)", logo: "/assets/clients/water.png", category: "owners" },
  { name: "IKEA Saudi Arabia", logo: "/assets/clients/ikea.png", category: "owners" },
  { name: "NEOM", logo: "/assets/clients/neom.png", category: "owners" },
  { name: "Public Investment Fund (PIF)", logo: "/assets/clients/pif.webp", category: "owners" },
  { name: "Kudu", logo: "/assets/clients/kudu.jpg", category: "owners" },
  { name: "Bin Dawood Holding", logo: "/assets/clients/bin-dawood.jpg", category: "owners" },
  { name: "Saudia Airlines", logo: "/assets/clients/saudia.png", category: "owners" },
  { name: "DHL Global", logo: "/assets/clients/dhl.png", category: "owners" },
  { name: "Aramex", logo: "/assets/clients/aramex_BIG.png", category: "owners" },
  { name: "Jordan Embassy KSA", logo: "/assets/clients/jordan.png", category: "owners" },
  { name: "ALBAIK", logo: "/assets/clients/Albaik.png", category: "owners" },
  { name: "Sports Dome", logo: "/assets/clients/sports dome.png", category: "owners" },

  // ==========================================
  // 2. Contractors (مقاولين)
  // ==========================================
  { name: "El Seif Engineering Contracting", logo: "/assets/clients/elseif.png", category: "contractors" },
  { name: "Nesma Holding", logo: "/assets/clients/nesma.png", category: "contractors" },
  { name: "Alfanar", logo: "/assets/clients/alfanar.png", category: "contractors" },
  { name: "Sharqawi Co.", logo: "/assets/clients/Sharqawi.jpg", category: "contractors" },
  { name: "MAG - Al Majal Al Arabi", logo: "/assets/clients/mag.jpg", category: "contractors" },
  { name: "MAN Enterprise", logo: "/assets/clients/man enterprise.jpg", category: "contractors" },
  { name: "Buna", logo: "/assets/clients/buna.jpg", category: "contractors" },
  { name: "BEC Arabia", logo: "/assets/clients/bec arab.png", category: "contractors" },
  { name: "MOBCO Group", logo: "/assets/clients/mobco.webp", category: "contractors" },

  // ==========================================
  // 3. Real Estate Developers (مطورين عقاريين)
  // ==========================================
  { name: "Darco Real Estate", logo: "/assets/clients/darco.webp", category: "developers" },
  { name: "Mohammad Al Habib", logo: "/assets/clients/alhabib.jpg", category: "developers" },
  { name: "Al Awaly", logo: "/assets/clients/alawaly.png", category: "developers" },
  { name: "Osus Real Estate", logo: "/assets/clients/osus.png", category: "developers" },
];
