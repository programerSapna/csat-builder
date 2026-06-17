# CSAT Campaign Builder

A simplified **Customer Satisfaction (CSAT) Campaign Builder** — AppVersal Frontend Intern Assignment. Configure a CSAT popup from a Content tab and Styling tab while seeing a live mobile preview that updates in real time.

---

## Live Demo

🔗 [https://csat-builder-lovat.vercel.app](https://csat-builder-lovat.vercel.app)

---

## Setup Instructions

```bash
git clone https://github.com/programerSapna/csat-builder.git
cd csat-builder
npm install
npm run dev      # development server
npm run build    # production build
```

Requirements: **Node.js >= 18**

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 19 + Vite 8 |
| Styling | Tailwind CSS v4 (Vite plugin) + inline CSS-in-JS |
| State Management | React Context API (useState) |
| Fonts | Manrope + Inter via Google Fonts |
| Icons | Hand-written inline SVG — no icon library |
| Deployment | Vercel |

---

## Folder Structure

```
src/
├── context/
│   └── CSATContext.jsx        # Central state (Content + Styling)
├── pages/
│   ├── ContentPage.jsx        # Initial / Feedback / Thank You config
│   └── StylingPage.jsx        # Colors, typography, shape, button, ratings
├── components/
│   ├── ui/
│   │   ├── Controls.jsx       # TextField, ToggleSwitch, ColorField, SliderField
│   │   └── Icons.jsx          # Custom SVG icons (no library)
│   └── preview/
│       └── MobilePreview.jsx  # Phone frame + 3 live screens
├── App.jsx                    # Root layout (responsive)
├── main.jsx                   # Entry point
└── index.css                  # CSS variables + resets
```

---

## Features

### Content Page
- **Initial Screen** — Title & Subtitle
- **Feedback Screen** — Stars/Numbers toggle, dynamic Add/Delete options, comment toggle, submit button text
- **Thank You Screen** — Media upload (PNG, JPG, JPEG, GIF, Lottie JSON), Title, Subtitle, Button text

### Styling Page
- Background, Title, Subtitle, Button, Button Text **colors**
- **Font size** (12–24px) and **font weight** (400–700)
- **Border radius** slider
- **Button width** (%) and **height** (px)
- Rating **selected/unselected colors**

### Live Preview
- Phone frame built with pure CSS
- Every change reflects instantly — no Save button, no page refresh
- Navigate between Initial / Feedback / Thank You screens

### Responsive Design
- Mobile: Config/Preview toggle to switch between editor and preview
- Desktop: Side-by-side layout

---

## Deployment Link

🔗 [https://csat-builder-lovat.vercel.app](https://csat-builder-lovat.vercel.app)
