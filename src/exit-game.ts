import { exitPopUpCode, exitPopUpDAProjects, exitPopUpFood, exitPopUpGame } from "./templates/exit-themes";
import { themeSelected } from "./game-play";

const exitButton = document.getElementById("exit") as HTMLElement;
const popUp = document.getElementById("popup") as HTMLElement;

exitButton?.addEventListener("click", function () {
  switch (themeSelected) {
    case "code-vibes-selection":
      popUp.innerHTML += exitPopUpCode;
      break;
    case "foods-selection":
      popUp.innerHTML += exitPopUpFood;
      break;
    case "gaming-selection":
      popUp.innerHTML += exitPopUpGame;
      break;
    case "da-projects-selection":
      popUp.innerHTML += exitPopUpDAProjects;
      break;
  }

  const backToGame = document.getElementById("back-btn") as HTMLButtonElement;
  const exitGame = document.getElementById("exit-btn") as HTMLButtonElement;

  backToGame?.addEventListener("click", function () {
    popUp.innerHTML = "";
  });

  exitGame?.addEventListener("click", function () {
    window.location.href = "settings.html";
  });
});
