export const modFox = function modFox(state) {
  document.querySelector(".fox").className = `fox fox-${state}`;
};
export const modScene = function modScene(state) {
  document.querySelector(".game").className = `game ${state}`;
};
export const togglePoopBag = function togglePoopBag(show) {
  document.querySelector(".poop-bag").classList.toggle("hidden", !show);
};

export const writeModal = function writeModal(text = "") {
  document.querySelector(
    ".modal"
  ).innerHTML = `<div class="modal-inner">${text}</div>`;

  if (text == "") {
    document.querySelector(".modal").setAttribute("style", "padding: 0");
  } else {
    if (text != "") {
      document.querySelector(".modal").setAttribute("style", "padding: 20px");
    }
  }
};

export const printTimer = function printTimer(timer) {
  document.querySelector(
    ".timer"
  ).innerHTML = `<div class="timer-inner"> Time fox is kept alive: ${timer} seconds</div>`;
};
