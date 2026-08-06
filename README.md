# @ab/christmas-fx

Framework-agnostic Christmas UI overlays for any web app: pine/ornament corners, snowfall, Santa hats on `button` / `input` / `a`, and a first-visit welcome modal.

## Install

```bash
npm install @ab/christmas-fx
```

## Usage

### Auto-init (seasonal)

Active by default from **Dec 1** through **Jan 7**. Outside that window, nothing mounts.

```ts
import "@ab/christmas-fx";
```

### Manual control

```ts
import { init, destroy, isActive } from "@ab/christmas-fx/manual";

init({
  enabled: true, // force on outside season (e.g. demos)
  showWelcome: true,
});
```

Styles are injected automatically via the JS bundle.

## Options

| Option | Default | Description |
|--------|---------|-------------|
| `enabled` | *(season)* | `true` / `false` forces on/off; omit to use dates |
| `startDate` | `"12-01"` | Season start `MM-DD` |
| `endDate` | `"01-07"` | Season end `MM-DD` (supports year wrap) |
| `storageKey` | `"ab-christmas-fx-welcome"` | localStorage key for welcome-once |
| `showWelcome` | `true` | First-visit modal |
| `snow` | `true` | Snowfall layer |
| `corners` | `true` | Corner decorations |
| `hats` | `true` | Santa hats on interactive elements |
| `zIndex` | `9990` | Overlay z-index (modal uses +10) |
| `welcomeTitle` | `"Merry Christmas"` | Modal headline |
| `welcomeSubtitle` | `"and Happy New Year"` | Modal subtitle |
| `welcomeButtonText` | `"Read more"` | Modal CTA |

## Skip hats on specific elements

```html
<button data-ab-xmas-no-hat>No hat</button>
```

## API

- `init(options?)` — mount (idempotent)
- `destroy()` — remove overlays, observers, hat classes
- `isActive()` — whether FX is currently mounted

## Demo

```bash
npm install
npm run build
npm run dev:example
```

## Notes

- Client-only (`typeof window` guarded). Import from client entrypoints in SSR frameworks.
- Snow respects `prefers-reduced-motion: reduce`.
- Decorative layers use `pointer-events: none`; the welcome modal does not.
