import {
    translateKeysToGerman
} from "../../../data/translations/englishGenerator.data";

export const translator = (userValues:string[]) => {
  const arr: string[] = [];
  userValues.forEach((i) => {
    arr.push(translateKeysToGerman[i as keyof typeof translateKeysToGerman]);
  });
  return arr;
};
