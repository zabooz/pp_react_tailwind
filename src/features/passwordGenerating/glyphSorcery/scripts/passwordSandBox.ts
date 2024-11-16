import { allNounsEnglish } from '../../../../data/translations/englishGenerator.data.ts';
import { allNounsGerman } from '../../../../data/translations/germanGenerator.data.ts';
import { passwordConverter } from '../../../../utillities/converter/passwordConverter.ts';
import {
  capitalizeFirstLetter,
  shuffleArray,
  rndNumInLen,
} from '../../../../utillities/helperFunctions.ts';

function filterWordsByLength(words: string[], length: number) {
  // Use the filter method to filter words based on the specified length
  return words.filter((word) => word.length === length);
}

function generatePassword(length: number) {

  let l = length;

  // Generates a password with user-defined length.
  const numberArray = '0123456789'.split('');
  const symbolArray = '!@#$%&*-_+=.?'.split('');
  const arrays = [numberArray, symbolArray];
  
  // Ensure that all types of characters are used at least once if length allows
  const generatedPassword = [];

  // Add one character from each array if there is space
  arrays.forEach((array) => {
    if (l > 0) {
      generatedPassword.push(array[rndNumInLen(array)]);
      l--;
    }
  });

  // Fill remaining length with random characters from the available arrays
  while (l> 0) {
    const randomArray = arrays[rndNumInLen(arrays)];
    generatedPassword.push(randomArray[rndNumInLen(randomArray)]);
    l--;
  }

  // Shuffle the final password to ensure randomness
  return shuffleArray(generatedPassword).join('');
}


function languageSelect(language: string) {
  let chosenArray;
  if (language === 'german') {
    chosenArray = allNounsGerman;
  } else {
    chosenArray = allNounsEnglish;
  }
  return chosenArray;
}
export function generateEzPw(length: number, language: string) {

  const allNouns = languageSelect(language);
  const filteredArray = filterWordsByLength(allNouns, length);

  const chosenWord = filteredArray[rndNumInLen(filteredArray)];

  const firstChar = chosenWord.slice(0, 1);
  const password = chosenWord.slice(1);

  const ezPw =
    capitalizeFirstLetter(firstChar) +
    passwordConverter({ password, mode: 'leetSimple' }) +
    generatePassword(3);

  return ezPw;
}
