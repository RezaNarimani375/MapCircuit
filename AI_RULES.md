# AI_RULES.md

## Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite (fast dev server and ES modules)
- **Routing**: React Router (keep route definitions in `src/App.tsx`)
- **Styling**: Tailwind CSS (utility‑first classes for layout, spacing, colors, etc.)
- **UI Components**: shadcn/ui library (pre‑built, accessible components; do not modify the imported files directly)
- **Icons**: lucide-react (SVG icons via the `lucide-react` package)
- **State Management**: React built‑in hooks (`useState`, `useEffect`, `useContext`); avoid external libraries unless explicitly required
- **Linting/Formatting**: ESLint + Prettier (configured via the repo)
- **Type Safety**: Strict TypeScript (`tsconfig.json` with `strict: true`)

## Usage Rules
1. **File Organization**
   - Place page components in `src/pages/` (e.g., `src/pages/Index.tsx` for the home page).
   - Place reusable UI components in `src/components/`.
   - Keep all route definitions in `src/App.tsx`; do not split routing across multiple files unless the app grows large and you create a dedicated `src/routes/` folder.
   - Store static assets (images, SVGs) in `src/assets/`.

2. **Styling**
   - Use Tailwind CSS classes exclusively for styling; avoid writing custom CSS unless absolutely necessary (e.g., for complex animations).
   - When custom CSS is needed, place it in `src/App.css` or a component‑specific CSS module and scope it tightly.
   - Follow the existing design tokens (colors, spacing, radii) defined in the Tailwind config; do not introduce hard‑coded values that break the theme.

3. **Component Library**
   - Prefer shadcn/ui components (e.g., `Button`, `Input`, `Card`, `Dialog`, `Tooltip`). Import them from their respective files in `src/components/ui/` (the shadcn/ui setup already provides these).
   - Do **not** edit the imported shadcn/ui files directly. If you need to modify a component’s behavior or appearance, create a wrapper component in `src/components/` that extends or styles the shadcn/ui base.
   - Use lucide-react for icons; import the specific icon you need (e.g., `import { LucideIcon } from 'lucide-react';`).

4. **TypeScript**
   - Write all new files in TypeScript (`.tsx` for React components, `.ts` for utilities).
   - Enable `noImplicitAny`, `strictNullChecks`, and `exactOptionalPropertyTypes` (already set in `tsconfig.json`).
   - Avoid `any`; if you must use it, add a comment explaining why and plan to replace it later.

5. **Routing**
   - Define routes in `src/App.tsx` using `BrowserRouter`, `Routes`, and `Route` from `react-router-dom`.
   - Keep route paths lowercase and use hyphens as separators (e.g., `/user-profile`).
   - Lazy‑load pages with `React.lazy` and `Suspense` when the app scales beyond a few routes.

6. **State & Data Fetching**
   - Use React hooks for local state. For global state, consider the Context API or a lightweight state library (e.g., Zustand) only after explicit approval.
   - Data fetching should be performed in `useEffect` or with React Query/SWR if added later; keep fetching logic near the component that uses it or in a custom hook.

7. **Code Quality**
   - Run `npm run lint` (or the provided lint script) before submitting changes.
   - Ensure TypeScript compiles without errors (`npm run type-check` or `tsc --noEmit`).
   - Keep components small and focused; aim for < 150 lines per file when possible.
   - Add JSDoc comments for complex functions or non‑obvious logic.

8. **Accessibility**
   - Follow WAI‑ARIA guidelines when using shadcn/ui components (they are already accessible).
   - Ensure sufficient color contrast (use Tailwind’s gray scale).
   - Provide meaningful `alt` text for images and accessible labels for form inputs.

9. **Performance**
   - Lazy‑load images and heavy components.
   - Avoid inline object literals in render props that cause re‑creations; memoize with `useMemo` or `useCallback` when needed.
   - Keep the bundle size small; prefer tree‑shakable imports.

10. **Updating This File**
    - Only edit `AI_RULES.md` when the user explicitly asks to remember a guideline across conversations or when introducing a foundational convention (e.g., adopting a new library).
    - Keep the file concise; move detailed guidance to separate markdown files if needed and reference them here.
