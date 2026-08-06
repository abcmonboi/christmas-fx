const HAT_ATTR = "data-ab-xmas-hat";
const SELECTOR = "button, a, input:not([type='hidden']):not([type='checkbox']):not([type='radio']):not([type='file']):not([type='range']):not([type='color'])";

function shouldSkip(el: Element): boolean {
  if (!(el instanceof HTMLElement)) return true;
  if (el.closest("#ab-xmas-root")) return true;
  if (el.hasAttribute("data-ab-xmas-no-hat")) return true;
  if (el.hasAttribute(HAT_ATTR)) return true;
  if (el.getAttribute("aria-hidden") === "true") return true;
  if (el.tagName === "A" && !el.getAttribute("href") && !el.getAttribute("role")) {
    // still decorate bare anchors
  }
  return false;
}

function decorate(el: HTMLElement): void {
  if (shouldSkip(el)) return;
  el.setAttribute(HAT_ATTR, "1");
  el.classList.add("ab-xmas-hatted");
}

function undecorate(el: HTMLElement): void {
  el.removeAttribute(HAT_ATTR);
  el.classList.remove("ab-xmas-hatted");
}

function scan(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>(SELECTOR).forEach(decorate);
}

export function mountHats(): () => void {
  scan(document);

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;
        if (node.matches?.(SELECTOR)) decorate(node);
        if (node.querySelectorAll) scan(node);
      }
    }
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });

  return () => {
    observer.disconnect();
    document.querySelectorAll<HTMLElement>(`[${HAT_ATTR}]`).forEach(undecorate);
  };
}
