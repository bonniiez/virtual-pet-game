const gameState = {
  current: "INIT",
  clock,
  tick() {
    this.clock++;
    console.log(this.clock);
    return this.clock;
  },
};

module.exports = gameState;
