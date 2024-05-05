import { lowerCase, number, symbol, upperCase, myOptions } from "./constant.js";
import { genRandNum } from "./utils/genRandNumber.js";
import { suffleStr } from "./utils/suffleStr.js";

type OptionsType = {
  lowerCase?: boolean;
  upperCase?: boolean;
  number?: boolean;
  symbol?: boolean;
};

function generatePass(
  length = 8,
  options?: {
    lowerCase?: boolean;
    upperCase?: boolean;
    number?: boolean;
    symbol?: boolean;
  }
) {
  let password = "";
  let allChar = "";
  if (length < 4) return "length should be 4 and above";

  const margedOptions = { ...myOptions, ...options };

  if (margedOptions.lowerCase) {
    password += lowerCase.charAt(genRandNum(26));
    allChar += lowerCase;
  }

  if (margedOptions.upperCase) {
    password += upperCase.charAt(genRandNum(26));
    allChar += upperCase;
  }

  if (margedOptions.number) {
    password += number.charAt(genRandNum(10));
    allChar += number;
  }

  if (margedOptions.symbol) {
    password += symbol.charAt(genRandNum(19));
    allChar += symbol;
  }

  const restLength = length - password.length;
  const allCharLen = allChar.length;

  if (allCharLen === 0) return "Atleat true 1 option ";

  for (let i = 0; i < restLength; i++) {
    password += allChar.charAt(genRandNum(allCharLen));
  }

  console.log("password:", password);

  password = suffleStr(password);

  return password;
}

export default { generatePass };
