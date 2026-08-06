import { destroy, init, isActive } from "@ab/christmas-fx/manual";

init({
  enabled: true,
  showWelcome: true,
});

declare global {
  interface Window {
    __xmas: {
      init: typeof init;
      destroy: typeof destroy;
      isActive: typeof isActive;
    };
  }
}

window.__xmas = { init, destroy, isActive };

document.getElementById("add-btn")?.addEventListener("click", () => {
  const host = document.getElementById("dynamic");
  if (!host) return;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.textContent = `Dynamic #${host.children.length + 1}`;
  btn.style.margin = "8px 8px 0 0";
  host.appendChild(btn);
});

document.querySelector("form")?.addEventListener("submit", (event) => {
  event.preventDefault();
});
