# Tanish Kumar — Developer Portfolio

A premium, modern, and highly interactive developer portfolio website designed to showcase my projects, work experience, technical skills, and coding accomplishments.

🌐 **GitHub Repository:** [https://github.com/Tanish-012/Portfolio](https://github.com/Tanish-012/Portfolio)

---

## ✨ Features

- **Dynamic Interactive Background:** Powered by a customized HTML5 Canvas particle network animation.
- **Typewriter Effect:** Animated hero header showcasing primary roles.
- **Interactive About & Stats:** Smooth Framer Motion counter animations for key metrics (B.Tech CGPA, Core Projects, Internships, etc.).
- **Experience Timeline:** Responsive step-by-step layout of internships and education.
- **Skills Grid:** Visual display categorized by backend, frontend, tools, and languages.
- **Project Showcase:** Filterable grids detailing key projects, complete with links to live demos and codebases.
- **Coding Profiles:** Integration with external platforms like GitHub, LinkedIn, LeetCode, and Codeforces.
- **Validation-Backed Contact Form:** Fully responsive contact section equipped with client-side form validation using React Hook Form & Zod.
- **Aesthetic Design:** Sleek dark-mode aesthetic with custom gradients, glassmorphism card styling, hover effects, and glowing micro-animations.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4 (with PostCSS)
- **Animations:** Framer Motion (floating elements, scroll triggers, counter values)
- **Icons:** Lucide React
- **Primitives:** Radix UI / Shadcn UI
- **Form Management:** React Hook Form + Zod

---

## 🚀 Getting Started

Follow these steps to set up and run the portfolio website locally on your computer.

### Prerequisites

Ensure you have **Node.js** installed (v18 or higher recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Tanish-012/Portfolio.git
   cd Portfolio
   ```

2. **Install the dependencies:**
   Using npm:
   ```bash
   npm install
   ```
   Or using pnpm:
   ```bash
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the website.

### Production Build

To create an optimized production build of the website:
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```text
.
├── app/                  # Next.js App Router layout and pages
├── components/           # React Components
│   ├── portfolio/        # Main sections (Hero, About, Skills, Projects, Experience, Contact, Footer)
│   └── ui/               # Standard UI components (Buttons, Cards, Dialogs, etc.)
├── hooks/                # Custom React hooks (e.g., responsive triggers)
├── lib/                  # Utilities and helper files
├── public/               # Static assets (images, SVGs, and resume.pdf)
├── styles/               # Global CSS styles
├── package.json          # Project dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

---

## ✍️ Customizing Your Portfolio

To personalize this website with your own information, update the content in the following files:

- **Bio & Education:** Update details in [components/portfolio/about.tsx](file:///c:/Users/kumar/OneDrive/Documents/projects/developer-portfolio-website/components/portfolio/about.tsx)
- **Work Experience:** Modify the timeline in [components/portfolio/experience.tsx](file:///c:/Users/kumar/OneDrive/Documents/projects/developer-portfolio-website/components/portfolio/experience.tsx)
- **Projects:** Customize the projects dataset in [components/portfolio/projects.tsx](file:///c:/Users/kumar/OneDrive/Documents/projects/developer-portfolio-website/components/portfolio/projects.tsx)
- **Skills:** Add or remove technical competencies in [components/portfolio/skills.tsx](file:///c:/Users/kumar/OneDrive/Documents/projects/developer-portfolio-website/components/portfolio/skills.tsx)
- **Achievements:** Customize achievements in [components/portfolio/achievements.tsx](file:///c:/Users/kumar/OneDrive/Documents/projects/developer-portfolio-website/components/portfolio/achievements.tsx)
- **Resume:** Replace `public/resume.pdf` with your updated resume file.

---

## 📄 License

This project is licensed under the MIT License.
