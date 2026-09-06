export interface ClientBrand {
  name: string;
  logo: string;
  category: "giga" | "aviation" | "financial" | "commercial";
}

export const CLIENT_BRANDS: ClientBrand[] = [
  { name: "NEOM", logo: "/assets/clients/neom.png", category: "giga" },
  { name: "Public Investment Fund (PIF)", logo: "/assets/clients/pif.webp", category: "giga" },
  { name: "National Housing Company (NHC)", logo: "/assets/clients/nhc.webp", category: "giga" },
  { name: "Saudia Airlines", logo: "/assets/clients/saudia.png", category: "aviation" },
  { name: "DHL Global", logo: "/assets/clients/dhl.png", category: "aviation" },
  { name: "Aramex", logo: "/assets/clients/aramex_BIG.png", category: "aviation" },
  { name: "DP World", logo: "/assets/clients/dp.png", category: "aviation" },
  { name: "Saudi National Bank (SNB)", logo: "/assets/clients/snb.jpg", category: "financial" },
  { name: "Bank AlJazira", logo: "/assets/clients/bank-aljazira.webp", category: "financial" },
  { name: "IKEA Saudi Arabia", logo: "/assets/clients/ikea.png", category: "commercial" },
  { name: "SASCO", logo: "/assets/clients/sasco.webp", category: "commercial" },
  { name: "Naft Petroleum", logo: "/assets/clients/naft.png", category: "commercial" },
  { name: "Bin Dawood Holding", logo: "/assets/clients/bin-dawood.jpg", category: "commercial" },
  { name: "Kudu", logo: "/assets/clients/kudu.jpg", category: "commercial" },
  { name: "Al Tazaj", logo: "/assets/clients/altazaj.webp", category: "commercial" },
  { name: "Barn's Coffee", logo: "/assets/clients/barns.png", category: "commercial" },
  { name: "Hublot Genève", logo: "/assets/clients/hublot.png", category: "commercial" },
  { name: "Nesma Holding", logo: "/assets/clients/nesma.png", category: "commercial" },
  { name: "Aster Healthcare", logo: "/assets/clients/aster-healthcare.webp", category: "commercial" },
  { name: "Naghi Group", logo: "/assets/clients/naghi.png", category: "commercial" },
  { name: "Abdul Latif Jameel", logo: "/assets/clients/jameel.png", category: "commercial" },
  { name: "Tatweer Buildings Company (TBC)", logo: "/assets/clients/tbc.png", category: "giga" },
  { name: "First Fix", logo: "/assets/clients/first-fix.png", category: "commercial" },
  { name: "FBS", logo: "/assets/clients/fbs.png", category: "commercial" },
  { name: "Orange Telecom", logo: "/assets/clients/orange.png", category: "commercial" },
  { name: "Al Moktashef", logo: "/assets/clients/almoktashef.png", category: "commercial" },
  { name: "JOIL", logo: "/assets/clients/joil.png", category: "commercial" },
  { name: "Jordan Embassy KSA", logo: "/assets/clients/jordan.png", category: "aviation" },
  { name: "Kenya Airways", logo: "/assets/clients/kenya.png", category: "aviation" },
];
