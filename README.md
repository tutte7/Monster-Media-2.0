# Monster Media - Corporate Website

A modern, bilingual (ES/EN) corporate website for Monster Media showcasing the PRIMO Ecosystem, UV printing technology, interactive solutions, and robotics.

## Features

- **Bilingual Support**: Full ES/EN translation system with persistent language switcher
- **Responsive Design**: Mobile-first approach with optimized layouts for all devices
- **Modern Tech Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS v4
- **Dark Theme**: Black/gray base with emerald green accents
- **SEO Optimized**: Proper metadata, semantic HTML, and accessibility features

## Project Structure

\`\`\`
monster-media-site/
├── app/
│   ├── page.tsx                    # Home page
│   ├── monster-mobile/             # Case studies (Toluca FC, FIFA 2018)
│   ├── monster-media/              # Consolidated Interactive & Robotics sections
│   ├── experiencia/                # Business verticals & partners
│   ├── contacto/                   # Contact form & info
│   ├── layout.tsx                  # Root layout with i18n
│   └── globals.css                 # Design tokens & styles
├── components/
│   ├── header.tsx                  # Navigation with language switcher
│   ├── footer.tsx                  # Footer with contact info
│   ├── home/                       # Home page sections
│   ├── monster-mobile/             # Case study components
│   ├── interactivos/               # Interactive solutions components
│   ├── robotics/                   # Robotics page components
│   ├── experiencia/                # Experience page components
│   ├── contacto/                   # Contact page components
│   └── ui/                         # shadcn/ui components
├── lib/
│   ├── language-context.tsx        # i18n context provider
│   └── utils.ts                    # Utility functions
└── public/                         # Static assets (images, logos)
\`\`\`

## Pages Overview

### 1. Home (`/`)
- Hero section with value proposition
- PRIMO Ecosystem showcase (PRIMO PRINT 3D + PRIMO PROTECT)
- eufyMake UV Printer E1 section
- LATAM presence map
- Company values
- Partner logos grid
- Project highlights

### 2. Monster Mobile (`/monster-mobile`)
- UV printing case studies:
  - Toluca FC (custom phone cases)
  - FIFA World Cup Russia 2018
- Technology showcase
- Gallery and results

### 3. Monster Media (`/monster-media`)
Consolidated interactive solutions and robotics divisions:

**Interactive Solutions**:
- Kioskos (Interactive kiosks)
- Digital Signage
- Experiencias AR (Augmented Reality)
- Mesas Interactivas (Interactive tables)
- Gamificación (Gamification)

**Robotics**:
- CRUZR humanoid service robot
- Capabilities and features
- Use cases across industries
- Technical specifications
- FAQ section

### 4. Comercializadora (`/comercializadora`)
Digital and retail distribution channels:
- **Digital**: Marketplaces, Social Media
- **Retail**: Telcel, Coppel
- Product catalog carousel

### 5. Nuestra Experiencia (`/experiencia`)
4 business verticals:
- BTL (Below The Line marketing)
- Turismo (Tourism solutions)
- Comercializadora (Retail distribution)
- Business Partners (Strategic alliances)

Partner logos: Xiaomi, PRIMO 3D, PRIMO PROTECT, OPPO, Vivo, Argon Tec, AFM

### 6. Contacto (`/contacto`)
- Contact form (Name, Email, Company, Message)
- Contact information cards
- WhatsApp CTA
- Social media links

## CMS-Ready Content

The following content is structured for easy CMS integration:

### Partners (`components/home/partners-section.tsx`, `components/experiencia/partners-grid.tsx`)
\`\`\`typescript
const partners = [
  { name: "Partner Name", logo: "/path/to/logo.svg" }
]
\`\`\`

### Case Studies (`components/monster-mobile/case-study-section.tsx`)
\`\`\`typescript
const caseStudies = [
  {
    id: "case-id",
    client: "Client Name",
    logo: "/client-logo.jpg",
    context: { es: "...", en: "..." },
    objectives: [{ es: "...", en: "..." }],
    solution: { es: "...", en: "..." },
    results: [{ es: "...", en: "..." }],
    gallery: ["/image1.jpg", "/image2.jpg"]
  }
]
\`\`\`

### Interactive Divisions (`components/interactivos/division-grid.tsx`)
\`\`\`typescript
const divisions = [
  {
    id: "division-id",
    icon: IconComponent,
    name: { es: "...", en: "..." },
    description: { es: "...", en: "..." },
    features: [{ es: "...", en: "..." }],
    gallery: ["/image1.jpg", "/image2.jpg"]
  }
]
\`\`\`

### Business Verticals (`components/experiencia/verticals-section.tsx`)
\`\`\`typescript
const verticals = [
  {
    id: "vertical-id",
    icon: IconComponent,
    title: { es: "...", en: "..." },
    description: { es: "...", en: "..." },
    highlights: [{ es: "...", en: "..." }]
  }
]
\`\`\`

### LATAM Presence (`components/home/latam-presence.tsx`)
\`\`\`typescript
const countries = [
  {
    name: { es: "México", en: "Mexico" },
    stats: { es: "...", en: "..." }
  }
]
\`\`\`

## Internationalization (i18n)

The site uses a custom language context (`lib/language-context.tsx`) for translations:

\`\`\`typescript
import { useLanguage } from "@/lib/language-context"

function Component() {
  const { t, language, setLanguage } = useLanguage()
  
  return (
    <div>
      <h1>{t({ es: "Título", en: "Title" })}</h1>
    </div>
  )
}
\`\`\`

## Design System

### Colors
- **Background**: Black (#000000)
- **Foreground**: White (#ffffff)
- **Primary**: Emerald Green (#10b981)
- **Secondary**: Dark Gray (#1a1a1a)
- **Muted**: Medium Gray (#262626)
- **Accent**: Dark Green (#059669)

### Typography
- **Headings**: Space Grotesk (bold, modern)
- **Body**: Inter (clean, readable)

### Components
All UI components are from shadcn/ui with custom theming:
- Buttons, Cards, Forms, Inputs, Textareas
- Accordions, Carousels, Dialogs
- Navigation, Dropdowns, Tooltips

## Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

## Environment Variables

No environment variables required for basic functionality. Add these for enhanced features:

\`\`\`env
# Optional: Analytics
NEXT_PUBLIC_GA_ID=your-ga-id

# Optional: Form submission
NEXT_PUBLIC_FORM_ENDPOINT=your-form-endpoint

# Optional: WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=your-whatsapp-number
\`\`\`

## Deployment

The site is optimized for Vercel deployment:

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Proper contrast ratios
- Focus indicators

## Performance

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Minimal JavaScript bundle
- Fast page transitions
- Responsive images

## Future Enhancements

- [ ] Connect to headless CMS (Sanity, Contentful, or Strapi)
- [ ] Add form submission backend
- [ ] Implement WhatsApp API integration
- [ ] Add Google Analytics
- [ ] Create admin dashboard for content management
- [ ] Add blog/news section
- [ ] Implement search functionality
- [ ] Add video testimonials
- [ ] Create downloadable product catalogs

## Support

For questions or support, contact:
- Email: contacto@monstermedia.com.mx
- Phone: +52 55 1234 5678
- Website: [Monster Media](https://monstermedia.com.mx)

## License

© 2025 Monster Media. All rights reserved.
\`\`\`

```json file="" isHidden
