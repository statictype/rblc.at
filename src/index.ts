import { startEyesFollow, updateCenter } from "./eyes-folllow";
import { startTimeline } from "./timeline";

window.addEventListener("load", () => {
  startTimeline();
});

window.addEventListener("DOMContentLoaded", () => {
  startEyesFollow();
  window.addEventListener("resize", () => {
    updateCenter();
  });
});
