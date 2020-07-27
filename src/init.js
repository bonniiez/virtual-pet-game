import game from "./gameState";
// at top
import initButtons from "./button";

// replace TICK_RATE
import { TICK_RATE } from "./constants";

function tick() {
  console.log("tick", Date.now());
}

async function init() {
  console.log("starting game");
  initButtons(game.handleUserAction);

  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();
    if (nextTimeToTick <= now) {
      game.tick();
      nextTimeToTick <= now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }
  nextAnimationFrame();
}

init();
