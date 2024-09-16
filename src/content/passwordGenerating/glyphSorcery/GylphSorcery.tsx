import { Card, Button, Table, Label, RangeSlider, Radio } from "flowbite-react";
import { useState,useRef,useEffect } from "react";
import { glyphSorcery } from "./glyphSorceryScript";
import { storeAndSwitch } from "../../../utillities/storeAndSwitch";
import { StorageData } from "../../../interfaces/interfaces";
function GylphSorcery() {

  const [passwordLength, setPasswordLength] = useState(0);
  const [language, setLanguage] = useState("english");
  const tableRef = useRef<any>(null);
    const handleLanguageClick = (event: React.MouseEvent<HTMLDivElement>) => {
      const target = event.target as HTMLInputElement;
      if (target.tagName === "INPUT" && target.type === "radio") {
        setLanguage(target.value);
      }
    };
    useEffect(() => {
      const storage: StorageData[] =
      JSON.parse(sessionStorage.getItem("storedGlyphArray") || "[]");
      if(storage.length > 0){
        storeAndSwitch(storage, "storedGlyphArray", tableRef.current);
      }
    },[])
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
        <RangeSlider id="glyphrange" name="glyphrange" min={0} max={20} 
        onInput={(e) => setPasswordLength(Number((e.target as HTMLInputElement).value))}
        />
        <div onClick={(e) => handleLanguageClick(e)}>
          <Label htmlFor="english">English</Label>
          <Radio id="english" name="language" value={"english"} defaultChecked/>
          <Label htmlFor="german">German</Label>
          <Radio id="german" name="language" value={"german"} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell>Password</Table.HeadCell>
            <Table.HeadCell>Länge</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y" ref={tableRef}>

          </Table.Body>
        </Table>
      </div>
      <Button onClick={() => glyphSorcery(language, passwordLength, tableRef.current)}>Los geht's</Button>
    </Card>
  );
}

export default GylphSorcery;
