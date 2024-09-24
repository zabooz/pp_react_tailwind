import { Card, Button } from "flowbite-react";

import { useState } from "react";

import { pictureMagic } from "./pictureMagicScript";
import Switcher from "../../../utillities/Switcher";
import { StorageData } from "../../../interfaces/interfaces";
import { useSlideContext } from "../../../contexts/Contexts";

import PictureHeader from "./PictureHeader";
import PictureTextContent from "./PictureTextContent";
import PictureControl from "./PictureControl";
function PictureMagic() {
  const [pictureFile, setPictureFile] = useState<File>(new File([""], ""));
  const [pictureBase64, setPictureBase64] = useState<string>("");
  const [storageData, setStorageData] = useState<StorageData[]>([]);
  const { startAnimation } = useSlideContext();

  const handleClick = async () => {
    const result = await pictureMagic(pictureFile, pictureBase64);
    console.log(result);
    setStorageData([...storageData, result]);
  };

  return (
    <Card
      className={`max-w-md mx-auto border-4 ${
        startAnimation ? "animate-fade-out" : "animate-fade-in"
      } dark:hover:shadow-2xl transition-shadow duration-1000  `}
      imgAlt="PictureMAgic picture"
      imgSrc="/assets/passwordGenerating/pictureMagic.webp"
    >
      <PictureHeader />
      <PictureTextContent />
      <PictureControl
        setPictureBase64={setPictureBase64}
        setPictureFile={setPictureFile}
      />
      <Switcher app="pictureMagic" data={storageData} />
      <Button className="mt-3 bg-[#ea6954]" onClick={() => handleClick()}>
        Los geht's
      </Button>
    </Card>
  );
}

export default PictureMagic;
