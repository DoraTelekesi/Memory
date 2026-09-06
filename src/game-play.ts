import "./styles/settings/settings_main.scss";
import "./styles/settings/themes.scss";
import "./styles/game-play.scss";
import { codeVibesGamePlayTheme, gamingGamePlayTheme, daProjectsGamePlayTheme, foodsGamePlayTheme } from "./templates/game-play-themes";

const mainContent = document.getElementById("main-content") as HTMLElement;

let themeSelected: string;
let playerSelected: string;
let sizeSelected: string;

let url = window.location.href;

const queryParams = new URLSearchParams(url.split("?")[1]);
themeSelected = queryParams.get("theme") || "";
playerSelected = queryParams.get("player") || "";
sizeSelected = queryParams.get("size") || "";
console.log(themeSelected, playerSelected, sizeSelected);

if (themeSelected === "code-vibes-selection") {
  mainContent.innerHTML = codeVibesGamePlayTheme;
} else if (themeSelected === "gaming-selection") {
  mainContent.innerHTML = gamingGamePlayTheme;
} else if (themeSelected === "da-projects-selection") {
  mainContent.innerHTML = daProjectsGamePlayTheme;
} else if (themeSelected === "foods-selection") {
  mainContent.innerHTML = foodsGamePlayTheme;
}

const cardBoard = document.getElementById("card-board") as HTMLElement;

if (sizeSelected === "small-selection") {
  if (themeSelected === "code-vibes-selection") createCardBoard("card_pc", 16);
  else if (themeSelected === "gaming-selection") createCardBoard("card_game", 16);
  else if (themeSelected === "da-projects-selection") createCardBoard("card_da_projects", 16);
  else if (themeSelected === "foods-selection") createCardBoard("card_food", 16);
}

if (sizeSelected === "medium-selection") {
  if (themeSelected === "code-vibes-selection") createCardBoard("card_pc", 24);
  else if (themeSelected === "gaming-selection") createCardBoard("card_game", 24);
  else if (themeSelected === "da-projects-selection") createCardBoard("card_da_projects", 24);
  else if (themeSelected === "foods-selection") createCardBoard("card_food", 24);
}

if (sizeSelected === "large-selection") {
  if (themeSelected === "code-vibes-selection") createCardBoard("card_pc", 36);
  else if (themeSelected === "gaming-selection") createCardBoard("card_game", 36);
  else if (themeSelected === "da-projects-selection") createCardBoard("card_da_projects", 36);
  else if (themeSelected === "foods-selection") createCardBoard("card_food", 36);
}

function createCardBoard(cardType: string, size: number) {
  for (let i = 0; i < size; i++) {
    const card = document.createElement("div");
    const cardInner = document.createElement("div");
    cardInner.className = "card-inner";
    card.appendChild(cardInner);
    card.className = "card";
    card.setAttribute("id", `card_${i + 1}`);
    const cardFront = document.createElement("img");
    cardFront.className = "card-front";
    cardInner.appendChild(cardFront);
    const cardBack = document.createElement("img");
    cardBack.src = `assets/img/${cardType}_back.png`;
    cardBack.className = "card-back";
    cardInner.appendChild(cardBack);
    cardBoard.appendChild(card);
    cardBoard.style.gridTemplateColumns = `repeat(${size == 16 ? 4 : size == 24 ? 6 : 6}, 110px)`;
  }
}

const cards = document.querySelectorAll(".card") as NodeListOf<HTMLElement>;

let frontCardList: string[] = ["git", "ts", "js", "html", "css", "vsc", "django", "angular"];

for (let i = 0; i < cards.length; i++) {
  const cardFront = (cards[i].childNodes[0] as HTMLElement).childNodes[0] as HTMLImageElement;
  const cardBack = (cards[i].childNodes[0] as HTMLElement).childNodes[1] as HTMLImageElement;
  const cardInner = cards[i].childNodes[0] as HTMLElement;
  cards[i].addEventListener("click", () => {
    const card = cards[i];
    cardFront.src = `assets/img/card_${frontCardList[i % frontCardList.length]}_front.png`;
    cardInner.classList.add("is-flipped");
  });
}
