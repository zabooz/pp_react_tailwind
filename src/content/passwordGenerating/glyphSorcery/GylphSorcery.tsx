import { Card, Button,  Label, RangeSlider, Radio } from "flowbite-react";
import { useState} from "react";
import { glyphSorcery } from "./glyphSorceryScript";

import { StorageData } from "../../../interfaces/interfaces";
import GlyphSorcerySwitch from "./GlyphSorcerySwitch";

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
      className="max-w-sm"
      imgAlt="Glyph Sorcery picture"
      imgSrc="src\assets\passwordGenerating\glyphSorcery.jpeg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Glyph Sorcery
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Je länger dein Passwort ist, desto sicherer ist es. Mit Glyph Sourcery
        kannst du dir schnell und unkompliziert ein Passwort in deiner
        gewünschten Länge erstellen, die den Richtlinien für sichere Passwörter
        entsprechen.
      </p>
      <div>
        <Label htmlFor="glyphrange">Passwortlänge: {passwordLength}</Label>
        <RangeSlider id="glyphrange" name="glyphrange" min={2} max={14} 
        onInput={(e) => setPasswordLength(Number((e.target as HTMLInputElement).value))}
        />
        <div onClick={(e) => handleLanguageClick(e)}>
          <Label htmlFor="english">English</Label>
          <Radio id="english" name="language" value={"english"} defaultChecked/>
          <Label htmlFor="german">German</Label>
          <Radio id="german" name="language" value={"german"} />
        </div>
      </div>
      <GlyphSorcerySwitch data={data}/>
      <Button onClick={handeClick}>Los geht's</Button>
    </Card>
  );
}

export default GylphSorcery;
