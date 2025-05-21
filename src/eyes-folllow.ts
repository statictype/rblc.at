import { gsap } from "gsap";

type Coords = { x: number; y: number };

let center = { x: 0, y: 0 };
const { leftPupil, rightPupil, anchor } = initDOM();

function initDOM() {
  const leftPupil = document.querySelector<SVGElement>("#pupil_left");
  const rightPupil = document.querySelector<SVGElement>("#pupil_right");
  const anchor = document.getElementById("cat");

  if (!leftPupil || !rightPupil || !anchor)
    throw new Error(`Could not find selector in document!`);

  return { leftPupil, rightPupil, anchor };
}

function getDistanceToCenter(center: Coords, mouse: Coords) {
  return { x: mouse.x - center.x, y: mouse.y - center.y };
}

function createEye(pupilElement: SVGElement) {
  function follow(x: number, y: number) {
    gsap.to(pupilElement, {
      duration: 0.1,
      xPercent: gsap.utils.clamp(-300, 300, x / 4),
      yPercent: gsap.utils.clamp(-75, 125, y / 2) / 2,
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

  const left = createEye(leftPupil);
  const right = createEye(rightPupil);

  document.addEventListener("mousemove", (e) => {
    const { x, y } = getDistanceToCenter(center, {
      x: e.clientX,
      y: e.clientY,
    });
    left.follow(x, y);
    right.follow(x, y);
  });
}

const tl = gsap.timeline();
function resetEyes() {
  tl.to(leftPupil, {
    duration: 0.5,
    xPercent: 0,
    yPercent: 0,
    ease: "power4.inOut",
  });
  tl.to(
    rightPupil,
    { duration: 0.5, xPercent: 0, yPercent: 0, ease: "power4.inOut" },
    "-=0.5"
  );
}

export { startEyesFollow, updateCenter, resetEyes };
