import { useCallback } from "react";
import { useBruteForce } from "../../../contexts/Contexts";
import {
  bruteForceAttackList,
  bruteForceAttackSimple,
} from "../../../data/drawer/drawerData";
import { DrawerData } from "../../../interfaces/interfaces";

function MojoTextContent() {
  const { setDrawerShow, setDrawerContent, drawer } = useBruteForce();
  const handleClickDrawer = useCallback(
    (content: DrawerData) => {
      setDrawerShow(!drawer);
      setDrawerContent(content);
    },
    [drawer]
  );

  return (
    <div className="font-normal text-gray-700 dark:text-gray-400">
      <p>
        Wähle einen Modus, um dein Passwort gegen Brute-Force-Angriffe zu
        testen. Im{" "}
        <span
          onClick={(e) => {
            e.stopPropagation();
            handleClickDrawer(bruteForceAttackSimple);
          }}
          className="font-bold cursor-pointer text-[#0ea5e9] underline underline-offset-2"
        >
          einfachen Modus
        </span>{" "}
        werden alle möglichen Zeichenkombinationen durchprobiert. Der{" "}
        <span
          onClick={(e) => {
            e.stopPropagation();
            handleClickDrawer(bruteForceAttackList);
          }}
          className="font-bold cursor-pointer text-[#0ea5e9] underline underline-offset-2"
        >
          Listen-Modus
        </span>{" "}
        prüft bekannte Passwörter.
      </p>

      <p className="my-4 hidden lg:block">
        Beide Modi helfen dir, die Stärke deines Passworts zu bewerten und
        potenzielle Schwachstellen aufzudecken
      </p>
      <p>
        Wähle den Modus, der am besten zu deinen Sicherheitsanforderungen passt,
        um deine Passwörter effektiv zu schützen.
      </p>
    </div>
  );
}

export default MojoTextContent;
