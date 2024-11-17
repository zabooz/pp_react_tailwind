import { Button } from 'flowbite-react';
import { useEffect, useMemo, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { englishArraysObjAdjectives, englishArraysObjNouns } from '../../../data/translations/englishGenerator.data';
import { userGenerator } from '../usernameGeneratingScript';
import WizardInput from './WizardInput';
import WizardOutput from './WizardOutput';

function WizardControl() {
    const [username, setUsername] = useState<HTMLSpanElement | null>(null);
    const [traitOne, setTraitOne] = useState<string>('ages');
    const [traitTwo, setTraitTwo] = useState<string>('ages');
    const [noune, setNoune] = useState<string>('animals');
    const [choices, setChoices] = useState<string[]>([traitOne, traitTwo, noune]);
    const intl = useIntl();
    const adjectives: string[] = useMemo(() => {
        return Array.from(Object.keys(englishArraysObjAdjectives)).sort((a, b) => a.localeCompare(b));
    }, []);
    const nouns: string[] = useMemo(() => {
        return Array.from(Object.keys(englishArraysObjNouns)).sort((a, b) => a.localeCompare(b));
    }, []);

    const handleClick = () => {
        setUsername(userGenerator({ choices }));
    };

    useEffect(() => {
        setChoices([traitOne, traitTwo, noune]);
    }, [traitOne, traitTwo, noune]);


    return (
        <div>
            <WizardInput
                wordList={adjectives}
                value={intl.formatMessage({ id: 'adjective', defaultMessage: 'Eigenschaft: ' })}
                onChange={setTraitOne}
            />
            <WizardInput
                wordList={adjectives}
                value={intl.formatMessage({ id: 'adjective2', defaultMessage: 'Eigenschaft: ' })}
                onChange={setTraitTwo}
            />
            <WizardInput
                wordList={nouns}
                value={intl.formatMessage({ id: 'noun', defaultMessage: 'Begriff: ' })}
                onChange={setNoune}
            />
            <div className="grid grid-cols-2 gap-4 mt-10">
                <Button className=" w-2/3 bg-[#ea6954]" onClick={() => handleClick()}>
                    <FormattedMessage id="generate-identity-wizard" defaultMessage="Los Geht's" />
                </Button>
                <WizardOutput username={username} />
            </div>
        </div>
    );
}

export default WizardControl;
