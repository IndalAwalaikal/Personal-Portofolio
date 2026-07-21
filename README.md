# 🚀 Indal Awalaikal — Portfolio Website

[![Live Website](https://img.shields.io/badge/Website-indalawalaikal.my.id-00df8f?style=for-the-badge&logo=google-chrome&logoColor=0d1116)](https://indalawalaikal.my.id)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=0d1116)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

A modern, high-performance multi-page personal portfolio website built for **Indal Awalaikal** — Backend-focused Full-Stack Developer based in Makassar, Indonesia.

---

## 🌟 Key Features

- **🌐 Multi-Page Architecture**: Seamless SPA navigation powered by `react-router-dom` across **Home**, **About**, **Projects**, **Certificates**, and **Contact** pages.
- **📁 Decoupled Modular Data Structure**: All static content (skills, projects, credentials, experiences) is organized in `/src/data/` for scalable maintenance.
- **📐 Consistent Layouts**: Uniform grid heights and aligned card components across Projects & Certificates pages.
- **🔍 Advanced SEO & Rich Snippets**:
  - Full **OpenGraph** & **Twitter Cards** metadata for rich link previews.
  - **Schema.org JSON-LD Structured Data** (`Person` schema) for Google Search Rich Results.
  - Auto-indexed with **`public/sitemap.xml`**, **`public/robots.txt`**, and canonical URLs pointing to `https://indalawalaikal.my.id`.
- **⚡ Core Web Vitals Performance**:
  - Route-level **Code-Splitting** via `React.lazy` and `Suspense`.
  - Optimized image loading (`fetchPriority="high"` on hero, `loading="lazy"` & `decoding="async"` on card media).
  - Custom vector SVG favicon (`/favicon.svg`).
- **🛡️ High Durability & Error Recovery**: Integrated React `ErrorBoundary` component to gracefully catch runtime errors and offer zero-downtime reload fallbacks.

---

## 🛠️ Tech Stack

- **Frontend Core**: React.js 18, Vite 5, JavaScript (ES6+)
- **Styling**: Tailwind CSS, Custom Dark & Neon Green (`#00df8f`) Glassmorphism Design System
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM v6

---

## 📁 Project Structure

```
Portofolio/
├── public/
│   ├── project/          # Project screenshot assets
│   ├── favicon.svg       # Custom neon-green SVG favicon
│   ├── profile.png       # Profile image asset
│   ├── robots.txt        # Search engine crawler instructions
│   └── sitemap.xml       # Search engine sitemap index
├── src/
│   ├── assets/           # Media & static assets
│   ├── components/       # Reusable UI components (Hero, About, RecentWorks, Navbar, Footer, etc.)
│   ├── data/             # Modular datasets
│   │   ├── about.js      # Skills & organizational experience data
│   │   ├── projects.js   # Featured & selected projects dataset
│   │   ├── certificates.js # Certifications & credentials dataset
│   │   └── contact.js    # Contact info & social links
│   ├── pages/            # Application pages (HomePage, AboutPage, ProjectsPage, etc.)
│   ├── App.jsx           # Router configuration, ErrorBoundary & Suspense
│   ├── main.jsx          # React DOM entry point
│   └── index.css         # Tailwind & global styles
├── index.html            # SEO metadata, OpenGraph, JSON-LD Schema
├── package.json          # Dependencies & build scripts
└── README.md             # Project documentation
```

---

## 💻 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation & Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/IndalAwalaikal/Portofolio.git
   cd Portofolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 📞 Contact & Socials

- **Website**: [https://indalawalaikal.my.id](https://indalawalaikal.my.id)
- **GitHub**: [@IndalAwalaikal](https://github.com/IndalAwalaikal)
- **LinkedIn**: [Indal Awalaikal](https://www.linkedin.com/in/indalawalaikal)
- **Email**: [indalawalaikal05@gmail.com](mailto:indalawalaikal05@gmail.com)

---

© 2026 **Indal Awalaikal**. All rights reserved.
