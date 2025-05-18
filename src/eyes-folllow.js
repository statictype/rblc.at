"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startEyesFollow = startEyesFollow;
var gsap_1 = require("gsap");
function initDOM() {
    var leftEye = document.querySelector("#eye_left");
    var rightEye = document.querySelector("#eye_right");
    var leftPupil = document.querySelector("#pupil_left");
    var rightPupil = document.querySelector("#pupil_right");
    var anchor = document.getElementById("cat");
    if (!leftEye || !rightEye || !leftPupil || !rightPupil || !anchor)
        throw new Error("Could not find selector in document!");
    return { leftEye: leftEye, rightEye: rightEye, leftPupil: leftPupil, rightPupil: rightPupil, anchor: anchor };
}
function getCenterCoords(anchor) {
    var rect = anchor.getBoundingClientRect();
    var x = rect.left + rect.width / 2;
    var y = rect.top + rect.height / 2;
    return { x: x, y: y };
}
function getDistanceToCenter(center, mouse) {
    return { x: mouse.x - center.x, y: mouse.y - center.y };
}
function createEye(eyeElement, pupilElement) {
    var eye = eyeElement.getBoundingClientRect();
    var pupil = pupilElement.getBoundingClientRect();
    function follow(x, y) {
        gsap_1.gsap.to(pupilElement, {
            duration: 0.1,
            x: gsap_1.gsap.utils.clamp(-eye.width / 2 - pupil.width * 4, eye.width / 2 + pupil.width * 4, x / 4),
            y: gsap_1.gsap.utils.clamp(-eye.height / 2 - pupil.height / 2, eye.height / 2 + pupil.height, y),
        });
    }
    return { follow: follow };
}
function startEyesFollow() {
    var _a = initDOM(), leftEye = _a.leftEye, rightEye = _a.rightEye, leftPupil = _a.leftPupil, rightPupil = _a.rightPupil, anchor = _a.anchor;
    var left = createEye(leftEye, leftPupil);
    var right = createEye(rightEye, rightPupil);
    var center = getCenterCoords(anchor);
    document.addEventListener("mousemove", function (e) {
        var _a = getDistanceToCenter(center, {
            x: e.clientX,
            y: e.clientY,
        }), x = _a.x, y = _a.y;
        left.follow(x, y);
        right.follow(x, y);
    });
}
