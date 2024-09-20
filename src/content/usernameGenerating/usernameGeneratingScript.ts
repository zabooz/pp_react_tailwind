
import { englishArraysObj } from "../../data/translations/englishGenerator.data";
interface Props {
  choices: string[];
}

export const  userGenerator = ({ choices }: Props) => {
  let word: string = "";
  choices.forEach((i) => {
    const arr = englishArraysObj[i as keyof typeof englishArraysObj];
    const token = arr[Math.floor(Math.random() * arr.length)] as string;
    word += token.slice(0, 1).toUpperCase() + token.slice(1);
  });


  let spanFull = document.createElement("span");
  word.split("").forEach((i) => {

    if (i === i.toUpperCase()) {
      const span = document.createElement("span");
      span.className = "text-gray-300 tracking-wider";
      span.innerHTML = i;
      spanFull.appendChild(span);
    } else {
      spanFull.innerHTML += i;
    }
  })


  return spanFull;
};
