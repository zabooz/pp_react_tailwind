import { useRef } from 'react';
import Excalibur from './excalibur/Excalibur.tsx';
import Mojo from './Mojo/Mojo.tsx';
import { BruteForceProvider } from '../../contexts/bruteForceContext/bruteForceProvider.tsx';
import { ExcaliburProvider } from '../../contexts/excaliburContext/ExcaliburProvider.tsx';

function PasswordTesting() {
    const scrollDiv1 = useRef<HTMLImageElement>(null);

    const scrollToElement = (scroll: React.RefObject<HTMLImageElement>) => {
        const { current } = scroll;

        if (current !== null) {
            current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <BruteForceProvider>
            <ExcaliburProvider>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5  w-full max-w-[1980px] overflow-hidden min-h-[90vh]  mx-auto  content-center">
                    <Mojo />
                    <img
                        src="/assets/landingPage/arrow.svg"
                        alt="arrow"
                        className="max-w-[4rem] cursor-pointer lg:hidden  rotate-180 mx-auto my-5 "
                        onClick={() => scrollToElement(scrollDiv1)}
                        ref={scrollDiv1}
                    />
                    <Excalibur />
                </div>
            </ExcaliburProvider>
        </BruteForceProvider>
    );
}

export default PasswordTesting;
