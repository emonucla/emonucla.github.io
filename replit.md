# Personal Academic Portfolio Website

## Overview

A clean, minimalist personal academic portfolio website built with React, TypeScript, and Tailwind CSS. The application provides a professional platform for academics and researchers to showcase their work, publications, education, and professional experience. The design follows academic publishing standards with a focus on content clarity and professional credibility.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Core Framework**: React with TypeScript
- Single-page application (SPA) using Wouter for client-side routing
- Component-based architecture with reusable UI components
- Custom components for portfolio sections: Hero, About, Publications, CV, Footer, Navigation

**Styling System**:
- Tailwind CSS for utility-first styling with custom design tokens
- shadcn/ui component library for consistent, accessible UI elements
- Custom theming system supporting light and dark modes via ThemeProvider context
- Design philosophy: Minimalist professional system inspired by Apple HIG and academic publishing standards
- Typography: Inter font family for body text via Google Fonts
- Color palette optimized for academic credibility with scholarly blue accents

**State Management**:
- React Context API for theme management (ThemeProvider)
- TanStack Query (React Query) for server state management and data fetching
- Local state management with React hooks

**Data Architecture**:
- Centralized data model in `client/src/data/portfolio.ts`
- All personal information, publications, education, and experience stored in a single configuration file
- Component props driven by portfolio data object for easy customization

### Backend Architecture

**Server Framework**: Express.js with TypeScript
- Development setup uses Vite middleware for HMR (Hot Module Replacement)
- Production build serves static React application
- Minimal API surface - currently implements storage interface for future extensibility

**Development Tools**:
- Vite for fast development builds and HMR
- Custom logging middleware for request tracking
- Runtime error overlay for better debugging experience

**Storage Layer**:
- Storage interface pattern (IStorage) for abstracting data access
- In-memory storage implementation (MemStorage) as baseline
- Prepared for database integration with Drizzle ORM schema defined
- User schema includes basic authentication fields (id, username, password)

### External Dependencies

**UI Component Library**: Radix UI primitives
- Comprehensive set of accessible, unstyled UI components
- Components include: Dialog, Dropdown Menu, Popover, Tooltip, Navigation Menu, Tabs, and many others
- Provides foundation for custom themed components

**Form Management**:
- React Hook Form with Zod resolver for type-safe form validation
- Drizzle-Zod for schema-based validation tied to database models

**Icon Libraries**:
- Lucide React for general UI icons
- React Icons (specifically Simple Icons) for social media and academic profile icons

**Database & ORM** (Prepared but not actively used):
- Drizzle ORM configured for PostgreSQL
- Neon serverless PostgreSQL driver
- Migration system configured via drizzle-kit
- Schema defined in `shared/schema.ts` with users table

**Routing**: Wouter for lightweight client-side routing

**Utility Libraries**:
- clsx and tailwind-merge for conditional class name composition
- date-fns for date manipulation
- class-variance-authority (CVA) for component variant management

**Build & Development Tools**:
- TypeScript for type safety across the stack
- Vite for frontend bundling and development server
- esbuild for backend build process
- PostCSS with Tailwind CSS and Autoprefixer

**Special Replit Integrations**:
- @replit/vite-plugin-runtime-error-modal for development error handling
- @replit/vite-plugin-cartographer for enhanced development experience
- @replit/vite-plugin-dev-banner for development environment indicators

### Key Design Patterns

**Component Composition**: UI components are highly composable using Radix UI primitives with custom styling applied via Tailwind and shadcn/ui patterns

**Configuration-Driven Content**: Portfolio content is completely separated from presentation logic, allowing non-technical users to update their information by editing a single TypeScript configuration file

**Theme System**: CSS custom properties with HSL color values enable dynamic theming, with JavaScript context managing theme state and localStorage persistence

**Accessibility First**: Built on Radix UI primitives ensuring ARIA attributes, keyboard navigation, and screen reader support throughout the application

**Responsive Design**: Mobile-first approach with Tailwind responsive utilities, separate mobile menu implementation, and optimized layouts for tablet and desktop viewports