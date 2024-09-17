import { Button, Card, Table } from "flowbite-react";
import { leetspeakTextShortened } from "../../../data/drawer/drawerData";
import { useState, useRef,useEffect } from "react";
import { DrawerData } from "../../../interfaces/interfaces";
import { TextInput } from "flowbite-react";
import runeTranslator from "./runeTranslatorScript";
import { storeAndSwitch } from "../../../utillities/storeAndSwitch";
import { StorageData } from "../../../interfaces/interfaces";
interface Props {
  handleDrawerClick: (content: DrawerData) => void;
}

function RuneTranslator({ handleDrawerClick }: Props) {
  const [input, setInput] = useState("");
  const tableRef = useRef(null);
  const handleClick = async (e: HTMLElement | null) => {
    await runeTranslator(input, e);
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
      imgAlt="Rune Translator Picture"
      imgSrc="src/assets/passwordGenerating/runeTranslator.jpeg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Rune Translator
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <span
          className="font-bold cursor-pointer"
          onClick={() => handleDrawerClick(leetspeakTextShortened)}
        >
          Leetspeak
        </span>{" "}
        ersetzt die Buchstaben und Zeichen deine Passwortes mit anderen Zeichen,
        so dass du besser vor Angriffen geschützt bist. Probier aus, welche
        Variante - von einfach bis stark verändert - du bevorzugst.
      </p>

      <div className="flex flex-col">
        <TextInput type="text" onChange={(e) => setInput(e.target.value)} />
        <span>*Maximal 12 Zeichen</span>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell>Password</Table.HeadCell>
            <Table.HeadCell>Stärke</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body ref={tableRef} className="divide-y"></Table.Body>
        </Table>
      </div>

      <Button onClick={() => handleClick(tableRef.current)}>Los geht's</Button>
    </Card>
  );
}

export default RuneTranslator;
