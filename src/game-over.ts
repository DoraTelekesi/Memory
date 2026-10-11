import "./styles/game-over.scss";
import "./styles/_global.scss";
import { codeVibes, gaming, daProjects, food } from "./templates/game-over-themes";

const mainContainer = document.getElementById("main-content-wrapper") as HTMLElement;

const queryParams = new URLSearchParams(window.location.search);
const bluePoints = queryParams.get("bluePoints") || "";
const orangePoints = queryParams.get("orangePoints") || "";
const winner = queryParams.get("winner") || "";
const theme = queryParams.get("theme") || "";

console.log(theme);

switch (theme) {
  case "code-vibes-selection":
    mainContainer.innerHTML = codeVibes;
    break;
  case "gaming-selection":
    mainContainer.innerHTML = gaming;
    break;
  case "da-projects-selection":
    mainContainer.innerHTML = daProjects;
    break;
  case "foods-selection":
    mainContainer.innerHTML = food;
    break;
}

const blueScore = document.getElementById("blue-score") as HTMLElement;
const orangeScore = document.getElementById("orange-score") as HTMLElement;
blueScore.innerHTML = bluePoints;
orangeScore.innerHTML = orangePoints;

console.log(winner);
const winnerTitle = document.getElementById("title") as HTMLElement;
const winnerIcon = document.getElementById("winner-icon") as HTMLImageElement;
const subtitle = document.getElementById("subtitle") as HTMLElement;

if (winner === "blue") {
  winnerTitle.innerHTML = "BLUE PLAYER";
  winnerTitle.style.color = "#2bb1ff";
  winnerIcon.src = "assets/icon/blue_big.png";
} else if (winner === "orange") {
  winnerTitle.innerHTML = "ORANGE PLAYER";
  winnerTitle.style.color = "#F58E39";
  winnerIcon.src = "assets/icon/orange_big.png";
} else if (winner === "draw") {
  winnerTitle.innerHTML = "DRAW";
  winnerTitle.style.color = "#4DD5BC";
  winnerTitle.style.fontSize = "80px";
  subtitle.innerHTML = "It`s";
  winnerIcon.src = "assets/icon/Scale_Icon.png";
}

const slideScreen = document.getElementById("slide-screen") as HTMLElement;

setTimeout(() => {
  slideScreen.style.animation = "slideDown";
  slideScreen.style.animationDuration = "2s";
  slideScreen.style.top = "0";
}, 1000);
