import { useSlideContext } from "../../contexts/Contexts";
import { landingData } from "../../data/landingPage/landingData";
import { useRef } from "react";
function Header() {
  const divRef = useRef<HTMLDivElement>(null);

  const scrollToElement = () => {
    const { current } = divRef;
    if (current !== null) {
      current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const { startAnimation } = useSlideContext();

  return (
    <header
      className={`dark:bg-slate-800 dark:text-gray-400 min-h-[95vh] flex flex-col items-center p-2  sm:justify-evenly  ${
        startAnimation ? "animate-fade-out" : "animate-fade-in"
      }`}
    >
      <div className=" flex flex-col-reverse lg:flex-row justify-center w-4/4 sm:w-3/4 mt-14  items-center">
        <div className=" flex flex-col gap-4 sm:gap:10 items-center lg:items-start ">
          <div className="2xl:text-9xl  xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-3xl text-center flex gap-2 sm:flex-col md:text-left dark:text-gray-200">
            <p>{landingData.brandNameTop}</p>
            <p>{landingData.brandNameBottom}</p>
          </div>
          <div className=" flex flex-col gap-5 mt-5 text-md  md:text-2xl lg:w-3/4 text-center md:text-left">
            <p className=" text-center md:text-left">{landingData.leadText}</p>
            <p className="px-5 md:px-0">{landingData.subText}</p>
            <p className="sm:mt-10 sm:p-4 p-2  border-2 sm:border-4 rounded-lg border-[#9ca3af]">
              {landingData.exploreText}
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
      <div className="my-auto">
        <img
          src={landingData.arrowSrc}
          alt={landingData.arrowAlt}
          className="max-w-[4rem] sm:max-w-[5rem] cursor-pointer   mx-auto rotate-180"
          onClick={scrollToElement}
        />
        <div ref={divRef}></div>
      </div>
    </header>
  );
}

export default Header;
