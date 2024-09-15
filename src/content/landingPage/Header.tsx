import { landingData } from "../../data/landingPage/landingData"





function Header() {
  return (
    <header className="">
    <div className="flex  justify-center ">
      <div className="flex flex-col justify-center">
        <p>{landingData.brandNameTop}</p>
        <p>{landingData.brandNameBottom}</p>
      </div>
      <img src={landingData.padlock} alt={landingData.padlockAlt} className="max-w-[20rem]" />
    </div>
    <div>
        <p>{landingData.leadText}</p>
        <p>{landingData.subText}</p>
    </div>
    <p>{landingData.exploreText}</p>
    <img src={landingData.arrowSrc} alt={landingData.arrowAlt} className="max-w-[10rem]"/>
    </header>
  )
}

export default Header
