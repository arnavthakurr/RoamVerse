# RoamVerse

RoamVerse is a travel storytelling website that showcases destinations, journeys, blogs, gallery content, and curated travel inspiration.

## Features

- Explore destinations across India and the world
- Travel journey and wishlist tracking
- Blog and gallery sections
- Admin demo login for content management
- Responsive travel UI with modern dark theme

## Prerequisites

Before running this project, make sure you have installed:

- Node.js 18 or later
- npm 9 or later

To check:

```bash
node -v
npm -v
```

## Installation

1. Open a terminal in the project folder
2. Install dependencies:

```bash
npm install
```

## Run the app locally

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:5173/
```

## Build for production

```bash
npm run build
```

This creates a production build inside the `dist` folder.

## Preview the production build

```bash
npm run preview
```

## Project structure

```text
RoamVerse/
├── src/
├── public/
├── package.json
├── vite.config.ts
├── README.md
├── index.html
└── tsconfig*.json
```

## Common issues

### Port already in use
If `5173` is already busy, Vite will choose another port automatically. Check the terminal output for the correct local URL.

### Dependencies not installed
Run:

```bash
npm install
```

### Build errors
Try:

```bash
rm -rf node_modules dist
npm install
npm run build
```

## Notes

This project uses Vite + React + TypeScript and stores demo travel data locally in the browser for the wishlist and gallery features.
