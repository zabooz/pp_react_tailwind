import { useSlideContext } from "../../contexts/Contexts";
import { landingData } from "../../data/landingPage/landingData";
import { useRef } from "react";
function Header( ) {


const divRef = useRef<HTMLDivElement>(null);

const scrollToElement = () => {
  const {current} = divRef
   if (current !== null){
     current.scrollIntoView({behavior: "smooth"})

   }
}
  const {startAnimation} = useSlideContext()

  return (
        <header className={`dark:bg-slate-800 dark:text-gray-400 min-h-screen flex flex-col items-center justify-evenly ${startAnimation ? 'animate-fade-out' : 'animate-fade-in' }`}>
      <div className=" flex flex-col-reverse lg:flex-row justify-center w-4/4 sm:w-3/4  items-center">
      <div className=" flex flex-col gap-10 items-center lg:items-start ">
        <div className="2xl:text-9xl  xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-center md:text-left dark:text-gray-200">
          <p >{landingData.brandNameTop}</p>
          <p >{landingData.brandNameBottom}</p>
        </div>
      <div className=" flex flex-col gap-5 mt-5 text-lg  md:text-2xl lg:w-3/4 text-center md:text-left">
        <p className=" text-center md:text-left">{landingData.leadText}</p>
        <p className="px-5 md:px-0">{landingData.subText}</p>
        <p className="mt-10 p-4  border-4 rounded-lg border-[#9ca3af]" >{landingData.exploreText}</p>
      </div>
      </div>
      <div className="mb-5 sm:mb-0  lg-w-1/3 ">
         <img src={landingData.padlock}
          alt={landingData.padlockAlt}
          className="max-w-[9rem] sm:max-w-[12rem] lg:max-w-[19rem] xl:max-w-[23rem] "></img> 
        
        </div>
      </div>
      <div>
      <img
        src={landingData.arrowSrc}
        alt={landingData.arrowAlt}
        className="max-w-[5rem] cursor-pointer  rotate-180 mx-auto "
        onClick={scrollToElement}
        />
        <div ref={divRef}></div>
      </div>
    </header>
  );
}

export default Header;
