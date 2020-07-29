export const ICONS = ["fish", "poop", "weather"];
export const TICK_RATE = 30000;
export const SCENES = ["day", "rain"];
export const RAIN_CHANCE = 0.2;
export const DAY_LENGTH = 3000;
export const NIGHT_LENGTH = 1000;
export const getNextHungerTime = (clock) =>
  Math.floor(Math.random() * 3) + 700 + clock;
export const getNextDieTime = (clock) =>
  Math.floor(Math.random() * 3) + 1000 + clock;
export const getNextPoopTime = (clock) =>
  Math.floor(Math.random() * 3) + 700 + clock;
