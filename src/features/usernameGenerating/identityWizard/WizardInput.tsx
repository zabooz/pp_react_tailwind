import { Label, Select } from 'flowbite-react';
import { FormattedMessage } from 'react-intl';
// import { translateKeysToGerman } from '../../../data/translations/englishGenerator.data';
import { keyNames } from '@/data/translations/keysMessages';

interface Props {
    wordList: string[];
    value: string;
    onChange: (value: string) => void;
}

function WizardInput({ wordList, value, onChange }: Props) {
    return (
        <div className="grid grid-cols-2 gap-4 my-2">
            <Label className="dark:text-gray-400 tracking-wider">{value}</Label>
            <Select className="wizard-input"
            onChange={(event) => onChange(event.target.value)}
            >
                {wordList.map((key, index) => (
                    <option key={key} value={wordList[index]}>
                        <FormattedMessage {...keyNames[key as keyof typeof keyNames]}/>
                    </option>
                ))}
            </Select>
        </div>
    );
}

export default WizardInput;
