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
          {data.length > 0 && (
            <CopyToClipBoard
              password={data[switchCount].password}
              type={"password"}
            >
              <span className="cursor-pointer">
                {data[switchCount].password}
              </span>
            </CopyToClipBoard>
          )}
        </div>
        <div className="flex flex-col gap-2 w-1/2 text-center ">
          <div>Version</div>
          {data.length > 0 && <span>{data[switchCount].catch}</span>}
        </div>
      </div>

      <img
        src="src/assets/icons/arrowRight.svg"
        alt="arrowRight"
        data-type="right"
        onClick={(e) => handleSwitch(e)}
      />
    </div>
  );
}

export default GlyphSorcerySwitch;
