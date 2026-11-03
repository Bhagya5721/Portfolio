# 🚀 Modern Software Engineer Portfolio

A sleek, dark-themed developer portfolio engineered with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

- **🎨 Modern Dark Mode Design**: Glassmorphism, smooth micro-interactions, animated gradient glows, and refined typography.
- **⚡ Single-Source-of-Truth Data**: All your details (bio, projects, tech skills, work experience, social links) live in [`src/data/portfolioData.ts`](file:///C:/Users/bhagy/.gemini/antigravity/scratch/portfolio/src/data/portfolioData.ts) for effortless editing.
- **💻 Interactive Terminal**: A functional in-browser terminal widget on the About section where visitors can run commands (`whoami`, `skills`, `status`, `contact`, `clear`).
- **📂 Filterable Projects Showcase**: Categorized cards with live demo links, repository badges, and expandable architecture breakdowns.
- **🛠️ Interactive Tech Stack**: Filter skills by domain (Frontend, Backend & Cloud, Architecture & DevOps) with proficiency tags.
- **📈 Quantified Experience Timeline**: Timeline displaying measurable engineering impact (latency cuts, throughput, leadership).
- **📬 Contact & 1-Click Copy**: Glassmorphic contact form and direct email clipboard copy with visual feedback.
- **📱 Fully Responsive**: Flawless experience across mobile, tablet, and widescreen displays.

---

## 🛠️ Quick Start

### 1. Run Development Server
```bash
cd "C:\Users\bhagy\.gemini\antigravity\scratch\portfolio"
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
npm run start
```

---

## ✏️ How to Customize with Your Information

All content is centralized in **`src/data/portfolioData.ts`**:

1. **Personal Details & Social Links**:
   - Update `personal.name`, `role`, `bio`, `email`, `github`, `linkedin`, and `resumeUrl`.
2. **Projects**:
   - Add or modify items in `projects: []` with your own project titles, tags, live URLs, GitHub repositories, and impact metrics.
3. **Skills**:
   - Customize `skillCategories` to match your exact languages, frameworks, databases, and DevOps tools.
4. **Experience**:
   - Edit `experiences` to showcase your previous roles, accomplishments, and stack.

---

## 🌐 Deploy to Vercel (1-Click)

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com):
1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Vercel automatically detects Next.js and deploys your portfolio with global edge caching and free SSL!
