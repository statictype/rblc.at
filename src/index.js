"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gsap_1 = require("gsap");
var DrawSVGPlugin_1 = require("gsap/DrawSVGPlugin");
var eyes_folllow_1 = require("./eyes-folllow");
gsap_1.gsap.registerPlugin(DrawSVGPlugin_1.DrawSVGPlugin);
var tl = gsap_1.gsap.timeline({
    defaults: { duration: 1, ease: "expo.out" },
});
function init() {
    tl.from(".cat", { opacity: 0, autoAlpha: 0 })
        .from("#deco_triangle", {
        scaleY: 0,
        transformOrigin: "left bottom",
        ease: "power4.in",
    })
        .from("#deco_ellipse_small", {
        scale: 0,
        transformOrigin: "center",
        duration: 0.5,
    })
        .from("[id^='deco_line']", {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 0.5,
        stagger: 0.2,
        ease: "power4.in",
    }, "-=1.5")
        .from("#deco_ellipse_big", { y: -400, ease: "elastic.out(1,0.3)" }, "-=0.5")
        .from("#ear_left", {
        scaleY: 0,
        transformOrigin: "left bottom",
    }, "-=0.8")
        .from("#ear_right", {
        scaleY: 0,
        transformOrigin: "right bottom",
    }, "-=1")
        .from("#neck", { y: 200, ease: "expo.out" }, "-=1")
        .from("#vesica", { scaleY: 0, transformOrigin: "center", duration: 0.5, ease: "expo.out" }, "-=1")
        .from("#nose", {
        scale: 0,
        transformOrigin: "bottom center",
        duration: 0.3,
        ease: "power4.out",
    }, "-=0.8")
        .from("#eye_left, #eye_right", {
        scaleY: 0,
        transformOrigin: "center",
        repeat: -1,
        repeatDelay: 5,
    }, "-=0.8")
        .from("#mouth_left, #mouth_right", { drawSVG: 0, duration: 0.5 }, "-=1")
        .from("#whiskers_left path", {
        scaleX: 0,
        transformOrigin: "right bottom",
        stagger: 0.2,
        ease: "elastic.out(1,0.3)",
    }, "-=0.8")
        .from("#whiskers_right path", {
        scaleX: 0,
        transformOrigin: "left bottom",
        stagger: 0.2,
        ease: "elastic.out(1,0.3)",
    }, "-=1.6");
}
window.addEventListener("load", function () {
    init();
});
window.addEventListener("DOMContentLoaded", function () {
    (0, eyes_folllow_1.startEyesFollow)();
    window.addEventListener("resize", function () {
        (0, eyes_folllow_1.updateCenter)();
    });
});
