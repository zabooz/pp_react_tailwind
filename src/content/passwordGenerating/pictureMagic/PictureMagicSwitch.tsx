

import { useEffect, useState } from "react";
import { StorageData } from "../../../interfaces/interfaces";
import { CopyToClipBoard } from "../../../utillities/CopyToClipBoard";
interface Props {
  storageData: StorageData[];
}

function PictureMagicSwitch({ storageData }:Props) {
    const [switchCount, setSwitchCount] = useState<number>(0 );



    const handleSwitch = (e: any) => {
  
      const icon = e.target;
      const type = icon.getAttribute("data-type");
      const length = storageData.length;
      if (type === "left") {
        const newCount = (switchCount - 1 + length) % length;
        setSwitchCount(newCount);
      } else if (type === "right") {
        const newCount = (switchCount + 1) % length;
        setSwitchCount(newCount);
      }
    };
  
    useEffect(() => {
  
      if(storageData.length > 0){
          setSwitchCount(storageData.length-1)
      }else{
          setSwitchCount(storageData.length)
      }
    }, [])
  

  return (
    <div className="flex text-gray-200 justify-between w-full">
      <img
        src="src/assets/icons/arrowRight.svg"
        alt="arrowLeft"
        className="rotate-180"
        data-type="left"
        onClick={(e) => handleSwitch(e)}
      />

      <div className="flex justify-evenly w-full  h-14">
        <div className="flex flex-col gap-2 w-1/2 text-center ">
          <span>Passwort</span>
          {storageData.length > 0 && (
            <CopyToClipBoard
              password={storageData[switchCount].password}
              type={"password"}
            >
              <span className="cursor-pointer">
                {storageData[switchCount].password}
              </span>
            </CopyToClipBoard>
          )}
        </div>
        <div className="flex flex-col gap-2 w-1/2 text-center ">
          <div>Version</div>
          {storageData.length > 0 && <img src={storageData[switchCount].catch} alt="dein hochgeladenes Bild"/>}
        </div>
      </div>

      <img
        src="src/assets/icons/arrowRight.svg"
        alt="arrowRight"
        data-type="right"
        onClick={(e) => handleSwitch(e)}
      />
    </div>
  )
}

export default PictureMagicSwitch
