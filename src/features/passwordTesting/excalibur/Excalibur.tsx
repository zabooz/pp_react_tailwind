import { Button, Card } from 'flowbite-react';
import { useState, useEffect } from 'react';
import ExcaliburControl from './ExcaliburControl';
import ExcaliburTextContent from './ExcaliburTextContent';
import ExcaliburModal from './modal/ExcaliburModal';
import ModalLink from './modal/ModalLink';
import CardHeader from '../../../components/CardHeader';
import { usePasswordTesting } from '../../../contexts/passwordTestingContext/passwordTestingContext';
import { useSlideContext } from '../../../contexts/slideProvider/slideContext';
import { thinker } from '../../../utillities/thinker';
import MojoExtendet from '../Mojo/mojoExtendet/MojoExtendet';

function Excalibur() {
    const { isThinking } = usePasswordTesting();
    const { startAnimation } = useSlideContext();
    const { extendetExcalibur, setExtendetExcalibur, extendetMojo } = usePasswordTesting();
    const [intervalId, setIntervalId] = useState<number>(0);

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

    return (
        <>
            <div className="justify-center items-center flex ">
                <div className=" rounded-xl  border-2 border-slate-700 dark:border-slate-700  max-w-lg dark:hover:shadow-2xl transition-shadow duration-1000">
                    {!extendetMojo ? (
                        <Card
                            className={`max-w-lg border-none min-h-[682px]  ${
                                startAnimation ? 'animate-fade-out' : 'animate-fade-in'
                            }   `}
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
                                    setExtendetExcalibur(!extendetExcalibur);
                                    console.log(extendetExcalibur);
                                }}
                            >
                                sdfgdsfg
                            </Button>
                        </Card>
                    ) : (
                        <MojoExtendet />
                    )}
                </div>
            </div>
            <ExcaliburModal />
        </>
    );
}

export default Excalibur;
