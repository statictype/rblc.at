"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gsap_1 = require("gsap");
var tl = gsap_1.gsap.timeline({
    onComplete: function () {
        console.log("finished");
    },
});
tl.fromTo("#eye_left, #eye_right", { scaleY: 0, transformOrigin: "center" }, { scaleY: 1, duration: 1 })
    .fromTo("#ear_left", { scaleY: 0, transformOrigin: "left bottom" }, { scaleY: 1, duration: 1 }, "-=0.5")
    .fromTo("#ear_right", { scaleY: 0, transformOrigin: "right bottom" }, { scaleY: 1, duration: 1 }, "-=1")
    .fromTo("#neck", { y: 200 }, { y: 1, duration: 1 }, "-=1")
    .fromTo("#vesica", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1")
    .fromTo("#nose", { scale: 0, transformOrigin: "center" }, { scale: 1, duration: 1 }, "-=1")
    .fromTo("#deco_triangle", { scaleY: 0, transformOrigin: "left bottom" }, { scaleY: 1, duration: 1 }, "-=1")
    .fromTo("#deco_ellipse_small", { scale: 0, transformOrigin: "center", stagger: 0.1 }, { scale: 1, duration: 0.5 }, "-=0.5")
    .fromTo("#whiskers_left", { scaleX: 0, transformOrigin: "right bottom" }, { scaleX: 1, duration: 1 }, "-=0.5")
    .fromTo("#whiskers_right", { scaleX: 0, transformOrigin: "left bottom" }, { scaleX: 1, duration: 1 }, "-=1")
    .fromTo("[id^='deco_line']", { scaleY: 0, transformOrigin: "top center" }, { scaleY: 1, duration: 0.5, stagger: 0.5 }, "-=2")
    .fromTo("#deco_ellipse_big", { y: -400 }, { y: 1, duration: 0.5 }, "-=1.5");
console.log("bla");
var canvas = document.querySelector(".cat");
canvas.onclick = function (e) {
    var target = e.target;
    var rect = target.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    console.log(x, y);
};
