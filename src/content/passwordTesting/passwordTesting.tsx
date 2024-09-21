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
  return (
    <>
      <main
        className={` grid sm:grid-cols-1 lg:grid-cols-2  lg:gap-10 w-full overflow-hidden min-h-[90vh] mt-12 lg:mt-0  lg:hiden content-center
        }`}
      >
        <Mojo />
        <img
          src="/assets/landingPage/arrow.svg"
          alt="arrow"
          className="max-w-[4rem] cursor-pointer lg:hidden  rotate-180 mx-auto my-20 "
          onClick={() => scrollToElement(scrollDiv1)}
          ref={scrollDiv1}
        />
        <Excalibur />
      </main>
    </>
  );
}

export default PasswordTesting;
