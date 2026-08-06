import { CORNER_BR_SVG, CORNER_TL_SVG } from "../assets/corners";

export function mountCorners(root: HTMLElement): () => void {
  const tl = document.createElement("div");
  tl.className = "ab-xmas-corner ab-xmas-corner--tl";
  tl.innerHTML = CORNER_TL_SVG;

  const br = document.createElement("div");
  br.className = "ab-xmas-corner ab-xmas-corner--br";
  br.innerHTML = CORNER_BR_SVG;

  root.append(tl, br);

  return () => {
    tl.remove();
    br.remove();
  };
}
