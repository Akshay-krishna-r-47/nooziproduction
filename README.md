# Noozi Production Website

A professional portfolio and service showcase website for Noozi Production, a media production company specializing in high-impact visual storytelling, commercial videography, and brand narratives.

## Overview

This project is a modern, responsive single-page application (SPA) built to display the company's portfolio, services, and pricing structure. It features a custom design system with a distinct "Green & Gold" color palette, smooth scroll animations, and an interactive user interface tailored for both desktop and mobile devices.

## Technology Stack

-   **Frontend Framework:** React (v18+)
-   **Build Tool:** Vite
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS
-   **Animations:** Framer Motion
-   **Icons:** Lucide React
-   **Routing:** React Router DOM

## Features

-   **Responsive Design:** Fully optimized layout for mobile, tablet, and desktop screens.
-   **Dynamic Navigation:** Smart navbar with scroll-aware styling and mobile-responsive menu.
-   **Interactive UI:** Custom animations, hover effects, and smooth page transitions using Framer Motion.
-   **Portfolio Showcase:** Video grid layout with modal playback for featured works.
-   **Service Listings:** Detailed breakdown of services with custom iconography.
-   **Rate Cards:** Clear, structured pricing tables for B2B and standard clients.
-   **Contact Integration:** Functional contact form layout and direct communication links.

## Project Structure

```bash
src/
├── assets/         # Static assets (images, videos, icons)
├── components/     # Reusable UI components (Navbar, Hero, Footer, etc.)
├── pages/          # Main page views (Home, Works, Services, etc.)
├── utils/          # Helper functions and utilities
├── App.tsx         # Main application component and routing configuration
└── main.tsx        # Application entry point
```

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Akshay-krishna-r-47/nooziproduction.git
    cd nooziproduction
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## Deployment on Render

To deploy this project as a **Static Site** on [Render](https://render.com):

1.  **New Static Site:** Connect your GitHub repository.
2.  **Settings:**
    -   **Build Command:** `npm run build`
    -   **Publish Directory:** `dist`
3.  **Rewrites (Crucial for React Router):**
    -   Go to **Redirects/Rewrites** tab.
    -   Add a new rule:
        -   **Source:** `/*`
        -   **Destination:** `/index.html`
        -   **Action:** `Rewrite`

## License

All rights reserved. No part of this codebase or design may be reproduced or used without explicit permission from Noozi Production.
