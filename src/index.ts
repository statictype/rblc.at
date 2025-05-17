import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

let tl = gsap.timeline({ defaults: { opacity: 0 } });

function init() {
  tl.from(".cat", { autoAlpha: 0 })
    .from("#deco_triangle", {
      scaleY: 0,
      transformOrigin: "left bottom",
      duration: 1,
      ease: "power4.in",
    })
    .from("#deco_ellipse_small", {
      scale: 0,
      transformOrigin: "center",
      duration: 0.5,
    })
    .from(
      "[id^='deco_line']",
      {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 0.5,
        stagger: 0.2,
        ease: "power4.in",
      },
      "-=1.5"
    )
    .from(
      "#deco_ellipse_big",
      { y: -400, duration: 1, ease: "elastic.out(1,0.3)" },
      "-=0.5"
    )
    .from(
      "#ear_left",
      {
        scaleY: 0,
        transformOrigin: "left bottom",
        duration: 1,
        ease: "expo.out",
      },
      "-=0.8"
    )
    .from(
      "#ear_right",
      {
        scaleY: 0,
        transformOrigin: "right bottom",
        duration: 1,
        ease: "expo.out",
      },
      "-=1"
    )
    .from("#neck", { y: 200, duration: 1, ease: "expo.out" }, "-=1")
    .from(
      "#vesica",
      { scaleY: 0, transformOrigin: "center", duration: 0.5, ease: "expo.out" },
      "-=1"
    )
    .from(
      "#nose",
      {
        scale: 0,
        transformOrigin: "bottom center",
        duration: 0.3,
        ease: "power4.out",
      },
      "-=0.8"
    )
    .from(
      "#eye_left, #eye_right",
      {
        scaleY: 0,
        transformOrigin: "center",
        duration: 1,
        ease: "expo.out",
        repeat: -1,
        repeatDelay: 5,
      },
      "-=0.8"
    )
    .from("#mouth_left, #mouth_right", { drawSVG: 0, duration: 0.5 }, "-=1")
    .from(
      "#whiskers_left path",
      {
        scaleX: 0,
        transformOrigin: "right bottom",
        duration: 1,
        stagger: 0.2,
        ease: "elastic.out(1,0.3)",
      },
      "-=0.8"
    )
    .from(
      "#whiskers_right path",
      {
        scaleX: 0,
        transformOrigin: "left bottom",
        duration: 1,
        stagger: 0.2,
        ease: "elastic.out(1,0.3)",
      },
      "-=1.6"
    );
}

window.addEventListener("load", function (event) {
  init();
});
