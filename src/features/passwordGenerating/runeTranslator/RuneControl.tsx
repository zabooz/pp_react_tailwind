import { TextInput } from 'flowbite-react';
import React from 'react';
import { FormattedMessage } from 'react-intl';

interface Props {
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

function RuneControl({ setInput }: Props) {
  return (
    <div className="flex flex-col">
      <TextInput type="text" onChange={(e) => setInput(e.target.value)} />
      <span className="dark:text-gray-400 mt-2">
        <FormattedMessage id="passwordGenerating.runeTranslator.runeControl.limit"
        defaultMessage="*Maximal 12 Zeichen" />
        </span>
    </div>
  );
}

export default RuneControl;
