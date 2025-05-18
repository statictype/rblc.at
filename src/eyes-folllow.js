"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startEyesFollow = startEyesFollow;
exports.updateCenter = updateCenter;
var gsap_1 = require("gsap");
var center = { x: 0, y: 0 };
var _a = initDOM(), leftPupil = _a.leftPupil, rightPupil = _a.rightPupil, anchor = _a.anchor;
function initDOM() {
    var leftPupil = document.querySelector("#pupil_left");
    var rightPupil = document.querySelector("#pupil_right");
    var anchor = document.getElementById("cat");
    if (!leftPupil || !rightPupil || !anchor)
        throw new Error("Could not find selector in document!");
    return { leftPupil: leftPupil, rightPupil: rightPupil, anchor: anchor };
}
function getDistanceToCenter(center, mouse) {
    return { x: mouse.x - center.x, y: mouse.y - center.y };
}
function createEye(pupilElement) {
    function follow(x, y) {
        gsap_1.gsap.to(pupilElement, {
            duration: 0.1,
            xPercent: gsap_1.gsap.utils.clamp(-300, 300, x / 4),
            yPercent: gsap_1.gsap.utils.clamp(-75, 125, y / 4) / 2,
        });
    }
    return { follow: follow };
}
function updateCenter() {
    var rect = anchor.getBoundingClientRect();
    center.x = rect.left + rect.width / 2;
    center.y = rect.top + rect.height / 2;
}
function startEyesFollow() {
    updateCenter();
    var left = createEye(leftPupil);
    var right = createEye(rightPupil);
    document.addEventListener("mousemove", function (e) {
        var _a = getDistanceToCenter(center, {
            x: e.clientX,
            y: e.clientY,
        }), x = _a.x, y = _a.y;
        left.follow(x, y);
        right.follow(x, y);
    });
}
