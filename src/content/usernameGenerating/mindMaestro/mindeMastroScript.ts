import {
  englishArraysObjAdjectives,
  englishArraysObj,
} from "../../../data/translations/englishGenerator.data";
interface Props {
  values: string[];
}

//  SO lazy and incomplete

export const mindMaestro = ({ values }: Props) => {
  let partOne = "";
  let partTwo = "";
  console.log(values)
  
  values.forEach((value) => {
    if (
      englishArraysObjAdjectives[
        value as keyof typeof englishArraysObjAdjectives
      ]
    ) {
      const arr =
        englishArraysObjAdjectives[
          value as keyof typeof englishArraysObjAdjectives
        ];
      const token = arr[Math.floor(Math.random() * arr.length)] as string;
      partOne += token.slice(0, 1).toUpperCase() + token.slice(1);
    } else {
      const arr =
    englishArraysObj[value as keyof typeof englishArraysObj];
      const token = arr[Math.floor(Math.random() * arr.length)] as string;

      partTwo = (token.slice(0, 1).toUpperCase() + token.slice(1));
    }
  });

  return `${partOne}${partTwo}`;
};
