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
    const cardBack = document.createElement("img");
    const cardFront = document.createElement("img");
    card.appendChild(cardInner);
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    cardBoard.appendChild(card);
    cardInner.className = "card-inner";
    card.className = "card";
    card.setAttribute("id", `card_${i + 1}`);
    cardFront.className = "card-front";
    cardBack.src = `assets/img/${cardType}_back.png`;
    cardBack.className = "card-back";
    cardBoard.style.gridTemplateColumns = `repeat(${size == 16 ? 4 : size == 24 ? 6 : 6}, 110px)`;
  }
}

const cards = document.querySelectorAll(".card") as NodeListOf<HTMLElement>;

let frontCardList: string[] = ["git", "ts", "js", "html", "css", "vsc", "django", "angular"];
let flippedAmount: number = 0;
let frontCardValue: string[] = [];
let selectedCard: HTMLElement[] = [];
let gameDone: boolean = false;
let flipped: boolean = false;

for (let i = 0; i < cards.length; i++) {
  const cardFront = (cards[i].childNodes[0] as HTMLElement).childNodes[0] as HTMLImageElement;
  const cardInner = cards[i].childNodes[0] as HTMLElement;
  cards[i].addEventListener("click", () => {
    flipped = false;
    if (!flipped && !gameDone) {
      flipCard(cardFront, cardInner, i);
    }
  });
}

function noMatch() {
  setTimeout(() => {
    document.querySelectorAll(".is-flipped").forEach((el) => {
      (el as HTMLElement).classList.remove("is-flipped");
    });
    flipped = false;
    frontCardValue = [];
    flippedAmount = 0;
    selectedCard = [];
  }, 1000);
}

function cardMatch() {
  selectedCard.forEach((card) => {
    (card.childNodes[0] as HTMLElement).classList.add("stay-flipped");
    (card.childNodes[0] as HTMLElement).classList.remove("is-flipped");
  });
  if (document.querySelectorAll(".stay-flipped").length === cards.length) {
    gameDone = true;
  }
  selectedCard = [];
  flipped = false;
  frontCardValue = [];
  flippedAmount = 0;
}

function flipCard(front: HTMLImageElement, inner: HTMLElement, index: number) {
  front.src = `assets/img/card_${frontCardList[index % frontCardList.length]}_front.png`;
  inner.classList.add("is-flipped");
  flipped = true;
  flippedAmount++;
  frontCardValue.push(frontCardList[index % frontCardList.length]);
  selectedCard.push(cards[index]);
  if (flippedAmount === 2 && frontCardValue[0] !== frontCardValue[1]) {
    noMatch();
  } else if (flippedAmount === 2 && frontCardValue[0] === frontCardValue[1]) {
    cardMatch();
  }
}
