import "./styles/settings/settings_main.scss";
import "./styles/settings/themes.scss";
import "./styles/game-play.scss";
import { codeVibesGamePlayTheme, gamingGamePlayTheme, daProjectsGamePlayTheme, foodsGamePlayTheme } from "./templates/game-play-themes";
/* import { exitPopUpFood, exitPopUpCode, exitPopUpDAProjects, exitPopUpGame } from "./templates/exit-themes"; */
import { frontCardListCode, frontCardListDaProjects, frontCardListGame, frontCardListFood } from "./dataset";

const mainContent = document.getElementById("main-content") as HTMLElement;

export let themeSelected: string;
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

let current: "blue" | "orange" = playerSelected === "blue-selection" ? "blue" : "orange";
let winner: string = "";
let bluePoints: number = 0;
let orangePoints: number = 0;

const currentPlayer = document.getElementById("current-player") as HTMLImageElement;
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
    if (themeSelected === "gaming-selection") {
      cardFront.style.height = "120px";
      cardBack.style.height = "120px";
    }
    cardBack.src = `assets/img/${cardType}_back.png`;
    cardBack.className = "card-back";
    cardBoard.style.gridTemplateColumns = `repeat(${size == 16 ? 4 : size == 24 ? 6 : 6}, 110px)`;
  }
  chooseFirstCurrentPlayer();
}

function chooseFirstCurrentPlayer() {
  if (playerSelected === "blue-selection") {
    currentPlayer.style.filter = "invert(0)";
    current = "blue";
  } else if (playerSelected === "orange-selection") {
    currentPlayer.style.filter = "invert(50)";
    current = "orange";
  }
}

function switchPlayer() {
  if (current == "orange") {
    current = "blue";
  } else if (current == "blue") {
    current = "orange";
  }
}

function switchPlayerLabel() {
  if (current == "orange") {
    currentPlayer.style.filter = "invert(50)";
  } else if (current == "blue") {
    currentPlayer.style.filter = "invert(0)";
  }
}

function updatePoints() {
  if (current === "orange") {
    orangePoints++;
    orangePointRef.innerHTML = String(orangePoints);
  } else {
    bluePoints++;
    bluePointRef.innerHTML = String(bluePoints);
  }
}
const cards = document.querySelectorAll(".card") as NodeListOf<HTMLElement>;

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
    console.log("GAME IS DONE");
  }
  selectedCard = [];
  flipped = false;
  frontCardValue = [];
  flippedAmount = 0;
}

function frontCardListSelector(theme: string): string[] {
  let frontCardList: string[] = [];
  if (theme === "code-vibes-selection") {
    frontCardList = frontCardListCode;
  } else if (theme === "gaming-selection") {
    frontCardList = frontCardListGame;
  } else if (theme === "da-projects-selection") {
    frontCardList = frontCardListDaProjects;
  } else if (theme === "foods-selection") {
    frontCardList = frontCardListFood;
  }
  return frontCardList;
}

let frontCardArray = frontCardListSelector(themeSelected);

function shuffleFrontCards(arr: string[]) {
  let currentIndex = arr.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }
}

function sizeSelector(size: string) {
  let boardSize: number = 0;
  if (size === "small-selection") {
    boardSize = 16; // 8
    frontCardArray = frontCardArray.splice(0, 8);
  } else if (size === "medium-selection") {
    boardSize = 24; // 12
    frontCardArray = frontCardArray.splice(0, 12);
  } else if (size === "large-selection") {
    boardSize = 36; // 18
    frontCardArray = frontCardArray.splice(0, 18);
  }
  return boardSize;
}

let boardSizeNumber = sizeSelector(sizeSelected);

let frontCardArraySecondHalf = [...frontCardArray];
shuffleFrontCards(frontCardArray);
shuffleFrontCards(frontCardArraySecondHalf);
let frontCardArrayCombined = frontCardArray.concat(frontCardArraySecondHalf);

const bluePointRef = document.getElementById("blue-points") as HTMLElement;
const orangePointRef = document.getElementById("orange-points") as HTMLElement;

function flipCard(front: HTMLImageElement, inner: HTMLElement, index: number) {
  front.src = `assets/img/frontcards/card_${frontCardArrayCombined[index % boardSizeNumber]}_front.png`;
  inner.classList.add("is-flipped");
  flipped = true;
  flippedAmount++;
  frontCardValue.push(frontCardArrayCombined[index % boardSizeNumber]);
  selectedCard.push(cards[index]);
  if (flippedAmount === 2 && frontCardValue[0] !== frontCardValue[1]) {
    noMatch();
    switchPlayer();
    switchPlayerLabel();
  } else if (flippedAmount === 2 && frontCardValue[0] === frontCardValue[1]) {
    cardMatch();
    updatePoints();
    switchPlayer();
    switchPlayerLabel();
    if (gameDone) {
      gameOver();
    }
  }
}

function gameOver() {
  if (bluePoints > orangePoints) {
    console.log("WINNER BLUE", bluePoints);
  } else if (orangePoints > bluePoints) {
    console.log("WINNER ORANGE", orangePoints);
  } else {
    console.log("DRAW");
  }
}
