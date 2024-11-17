import { Button, Card } from 'flowbite-react';
import { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import ExcaliburControl from './ExcaliburControl';
import ExcaliburExtendet from './ExcaliburExtendet';
import ExcaliburTextContent from './ExcaliburTextContent';
import { cardsGrow } from '../cardsGrow';
import ExcaliburModal from './modal/ExcaliburModal';
import ModalLink from './modal/ModalLink';
import CardHeader from '../../../components/CardHeader';
import { usePasswordTesting } from '../../../contexts/passwordTestingContext/passwordTestingContext';
import { useSlideContext } from '../../../contexts/slideProvider/slideContext';
import { thinker } from '../../../utillities/thinker';

function Excalibur() {
    const { onSite, mojoGrow, isThinking, excaliburGrow, setExcaliburGrow, handleCardGrow } = usePasswordTesting();
    const { startAnimation } = useSlideContext();

    const [count, setCount] = useState<number>(0);
    const [intervalId, setIntervalId] = useState<number>(0);
    const [animation, setAnimation] = useState<string>('');

    useEffect(() => {
        if (isThinking) {
            const spinner = document.getElementById('spinner')!;
            spinner.textContent = '...';
            const number = setInterval(() => {
                spinner!.textContent = thinker();
            }, 1500);
            setIntervalId(number as unknown as number);
        } else {
            clearInterval(intervalId);
        }
    }, [isThinking, intervalId]);

    useEffect(() => {
        const animation = cardsGrow(excaliburGrow, mojoGrow, count);
        setAnimation(animation);

        if (count === 2) {setCount(0);}
    }, [excaliburGrow, mojoGrow, count]);

    return (
        <div
            className={` ${!onSite ? '' : animation}
        min-h-[670px] transition-all rounded dark:border-slate-700 max-w-[508px] lg:max-w-[1003px] relative dark:hover:shadow-2xl cursor-default duration-1000 flex justify-end
        `}
        >
            <Card
                className={`max-w-lg border-2  ${
                    startAnimation ? 'animate-fade-out' : 'animate-fade-in'
                }  min-h-[680px]  `}
                imgAlt="Excalibur Picture"
                imgSrc="/assets/passwordTesting/excalibur.webp"
            >
                <CardHeader title="Excalibur" top={165} />
                <ExcaliburTextContent />
                <ExcaliburControl className="lg:hidden" />
                <ModalLink />
                <Button
                    className="w-1/2 mx-auto hidden lg:flex"
                    onClick={() => {
                        handleCardGrow(excaliburGrow, setExcaliburGrow);
                        setCount(count + 1);
                    }}
                >
                    {excaliburGrow ? (
                        <FormattedMessage id="passwordTesting.excalibur.shrink" defaultMessage="Verkleinern" />
                    ) : (
                        <FormattedMessage id="passwordTesting.excalibur.grow" defaultMessage="Vergrößern" />
                    )}
                </Button>
            </Card>
            <ExcaliburExtendet />
            <ExcaliburModal />
        </div>
    );
}

export default Excalibur;
