import { useRef } from "react";
import { Label, FileInput } from "flowbite-react";

import { fileUpload } from "./scripts/pictureMagicScript";

interface Props {
  setPictureBase64: (base64: string) => void;
  setPictureFile: (file: File) => void;
}

function PictureControl({ setPictureBase64, setPictureFile }: Props) {
  const previewImgRef = useRef<HTMLImageElement>(null);

  return (
    <div className="flex items-center mx-auto justify-center mb">
      <Label
        htmlFor="dropzone-file"
        className="flex w-[80%]  cursor-pointer flex-col rounded-lg border-2 border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 hover:shadow-2xl"
      >
        <div className="flex flex-col items-center  justify-center  ">
          <img
            ref={previewImgRef}
            src="/assets/passwordGenerating/upload.webp"
            alt="uploadPicture"
            className="aspect-video mx-auto rounded"
          />
        </div>
        <FileInput
          id="dropzone-file"
          className="hidden"
          onChange={(e) => {
            if (e.target.files) {
              fileUpload(e.target.files[0], setPictureBase64, previewImgRef);
              setPictureFile(e.target.files[0]);
            }
          }}
        />
      </Label>
    </div>
  );
}

export default PictureControl;
