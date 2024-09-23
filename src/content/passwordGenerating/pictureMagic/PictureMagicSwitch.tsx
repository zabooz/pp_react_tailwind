import { useEffect, useState } from "react";
import { StorageData } from "../../../interfaces/interfaces";
import { CopyToClipBoard } from "../../../utillities/CopyToClipBoard";
interface Props {
  storageData: StorageData[];
}

function PictureMagicSwitch({ storageData }: Props) {
  const [switchCount, setSwitchCount] = useState<number>(0);

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
    if (storageData.length > 0) {
      setSwitchCount(storageData.length - 1);
    } else {
      setSwitchCount(storageData.length);
    }
  }, [storageData]);

  return (
    <div className="flex dark:text-gray-200  justify-between w-full ">
      <div className=" mt-11 mb-auto rounded-full me-2 ">
        <img
          src="/assets/icons/arrowRight.svg"
          alt="arrowLeft"
          className="rotate-180 cursor-pointer w-6 "
          data-type="left"
          onClick={(e) => handleSwitch(e)}
        />
      </div>

      <div className="flex justify-evenly w-full  h-20">
        <div className="flex flex-col  w-3/5 text-center ">
          <div className="border-b">Passwort</div>
          {storageData.length > 0 && (
            <CopyToClipBoard
              value={storageData[switchCount].value}
              type={"password"}
              clippy={false}
            >
              <div className="cursor-pointer mt-4" key={switchCount}>
                {storageData[switchCount].value}
              </div>
            </CopyToClipBoard>
          )}
        </div>
        <div className="flex flex-col gap-1 w-2/5 text-center items-center  ">
          <div className="border-b w-full">Dein Bild</div>

          {storageData.length > 0 && (
            <img
              src={storageData[switchCount].catch}
              className="aspect-square w-10 mt-2 rounded "
              alt="dein hochgeladenes Bild"
            />
          )}
        </div>
      </div>
      <div className="mt-11 mb-auto rounded-full ms-2 ">
        <img
          src="/assets/icons/arrowRight.svg"
          alt="arrowRight"
          data-type="right"
          className="cursor-pointer w-6 "
          onClick={(e) => handleSwitch(e)}
        />
      </div>
    </div>
  );
}

export default PictureMagicSwitch;
