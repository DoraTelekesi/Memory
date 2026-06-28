import "./styles/style.scss";

const buttonIconLeft = document.querySelector(".button__icon-left") as HTMLImageElement;
const buttonIconRight = document.querySelector(".button__icon-right") as HTMLImageElement;

const button = document.querySelector(".button") as HTMLButtonElement;

button.addEventListener("mouseenter", () => {
  buttonIconLeft.classList.add("rotateLeft");
  buttonIconRight.classList.add("scale");
});

button.addEventListener("mouseleave", () => {
  buttonIconLeft.classList.remove("rotateLeft");
  buttonIconLeft.classList.add("transitionBack");
  buttonIconRight.classList.remove("scale");
  buttonIconRight.classList.add("transitionBack");
});
