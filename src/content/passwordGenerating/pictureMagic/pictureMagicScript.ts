
let pictureMagicArray =
JSON.parse(sessionStorage.getItem("pictureMagicArray") || "[]");

import { pictureToString } from "./passwordToString";

export const fileUpload = async (
  file: File,
  picturePath: (arg0:any) => void,
  imgRef: React.RefObject<HTMLImageElement>
) => {
  const validTypes = ["image/jpeg", "image/png", "image/webp", "image/bmp"];

  if (file === undefined) {
    return;
  } else if (!validTypes.includes(file.type)) {
    alert("Only image files are allowed.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const base64 = e.target?.result; 
    picturePath(base64);

      imgRef.current?.classList.add("scale");
      setTimeout(() => {
        imgRef.current!.src = base64 as string;
    
      }, 1000);
      setTimeout(() => {
        imgRef.current?.classList.remove("scale");
      }, 2000);
  };

  reader.readAsDataURL(file);
};



export const pictureMagic = async (file: File,base64: string) => {
    
            const pwId = `picturePassword_${Math.floor(Math.random() * 1000)}`;
            const picId = `pictureMagic_${Math.floor(Math.random() * 1000)}`;

                const data = {
                  pwId: pwId,
                  catchId: picId,
                  catch: base64,
                  password: null,
                  app: "pictureMagic",
                };
                try {
                  const result = await pictureToString(file);

                  data.password = result;
                  pictureMagicArray.push(data);

                  storeAndSwitch(
                    pictureRowsArr,
                    pictureMagicArray,
                    "pictureMagicArray",
                    "statsBodyPicGen"
                  );
                  dataKrakenTakes({ col: "generated_passwords" });
                } catch (error) {
                  console.error(error);
                }

}


















