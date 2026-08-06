function hasBeenSeen(storageKey: string): boolean {
  try {
    return window.localStorage.getItem(storageKey) === "1";
  } catch {
    return false;
  }
}

function markAsSeen(storageKey: string): void {
  try {
    window.localStorage.setItem(storageKey, "1");
  } catch {
    // ignore quota / private mode
  }
}

export type WelcomeOptions = {
  storageKey: string;
  title: string;
  subtitle: string;
  buttonText: string;
  zIndex: number;
};

export function mountWelcome(options: WelcomeOptions): () => void {
  if (hasBeenSeen(options.storageKey)) {
    return () => {};
  }

  const overlay = document.createElement("div");
  overlay.className = "ab-xmas-welcome-overlay";
  overlay.style.zIndex = String(options.zIndex + 10);
  overlay.setAttribute("role", "presentation");

  const dialog = document.createElement("div");
  dialog.className = "ab-xmas-welcome";
  dialog.setAttribute("role", "dialog");
  dialog.setAttribute("aria-modal", "true");
  dialog.setAttribute("aria-labelledby", "ab-xmas-welcome-title");

  const headline = options.title.replace(/^Merry\s+/i, "").trim() || "Christmas";

  dialog.innerHTML = `
    <div class="ab-xmas-welcome-frame">
      <button type="button" class="ab-xmas-welcome-close" aria-label="Close" data-ab-xmas-no-hat>×</button>
      <p class="ab-xmas-welcome-merry">Merry</p>
      <h2 id="ab-xmas-welcome-title" class="ab-xmas-welcome-title">${escapeHtml(headline)}</h2>
      <p class="ab-xmas-welcome-sub">${escapeHtml(options.subtitle)}</p>
      <div class="ab-xmas-welcome-icons" aria-hidden="true">
        <span>🎄</span><span>🔔</span><span>✦</span>
      </div>
      <button type="button" class="ab-xmas-welcome-btn" data-ab-xmas-no-hat>${escapeHtml(options.buttonText)}</button>
    </div>
  `;
  overlay.appendChild(dialog);

  const close = () => {
    markAsSeen(options.storageKey);
    overlay.remove();
    document.removeEventListener("keydown", onKey);
  };

  const onKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") close();
  };

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) close();
  });
  dialog.querySelector(".ab-xmas-welcome-close")?.addEventListener("click", close);
  dialog.querySelector(".ab-xmas-welcome-btn")?.addEventListener("click", close);
  document.addEventListener("keydown", onKey);

  document.body.appendChild(overlay);

  const focusBtn = dialog.querySelector<HTMLElement>(".ab-xmas-welcome-btn");
  focusBtn?.focus();

  return () => {
    document.removeEventListener("keydown", onKey);
    overlay.remove();
  };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
