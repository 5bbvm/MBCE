export interface ClientBrand {
  name: string;
  logo: string;
  category: "giga" | "aviation" | "financial" | "commercial";
}

export const CLIENT_BRANDS: ClientBrand[] = [
  { name: "Saudia Airlines", logo: "/assets/clients/saudia.png", category: "aviation" },
  { name: "NEOM", logo: "/assets/clients/neom.png", category: "giga" },
  { name: "Public Investment Fund (PIF)", logo: "/assets/clients/pif.webp", category: "giga" },
  { name: "Jordan Embassy KSA", logo: "/assets/clients/jordan.png", category: "aviation" },
  { name: "National Housing Company (NHC)", logo: "/assets/clients/nhc.webp", category: "giga" },
  { name: "Orange Telecom", logo: "/assets/clients/orange.png", category: "commercial" },
  { name: "El Seif Engineering Contracting", logo: "/assets/clients/elseif.png", category: "giga" },
  { name: "Saudi National Bank (SNB)", logo: "/assets/clients/snb.jpg", category: "financial" },
  { name: "Tatweer Buildings Company (TBC)", logo: "/assets/clients/tbc.png", category: "giga" },
  { name: "National Water Company (NWC)", logo: "/assets/clients/water.png", category: "giga" },
  { name: "DP World", logo: "/assets/clients/dp.png", category: "aviation" },
  { name: "DHL Global", logo: "/assets/clients/dhl.png", category: "aviation" },
  { name: "Aramex", logo: "/assets/clients/aramex_BIG.png", category: "aviation" },
  { name: "Alfanar", logo: "/assets/clients/alfanar.png", category: "commercial" },
  { name: "Nesma Holding", logo: "/assets/clients/nesma.png", category: "commercial" },
  { name: "Abdul Latif Jameel", logo: "/assets/clients/jameel.png", category: "commercial" },
  { name: "IKEA Saudi Arabia", logo: "/assets/clients/ikea.png", category: "commercial" },
  { name: "Bin Dawood Holding", logo: "/assets/clients/bin-dawood.jpg", category: "commercial" },
  { name: "Darco Real Estate", logo: "/assets/clients/darco.webp", category: "commercial" },
  { name: "Kudu", logo: "/assets/clients/kudu.jpg", category: "commercial" },
  { name: "FBS", logo: "/assets/clients/fbs.png", category: "financial" },
];
