import HoverSound from "../../utillities/HoverSound.tsx";
import Mojo from "./Mojo/Mojo.tsx";
import Excalibur from "./excalibur/Excalibur.tsx";
import { useRef } from "react";

function PasswordTesting() {
  const scrollDiv1 = useRef<HTMLImageElement>(null);

  const scrollToElement = (scroll: React.RefObject<HTMLImageElement>) => {
    const { current } = scroll;

    if (current !== null) {
      current.scrollIntoView({ behavior: "smooth" });
    }
  };


  console.log("password testing");

  return (
    <>
      <main
        className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5  w-full max-w-[1980px]  min-h-[90vh]  mx-auto  content-center"
      >
        <HoverSound hoverTimer={false} soundFile="/assets/sounds/mojo.wav" volume={.1}>
        <Mojo />
        </HoverSound>
        <img
          src="/assets/landingPage/arrow.svg"
          alt="arrow"
          className="max-w-[4rem] cursor-pointer lg:hidden  rotate-180 mx-auto my-5 "
          onClick={() => scrollToElement(scrollDiv1)}
          ref={scrollDiv1}
        />
        <HoverSound hoverTimer={false} soundFile="/assets/sounds/excalibur.wav" volume={.1}>
        <Excalibur />
        </HoverSound>
      </main>
    </>
  );
}

export default PasswordTesting;
