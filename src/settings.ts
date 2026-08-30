import "./styles/settings/settings_main.scss";
import "./styles/settings/themes.scss";
import { codeVibesSelectionTemplate, gamingSelectionTemplate, daProjectsSelectionTemplate, foodsSelectionTemplate } from "./templates/themes";

//Radio Button variables
const codeVibesSelection = document.getElementById("code-vibes-selection") as HTMLDivElement;
const gamingSelection = document.getElementById("gaming-selection") as HTMLDivElement;
const daProjectsSelection = document.getElementById("da-projects-selection") as HTMLDivElement;
const foodsSelection = document.getElementById("foods-selection") as HTMLDivElement;

const blueSelection = document.getElementById("blue-selection") as HTMLDivElement;
const orangeSelection = document.getElementById("orange-selection") as HTMLDivElement;

const smallSelection = document.getElementById("small-selection") as HTMLDivElement;
const mediumSelection = document.getElementById("medium-selection") as HTMLDivElement;
const largeSelection = document.getElementById("large-selection") as HTMLDivElement;

const selectedTheme = document.getElementById("selected-theme") as HTMLParagraphElement;
const selectedPlayer = document.getElementById("selected-player") as HTMLParagraphElement;
const selectedSize = document.getElementById("selected-size") as HTMLParagraphElement;

const themeVisualContent = document.getElementById("theme-visual-content") as HTMLDivElement;
const startBtn = document.getElementById("start-btn") as HTMLButtonElement;

let themeSelection: (HTMLElement | null)[] = [codeVibesSelection, gamingSelection, daProjectsSelection, foodsSelection];
let themeSelectionTemplate: (string | null)[] = [
  codeVibesSelectionTemplate,
  gamingSelectionTemplate,
  daProjectsSelectionTemplate,
  foodsSelectionTemplate,
];

let themeSelected: string = "code-vibes-selected";
let playerSelected: string = "blue-selected";
let sizeSelected: string = "small-selected";

themeSelection.forEach((selection) => {
  selection?.addEventListener("click", (e) => {
    // Ignore the duplicated event originating from the radio input
    if ((e.target as HTMLElement).tagName.toLowerCase() === "input") {
      return;
    }

    if (selection) {
      selection.classList.add("is-selected");
      selectedTheme.textContent = `${selection.textContent}`;
      themeVisualContent.innerHTML = themeSelectionTemplate[themeSelection.indexOf(selection)] || "";
      console.log(selection.id);
      themeSelected = selection.id;
    }
    themeSelection.forEach((otherSelection) => {
      if (otherSelection !== selection) {
        otherSelection?.classList.remove("is-selected");
      }
    });
  });
});

let colorSelection: (HTMLElement | null)[] = [blueSelection, orangeSelection];

colorSelection.forEach((selection) => {
  selection?.addEventListener("click", (e) => {
    // Ignore the duplicated event originating from the radio input
    if ((e.target as HTMLElement).tagName.toLowerCase() === "input") {
      return;
    }
    if (selection) {
      selection.classList.add("is-selected");
      selectedPlayer.textContent = `${selection.textContent}`;
      playerSelected = selection.id;
    }
    colorSelection.forEach((otherSelection) => {
      if (otherSelection !== selection) {
        otherSelection?.classList.remove("is-selected");
      }
    });
  });
});

let sizeSelection: (HTMLElement | null)[] = [smallSelection, mediumSelection, largeSelection];

sizeSelection.forEach((selection) => {
  selection?.addEventListener("click", (e) => {
    // Ignore the duplicated event originating from the radio input
    if ((e.target as HTMLElement).tagName.toLowerCase() === "input") {
      return;
    }
    if (selection) {
      selection.classList.add("is-selected");
      selectedSize.textContent = `${selection.textContent}`;
      sizeSelected = selection.id;
    }
    sizeSelection.forEach((otherSelection) => {
      if (otherSelection !== selection) {
        otherSelection?.classList.remove("is-selected");
      }
    });
  });
});

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = `game-play.html?theme=${themeSelected}&player=${playerSelected}&size=${sizeSelected}`;
});
