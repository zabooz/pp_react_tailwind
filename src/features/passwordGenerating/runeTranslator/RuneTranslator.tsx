import { useState } from 'react';
import { Button, Card } from 'flowbite-react';
import { DrawerData } from '../../../interfaces/interfaces';
import { StorageData } from '../../../interfaces/interfaces';
import { useSlideContext } from '../../../contexts/Contexts';
import Switcher from '../../../utillities/Switcher';
import runeTranslator from './runeTranslatorScript';

import RuneText from './RuneText';
import RuneControl from './RuneControl';
import CardHeader from '../../../components/CardHeader';
import { FormattedMessage } from 'react-intl';
interface Props {
    handleDrawerClick: (content: DrawerData) => void;
}

function RuneTranslator({ handleDrawerClick }: Props) {
    const [input, setInput] = useState('');
    const [runes, setRunes] = useState<StorageData[]>([]);
    const handleClick = async () => {
        const result = await runeTranslator(input);
        setRunes([...result!]);
    };

    const { startAnimation } = useSlideContext();
    return (
        <Card
            className={`max-w-md mx-auto border-4 ${
                startAnimation ? 'animate-fade-out' : 'animate-fade-in'
            } dark:hover:shadow-2xl transition-shadow duration-1000  `}
            imgAlt="Rune Translator Picture"
            imgSrc="/assets/passwordGenerating/runeTranslator.webp"
        >
            <CardHeader title="Rune Translator" top={145} />
            <RuneText handleDrawerClick={handleDrawerClick} />
            <RuneControl setInput={setInput} />
            <Switcher app="runeTranslator" data={runes} />
            <Button onClick={() => handleClick()} className="mt-3 bg-[#ea6954]">
                <FormattedMessage id="passwordGenerating.runeTranslator.generate" defaultMessage="Los geht's" />
            </Button>
        </Card>
    );
}

export default RuneTranslator;
