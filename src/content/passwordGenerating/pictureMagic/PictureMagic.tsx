import { Card, Button } from "flowbite-react";
import { Label, FileInput } from "flowbite-react";
import { useState, useRef, useEffect } from "react";
import { fileUpload } from "./pictureMagicScript";
import { pictureMagic } from "./pictureMagicScript";

import { StorageData } from "../../../interfaces/interfaces";
import PictureMagicSwitch from "./PictureMagicSwitch";
function PictureMagic() {
  const [pictureFile, setPictureFile] = useState<File>(new File([""], ""));
  const [pictureBase64, setPictureBase64] = useState<string>("");
  const [data, setdata] = useState<StorageData>({} as StorageData);
  const previewImgRef = useRef<HTMLImageElement>(null);
  const [storageData, setStorageData] = useState<StorageData[]>(
    JSON.parse(sessionStorage.getItem("storagePictureData") || "[]")
  );

  const handleClick = async () => {
    const result = await pictureMagic(pictureFile, pictureBase64);
    setdata(result);
    setStorageData([...storageData, result]);
  };
  useEffect(() => {
    sessionStorage.setItem("storagePictureData", JSON.stringify(storageData));
  }, [data]);

  return (
    <Card
      className="max-w-md mx-auto border-4"
      imgAlt="PictureMAgic picture"
      imgSrc="src\assets\passwordGenerating\pictureMagic.jpeg"
    >
      <div className="relative">
        <div className="absolute  -top-[145px] flex items-center justify-center w-full">
          <h5 className="text-2xl font-bold tracking-tight text-center bg-slate-800  w-full bg-opacity-80   !text-gray-200">
            Picture Magic
          </h5>
        </div>
      </div>

      <div className="h-full">
        <p className="font-normal text-gray-700 dark:text-gray-400 mb-3 ">
          Lade einfach ein Foto hoch, und unsere App verwandelt es in ein
          sicheres Passwort
        </p>
        <div className="flex items-center mx-auto justify-center mb">
          <Label
            htmlFor="dropzone-file"
            className="flex w-[80%]  cursor-pointer flex-col rounded-lg border-2 border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 hover:shadow-2xl"
          >
            <div className="flex flex-col items-center  justify-center  ">
              <img
                ref={previewImgRef}
                src="src/assets/passwordGenerating/upload.jpeg"
                alt="uploadPicture"
                className="aspect-video  mx-auto rounded"
              />
            </div>
            <FileInput
              id="dropzone-file"
              className="hidden"
              onChange={(e) => {
                if (e.target.files) {
                  fileUpload(
                    e.target.files[0],
                    setPictureBase64,
                    previewImgRef
                  );
                  setPictureFile(e.target.files[0]);
                }
              }}
            />
          </Label>
        </div>
      </div>
      <PictureMagicSwitch storageData={storageData} />
      <Button className="mt-3" onClick={() => handleClick()}>
        Los geht's
      </Button>
    </Card>
  );
}

export default PictureMagic;
