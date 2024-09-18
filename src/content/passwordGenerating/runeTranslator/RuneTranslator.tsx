import { Button, Card } from "flowbite-react";
import { leetspeakTextShortened } from "../../../data/drawer/drawerData";
import { useState, useEffect } from "react";
import { DrawerData } from "../../../interfaces/interfaces";
import { TextInput } from "flowbite-react";
import runeTranslator from "./runeTranslatorScript";
import { StorageData } from "../../../interfaces/interfaces";
import RuneTransatorSwitch from "./RuneTransatorSwitch";
interface Props {
  handleDrawerClick: (content: DrawerData) => void;
}

function RuneTranslator({ handleDrawerClick }: Props) {
  const [input, setInput] = useState("");
  const [runes, setRunes] = useState<StorageData[]>([]);
  const handleClick = async () => {
    const result = await runeTranslator(input);
    setRunes(result);
  };

  useEffect(() => {
    if (sessionStorage.getItem("runeTranslatorArray")) {
      setRunes(
        JSON.parse(sessionStorage.getItem("runeTranslatorArray") || "[]")
      );
    }
  }, []);

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
        <span className="text-gray-400 mt-2">*Maximal 12 Zeichen</span>
      </div>

      <RuneTransatorSwitch runes={runes} />

      <Button onClick={() => handleClick()}>Los geht's</Button>
    </Card>
  );
}

export default RuneTranslator;
