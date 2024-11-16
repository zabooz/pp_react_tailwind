import { useRef } from 'react';
import Excalibur from './excalibur/Excalibur.tsx';
import Mojo from './Mojo/Mojo.tsx';
import HoverSound from '../../components/HoverSound.tsx';
import { BruteForceProvider } from '../../contexts/bruteForceContext/bruteForceProvider.tsx';
import { ExcaliburProvider } from '../../contexts/excaliburContext/ExcaliburProvider.tsx';
import { usePasswordTesting } from '../../contexts/passwordTestingContext/passwordTestingContext.ts';

function PasswordTesting() {
    const scrollDiv1 = useRef<HTMLImageElement>(null);

    const { colDelay } = usePasswordTesting();

    const scrollToElement = (scroll: React.RefObject<HTMLImageElement>) => {
        const { current } = scroll;

        if (current !== null) {
            current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main
            className={`grid grid-cols-1   ${
                colDelay ? 'lg:grid-cols-1' : 'lg:grid-cols-2'
            }  gap-5  w-full max-w-[1980px] overflow-hidden min-h-[90vh]  mx-auto  content-center`}
        >
            <HoverSound hoverTimer={false} soundFile="/assets/sounds/mojo.wav" volume={0.1}>
                <BruteForceProvider>
                    <Mojo />
                </BruteForceProvider>
            </HoverSound>
            <img
                src="/assets/landingPage/arrow.svg"
                alt="arrow"
                className="max-w-[4rem] cursor-pointer lg:hidden  rotate-180 mx-auto my-5 "
                onClick={() => scrollToElement(scrollDiv1)}
                ref={scrollDiv1}
            />
            <HoverSound hoverTimer={false} soundFile="/assets/sounds/excalibur.wav" volume={0.1}>
                <ExcaliburProvider>
                    <Excalibur />
                </ExcaliburProvider>
            </HoverSound>
        </main>
    );
}

export default PasswordTesting;
