const STYLE_ID = "ab-xmas-styles";

export const CHRISTMAS_FX_CSS = `
.ab-xmas-root {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 9990;
}

.ab-xmas-corner {
  position: absolute;
  width: min(240px, 42vw);
  height: min(240px, 42vw);
  pointer-events: none;
  z-index: 1;
}

.ab-xmas-corner--tl { top: 0; left: 0; }
.ab-xmas-corner--br { right: 0; bottom: 0; }

.ab-xmas-corner-svg {
  display: block;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.25));
}

@media (max-width: 640px) {
  .ab-xmas-corner {
    width: min(160px, 48vw);
    height: min(160px, 48vw);
  }
}

.ab-xmas-snow {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 2;
}

.ab-xmas-flake {
  position: absolute;
  top: -12px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
  animation-name: ab-xmas-fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  will-change: transform;
}

.ab-xmas-flake--crystal {
  background: none;
  box-shadow: none;
  color: #fff;
  line-height: 1;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9);
}

@keyframes ab-xmas-fall {
  0% { transform: translate3d(0, -5vh, 0) rotate(0deg); }
  100% { transform: translate3d(12vw, 105vh, 0) rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .ab-xmas-snow { display: none; }
}

.ab-xmas-hatted {
  position: relative !important;
}

.ab-xmas-hatted::before {
  content: "";
  position: absolute;
  top: -10px;
  left: -6px;
  width: 16px;
  height: 14px;
  z-index: 2;
  pointer-events: none;
  background:
    radial-gradient(circle at 88% 18%, #fff 0 3px, transparent 3.5px),
    linear-gradient(180deg, #c62828 0 70%, transparent 70%),
    linear-gradient(#fff, #fff);
  background-size: 100% 100%, 100% 70%, 100% 4px;
  background-position: 0 0, 0 0, 0 100%;
  background-repeat: no-repeat;
  border-radius: 2px 10px 2px 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  transform: rotate(-18deg);
}

.ab-xmas-hatted::after {
  content: "";
  position: absolute;
  top: -2px;
  left: -8px;
  width: 18px;
  height: 5px;
  z-index: 3;
  pointer-events: none;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  transform: rotate(-18deg);
}

.ab-xmas-welcome-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(40, 8, 12, 0.45);
  pointer-events: auto;
  z-index: 10000;
}

.ab-xmas-welcome {
  position: relative;
  max-width: 360px;
  width: 100%;
  pointer-events: auto;
}

.ab-xmas-welcome-frame {
  position: relative;
  text-align: center;
  color: #fff;
  padding: 36px 28px 28px;
  background: transparent;
  border: 3px solid #fff;
  border-radius: 40% 45% 42% 48% / 48% 42% 45% 40%;
  box-shadow:
    0 0 0 2px rgba(255, 255, 255, 0.35),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
}

.ab-xmas-welcome-close {
  position: absolute;
  top: 8px;
  right: 16px;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  padding: 4px 8px;
}

.ab-xmas-welcome-merry {
  margin: 0;
  font-family: "Segoe Script", "Brush Script MT", "Apple Chancery", cursive;
  font-size: 1.15rem;
  font-weight: 400;
  opacity: 0.95;
}

.ab-xmas-welcome-title {
  margin: 0.15em 0 0.35em;
  font-family: "Segoe Script", "Brush Script MT", "Apple Chancery", cursive;
  font-size: clamp(2.4rem, 8vw, 3.4rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.02em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
}

.ab-xmas-welcome-sub {
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 0.95rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.92;
}

.ab-xmas-welcome-icons {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 14px 0 18px;
  font-size: 1rem;
  opacity: 0.9;
}

.ab-xmas-welcome-btn {
  display: inline-block;
  border: none;
  border-radius: 6px;
  padding: 10px 22px;
  background: #fff;
  color: #1a1a1a;
  font-family: system-ui, sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}

.ab-xmas-welcome-btn:hover { background: #f5f5f5; }

.ab-xmas-welcome-btn:focus-visible {
  outline: 2px solid #ffe08a;
  outline-offset: 3px;
}
`.trim();

export function mountStyles(): () => void {
  if (typeof document === "undefined") return () => {};
  let el = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
  if (!el) {
    el = document.createElement("style");
    el.id = STYLE_ID;
    el.textContent = CHRISTMAS_FX_CSS;
    document.head.appendChild(el);
  }
  return () => {
    document.getElementById(STYLE_ID)?.remove();
  };
}
