import { leetspeakTextShortened } from "../../../data/drawer/drawerData";
import { DrawerData } from "../../../interfaces/interfaces";

interface Props {
  handleDrawerClick: (content: DrawerData) => void;
}

function RuneText({ handleDrawerClick }: Props) {
  return (
    <p className="font-normal text-gray-700 dark:text-gray-400 mb-8">
      <span
        className="font-bold cursor-pointer dark:text-[#0ea5e9] text-[#ea6954] underline underline-offset-2"
        onClick={() => handleDrawerClick(leetspeakTextShortened)}
      >
        Leetspeak
      </span>{" "}
      ersetzt die Buchstaben und Zeichen deine Passwortes mit anderen Zeichen,
      so dass du besser vor Angriffen geschützt bist. Probier aus, welche
      Variante - von einfach bis stark verändert - du bevorzugst.
    </p>
  );
}

export default RuneText;
