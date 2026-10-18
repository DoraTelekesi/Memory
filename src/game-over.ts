import "./styles/game-over.scss";
import "./styles/_global.scss";
import { codeVibes, gaming, daProjects, food } from "./templates/game-over-themes";
import { codeSlide, gameSlide, daProjectsSlide, foodSlide } from "./templates/slide-screen-themes";

const mainContainer = document.getElementById("main-content-wrapper") as HTMLElement;
const mainBody = document.getElementById("body") as HTMLBodyElement;

const queryParams = new URLSearchParams(window.location.search);
const bluePoints = queryParams.get("bluePoints") || "";
const orangePoints = queryParams.get("orangePoints") || "";
const winner = queryParams.get("winner") || "";
const theme = queryParams.get("theme") || "";

console.log(theme);

switch (theme) {
  case "code-vibes-selection":
    mainContainer.innerHTML = codeVibes;
    mainBody.innerHTML += codeSlide;
    break;
  case "gaming-selection":
    mainContainer.innerHTML = gaming;
    mainBody.innerHTML += gameSlide;
    break;
  case "da-projects-selection":
    mainContainer.innerHTML = daProjects;
    mainBody.innerHTML += daProjectsSlide;
    break;
  case "foods-selection":
    mainContainer.innerHTML = food;
    mainBody.innerHTML += foodSlide;
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

if (theme === "code-vibes-selection") {
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
}

if (theme === "gaming-selection") {
  if (winner === "blue") {
    winnerTitle.innerHTML = "BLUE PLAYER";
    winnerTitle.style.color = "#2298DB";
  } else if (winner === "orange") {
    winnerTitle.innerHTML = "ORANGE PLAYER";
    winnerTitle.style.color = "#EA6900";
  } else if (winner === "draw") {
    winnerTitle.innerHTML = "DRAW";
    winnerTitle.style.color = "#ED1B76";
    winnerTitle.style.fontSize = "80px";
    subtitle.innerHTML = "It`s";
    winnerIcon.src = "assets/icon/Scale_Icon_Magenta.png";
  }
}

if (theme === "da-projects-selection") {
  if (winner === "blue") {
    winnerTitle.innerHTML = "Blue Player";
    winnerIcon.src = "assets/icon/chess_pawn_blue_white.png";
  } else if (winner === "orange") {
    winnerTitle.innerHTML = "Orange Player";
    winnerIcon.src = "assets/icon/chess_pawn_orange_white.png";
  } else if (winner === "draw") {
    winnerTitle.innerHTML = "DRAW";
    winnerTitle.style.color = "#FD5B4F";
    winnerTitle.style.fontSize = "80px";
    subtitle.innerHTML = "It`s";
    winnerIcon.src = "assets/icon/Scale_orange_white.png";
  }
}

if (theme === "foods-selection") {
  if (winner === "blue") {
    winnerTitle.innerHTML = "Blue Player";
    winnerIcon.src = "assets/icon/chess_pawn_blue_beige.png";
  } else if (winner === "orange") {
    winnerTitle.innerHTML = "Orange Player";
    winnerIcon.src = "assets/icon/chess_pawn_orange_beige.png";
  } else if (winner === "draw") {
    winnerTitle.innerHTML = "DRAW";
    winnerTitle.style.color = "#F3832D";
    winnerTitle.style.fontSize = "80px";
    subtitle.innerHTML = "It`s";
    subtitle.style.color = "#F3832D";
    winnerIcon.src = "assets/icon/Scale_orange_beige.png";
  }
}

const slideScreen = document.getElementById("slide-screen") as HTMLElement;

setTimeout(() => {
  slideScreen.style.animation = "slideDown";
  slideScreen.style.animationDuration = "2s";
  slideScreen.style.top = "0";
}, 1000);
