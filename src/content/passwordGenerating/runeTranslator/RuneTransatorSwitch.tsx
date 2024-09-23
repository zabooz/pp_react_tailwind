import { useState } from "react";
import { StorageData } from "../../../interfaces/interfaces";
import { CopyToClipBoard } from "../../../utillities/CopyToClipBoard";
interface Props {
  runes: StorageData[];
}

function RuneTransatorSwitch({ runes }: Props) {
  const [switchCount, setSwitchCount] = useState<number>(0);
  const handleSwitch = (e: any) => {
    const icon = e.target;
    const type = icon.getAttribute("data-type");
    const length = runes.length;
    if (type === "left") {
      const newCount = (switchCount - 1 + length) % length;
      setSwitchCount(newCount);
    } else if (type === "right") {
      const newCount = (switchCount + 1) % length;
      setSwitchCount(newCount);
    }
  };

  console.log(runes);

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
        <div className="flex flex-col gap-2 w-1/2 text-center ">
          <div className="border-b w-full mb-[6.5px]">Passwort</div>
          {runes.length > 0 && (
            <CopyToClipBoard
              clippy={false}
              value={runes[switchCount].value}
              type={"password"}
            >
              <span className="cursor-pointer" key={runes[switchCount].value}>
                {runes[switchCount].value}
              </span>
            </CopyToClipBoard>
          )}
        </div>
        <div className="flex flex-col gap-2 w-1/2 text-center ">
          <div className="border-b w-full mb-[6.5px]">Version</div>
          {runes.length > 0 && <span>{runes[switchCount].catch}</span>}
        </div>
      </div>

      <img
        src="/assets/icons/arrowRight.svg"
        alt="arrowRight"
        data-type="right"
        className="cursor-pointer mt-7"
        onClick={(e) => handleSwitch(e)}
      />
    </div>
  );
}

export default RuneTransatorSwitch;
