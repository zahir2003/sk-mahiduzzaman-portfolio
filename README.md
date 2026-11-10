# Sk Mahiduzzaman — Dynamic 3D AI/ML Portfolio

A recruiter-focused Next.js portfolio with a 3D photo hero, animated role display, dark/light modes, responsive layouts and SEO metadata.

## Resume-aligned content
- Updated profile to reflect B.Tech graduation in 2026 (CGPA 8.28).
- Expanded University College Cork research internship details, including the four-channel forensic feature pipeline and Grad-CAM.
- Updated the three featured projects and the 99.94% multimodal language-identification result.
- Reorganized skills to match the latest resume.
- Replaced the public resume PDF with the latest supplied copy.
- Removed the pre-hydration theme mutation that could cause a React hydration warning; the theme toggle applies the saved preference after mount.

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm start
```

## Deploy
Push the project to GitHub and import the repository into Vercel as a Next.js project.

## Customize
Edit `data/portfolio.ts` for profile, experience, projects, skills and education.
