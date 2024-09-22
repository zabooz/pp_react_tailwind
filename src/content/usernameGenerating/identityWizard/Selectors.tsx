import { Label, Select, Button } from "flowbite-react";
import {
  englishArraysObjAdjectives,
  englishArraysObjNouns,
  translateKeysToGerman,
} from "../../../data/translations/englishGenerator.data";
import { userGenerator } from "../usernameGeneratingScript";
import { useMemo, useState } from "react";
import { CopyToClipBoard } from "../../../utillities/CopyToClipBoard";

function Selectors() {
  const adjectives: string[] = useMemo(() => {
    return Array.from(Object.keys(englishArraysObjAdjectives)).sort((a, b) =>
      a.localeCompare(b)
    );
  }, []);
  const nouns: string[] = useMemo(() => {
    return Array.from(Object.keys(englishArraysObjNouns)).sort((a, b) =>
      a.localeCompare(b)
    );
  }, []);
  const [username, setUsername] = useState<HTMLSpanElement | null>(null);
  const handleClick = () => {
    const choices: string[] = [];
    document
      .querySelectorAll("select")
      .forEach((item) => choices.push(item.value));
    setUsername(userGenerator({ choices }));
  };

  return (
    <div>
      <div>
        <div className="grid grid-cols-2 gap-4 my-2">
          <Label className="dark:text-gray-400 tracking-wider">
            Eigenschaft :
          </Label>
          <Select>
            {adjectives.map((key, index) => (
              <option key={key} value={adjectives[index]}>
                {
                  translateKeysToGerman[
                    key as keyof typeof translateKeysToGerman
                  ]
                }
              </option>
            ))}
          </Select>
        </div>
        <div className="grid grid-cols-2 gap-4 my-2">
          <Label className="dark:text-gray-400 tracking-wider">
            Eigenschaft :
          </Label>
          <Select>
            {adjectives.map((key, index) => (
              <option key={key} value={adjectives[index]}>
                {
                  translateKeysToGerman[
                    key as keyof typeof translateKeysToGerman
                  ]
                }
              </option>
            ))}
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Label className="dark:text-gray-400 tracking-wider">Begriff :</Label>
        <Select>
          {nouns.map((key, index) => (
            <option key={key} value={nouns[index]}>
              {translateKeysToGerman[key as keyof typeof translateKeysToGerman]}
            </option>
          ))}
        </Select>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-10">
        <Button className=" w-2/3 bg-[#ea6954]" onClick={() => handleClick()}>
          Los Geht's
        </Button>
        <p className="border-2 border-2-slate-400 rounded text-center p-2 text-gray-400">
          {username && (
            <CopyToClipBoard
              clippy={false}
              value={username.innerText}
              type="username"
            >
              <span>{username.innerText}</span>
            </CopyToClipBoard>
          )}
        </p>
      </div>
    </div>
  );
}

export default Selectors;
