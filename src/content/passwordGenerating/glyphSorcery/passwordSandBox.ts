
import { passwordConverter } from "../../../utillities/converter/passwordConverter.ts";
import { allNounsGerman } from "../../../data/translations/germanGenerator.data.ts";
import { allNounsEnglish } from "../../../data/translations/englishGenerator.data.ts";
import {
  capitalizeFirstLetter,
  shuffleArray,
  rndNumInLen,
} from "../../../utillities/helperFunctions.ts";

function filterWordsByLength(words: string[], length:number) {
  // Use the filter method to filter words based on the specified length
  return words.filter((word) => word.length === length);
}

function generatePassword(length: number) {
  // Generates a password with user-defined length.
  const numberArray = "0123456789".split("");
  const symbolArray = "!@#$%&*-_+=.?".split("");
  const arrays = [numberArray, symbolArray];

  // Ensure that all types of characters are used at least once if length allows
  let generatedPassword = [];

  // Add one character from each array if there is space
  arrays.forEach((array) => {
    if (length > 0) {
      generatedPassword.push(array[rndNumInLen(array)]);
      length--;
    }
  });

  // Fill remaining length with random characters from the available arrays
  while (length > 0) {
    const randomArray = arrays[rndNumInLen(arrays)];
    generatedPassword.push(randomArray[rndNumInLen(randomArray)]);
    length--;
  }

  // Shuffle the final password to ensure randomness
  return shuffleArray(generatedPassword).join("");
}
function languageSelect(language: string) {
  let chosenArray;
  if (language === "deutsch") {
    chosenArray = allNounsGerman;
  } else {
    chosenArray = allNounsEnglish;
  }
  return chosenArray;
}
export function generateEzPw(length: number, language: string) {
  let allNouns = languageSelect(language);
  let filteredArray = filterWordsByLength(allNouns, length);
  let chosenWord = filteredArray[rndNumInLen(filteredArray)];
  const firstChar = chosenWord.slice(0, 1);
  const password = chosenWord.slice(1);

  let ezPw =
    capitalizeFirstLetter(firstChar) +
    passwordConverter({password, mode: "leetSimple"}) +
    generatePassword(3);

  return ezPw;
}
