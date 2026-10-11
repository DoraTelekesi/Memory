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
