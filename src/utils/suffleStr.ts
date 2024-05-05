function suffleStr(str: string) {
  let shuffledString = str
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
  return shuffledString;
}

export { suffleStr };
