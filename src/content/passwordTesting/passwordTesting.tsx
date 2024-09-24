import { BruteForceProvider, ExcaliburProvider } from "../../contexts/Contexts.tsx";
import HoverSound from "../../utillities/HoverSound.tsx";
import Mojo from "./Mojo/Mojo.tsx";
import Excalibur from "./excalibur/Excalibur.tsx";
import { useRef, useState } from "react";

function PasswordTesting() {
  const scrollDiv1 = useRef<HTMLImageElement>(null);
  const [mojoGrow, setMojoGrow] = useState(false);
  const [excaliburGrow, setExcaliburGrow] = useState(false);
  const [colDelay, setColDelay] = useState(false);
  const [onSite, setOnSite] = useState(false);
  const scrollToElement = (scroll: React.RefObject<HTMLImageElement>) => {
    const { current } = scroll;

    if (current !== null) {
      current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCardGrow = () => {
    setMojoGrow(!mojoGrow);
    setOnSite(true);
    setTimeout(() => {
      setColDelay(!colDelay);
    }, 2000);
  };

  return (
    <>
      <main
        className={`grid grid-cols-1   ${
          colDelay ? "lg:grid-cols-1" : "lg:grid-cols-2"
        }  gap-5  w-full max-w-[1980px] overflow-x-hidden min-h-[90vh]  mx-auto  content-center`}
      >
        <HoverSound
          hoverTimer={false}
          soundFile="/assets/sounds/mojo.wav"
          volume={0.1}
        >
          <BruteForceProvider>
            <Mojo
              mojoGrow={mojoGrow}
              onSite={onSite}
              handleCardGrow={handleCardGrow}
              excaliburGrow={excaliburGrow}
            />
          </BruteForceProvider>
        </HoverSound>
        <img
          src="/assets/landingPage/arrow.svg"
          alt="arrow"
          className="max-w-[4rem] cursor-pointer lg:hidden  rotate-180 mx-auto my-5 "
          onClick={() => scrollToElement(scrollDiv1)}
          ref={scrollDiv1}
        />
        <HoverSound
          hoverTimer={false}
          soundFile="/assets/sounds/excalibur.wav"
          volume={0.1}
        >
          <ExcaliburProvider>
          <Excalibur
            mojoGrow={mojoGrow}
            excaliburGrow={excaliburGrow}
            handleCardGrow={handleCardGrow}
            colDelay={colDelay}
            onSite={onSite}
            setExcaliburGrow={setExcaliburGrow}
            />
            </ExcaliburProvider>
        </HoverSound>
      </main>
    </>
  );
}

export default PasswordTesting;
