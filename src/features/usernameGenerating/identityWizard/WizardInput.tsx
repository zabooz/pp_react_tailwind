import { Label, Select } from "flowbite-react";
import { translateKeysToGerman } from "../../../data/translations/englishGenerator.data";


interface Props {
  wordList: string[];
  value: string;
}

function WizardInput({ wordList,value }: Props) {


  return (
    <div className="grid grid-cols-2 gap-4 my-2">
      <Label className="dark:text-gray-400 tracking-wider">{value}</Label>
      <Select className="wizard-input">
        {wordList.map((key, index) => (
          <option key={key} value={wordList[index]}>
            {translateKeysToGerman[key as keyof typeof translateKeysToGerman]}
          </option>
        ))}
      </Select>
    </div>
  );
}

export default WizardInput;
