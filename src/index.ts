import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase } from "gsap/EasePack";

gsap.registerPlugin(DrawSVGPlugin, RoughEase, ExpoScaleEase, CustomEase);

let tl = gsap.timeline({
  onComplete: () => {
    console.log("finished");
  },
});

tl.fromTo(
  "#deco_triangle",
  { scaleY: 0, transformOrigin: "left bottom" },
  { scaleY: 1, duration: 1, ease: "power4.in" }
)
  .fromTo(
    "#deco_ellipse_small",
    { scale: 0, transformOrigin: "center" },
    { scale: 1, duration: 0.5 }
  )
  .fromTo(
    "[id^='deco_line']",
    { scaleY: 0, transformOrigin: "top center" },
    { scaleY: 1, duration: 0.5, stagger: 0.2, ease: "power4.in" },
    "-=1.5"
  )
  .fromTo(
    "#deco_ellipse_big",
    { y: -400 },
    { y: 1, duration: 1, ease: "elastic.out(1,0.3)" },
    "-=0.5"
  )

  .fromTo(
    "#ear_left",
    { scaleY: 0, transformOrigin: "left bottom" },
    { scaleY: 1, duration: 1, ease: "expo.out" },
    "-=0.8"
  )
  .fromTo(
    "#ear_right",
    { scaleY: 0, transformOrigin: "right bottom" },
    { scaleY: 1, duration: 1, ease: "expo.out" },
    "-=1"
  )
  .fromTo("#neck", { y: 200 }, { y: 1, duration: 1, ease: "expo.out" }, "-=1")
  .fromTo(
    "#vesica",
    { scaleY: 0, transformOrigin: "center" },
    { scaleY: 1, duration: 0.5, ease: "expo.out" },
    "-=1"
  )
  .fromTo(
    "#nose",
    { scale: 0, transformOrigin: "bottom center" },
    { scale: 1, duration: 0.3, ease: "power4.out" },
    "-=0.8"
  )
  .fromTo(
    "#eye_left, #eye_right",
    { scaleY: 0, transformOrigin: "center" },
    { scaleY: 1, duration: 1, ease: "expo.out" },
    "-=0.8"
  )

  .fromTo(
    "#mouth_left, #mouth_right",
    { drawSVG: 0 },
    { drawSVG: "100%", duration: 0.5 },
    "-=1"
  )
  .fromTo(
    "#whiskers_left path",
    { scaleX: 0, transformOrigin: "right bottom" },
    { scaleX: 1, duration: 1, stagger: 0.2, ease: "elastic.out(1,0.3)" },
    "-=0.8"
  )
  .fromTo(
    "#whiskers_right path",
    { scaleX: 0, transformOrigin: "left bottom" },
    { scaleX: 1, duration: 1, stagger: 0.2, ease: "elastic.out(1,0.3)" },
    "-=1.6"
  );

const canvas = document.querySelector(".cat") as HTMLElement;
canvas.onclick = function (e) {
  const target = e.target as HTMLElement;
  const rect = target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  console.log(x, y);
};
