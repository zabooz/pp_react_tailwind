import { useEffect, useState } from "react";
import { StorageData } from "../../../interfaces/interfaces";
import { CopyToClipBoard } from "../../../utillities/CopyToClipBoard";
interface Props {
  data: StorageData[];
}

function GlyphSorcerySwitch({ data }: Props) {
  const [switchCount, setSwitchCount] = useState<number>(0 );



  const handleSwitch = (e: any) => {

    const icon = e.target;
    const type = icon.getAttribute("data-type");
    const length = data.length;
    if (type === "left") {
      const newCount = (switchCount - 1 + length) % length;
      setSwitchCount(newCount);
    } else if (type === "right") {
      const newCount = (switchCount + 1) % length;
      setSwitchCount(newCount);
    }
  };

  useEffect(() => {

    if(data.length > 0){
        setSwitchCount(data.length-1)
    }else{
        setSwitchCount(data.length)
    }
  }, [data.length])



  return (
    <div className="flex dark:text-gray-200 justify-between w-full">
      <img
        src="/assets/icons/arrowRight.svg"
        alt="arrowLeft"
        className="rotate-180 cursor-pointer mt-6"
        data-type="left"
        onClick={(e) => handleSwitch(e)}

      />

      <div className="flex justify-evenly w-full  h-20">
        <div className="flex flex-col gap-2 w-3/5 text-center ">
          <div className="border-b w-full mb-[6.5px]">Passwort</div>
          {data.length > 0 && (
            <CopyToClipBoard
              password={data[switchCount].password}
              type={"password"}
            >
              <div className="cursor-pointer ">
                {data[switchCount].password}
              </div>
            </CopyToClipBoard>
          )}
        </div>
        <div className="flex flex-col gap-2 w-2/5 text-center ">
          <div className="border-b w-full mb-[6.5px]">Länge</div>
          {data.length > 0 && <span>{data[switchCount].catch}</span>}
        </div>
      </div>

      <img
        src="/assets/icons/arrowRight.svg"
        alt="arrowRight"
        data-type="right"
        onClick={(e) => handleSwitch(e)}
        className="cursor-pointer mt-6"
      />
    </div>
  );
}

export default GlyphSorcerySwitch;
