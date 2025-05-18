import { gsap } from "gsap";

type Coords = { x: number; y: number };

let center = { x: 0, y: 0 };
const { leftEye, rightEye, leftPupil, rightPupil, anchor } = initDOM();

function initDOM() {
  const leftEye = document.querySelector<SVGElement>("#eye_left");
  const rightEye = document.querySelector<SVGElement>("#eye_right");
  const leftPupil = document.querySelector<SVGElement>("#pupil_left");
  const rightPupil = document.querySelector<SVGElement>("#pupil_right");
  const anchor = document.getElementById("cat")!;

  if (!leftEye || !rightEye || !leftPupil || !rightPupil || !anchor)
    throw new Error(`Could not find selector in document!`);

  return { leftEye, rightEye, leftPupil, rightPupil, anchor };
}

function getDistanceToCenter(center: Coords, mouse: Coords) {
  return { x: mouse.x - center.x, y: mouse.y - center.y };
}

function createEye(eyeElement: SVGElement, pupilElement: SVGElement) {
  const eye = eyeElement.getBoundingClientRect();
  const pupil = pupilElement.getBoundingClientRect();
  function follow(x: number, y: number) {
    gsap.to(pupilElement, {
      duration: 0.1,
      x: gsap.utils.clamp(
        -eye.width / 2 - pupil.width * 4,
        eye.width / 2 + pupil.width * 4,
        x / 4
      ),
      y: gsap.utils.clamp(
        -eye.height / 2 - pupil.height / 2,
        eye.height / 2 + pupil.height,
        y
      ),
    });
  }

  return { follow };
}

function updateCenter() {
  const rect = anchor.getBoundingClientRect();
  center.x = rect.left + rect.width / 2;
  center.y = rect.top + rect.height / 2;
}

function startEyesFollow() {
  updateCenter();

  const left = createEye(leftEye, leftPupil);
  const right = createEye(rightEye, rightPupil);

  document.addEventListener("mousemove", (e) => {
    const { x, y } = getDistanceToCenter(center, {
      x: e.clientX,
      y: e.clientY,
    });
    left.follow(x, y);
    right.follow(x, y);
  });
}

export { startEyesFollow, updateCenter };
