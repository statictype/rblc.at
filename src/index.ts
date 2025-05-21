import { startEyesFollow, updateCenter, resetEyes } from "./eyes-folllow";
import { startTimeline } from "./timeline";
import { debounce } from "./utils";

window.addEventListener("load", () => {
  startTimeline();
});

window.addEventListener("DOMContentLoaded", () => {
  startEyesFollow();
});

window.addEventListener("blur", () => {
  resetEyes();
});

window.addEventListener(
  "resize",
  debounce(() => {
    updateCenter();
  }, 300)
);
