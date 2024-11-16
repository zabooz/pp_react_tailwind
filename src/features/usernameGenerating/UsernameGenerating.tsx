import { useRef } from 'react';
import IdentityWizard from './identityWizard/IdentityWizard';
import MindMaestro from './mindMaestro/MindMaestro';

function UsernameGenerating() {
    const scrollDiv = useRef<HTMLImageElement>(null);

    const scrollToElement = () => {
        const { current } = scrollDiv;

        if (current !== null) {
            current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className="grid md:grid-cols-1 max-w-[1980px] mx-auto lg:grid-cols-2  w-full  content-center  min-h-[90vh] ">
            <IdentityWizard />
            <img
                src="/assets/landingPage/arrow.svg"
                alt="arrow"
                className="max-w-[4rem] cursor-pointer lg:hidden rotate-180 mx-auto my-14 "
                onClick={scrollToElement}
                ref={scrollDiv}
            />
            <MindMaestro />
        </main>
    );
}

export default UsernameGenerating;
