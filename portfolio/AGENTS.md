# AGENTS.md

Practices in this project

---

## DOM Manipulation Instead of Refs

`App.tsx` uses `document.querySelector` to access the scroll container rather than `useRef`:

```typescript
const contentDiv = document.querySelector(".App");
contentDiv?.addEventListener("scroll", handleScroll);
```

When modifying scroll logic, continue using this pattern — do not refactor to `useRef` unless asked.

---

## Side Effects in JSX

A `window.scrollTo(0, 0)` call is placed directly inside JSX at render time (used in the FauxHollows route). This is intentional for this project — do not move it into a `useEffect`.

---

## Non-Hook Theme Utilities (`theme.ts`)

`setTheme()` and `keepTheme()` are plain functions, not React hooks. They manipulate `localStorage` and `document.body` attributes directly. They are called from within components but do not follow the `use*` naming convention. Treat them as utility functions, not hooks.

---

## Enum as HTML Element IDs (`ScrollContext.ts`)

```typescript
export enum Sections {
  About = "About",
  Experience = "Experience",
  Projects = "Projects",
}
```

Enum string values are used directly as HTML `id` attributes for scroll targeting. When adding new sections, add them to this enum and set the matching `id` on the element.

---

## Helper Components Defined Inside Parent Components

`Projects.tsx` and `Experience.tsx` define inner components as local functions (`Project`, `Collapsed`, `ExperienceEntry`, `DateDisplay`, etc.) inside the file scope rather than as standalone exported components. This is the pattern for this project — keep new sub-components co-located in the same file unless they need to be shared.

---

## `cn()` Utility for Class Names (`lib/utils.ts`)

```typescript
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
```

This is the standard shadcn/ui pattern. Use `cn()` for all conditional or merged Tailwind class strings. Do not use bare template literals or string concatenation for Tailwind classes.

---

## Hybrid Styling: Tailwind + CSS Variables

Tailwind is primary, but theme colors (`--bg_color`, `--text_color`) are defined as CSS custom properties in `index.css` and toggled via a `data-theme` attribute on `document.body`. Do not replace this with Tailwind's dark mode unless explicitly asked.

---

## Scroll Offset Divided by 2 (`App.tsx`)

```typescript
const scrollPosition = contentDiv!.scrollTop / 2;
```

The `/2` divisor controls scroll-based header animation sensitivity. This is intentional — do not remove it.

---

## Explicit Type Annotations on `useState`

State is typed explicitly even when TypeScript could infer it:

```typescript
const [isOpen, setIsOpen] = React.useState<boolean>(false);
```

Match this style when adding new state.

---

## FauxHollows Route Stub

The `/FauxHollows` route exists as a placeholder and currently renders nothing meaningful. Leave it alone unless work on that section begins.
