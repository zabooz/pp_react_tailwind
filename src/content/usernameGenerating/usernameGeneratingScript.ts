
import { englishArraysObj } from "../../data/translations/englishGenerator.data";
interface Props {
  userValues: string[];
}

export const userGenerator = ({ userValues }: Props) => {
  let word: string = "";
  userValues.forEach((i) => {
    const arr = englishArraysObj[i as keyof typeof englishArraysObj];
    const token = arr[Math.floor(Math.random() * arr.length)] as string;
    word += token.slice(0, 1).toUpperCase() + token.slice(1);
  });

  return word;
};
