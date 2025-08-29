
# Fleet Explorer

Browse vehicles by ZIP with fast filtering and sorting. On first load, the page prompts for a ZIP to avoid a misleading “no results” state. After a valid ZIP is entered, the left panel shows filters and the right panel lists matching vehicles.

Demo Link: https://fleet-explorer-five.vercel.app/

## Overview

- Enter a ZIP code to load inventory scoped to that area.
- Filter by make and color; counts update based on current selections.
- Sort results (e.g., price) and view vehicles in a responsive grid.
- Clear UX flow: ZIP first, then filters and results.

## Tech Stack

- React + TypeScript
- Vite (dev server, build)
- Vitest + React Testing Library + JSDOM (unit tests)
- CSS (no CSS-in-JS dependency)

## Quick Start

- Requirements
  - Node 18+ and npm 9+

- Install
  - npm install

- Run (development)
  - npm run dev
  - Open the printed local URL in a browser

- Build and Preview
  - npm run build
  - npm run preview

## Scripts

- npm run dev — start the dev server with hot reload
- npm run build — production build
- npm run preview — preview the production build locally
- npm test — run unit tests once (CI-friendly)
- npm run test:watch — run tests in watch mode
- npm run test:ui — run tests with an interactive UI (if enabled)
- npm run lint — run linter
- npm run typecheck — TypeScript type checking (no emit)

## Testing

- Test runner: Vitest with globals enabled and JSDOM environment.
- React Testing Library is used for DOM queries and user interactions.
- Setup file extends assertions (jest-dom) and provides lightweight browser API shims where needed.

Run tests:
- npm test

Watch mode:
- npm run test:watch

Notes:
- Tests avoid console output; any stray logs should be removed.
- IntersectionObserver is mocked in the test setup so components that lazy-render remain testable in JSDOM.

## Project Structure

- src/
  - components/
    - EmptyState/
    - ErrorBanner/
    - Filters/
    - Image/
    - RenderIfVisible
    - SortBar/
    - VehicleCard/
    - VehicleGrid/
    - ZipSearch/
  - hooks
    - useInventoryState.tsx
  - mockData
  - pages
  - templates/
    - InventoryTemplate/
  - test/
    - setup.ts (testing setup)
  - utils.ts
- public/
- index.html

