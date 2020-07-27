const gameState = {
  current: "INIT",
  clock,
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
