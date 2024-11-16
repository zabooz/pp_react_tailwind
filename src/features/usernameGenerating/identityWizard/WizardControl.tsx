import { Button } from 'flowbite-react';
import { englishArraysObjAdjectives, englishArraysObjNouns } from '../../../data/translations/englishGenerator.data';
import { userGenerator } from '../usernameGeneratingScript';
import { useMemo, useState } from 'react';
import WizardInput from './WizardInput';
import WizardOutput from './WizardOutput';
import { FormattedMessage } from 'react-intl';

function WizardControl() {
    const [username, setUsername] = useState<HTMLSpanElement | null>(null);

    const adjectives: string[] = useMemo(() => {
        return Array.from(Object.keys(englishArraysObjAdjectives)).sort((a, b) => a.localeCompare(b));
    }, []);
    const nouns: string[] = useMemo(() => {
        return Array.from(Object.keys(englishArraysObjNouns)).sort((a, b) => a.localeCompare(b));
    }, []);

    const handleClick = () => {
        const choices: string[] = [];
        document.querySelectorAll('select').forEach((item) => choices.push(item.value));
        setUsername(userGenerator({ choices }));
    };

    return (
        <div>
            <WizardInput wordList={adjectives} value="Eigenschaft: " />
            <WizardInput wordList={adjectives} value="Eigenschaft: " />
            <WizardInput wordList={nouns} value="Begriff: " />
            <div className="grid grid-cols-2 gap-4 mt-10">
                <Button className=" w-2/3 bg-[#ea6954]" onClick={() => handleClick()}>
                    <FormattedMessage id="generate-identity-wizard" defaultMessage="  Los Geht's" />
                </Button>
                <WizardOutput username={username} />
            </div>
        </div>
    );
}

export default WizardControl;
