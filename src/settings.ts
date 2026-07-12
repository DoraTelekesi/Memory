import "./styles/settings.scss";

//Radio Button variables
const codeVibesSelection = document.getElementById("code-vibes-selection") as HTMLDivElement;
const gamingSelection = document.getElementById("gaming-selection") as HTMLDivElement;
const daProjectsSelection = document.getElementById("da-projects-selection") as HTMLDivElement;
const foodsSelection = document.getElementById("foods-selection") as HTMLDivElement;

const blueSelection = document.getElementById("blue-selection") as HTMLDivElement;
const redSelection = document.getElementById("red-selection") as HTMLDivElement;
const orangeSelection = document.getElementById("orange-selection") as HTMLDivElement;

const smallSelection = document.getElementById("small-selection") as HTMLDivElement;
const mediumSelection = document.getElementById("medium-selection") as HTMLDivElement;
const largeSelection = document.getElementById("large-selection") as HTMLDivElement;

let themeSelection: (HTMLElement | null)[] = [codeVibesSelection, gamingSelection, daProjectsSelection, foodsSelection];

themeSelection.forEach((selection) => {
  selection?.addEventListener("click", () => {
    if (selection) {
      selection.classList.add("is-selected");
    }
    themeSelection.forEach((otherSelection) => {
      if (otherSelection !== selection) {
        otherSelection?.classList.remove("is-selected");
      }
    });
  });
});

let colorSelection: (HTMLElement | null)[] = [blueSelection, redSelection, orangeSelection];

colorSelection.forEach((selection) => {
  selection?.addEventListener("click", () => {
    if (selection) {
      selection.classList.add("is-selected");
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
  selection?.addEventListener("click", () => {
    if (selection) {
      selection.classList.add("is-selected");
    }
    sizeSelection.forEach((otherSelection) => {
      if (otherSelection !== selection) {
        otherSelection?.classList.remove("is-selected");
      }
    });
  });
});
