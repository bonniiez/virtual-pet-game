const gameState = {
  current: "INIT",
  clock: 1,
  tick() {
    this.clock++;
    console.log(this.clock);
    return this.clock;
  },

  // last function in gameState
  handleUserAction(icon) {
    console.log(icon);
  },
};

module.exports = gameState;
