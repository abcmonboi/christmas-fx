import { init } from "./init";

export { destroy, init, isActive } from "./init";
export type { ChristmasFxOptions } from "./types";

function autoInit(): void {
  if (typeof window === "undefined") return;
  init();
}

autoInit();
