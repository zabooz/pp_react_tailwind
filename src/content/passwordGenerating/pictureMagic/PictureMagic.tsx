import { Card, Table, Button } from "flowbite-react";
import { Label, FileInput } from "flowbite-react";
import { useState,useRef, useEffect } from "react";
import { fileUpload } from "./pictureMagicScript";
import { pictureMagic } from "./pictureMagicScript";
import { storeAndSwitch } from "../../../utillities/storeAndSwitch";
import { StorageData } from "../../../interfaces/interfaces";
function PictureMagic() {

    const [pictureFile, setPictureFile] = useState<File>(new File([""], ""));
    const [pictureBase64, setPicturebase64] = useState<string>("");

    const previewImgRef = useRef<HTMLImageElement>(null);
    const tableRef = useRef(null );
    let storage:StorageData[] = [];

    useEffect(() => {
      storage  =
      JSON.parse(sessionStorage.getItem("pictureMagicArray") || "[]");
      console.log(storage)
      if(storage.length > 0){
        console.log(123)
        storeAndSwitch(storage, "pictureMagicArray", tableRef.current);
      }
    },[pictureBase64])


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
              fileUpload(e.target.files[0], setPicturebase64, previewImgRef);
              setPictureFile(e.target.files[0]);
            }
          }} />
        </Label>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell>Password</Table.HeadCell>
            <Table.HeadCell>Dein Bild</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y" ref={tableRef}>
          </Table.Body>
        </Table>
      </div>
      <Button onClick={() => pictureMagic(pictureFile, pictureBase64, tableRef.current,storage)}>Los geht's</Button>
    </Card>
  );
}

export default PictureMagic;
