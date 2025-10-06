# Personal Academic Portfolio Website

A clean, professional portfolio website inspired by academic personal pages. Built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Clean, minimalist academic design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🌓 Dark mode support
- 📑 Sections for Bio, Publications, CV, and Contact
- 🔗 Social media and academic profile integration
- ⚡ Fast and lightweight
- ♿ Accessible design

## Customization

All your personal information is centralized in a single file for easy editing:

### Edit Your Information

Open `client/src/data/portfolio.ts` and update:

1. **Personal Information**
   - Name, position, institution
   - Bio and detailed about section

2. **Research Interests**
   - Add your research areas and interests

3. **Publications**
   - Add your papers with title, authors, venue, year
   - Include PDF links for downloads

4. **Education & Experience**
   - Add your academic background
   - Include work experience and research positions

5. **Contact Information**
   - Email, LinkedIn, GitHub
   - Google Scholar, ResearchGate links

6. **Profile Image**
   - Replace the image at `attached_assets/generated_images/` with your professional headshot
   - Update the import path in `client/src/components/Hero.tsx` if needed

## Running the Project

```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Deployment

This site is ready to be published. Simply click the publish button in Replit to make your portfolio live with a custom `.replit.app` domain.

## Tech Stack

- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React, React Icons
- **Build Tool**: Vite
- **Backend**: Express (for serving)

## Structure

```
client/src/
├── components/       # Reusable UI components
├── data/            # Portfolio content (edit here!)
├── pages/           # Page components
└── lib/             # Utilities
```
