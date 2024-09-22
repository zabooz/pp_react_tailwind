import { useState, useEffect, useRef, lazy, useCallback } from "react";
import {
  Button,
  Card,
  Radio,
  Table,
  TextInput,
  Label,
  Spinner,
} from "flowbite-react";

import {
  bruteForceAttackList,
  bruteForceAttackSimple,
} from "../../../data/drawer/drawerData";
import { DrawerData } from "../../../interfaces/interfaces";

const TextCanvas = lazy(() => import("../../../components/TextCanvas"));
const ResultsModal = lazy(() => import("./ResultsModal"));

import { startBruteForce, stopBruteForce } from "./mojoScripts";
import { thinker } from "../../../utillities/thinker";
import { useSlideContext } from "../../../contexts/Contexts";

function Mojo() {
  const [drawer, setDrawerShow] = useState<boolean>(false);
  const [drawerContent, setDrawerContent] = useState<DrawerData>({
    title: "",
    paragraphs: [],
  });
  const [isBruteActive, setIsBruteActive] = useState<boolean>(false);
  const [bruteForceThinkerInterval, setBruteThinkerInterval] =
    useState<number>(0);
  const [bruteType, setBruteType] = useState<string>("library");
  const [password, setPassword] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);
  const [openResultModal, setOpenResultModal] = useState<boolean>(false);
  const [bruteForceResults, setBruteForceResults] = useState<string[][]>([]);
  const displayResult = useRef<HTMLTableSectionElement | null>(null);

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

  const { startAnimation } = useSlideContext();

  useEffect(() => {
    if (isBruteActive) {
      const spinner = document.getElementById("spinner")!;
      spinner.textContent = "...";
      const intervalId = setInterval(() => {
        spinner!.textContent = thinker();
      }, 1500);
      setBruteThinkerInterval(intervalId);
    } else {
      clearInterval(bruteForceThinkerInterval);
    }

    return () => {
      clearInterval(bruteForceThinkerInterval);
    };
  }, [isBruteActive]);

  const handleBruteForceStart = useCallback(async () => {
    setIsBruteActive(true);
    await startBruteForce(
      bruteType,
      password,
      setIsBruteActive,
      displayResult.current!,
      setShowResults,
      setBruteForceResults,
      bruteForceResults
    );
  }, [isBruteActive]);

  const handleBruteForceStop = async () => {
    await stopBruteForce(setIsBruteActive, bruteForceThinkerInterval);
  };

  const handleBruteTypeClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLInputElement;
    if (target.tagName === "INPUT" && target.type === "radio") {
      setBruteType(target.dataset.type!);
    }
  };

  return (
    <>
      <Card
        className={`max-w-lg mx-auto border-4 ${
          startAnimation ? "animate-fade-out" : "animate-fade-in"
        } dark:hover:shadow-2xl transition-shadow duration-1000 `}  
        imgAlt="Mojo APP picture"
        imgSrc="/assets/passwordTesting/mojo.png"
      >
        <div className="relative">
          <div className="absolute  -top-[160px] flex items-center justify-center w-full">
            <h5 className="text-2xl font-bold tracking-tight text-center bg-slate-800  w-full bg-opacity-80  text-gray-200">
              Mojo
            </h5>
          </div>
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Wählen Sie einen Modus, um Ihr Passwort gegen Brute-Force-Angriffe zu
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
          prüft bekannte Passwörter
        </p>
        <div>
          <TextInput
            type="text"
            onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
          />
          <div
            onClick={(e) => handleBruteTypeClick(e)}
            className="w-full flex justify-evenly my-5"
          >
            <div className="my-2">
              <Label htmlFor="simple" className="!text-gray-400 me-2">
                Einfach
              </Label>
              <Radio
                id="simple"
                name="bruteForce"
                value={"Einfach"}
                data-type="simple"
              />
            </div>
            <div className="my-2">
              <label htmlFor="list" className="text-gray-400 me-2">
                Liste
              </label>
              <Radio
                id="list"
                name="bruteForce"
                value={"Liste"}
                data-type="library"
                defaultChecked
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-row gap-3 w-full justify-between my-3">
              <Button
                onClick={handleBruteForceStart}
                disabled={isBruteActive}
                className="w-full"
              >
                {isBruteActive ? (
                  <>
                    <Spinner aria-label="Spinner button example" size="sm" />
                    <span className="pl-3" id="spinner"></span>
                  </>
                ) : (
                  <span className="pl-3">Start</span>
                )}
              </Button>
              <Button
                disabled={false}
                onClick={handleBruteForceStop}
                className="w-full"
              >
                Stop
              </Button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell>Passwort</Table.HeadCell>
              <Table.HeadCell>Versuche</Table.HeadCell>
              <Table.HeadCell>Modus</Table.HeadCell>
              <Table.HeadCell>Zeit</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y" ref={displayResult}></Table.Body>
          </Table>
        </div>
        {showResults ? (
          <span
            onClick={() => setOpenResultModal(true)}
            className="cursor-pointer font-bold text-gray-400 hover:text-[#0891b2d9] hover:underline underline-offset-4"
          >
            Siehe alle Ergebnisse!
          </span>
        ) : null}
      </Card>
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
    </>
  );
}

export default Mojo;
