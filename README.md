# Somatic Rhythms Website

A modern, professional website for Somatic Rhythms — executive breathwork services.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Analytics**: Google Analytics (placeholder configured)
- **Booking**: Calendly integration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/somatic-rhythms.git
cd somatic-rhythms
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### Google Analytics

To enable Google Analytics:

1. Open `components/GoogleAnalytics.tsx`
2. Replace `G-XXXXXXXXXX` with your actual GA4 Measurement ID

```typescript
const GA_MEASUREMENT_ID = 'G-YOUR-ACTUAL-ID'
```

### Calendly Links

Calendly links are configured in the following files:
- `app/page.tsx` (Home page)
- `app/about/page.tsx` (About page)
- `app/how-it-works/page.tsx` (How It Works page)
- `components/Navigation.tsx` (Navigation)

Current links:
- 15-Min Consult: `https://calendly.com/mark-somaticrhythms/15-min-consult`
- 40-Min Reset: `https://calendly.com/mark-somaticrhythms/40-min-somatic-reset`
- 90-Min Journey: `https://calendly.com/mark-somaticrhythms/90-min-somatic-journey`

### Contact Information

Contact info is configured in:
- `components/Footer.tsx`
- `app/page.tsx` (Services section)

Current contact:
- Email: mark@somaticrhythms.com
- Phone: (619) 723-8463

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Option 2: Deploy via CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

## Project Structure

```
somatic-rhythms/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with nav/footer
│   ├── page.tsx             # Home page
│   ├── about/
│   │   └── page.tsx         # About page
│   └── how-it-works/
│       └── page.tsx         # How It Works page
├── components/
│   ├── Navigation.tsx       # Header navigation
│   ├── Footer.tsx           # Footer
│   └── GoogleAnalytics.tsx  # GA4 integration
├── public/
│   └── images/
│       ├── logo.png         # Logo
│       ├── mark-headshot.jpg # Headshot photo
│       └── hero-boardroom.jpg # Hero background
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json
```

## Color Palette

| Color     | Hex       | Usage                    |
|-----------|-----------|--------------------------|
| Primary   | `#1a2332` | Text, dark backgrounds   |
| Secondary | `#c4a77d` | Accents, CTAs, highlights|
| Accent    | `#8b7355` | Hover states             |
| Light     | `#f5f2ed` | Light backgrounds        |
| Mid       | `#6b7280` | Body text, muted elements|

## Fonts

- **Display**: Cormorant Garamond (headings)
- **Body**: Source Sans 3 (body text)

## Adding Testimonials

Testimonials are currently placeholders. To add real testimonials:

1. Open `app/page.tsx`
2. Find the "TESTIMONIALS PREVIEW" section
3. Replace the placeholder content in the testimonials array

## Future Enhancements

- [ ] Blog section
- [ ] Dynamic testimonials from CMS
- [ ] Contact form
- [ ] Session package pages

## License

Private - All rights reserved.
