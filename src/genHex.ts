import { hexNumber } from "./constant.js";
import { genRandNum } from "./utils/genRandNumber.js";

function generateHexCode() {
  let hexColorCode = "";
  for (let i = 0; i < 6; i++) {
    hexColorCode += hexNumber.charAt(genRandNum(16));
  }
  return `#${hexColorCode}`;
}

export default { generateHexCode };
