# Personal Academic Portfolio Design Guidelines

## Design Approach
**Selected Framework:** Minimalist Professional System (inspired by Apple HIG + Academic Publishing Standards)

This academic portfolio prioritizes content clarity, professional credibility, and reading comfort over visual experimentation. The design should reflect scholarly authority while maintaining modern web standards.

## Core Design Philosophy
Create a sophisticated, content-first experience that positions the researcher as credible and accomplished. Every design decision should enhance readability and highlight academic achievements without distraction.

## Color Palette

**Light Mode:**
- Background: 0 0% 99% (near-white)
- Primary Text: 220 15% 15% (deep slate, professional)
- Secondary Text: 220 10% 45% (muted slate)
- Accent/Links: 217 91% 60% (scholarly blue - trustworthy, academic)
- Borders/Dividers: 220 13% 85% (subtle separation)

**Dark Mode:**
- Background: 222 47% 11% (deep navy-slate)
- Primary Text: 210 20% 95% (soft white)
- Secondary Text: 215 15% 65% (muted blue-gray)
- Accent/Links: 217 91% 70% (brighter scholarly blue)
- Borders/Dividers: 217 20% 25% (subtle contrast)

## Typography System

**Font Stack:**
- Primary (Body): "Inter" via Google Fonts - exceptional readability for academic content
- Headings: "Inter" with varied weights for hierarchy
- Code/Technical: "JetBrains Mono" for publications/citations if needed

**Type Scale:**
- Hero Title: text-5xl (48px) font-bold, tracking-tight
- Section Headings: text-3xl (30px) font-semibold
- Subsections: text-xl (20px) font-medium
- Body: text-base (16px) leading-relaxed for comfortable reading
- Metadata/Captions: text-sm (14px) text-secondary

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-20 (desktop), py-12 (mobile)
- Component spacing: gap-6 to gap-8
- Content margins: mb-4 for paragraphs, mb-8 for sections

**Container Strategy:**
- Main content: max-w-4xl (optimal reading width ~65-75 characters)
- All content centered with mx-auto
- Consistent px-6 horizontal padding on mobile

## Component Library

### Navigation
- Sticky header with backdrop-blur effect
- Clean horizontal nav with text links (no buttons)
- Active state: border-b-2 with accent color
- Mobile: Slide-in drawer navigation

### Hero Section
**Structure:** Full-width with professional headshot
- Layout: Two-column grid (lg:grid-cols-2) with image left, content right
- Professional headshot: Circular frame (rounded-full), grayscale filter with subtle color on hover
- Headline: Name in large, bold typography
- Subheadline: Current position and institution
- Bio paragraph: 2-3 sentences of research focus
- CTA: Subtle text links to CV and Publications (not buttons)

### Content Sections
**Bio/Introduction:**
- Full-width text block with generous line-height (leading-relaxed)
- Pull quotes or highlighted achievements in offset boxes
- Links to CV and Publications integrated naturally

**Publications Section:**
- List format with clear visual hierarchy
- Each publication: Title (bold), Authors (normal), Venue/Year (muted)
- Grouped by year with year headers
- Optional: Filter/search functionality for extensive lists
- PDF download icons/links for each paper

**CV/Resume Section:**
- Structured timeline layout for experience
- Education, Experience, Skills sections
- Downloadable PDF button (primary accent color)
- Can be separate page or expandable section

**Contact/Footer:**
- Email and social academic profiles (Google Scholar, ResearchGate, LinkedIn)
- Simple icon links with hover states
- Copyright/last updated date

## Visual Treatments

**Images:**
- Professional headshot in hero (essential)
- Optional: Research lab photos or conference images in bio section
- All images: rounded-lg, subtle shadow (shadow-md)
- Lazy loading for performance

**Cards/Containers:**
- Minimal use: Only for publications or project highlights
- border with border-slate-200 (light) / border-slate-700 (dark)
- Subtle hover: translate-y-[-2px] transition with shadow increase
- No colored backgrounds - maintain content focus

**Links:**
- Underline on hover only
- Accent color for visited/unvisited consistency
- External links: subtle arrow icon

## Interaction Patterns

**Animations:** Minimal, purposeful only
- Smooth scroll to section anchors
- Gentle fade-in on scroll for sections (intersection observer)
- Hover transitions: duration-200 ease-in-out only

**Responsive Behavior:**
- Mobile-first approach
- Hero: Stack to single column on mobile
- Navigation: Hamburger menu < 768px
- Publications: Full-width cards on mobile

## Accessibility Standards
- WCAG AA contrast ratios for all text
- Skip navigation link
- Semantic HTML structure (article, section, nav)
- Focus indicators: ring-2 ring-accent with offset
- Alt text for all images including headshot

## Content Strategy
**Information Hierarchy:**
1. Name and current position (hero)
2. Research interests and bio (immediate visibility)
3. Publications (primary credential showcase)
4. CV/Experience (supporting detail)
5. Contact (actionable endpoint)

**Trust Signals:**
- Institutional affiliation prominent
- Publication venues clearly cited
- Academic social proof (citations, h-index if notable)
- Professional headshot creates human connection

## Technical Specifications
- Single-page application with smooth scroll navigation
- Separate /cv and /publications routes for deep linking
- Metadata: Comprehensive OpenGraph tags for academic sharing
- Schema.org markup for Person/ScholarlyArticle
- Print-friendly CSS for CV section

This design creates a professional, credible academic presence that highlights research achievements while maintaining exceptional readability and user experience.