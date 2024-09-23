import { useState } from "react";
import { Button, Card,TextInput } from "flowbite-react";
import { DrawerData } from "../../../interfaces/interfaces";
import { StorageData } from "../../../interfaces/interfaces";
import { useSlideContext } from "../../../contexts/Contexts";
import { leetspeakTextShortened } from "../../../data/drawer/drawerData";
import Switcher from "../../../utillities/Switcher";
import runeTranslator from "./runeTranslatorScript";
interface Props {
  handleDrawerClick: (content: DrawerData) => void;
}

function RuneTranslator({ handleDrawerClick }: Props) {
  const [input, setInput] = useState("");
  const [runes, setRunes] = useState<StorageData[]>([]);
  const handleClick = async () => {
    const result = await runeTranslator(input);
    setRunes([...result!]);
  };

  const { startAnimation } = useSlideContext();
  return (
    <Card
      className={`max-w-md mx-auto border-4 ${
        startAnimation ? "animate-fade-out" : "animate-fade-in"
      } dark:hover:shadow-2xl transition-shadow duration-1000  `}
      imgAlt="Rune Translator Picture"
      imgSrc="/assets/passwordGenerating/runeTranslator.jpeg"
    >
      <div className="relative">
        <div className="absolute  -top-[145px] flex items-center justify-center w-full">
          <h5 className="text-2xl font-bold tracking-tight text-center bg-slate-800  w-full bg-opacity-80   text-gray-200">
            Rune Translator
          </h5>
        </div>
      </div>
      <div className="h-full">
        <p className="font-normal text-gray-700 dark:text-gray-400 mb-8">
          <span
            className="font-bold cursor-pointer dark:text-[#0ea5e9] text-[#ea6954] underline underline-offset-2"
            onClick={() => handleDrawerClick(leetspeakTextShortened)}
          >
            Leetspeak
          </span>{" "}
          ersetzt die Buchstaben und Zeichen deine Passwortes mit anderen
          Zeichen, so dass du besser vor Angriffen geschützt bist. Probier aus,
          welche Variante - von einfach bis stark verändert - du bevorzugst.
        </p>

        <div className="flex flex-col">
          <TextInput type="text" onChange={(e) => setInput(e.target.value)} />
          <span className="dark:text-gray-400 mt-2">*Maximal 12 Zeichen</span>
        </div>
      </div>
      <Switcher app="runeTranslator" data={runes} />

      <Button onClick={() => handleClick()} className="mt-3 bg-[#ea6954]">
        Los geht's
      </Button>
    </Card>
  );
}

export default RuneTranslator;
