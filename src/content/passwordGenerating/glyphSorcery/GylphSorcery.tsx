import { Card, Button,  Label, RangeSlider, Radio } from "flowbite-react";
import { useState} from "react";
import { glyphSorcery } from "./glyphSorceryScript";

import { StorageData } from "../../../interfaces/interfaces";
import GlyphSorcerySwitch from "./GlyphSorcerySwitch";
import { customRange } from "../../../themes/themes";


function GylphSorcery() {

  const storedData = JSON.parse(sessionStorage.getItem("storedGlyphArray") || "[]");


  const [passwordLength, setPasswordLength] = useState(0);
  const [language, setLanguage] = useState("english");
  const [data, setData] = useState<StorageData[]>(storedData);


  const handleLanguageClick = (event: React.MouseEvent<HTMLDivElement>) => {
      const target = event.target as HTMLInputElement;
      if (target.tagName === "INPUT" && target.type === "radio") {
        setLanguage(target.value);
      }
    };

    const handeClick = async () => {
      const data = await glyphSorcery(language, passwordLength);
      
      setData(data);
    };
    

  return (
    <Card
      className="max-w-md mx-auto border-4 "
      imgAlt="Glyph Sorcery picture"
      imgSrc="src\assets\passwordGenerating\glyphSorcery.jpeg"
    >
      <div className="relative">
        <div className="absolute   -top-[145px] flex items-center justify-center w-full">
          <h5 className="text-2xl font-bold tracking-tight text-center bg-slate-800  w-full bg-opacity-80   text-gray-200">
            Glyph  Sorcery
          </h5>
        </div>
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Je länger dein Passwort ist, desto sicherer ist es. Mit Glyph Sourcery
        kannst du dir schnell und unkompliziert ein Passwort in deiner
        gewünschten Länge erstellen, die den Richtlinien für sichere Passwörter
        entsprechen.
      </p>
      < div className="h-full">
        <Label htmlFor="glyphrange">Passwortlänge: {passwordLength ? passwordLength : 6}</Label>
        <RangeSlider
          id="glyphrange"
          name="glyphrange"
          min={2}
          max={14}
          defaultValue={6}
          onInput={(e) =>
            setPasswordLength(Number((e.target as HTMLInputElement).value))
          }
          theme={customRange}
        />
        <div onClick={(e) => handleLanguageClick(e)} className="w-full flex justify-evenly mt-3">
          <div >
            <Label htmlFor="english">English</Label>
            <Radio
              id="english"
              name="language"
              value={"english"}
              defaultChecked
              className="ms-3"
            />
          </div>
          <div >
            <Label htmlFor="german">German</Label>
            <Radio id="german" name="language" value={"german"} className="ms-3"/>
          </div>
        </div>
      </div>
      <GlyphSorcerySwitch data={data} />
      <Button onClick={handeClick} className="mt-3">Los geht's</Button>
    </Card>
  );
}

export default GylphSorcery;
