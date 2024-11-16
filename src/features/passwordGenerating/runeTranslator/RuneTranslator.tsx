import { Button, Card } from 'flowbite-react';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import RuneControl from './RuneControl';
import RuneText from './RuneText';
import runeTranslator from './runeTranslatorScript';
import CardHeader from '../../../components/CardHeader';
import { useSlideContext } from '../../../contexts/slideProvider/slideContext';
import { DrawerData , StorageData } from '../../../interfaces/interfaces';
import Switcher from '../../../utillities/Switcher';
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
