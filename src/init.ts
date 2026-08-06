import { mountCorners } from "./layers/corners";
import { mountHats } from "./layers/hats";
import { mountSnow } from "./layers/snow";
import { mountWelcome } from "./layers/welcome";
import { shouldEnable } from "./season";
import { mountStyles } from "./styles";
import type { ChristmasFxOptions, ResolvedOptions } from "./types";

export type { ChristmasFxOptions } from "./types";

const ROOT_ID = "ab-xmas-root";

const DEFAULTS: Omit<ResolvedOptions, "enabled"> = {
  startDate: "12-01",
  endDate: "01-07",
  storageKey: "ab-christmas-fx-welcome",
  showWelcome: true,
  snow: true,
  corners: true,
  hats: true,
  zIndex: 9990,
  welcomeTitle: "Merry Christmas",
  welcomeSubtitle: "and Happy New Year",
  welcomeButtonText: "Read more",
};

let active = false;
let cleanups: Array<() => void> = [];

function resolveOptions(options?: ChristmasFxOptions): ResolvedOptions {
  return {
    ...DEFAULTS,
    ...options,
  };
}

function ensureRoot(zIndex: number): HTMLElement {
  let root = document.getElementById(ROOT_ID);
  if (!root) {
    root = document.createElement("div");
    root.id = ROOT_ID;
    root.className = "ab-xmas-root";
    root.setAttribute("aria-hidden", "true");
    document.body.appendChild(root);
  }
  root.style.zIndex = String(zIndex);
  return root;
}

export function isActive(): boolean {
  return active;
}

export function destroy(): void {
  for (const cleanup of cleanups.splice(0)) {
    try {
      cleanup();
    } catch {
      // ignore
    }
  }
  document.getElementById(ROOT_ID)?.remove();
  active = false;
}

export function init(options?: ChristmasFxOptions): void {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  const resolved = resolveOptions(options);
  if (!shouldEnable(resolved)) {
    destroy();
    return;
  }

  // Idempotent remount with latest options
  destroy();

  const run = () => {
    if (!document.body) return;

    cleanups.push(mountStyles());
    const root = ensureRoot(resolved.zIndex);
    if (resolved.corners) cleanups.push(mountCorners(root));
    if (resolved.snow) cleanups.push(mountSnow(root));
    if (resolved.hats) cleanups.push(mountHats());
    if (resolved.showWelcome) {
      cleanups.push(
        mountWelcome({
          storageKey: resolved.storageKey,
          title: resolved.welcomeTitle,
          subtitle: resolved.welcomeSubtitle,
          buttonText: resolved.welcomeButtonText,
          zIndex: resolved.zIndex,
        }),
      );
    }
    active = true;
  };

  if (document.readyState === "loading") {
    const onReady = () => {
      document.removeEventListener("DOMContentLoaded", onReady);
      run();
    };
    document.addEventListener("DOMContentLoaded", onReady);
    cleanups.push(() => document.removeEventListener("DOMContentLoaded", onReady));
  } else {
    run();
  }
}
