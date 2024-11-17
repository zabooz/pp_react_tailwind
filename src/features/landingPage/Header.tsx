import { useRef } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSlideContext } from '../../contexts/slideProvider/slideContext';
import { landingData } from '../../data/landingPage/landingData';

function Header({ setHoverTimer }: { setHoverTimer: (value: boolean) => void }) {
    const arrowRef = useRef<HTMLImageElement>(null);
    const { startAnimation } = useSlideContext();

    const scrollNew = () => {
        const { current } = arrowRef;
        if (current !== null) {
            const rect = current.getBoundingClientRect();
            const offsetY = -50;

            window.scrollTo({
                top: window.scrollY + rect.top - offsetY,
                behavior: 'smooth',
            });
        }

        setTimeout(() => {
            setHoverTimer(true);
        }, 1000);
    };

    return (
        <header
            className={`dark:bg-slate-800 dark:text-gray-400 min-h-[90vh] flex flex-col items-center justify-between lg:pt-16 ${
                startAnimation ? 'animate-fade-out' : 'animate-fade-in'
            }`}
        >
            <div className=" flex flex-col-reverse lg:flex-row justify-center w-4/4 sm:w-3/4  items-center">
                <div className=" flex flex-col gap-4 sm:gap:10 items-center lg:items-start ">
                    <div className="2xl:text-9xl  xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-3xl text-center flex gap-2 sm:flex-col md:text-left dark:text-gray-200">
                        <p>{landingData.brandNameTop}</p>
                        <p>{landingData.brandNameBottom}</p>
                    </div>
                    <div className=" flex flex-col gap-5 mt-5 text-md  md:text-2xl lg:w-3/4 text-center md:text-left">
                        <p className=" text-center md:text-left" data-testid={'landing-lead-text'}>
                            <FormattedMessage
                                id={'landing-lead-text'}
                                defaultMessage={'Mach Schluss mit langweiligen Passwörtern und Namen!'}
                                description={'Landing page lead text'}
                            />
                        </p>
                        <p className="px-5 md:px-0">
                            <FormattedMessage
                                id={'landing-sub-lead-text'}
                                defaultMessage={
                                    'Optimiere mit unseren Tools deine Passwörter und Benutzernamen. Teste ihre Stärke, erschaffe neue und sichere Optionen und finde den perfekten Online-Namen.'
                                }
                                description={'Landing page sub-lead text'}
                            />
                        </p>
                        <p className="sm:mt-10 sm:p-4 p-2  border-2 sm:border-4 rounded-lg border-[#9ca3af]">
                            <FormattedMessage
                                id={'landing-cta-text'}
                                defaultMessage={'Entdecke jetzt, wie einfach es ist, deine Sicherheit zu erhöhen!'}
                                description={'Landing page CTA text'}
                            />
                        </p>
                    </div>
                </div>
                <div className="mb-5 sm:mb-0  lg-w-1/3 ">
                    <img
                        src={landingData.padlock}
                        alt={landingData.padlockAlt}
                        className="max-w-[6rem] sm:max-w-[12rem] lg:max-w-[19rem] xl:max-w-[23rem] "
                    ></img>
                </div>
            </div>
            <div>
                <img
                    src={landingData.arrowSrc}
                    alt={landingData.arrowAlt}
                    className="max-w-[4rem] sm:max-w-[5rem] cursor-pointer   mx-auto rotate-180 hover:scale-110  transition-all duration-300"
                    onClick={scrollNew}
                    ref={arrowRef}
                />
            </div>
        </header>
    );
}

export default Header;
