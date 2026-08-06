const FLAKE_COUNT = 55;

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function mountSnow(root: HTMLElement): () => void {
  if (prefersReducedMotion()) {
    return () => {};
  }

  const layer = document.createElement("div");
  layer.className = "ab-xmas-snow";
  layer.setAttribute("aria-hidden", "true");

  const count = FLAKE_COUNT;
  for (let i = 0; i < count; i++) {
    const flake = document.createElement("span");
    flake.className = i % 5 === 0 ? "ab-xmas-flake ab-xmas-flake--crystal" : "ab-xmas-flake";
    const left = Math.random() * 100;
    const delay = Math.random() * -20;
    const duration = 10 + Math.random() * 14;
    const size = 2 + Math.random() * 5;
    const opacity = 0.35 + Math.random() * 0.55;
    flake.style.cssText = [
      `left:${left}%`,
      `animation-delay:${delay}s`,
      `animation-duration:${duration}s`,
      `width:${size}px`,
      `height:${size}px`,
      `opacity:${opacity}`,
    ].join(";");
    if (i % 5 === 0) {
      flake.textContent = "❄";
      flake.style.fontSize = `${8 + Math.random() * 10}px`;
      flake.style.width = "auto";
      flake.style.height = "auto";
      flake.style.background = "none";
    }
    layer.appendChild(flake);
  }

  root.appendChild(layer);

  return () => {
    layer.remove();
  };
}
