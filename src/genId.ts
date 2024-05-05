import { lowerCase, upperCase, number, symbol } from "./constant.js";
import { genRandNum } from "./utils/genRandNumber.js";
import { suffleStr } from "./utils/suffleStr.js";

function generateId(idLength: number = 14, specialChar: boolean = false) {
  let id = "";
  let srcString = lowerCase + upperCase + number;

  if (idLength < 14) return "provided length should be 14 and above";

  if (specialChar) srcString += symbol;

  srcString = suffleStr(srcString);

  let limit = srcString.length;
  for (let i = 0; i < idLength; i++) {
    id += srcString.charAt(genRandNum(limit));
  }

  return id;
}

export default { generateId };
