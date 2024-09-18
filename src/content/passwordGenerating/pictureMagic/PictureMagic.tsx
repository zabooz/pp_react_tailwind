import { Card, Button } from "flowbite-react";
import { Label, FileInput } from "flowbite-react";
import { useState,useRef, useEffect} from "react";
import { fileUpload } from "./pictureMagicScript";
import { pictureMagic } from "./pictureMagicScript";

import { StorageData } from "../../../interfaces/interfaces";
import PictureMagicSwitch from "./PictureMagicSwitch";
function PictureMagic() {

    const [pictureFile, setPictureFile] = useState<File>(new File([""], ""));
    const [pictureBase64, setPictureBase64] = useState<string>("");
    const [data, setdata] = useState<StorageData>({} as StorageData);
    const previewImgRef = useRef<HTMLImageElement>(null);
    const [storageData,setStorageData] = useState<StorageData[]>(JSON.parse(sessionStorage.getItem("storagePictureData") || "[]"));

  const handleClick = async() => {
    const result =    await  pictureMagic(pictureFile, pictureBase64);
    setdata(result);
    setStorageData([...storageData,result])
  }
  useEffect(() => {
    sessionStorage.setItem("storagePictureData", JSON.stringify(storageData))
  }, [data]);

  return (
    <Card
      className="max-w-sm"
      imgAlt="PictureMAgic picture"
      imgSrc="src\assets\passwordGenerating\pictureMagic.jpeg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Picture Magic
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Lade einfach ein Foto hoch, und unsere App verwandelt es in ein sicheres
        Passwort
      </p>

      <div className="flex w-full items-center justify-center">
        <Label
          htmlFor="dropzone-file"
          className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <img ref={previewImgRef}
              src="src/assets/passwordGenerating/upload.jpeg"
              alt="uploadPicture"
              className="aspect-square w-4/5 mx-auto "
            />
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
          </div>
          <FileInput id="dropzone-file" className="hidden" onChange={(e) => {
            if(e.target.files){
              fileUpload(e.target.files[0], setPictureBase64, previewImgRef);
              setPictureFile(e.target.files[0]);
            }
          }} />
        </Label>
      </div>
      <PictureMagicSwitch storageData={storageData}/>
      <Button onClick={() => handleClick()}>Los geht's</Button>
    </Card>
  );
}

export default PictureMagic;
