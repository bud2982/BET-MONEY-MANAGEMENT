# Betting Pro Application - Replit.md

## Overview

This is a comprehensive betting money management application built with TypeScript, React, and Express.js. The application provides advanced betting strategies with real-time analytics, featuring multiple algorithmic approaches including Kelly Criterion, D'Alembert, Masaniello, and Profit Fall strategies. The system is designed as a premium SaaS platform with subscription-based access and demo functionality.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: Radix UI with Tailwind CSS styling
- **State Management**: React Query (TanStack Query) for server state, React hooks for local state
- **Charts/Visualization**: Chart.js for analytics and sparkline components
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ESM modules
- **Authentication**: Replit Auth integration with session management
- **Session Storage**: PostgreSQL-backed session store
- **Payment Processing**: Stripe integration (demo mode in current setup)
- **Email Service**: SendGrid integration for notifications

### Database Schema
- **ORM**: Drizzle ORM with PostgreSQL
- **Tables**:
  - `users`: User profiles with subscription status
  - `auth_sessions`: Session management for Replit Auth
  - `betting_sessions`: Betting strategy sessions
  - `bets`: Individual bet records

## Key Components

### Betting Strategies
1. **Percentage Strategy**: Fixed percentage of bankroll betting
2. **D'Alembert Strategy**: Progressive betting with unit adjustments
3. **Kelly Criterion**: Probability-based optimal betting size
4. **Masaniello System**: Multi-event structured betting
5. **Profit Fall Strategy**: Custom progressive system
6. **Beat the Delay**: Advanced ML-enhanced strategy

### Authentication System
- Replit Auth integration for secure login
- Session-based authentication with PostgreSQL storage
- Premium subscription verification
- Trial account support

### Payment System
- Stripe integration for subscription management
- Multiple subscription tiers (Basic, Pro, Premium)
- Demo mode for development and testing
- Webhook handling for subscription updates

### Analytics & Visualization
- Real-time session tracking
- Sparkline charts for trend visualization
- Performance metrics and ROI calculations
- Badge system for achievement tracking
- ML-based predictions and recommendations

## Data Flow

1. **User Authentication**: Replit Auth → Session Creation → Database Storage
2. **Betting Session**: Strategy Selection → Parameter Configuration → Session Creation
3. **Bet Placement**: Outcome Recording → Bankroll Updates → Strategy Recalculation
4. **Analytics**: Data Aggregation → Visualization Components → Real-time Updates
5. **Subscription**: Payment Processing → Status Updates → Feature Access Control

## External Dependencies

### Core Dependencies
- **Database**: PostgreSQL with Neon serverless driver
- **Authentication**: Replit Auth OIDC
- **Payments**: Stripe API
- **Email**: SendGrid API
- **UI Components**: Radix UI primitives
- **Styling**: Tailwind CSS

### Development Tools
- **Build**: Vite with TypeScript support
- **Database Migrations**: Drizzle Kit
- **Code Quality**: TypeScript strict mode
- **Container**: Docker with multi-stage builds

## Deployment Strategy

### Container Deployment
- Multi-stage Docker build for optimization  
- Production image with Node.js 18 Alpine
- Non-root user security configuration
- Health checks and graceful shutdown

### Cloud Deployment Options
1. **Google Cloud Run**: Auto-scaling container deployment
2. **Google App Engine**: Managed platform deployment
3. **Replit**: Direct deployment from development environment

### Environment Configuration
- Database URL for PostgreSQL connection
- Stripe keys for payment processing
- SendGrid API key for email services
- Session secret for authentication
- Replit domains for CORS configuration

### CI/CD Pipeline
- Cloud Build configuration for automatic deployments
- Docker image building and pushing to Container Registry
- Automated deployment to Cloud Run with traffic management

## Changelog

- June 24, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.