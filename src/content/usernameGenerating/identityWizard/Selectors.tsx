import { Label, Select, Button } from "flowbite-react";
import {
  englishArraysObjAdjectives,
  englishArraysObjNouns,
  translateKeysToGerman,

} from "../../../data/translations/englishGenerator.data";

import { useMemo } from "react";
interface Props {
  setValues: (values: string[]) => void;
}

function Selectors({ setValues }: Props) {
  const adjectives: string[] = useMemo(() => {
    return Array.from(Object.keys(englishArraysObjAdjectives)).sort((a,b) => a.localeCompare(b));
  },[]);
    const nouns: string[] = useMemo(() => {
        return Array.from(Object.keys(englishArraysObjNouns)).sort((a,b) => a.localeCompare(b));
  },[]);





  const handleClick = () => {
    const choices: string[] = [];
    document
      .querySelectorAll("select")
      .forEach((item) => choices.push(item.value));
      setValues(choices);
  };

  return (
    <div>
      <Label>Eigenschaft</Label>
      <Select>
        {adjectives.map((key, index) => (
          <option key={key} value={adjectives[index]}>
            {translateKeysToGerman[key as keyof typeof translateKeysToGerman]}
          </option>
        ))}
      </Select>
      <Label>Eigenschaft2</Label>
      <Select>
        {adjectives.map((key, index) => (
          <option key={key} value={adjectives[index]}>
            {translateKeysToGerman[key as keyof typeof translateKeysToGerman]}
          </option>
        ))}
      </Select>
      <Label>Begriff</Label>
      <Select>
        {nouns.map((key, index) => (
          <option key={key} value={nouns[index]}>
            {translateKeysToGerman[key as keyof typeof translateKeysToGerman]}
          </option>
        ))}
      </Select>
      <Button onClick={() => handleClick()}>Los Geht's</Button>
    </div>
  );
}

export default Selectors;
