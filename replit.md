# Portfolio Website - Replit Project Guide

## Overview

This is a modern, full-stack portfolio website built with React and Express, showcasing a developer's skills, projects, and professional experience. The application features a clean, responsive design with light/dark theme support and is optimized for both desktop and mobile viewing.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state, React Context for theme management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: PostgreSQL session store
- **Development**: Hot reload with Vite integration

### Database Design
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: User management system with username/password authentication
- **Migrations**: Automated with Drizzle Kit
- **Provider**: Neon Database for serverless PostgreSQL

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scrolling navigation and theme toggle
2. **Hero Section**: Main landing area with professional introduction and call-to-action buttons
3. **About Section**: Personal background and professional summary
4. **Skills Section**: Animated skill progress bars with intersection observer
5. **Projects Section**: Portfolio showcase with project cards and technology badges
6. **Resume Section**: Downloadable resume preview and highlights
7. **Contact Section**: Contact form with validation and social media links
8. **Footer**: Professional footer with contact information and social links

### UI Framework
- **Component Library**: shadcn/ui providing consistent, accessible components
- **Theming**: CSS variables-based theme system supporting light/dark modes
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Icons**: Font Awesome and Lucide React icons

### Backend Services
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database persistence
- **API Routes**: RESTful API endpoints with `/api` prefix
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Logging**: Request/response logging with performance metrics

## Data Flow

1. **Client Requests**: Frontend makes HTTP requests to backend API endpoints
2. **Server Processing**: Express routes handle requests and interact with storage layer
3. **Database Operations**: Drizzle ORM performs CRUD operations on PostgreSQL
4. **Response Handling**: TanStack Query manages caching and error states
5. **UI Updates**: React components re-render based on state changes

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/react-***: Headless UI components for accessibility
- **drizzle-orm**: Type-safe database ORM
- **express**: Web application framework
- **wouter**: Lightweight routing library

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Fast JavaScript bundler for production

### External Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Unsplash**: Stock photography for project images
- **Google Fonts**: Inter font family for typography
- **Font Awesome**: Icon library for social media and UI icons

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations run against PostgreSQL instance
4. **Static Assets**: Served directly by Express in production

### Environment Configuration
- **Development**: Uses Vite dev server with Express API proxy
- **Production**: Express serves static files and API routes
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Performance Optimizations
- **Code Splitting**: Vite automatically splits code for optimal loading
- **Asset Optimization**: Images and fonts are optimized for web delivery
- **Caching**: TanStack Query provides intelligent data caching
- **Bundle Size**: Tree shaking and minification reduce bundle size

## Changelog

- July 05, 2025. Initial setup
- July 05, 2025. Updated personal information: Changed name to Hamza Shabbir, email to hazily18@gmail.com, GitHub to https://github.com/hazily18, and removed Twitter references

## User Preferences

- Name: Hamza Shabbir
- Email: hazily18@gmail.com  
- GitHub: https://github.com/hazily18
- No Twitter account/references
- Preferred communication style: Simple, everyday language