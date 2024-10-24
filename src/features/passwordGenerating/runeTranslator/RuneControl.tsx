import { TextInput } from "flowbite-react";
import React from "react";

interface Props {
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

function RuneControl({ setInput }: Props) {
  return (
    <div className="flex flex-col">
      <TextInput type="text" onChange={(e) => setInput(e.target.value)} />
      <span className="dark:text-gray-400 mt-2">*Maximal 12 Zeichen</span>
    </div>
  );
}

export default RuneControl;
