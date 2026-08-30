import "./styles/settings/settings_main.scss";
import "./styles/settings/themes.scss";
import "./styles/game-play.scss";

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
  mainContent.innerHTML = `<div class="content-wrapper_code-vibes">
        <div class="theme-visual_header">
          <div class="theme-visual_header_players">
            <img src="assets/icon/label_blue.svg" alt="blue label" class="theme-visual_header_players_img" />
            <p class="theme-visual_header_players_text-blue">Blue</p>
            <p class="theme-visual_header_players_number-blue">0</p>
            <img src="assets/icon/label_orange.svg" alt="orange label" class="theme-visual_header_players_img" />
            <p class="theme-visual_header_players_text-orange">Orange</p>
            <p class="theme-visual_header_players_number-orange">6</p>
          </div>
          <div class="theme-visual_header_current">
            <p class="theme-visual_header_current_text">Current Player:</p>
            <img src="assets/icon/label_blue.svg" alt="blue label" class="theme-visual_header_current_img" />
          </div>
          <div class="theme-visual_header_exit">
            <img src="assets/icon/move_item.svg" alt="exit" class="theme-visual_header_exit_img" />
            <p class="theme-visual_header_exit_text">Exit Game</p>
          </div>
        </div>
        <main class="cards"></main>
      </div>`;
} else if (themeSelected === "gaming-selection") {
  mainContent.innerHTML = `<div class="content-wrapper_gaming">
        <div class="theme-visual_header_gaming">
          <div class="theme-visual_header-game_players">
            <img src="assets/icon/chess_pawn_blue.svg" alt="orange pawn" class="theme-visual_header-game_players_img" />

            <p class="theme-visual_header-game_players_number-orange">6</p>
            <img src="assets/icon/chess_pawn_orange.svg" alt="blue pawn" class="theme-visual_header-game_players_img" />

            <p class="theme-visual_header-game_players_number-blue">2</p>
          </div>
          <div class="theme-visual_header-game_current">
            <p class="theme-visual_header-game_current_text">Current Player:</p>
            <img src="assets/icon/chess_pawn_blue_bg_white.svg" alt="blue label" class="theme-visual_header-game_current_img" />
          </div>
          <div class="theme-visual_header-game_exit">
            <img src="assets/icon/move_item_pink.svg" alt="exit" class="theme-visual_header-game_exit_img" />
            <p class="theme-visual_header-game_exit_text">Exit Game</p>
          </div>
        </div>
        <main class="cards"></main>
      </div>`;
} else if (themeSelected === "da-projects-selection") {
  mainContent.innerHTML = `<div class="content-wrapper_da-projects">
        <div class="theme-visual_header_da-projects">
          <div class="theme-visual_header-da_players">
            <img src="assets/icon/chess_pawn_blue.svg" alt="orange pawn" class="theme-visual_header-da_players_img" />

            <p class="theme-visual_header-da_players_number-orange">6</p>
            <img src="assets/icon/chess_pawn_orange.svg" alt="blue pawn" class="theme-visual_header-da_players_img" />

            <p class="theme-visual_header-da_players_number-blue">2</p>
          </div>
          <div class="theme-visual_header-da_current">
            <p class="theme-visual_header-da_current_text">Current Player:</p>
            <img src="assets/icon/current_player_dark_blue.svg" alt="blue label" class="theme-visual_header-da_current_img" />
          </div>
          <div class="theme-visual_header-da_exit">
            <img src="assets/icon/exit_blue.svg" alt="exit" class="theme-visual_header-da_exit_img" />
            <p class="theme-visual_header-da_exit_text">Exit Game</p>
          </div>
        </div>
        <main class="cards"></main>
      </div>`;
} else if (themeSelected === "foods-selection") {
  mainContent.innerHTML = `<div class="content-wrapper_food">
        <div class="theme-visual_header_food">
          <div class="theme-visual_header-food_players">
            <img src="assets/icon/chess_pawn_blue.svg" alt="blue label" class="theme-visual_header-food_players_img" />
            <p class="theme-visual_header-food_players_number-blue">0</p>
            <img src="assets/icon/chess_pawn_orange.svg" alt="orange label" class="theme-visual_header-food_players_img" />
            <p class="theme-visual_header-food_players_number-orange">6</p>
          </div>
          <div class="theme-visual_header-food_current">
            <p class="theme-visual_header-food_current_text">Current Player:</p>
            <img src="assets/icon/current_player_dark_blue.svg" alt="blue label" class="theme-visual_header-food_current_img" />
          </div>
          <div class="theme-visual_header-food_exit">
            <img src="assets/icon/exit_orange.svg" alt="exit" class="theme-visual_header-food_exit_img" />
            <p class="theme-visual_header-food_exit_text">EXIT GAME</p>
          </div>
        </div>
        <main class="cards"></main>
      </div>`;
}
