# Murphy UI

A small React component library and its documentation site. Murphy UI provides
a set of composable UI primitives — layout, typography, form controls, and
media — built on a shared set of design tokens, with a browsable docs site that
demonstrates every component and its variants alongside copyable code.

The type scale, palette, and spacing follow the Material UI system, and the
whole thing supports light and dark themes out of the box.

## Features

- **Composable primitives** — Button, Card, Container, Icon, Image, Input, Link,
  SearchBox, Stack, Switch, and Typography.
- **Design tokens** — colours, spacing, type scale, and gradients defined as CSS
  custom properties in one place (`src/index.css`).
- **Light & dark themes** — driven by the OS `prefers-color-scheme` and an
  explicit `data-theme` attribute, with a toggle in the site header.
- **Live docs** — each component has a route showing its variants as a live
  preview paired with the source snippet (via the `Example` component).
- **Accessible by default** — semantic elements, required `alt`/`label` props,
  focus-visible styling, and correct ARIA roles.

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for dev server and builds
- [TanStack Router](https://tanstack.com/router) for file-based routing
- [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
  for code blocks
- [Vitest](https://vitest.dev/) + Testing Library for tests

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 20.19+ (or 22.12+)
- npm (bundled with Node)

### Install

```bash
npm install
```

### Run the docs site

```bash
npm run dev
```

This starts the Vite dev server with hot module replacement. Open the URL it
prints (default http://localhost:5173) to browse the components.

### Build for production

```bash
npm run build     # type-check, then bundle to dist/
npm run preview   # serve the built dist/ locally
```

## Scripts

| Script                 | Description                                    |
| ---------------------- | ---------------------------------------------- |
| `npm run dev`          | Start the dev server with HMR                  |
| `npm run build`        | Type-check (`tsc -b`) and build to `dist/`     |
| `npm run preview`      | Preview the production build                   |
| `npm run lint`         | Run ESLint                                     |
| `npm run format`       | Format the codebase with Prettier             |
| `npm run format:check` | Check formatting without writing changes       |
| `npm run test`         | Run tests in watch mode                        |
| `npm run test:run`     | Run tests once                                 |
| `npm run coverage`     | Run tests once with a coverage report          |

## Project structure

```
src/
  components/        One folder per component (Component.tsx, .types.ts,
                     .module.css, .test.tsx)
  routes/           File-based routes; components/*.tsx are the docs pages
  index.css         Design tokens (light + dark) and global styles
  main.tsx          App entry
```

## Theming

All colours come from CSS custom properties in `src/index.css`. The dark theme
overrides only the colour tokens; spacing, type, and the gradient definitions
are shared and recompute automatically. Dark mode applies when the OS prefers
it, and can be forced either way by setting `data-theme="dark"` or
`data-theme="light"` on the root element — which is exactly what the header
toggle does (persisting the choice to `localStorage`).
