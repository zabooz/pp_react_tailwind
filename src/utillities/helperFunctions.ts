export function capitalizeFirstLetter(str: string) {
  // Check if the input is not empty
  if (str.length === 0) return "";

  // Capitalize the first letter and concatenate with the rest of the string
  return str.charAt(0).toUpperCase() + str.slice(1);
}



export function rndNumInLen(array: any[]) {
  return Math.floor(Math.random() * array.length);
}



export function getUniqueRandomWord(
  array: string[],
  ...existingWords: string[]
) {
  let randomWord;
  do {
    randomWord = array[rndNumInLen(array)];
  } while (existingWords.includes(randomWord));
  return randomWord;
}
export function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

