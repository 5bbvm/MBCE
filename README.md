# Modern Building For Consultancy Engineering (MBCE)
### الابنية الحديثة للاستشارات الهندسية

An elite, high-performance corporate web platform engineered for **Modern Building For Consultancy Engineering (MBCE)** — a premier Saudi engineering consultancy specialized in **Fire & Life Safety (FLS)** design, **Saudi Building Code (SBC)** compliance audits, and statutory **Civil Defense Approvals** across the Kingdom of Saudi Arabia.

---

## Key Highlights

- **Bilingual Architecture (EN / AR)**: Built with [`next-intl`](https://next-intl-docs.vercel.app/) with sub-path routing (`/[locale]/...`), dynamic language switching, and full RTL layout integration.
- **Executive Design System**: Light-mode-first aesthetic inspired by MBCE's official documentation, with dual-theme toggleable support (Dark / Carbon) powered by Tailwind CSS tokens.
- **Engineering Precision & Terminology**: Elevated Saudi engineering terminology aligned with Saudi Council of Engineers standards and Civil Defense regulatory procedures.
- **Interactive Componentry**: Infinite bidirectional client partner marquee, landmark portfolio filtering, and verified leadership profiles.
- **Performance & SEO**: Fully pre-rendered static generation (SSG) with optimized image delivery and structured OpenGraph metadata.

---

## Technology Stack

| Domain | Technology |
| :--- | :--- |
| **Framework** | Next.js 15 (App Router, Strict Mode) |
| **Runtime & Language** | Node.js / TypeScript 5 |
| **Internationalization** | `next-intl` (English & Arabic with RTL) |
| **Styling & Design Tokens** | Tailwind CSS (Tailored brand tokens) |
| **Typography** | Outfit (Latin Display), Inter (Latin Body), IBM Plex Sans Arabic (Arabic Body) |
| **Icons** | `lucide-react` |
| **Animation** | `framer-motion` |

---

## Project Structure

```text
MBCE/
├── app/
│   └── [locale]/                 # Dynamic locale root (en / ar)
│       ├── layout.tsx            # Locale-aware root layout & metadata
│       ├── page.tsx              # Homepage (Hero, Stats, Services, Projects, Marquee)
│       ├── about/                # Corporate profile, Vision 2030, & regulatory heritage
│       ├── services/             # Core engineering disciplines (FLS, SBC, Salamah)
│       ├── portfolio/            # Landmark Saudi giga-projects
│       ├── team/                 # Executive leadership & chartered engineers
│       ├── clients/              # Strategic government & corporate client roster
│       └── contact/              # Direct technical inquiry form & contact details
├── components/
│   ├── brand/                    # Dual-mode responsive SVG brand logo components
│   ├── clients/                  # Smooth marquee and client logo catalog
│   ├── contact/                  # Validated technical consultation inquiry form
│   ├── layout/                   # Sticky responsive Header, Footer, Language/Theme switchers
│   ├── motion/                   # Framer Motion animations & reduced-motion support
│   ├── projects/                 # Landmark portfolio cards and filtering
│   ├── team/                     # Executive team member cards and catalog
│   └── theme/                    # Executive light/dark theme provider
├── messages/
│   ├── en.json                   # English translations & terminology
│   └── ar.json                   # Arabic translations & elevated Saudi terminology
├── public/
│   └── assets/                   # Vector logos, client emblems, project & team imagery
├── middleware.ts                 # Next.js i18n locale routing middleware
├── next.config.mjs               # Next.js configuration wrapped with next-intl
├── tailwind.config.ts            # Brand colors (#FF5700, slate, carbon) & elevation tokens
└── tsconfig.json                 # TypeScript strict compiler configuration
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.18.0 or later recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

```bash
# Clone repository
git clone https://github.com/5bbvm/MBCE.git

# Navigate into project directory
cd MBCE

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The default route redirects to `/en` (English) or `/ar` (Arabic) based on user preference.

### Production Build

```bash
# Build optimized static bundle
npm run build

# Start production server
npm start
```

---

## Regulatory Accreditations & Compliance

- **Saudi Council of Engineers**: Top-tier engineering consultancy classification.
- **General Directorate of Civil Defense**: Authorized licensee for safety studies and Salamah statutory approvals.
- **Saudi Building Code (SBC)**: Compliant with SBC 201, SBC 801, and international NFPA / IBC standards.

---

## License

All rights reserved © Modern Building For Consultancy Engineering (MBCE).
