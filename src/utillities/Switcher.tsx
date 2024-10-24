import { useEffect, useState } from "react";
import { StorageData } from "../interfaces/interfaces";
import { CopyToClipBoard } from "../components/CopyToClipBoard";
interface Props {
  data: StorageData[];
  app: string;
}

function GlyphSorcerySwitch({ data, app }: Props) {
  const [switchCount, setSwitchCount] = useState<number>(0);

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
    if (data.length > 0) {
      setSwitchCount(data.length - 1);
    } else {
      setSwitchCount(data.length);
    }
  }, [data.length]);

  return (
    <div className="flex  dark:text-gray-200 justify-between w-full">
      {data.length > 1 && (
        <img
          src="/assets/icons/arrowRight.svg"
          alt="arrowLeft"
          className="rotate-180 cursor-pointer mt-9 "
          data-type="left"
          onClick={(e) => handleSwitch(e)}
        />
      )}

      <div className="flex justify-evenly w-full  h-20">
        <div className="flex flex-col gap-2 w-1/2  text-center ">
          <div className="border-b ">Passwort</div>
          {data.length > 0 && (
            <CopyToClipBoard
              value={data[switchCount].value}
              type={"password"}
              clippy={false}
            >
              <div
                className="cursor-pointer py-3"
                key={data[switchCount].value}
              >
                {data[switchCount].value}
              </div>
            </CopyToClipBoard>
          )}
        </div>
        <div className="flex flex-col justify-between   w-1/2 text-center ">
          {app === "pictureMagic" ? (
            <>
              <div className="border-b">Bild</div>
              {data.length > 0 && (
                <img
                  src={data[switchCount].catch}
                  className=" mb-auto mx-auto pt-5 w-6  rounded hover:scale-[3] z-10 cursor-pointer "
                />
              )}
            </>
          ) : app === "runeTranslator" ? (
            <>
              <div className="border-b">Länge</div>
              {data.length > 0 && (
                <span className="mb-auto pt-5">{data[switchCount].catch}</span>
              )}
            </>
          ) : (
            <>
              <div className="border-b">Version</div>
              {data.length > 0 && (
                <span className="mb-auto pt-5">{data[switchCount].catch}</span>
              )}
            </>
          )}
        </div>
      </div>
      {data.length > 1 && (
        <img
          src="/assets/icons/arrowRight.svg"
          alt="arrowRight"
          data-type="right"
          onClick={(e) => handleSwitch(e)}
          className="cursor-pointer mt-9"
        />
      )}
    </div>
  );
}

export default GlyphSorcerySwitch;
