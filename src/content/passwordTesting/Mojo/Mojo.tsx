import { useState, lazy, useCallback } from "react";
import { Card } from "flowbite-react";
import "./mojo.css";
import {
  bruteForceAttackList,
  bruteForceAttackSimple,
} from "../../../data/drawer/drawerData";

const TextCanvas = lazy(() => import("../../../components/TextCanvas"));
const ResultsModal = lazy(() => import("./ResultsModal"));
import { useSlideContext } from "../../../contexts/Contexts";
import MojoControll from "./MojoControl";
import MojoTable from "./mojoTable";
import { useBruteForce } from "../../../contexts/Contexts";
import { DrawerData } from "../../../interfaces/interfaces";


interface Props {
  mojoGrow: boolean;
  handleCardGrow: (grow: boolean) => void;
  onSite: boolean;
}


function Mojo({ mojoGrow,handleCardGrow,onSite }: Props) {
  const { setOpenResultModal, bruteForceResults, openResultModal } =
    useBruteForce();
  const { startAnimation } = useSlideContext();
  const [drawer, setDrawerShow] = useState<boolean>(false);
  const [drawerContent, setDrawerContent] = useState<DrawerData>({
    title: "",
    paragraphs: [],
  });

  const handleClickDrawer = useCallback(
    (content: DrawerData) => {
      setDrawerShow(!drawer);
      setDrawerContent(content);
    },
    [drawer]
  );

  const handleCloseDrawer = () => {
    setDrawerShow(!drawer);
  };


  console.log(onSite,mojoGrow)

  return (
    <div className={`flex  ${ !onSite ? "" : mojoGrow ? "growBox" : "shrinkBox"}  min-h-[715px] transition-all rounded dark:border-slate-700 relative dark:hover:shadow-2xl  duration-1000 `}
    onClick={()=>{
      handleCardGrow(!mojoGrow)

    } }>
      <Card
        className={`max-w-lg ${
          startAnimation ? "animate-fade-out" : "animate-fade-in "
        }  border-2 border-r-1`}
        imgAlt="Mojo APP picture"
        imgSrc="/assets/passwordTesting/mojo.webp"
      >
        <div className="relative">
          <div className="absolute  -top-[160px] flex items-center justify-center w-full">
            <h5 className="text-2xl font-bold tracking-tight text-center bg-slate-800  w-full bg-opacity-80  text-gray-200">
              Mojo
            </h5>
          </div>
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Wähle  einen Modus, um dein Passwort gegen Brute-Force-Angriffe zu
          testen. Im{" "}
          <span
            onClick={() => handleClickDrawer(bruteForceAttackSimple)}
            className="font-bold cursor-pointer text-[#0ea5e9] underline underline-offset-2"
          >
            einfachen Modus
          </span>{" "}
          werden alle möglichen Zeichenkombinationen durchprobiert. Der{" "}
          <span
            onClick={() => handleClickDrawer(bruteForceAttackList)}
            className="font-bold cursor-pointer text-[#0ea5e9] underline underline-offset-2"
          >
            Listen-Modus
          </span>{" "}
          prüft bekannte Passwörter.
        </p>
        <MojoControll className="block lg:hidden" />
        <div className="hidden lg:block dark:text-gray-400">
          <p>Beide Modi helfen dir, die Stärke deines Passworts zu bewerten und potenzielle Schwachstellen aufzudecken</p>
          <p>Wähle den Modus, der am besten zu deinen Sicherheitsanforderungen passt, um deine Passwörter effektiv zu schützen.</p>
          <p className="mb-16">Denke daran, dass komplexe und einzigartige Passwörter der erste Schritt zur Verbesserung deiner Sicherheit sind.</p>


        </div>
      </Card>
      <MojoTable  />
      <TextCanvas
        handleClose={handleCloseDrawer}
        show={drawer}
        data={drawerContent}
      />
      <ResultsModal
        openModal={openResultModal}
        setOpenModal={setOpenResultModal}
        bruteForceResults={bruteForceResults}
      />
    </div>
  );
}

export default Mojo;
