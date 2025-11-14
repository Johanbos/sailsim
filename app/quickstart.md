# Quickstart: Hello World Baseline

This project is a minimal Vue 3 + TypeScript application that displays "Hello World" and includes unit and E2E tests.

## Prerequisites
- Node.js 20.19.0 or >=22.12.0
- npm 9.x or later

## Setup
```sh
cd app
npm install
```

## Development
```sh
npm run dev
```
Visit http://localhost:5173 in your browser.

## Unit Tests
```sh
npm run test:unit
```

## End-to-End (E2E) Tests
- Headless (recommended for CI):
  ```sh
  npm run build
  npm run test:e2e
  ```
- Interactive (for local debugging):
  ```sh
  npm run test:e2e:dev
  ```

## Linting & Formatting
```sh
npm run lint
npm run format
```

## Build for Production
```sh
npm run build
```

---
For more details, see the README.md in the app directory.
