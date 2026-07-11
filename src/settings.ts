import "./styles/settings.scss";

//Radio Button variables
const codeVibesSelection = document.getElementById("code-vibes-selection");
const codeVibesUnderline = document.getElementById("yellow-selector-code") as HTMLDivElement;

const gamingSelection = document.getElementById("gaming-selection");
const gamingUnderline = document.getElementById("yellow-selector-gaming") as HTMLDivElement;

const daProjectsSelection = document.getElementById("da-projects-selection");
const daProjectsUnderline = document.getElementById("yellow-selector-da-projects") as HTMLDivElement;

const foodsSelection = document.getElementById("foods-selection");
const foodsUnderline = document.getElementById("yellow-selector-foods") as HTMLDivElement;

const blueSelection = document.getElementById("blue-selection") as HTMLDivElement;
const redSelection = document.getElementById("red-selection") as HTMLDivElement;

const smallSelection = document.getElementById("small-selection") as HTMLDivElement;
const mediumSelection = document.getElementById("medium-selection") as HTMLDivElement;
const largeSelection = document.getElementById("large-selection") as HTMLDivElement;

//Yellow selector for codevibes, gaming, da-projects and foods themes

//Code Vibes Theme
codeVibesSelection?.addEventListener("mouseenter", () => {
  codeVibesUnderline.classList.add("selection-underline-visible");
  gamingUnderline.classList.add("dp-none");
  daProjectsUnderline.classList.add("dp-none");
  foodsUnderline.classList.add("dp-none");
});

codeVibesSelection?.addEventListener("mouseleave", () => {
  codeVibesUnderline.classList.remove("selection-underline-visible");
  gamingUnderline.classList.remove("dp-none");
  daProjectsUnderline.classList.remove("dp-none");
  foodsUnderline.classList.remove("dp-none");
});

//Gaming Theme
gamingSelection?.addEventListener("mouseenter", () => {
  gamingUnderline.classList.add("selection-underline-visible");
  codeVibesUnderline.classList.add("dp-none");
  daProjectsUnderline.classList.add("dp-none");
  foodsUnderline.classList.add("dp-none");
});

gamingSelection?.addEventListener("mouseleave", () => {
  gamingUnderline.classList.remove("selection-underline-visible");
  codeVibesUnderline.classList.remove("dp-none");
  daProjectsUnderline.classList.remove("dp-none");
  foodsUnderline.classList.remove("dp-none");
});

//DA Projects Theme
daProjectsSelection?.addEventListener("mouseenter", () => {
  daProjectsUnderline.classList.add("selection-underline-visible");
  codeVibesUnderline.classList.add("dp-none");
  gamingUnderline.classList.add("dp-none");
  foodsUnderline.classList.add("dp-none");
});

daProjectsSelection?.addEventListener("mouseleave", () => {
  daProjectsUnderline.classList.remove("selection-underline-visible");
  codeVibesUnderline.classList.remove("dp-none");
  gamingUnderline.classList.remove("dp-none");
  foodsUnderline.classList.remove("dp-none");
});

//Foods Theme
foodsSelection?.addEventListener("mouseenter", () => {
  foodsUnderline.classList.add("selection-underline-visible");
  codeVibesUnderline.classList.add("dp-none");
  gamingUnderline.classList.add("dp-none");
  daProjectsUnderline.classList.add("dp-none");
});

foodsSelection?.addEventListener("mouseleave", () => {
  foodsUnderline.classList.remove("selection-underline-visible");
  codeVibesUnderline.classList.remove("dp-none");
  gamingUnderline.classList.remove("dp-none");
  daProjectsUnderline.classList.remove("dp-none");
});

//Yellow selector for blue and red player selection
//Blue Player Selection
blueSelection?.addEventListener("mouseenter", () => {
  const blueUnderline = document.getElementById("yellow-selector-blue") as HTMLDivElement;
  blueUnderline.classList.add("selection-underline-visible");
});

blueSelection?.addEventListener("mouseleave", () => {
  const blueUnderline = document.getElementById("yellow-selector-blue") as HTMLDivElement;
  blueUnderline.classList.remove("selection-underline-visible");
});

//Red Player Selection
redSelection?.addEventListener("mouseenter", () => {
  const redUnderline = document.getElementById("yellow-selector-red") as HTMLDivElement;
  redUnderline.classList.add("selection-underline-visible");
});

redSelection?.addEventListener("mouseleave", () => {
  const redUnderline = document.getElementById("yellow-selector-red") as HTMLDivElement;
  redUnderline.classList.remove("selection-underline-visible");
});

//Yellow selector for small, medium and large board size selection
//Small Board Size Selection
smallSelection?.addEventListener("mouseenter", () => {
  const smallUnderline = document.getElementById("yellow-selector-small") as HTMLDivElement;
  smallUnderline.classList.add("selection-underline-visible");
});

smallSelection?.addEventListener("mouseleave", () => {
  const smallUnderline = document.getElementById("yellow-selector-small") as HTMLDivElement;
  smallUnderline.classList.remove("selection-underline-visible");
});

//Medium Board Size Selection
mediumSelection?.addEventListener("mouseenter", () => {
  const mediumUnderline = document.getElementById("yellow-selector-medium") as HTMLDivElement;
  mediumUnderline.classList.add("selection-underline-visible");
});

mediumSelection?.addEventListener("mouseleave", () => {
  const mediumUnderline = document.getElementById("yellow-selector-medium") as HTMLDivElement;
  mediumUnderline.classList.remove("selection-underline-visible");
});

//Large Board Size Selection
largeSelection?.addEventListener("mouseenter", () => {
  const largeUnderline = document.getElementById("yellow-selector-large") as HTMLDivElement;
  largeUnderline.classList.add("selection-underline-visible");
});

largeSelection?.addEventListener("mouseleave", () => {
  const largeUnderline = document.getElementById("yellow-selector-large") as HTMLDivElement;
  largeUnderline.classList.remove("selection-underline-visible");
});
