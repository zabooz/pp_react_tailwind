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
import { startBruteForce, stopBruteForce } from "./mojoScripts";
import { thinker } from "../../../utillities/thinker";
import { useState, useEffect, useRef } from "react";
import { DrawerData } from "../../../interfaces/interfaces";
import TextCanvas from "../../../components/TextCanvas";
import ResultsModal from "./ResultsModal";

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

  const handleClickDrawer = (content: DrawerData) => {
    setDrawerShow(!drawer);
    setDrawerContent(content);
  };
  const handleCloseDrawer = () => {
    setDrawerShow(!drawer);
  };

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
  }, [isBruteActive]);

  const handleBruteForceStart = async () => {
    setIsBruteActive(true);
    await startBruteForce(
      bruteType,
      password,
      setIsBruteActive,
      bruteForceThinkerInterval,
      displayResult.current!,
      setShowResults,
      setBruteForceResults,
      bruteForceResults
    );
  };
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
        className="max-w-md"
        imgAlt="Mojo APP picture"
        imgSrc="src/assets/passwordTesting/mojo.png"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Mojo
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Wählen Sie einen Modus, um Ihr Passwort gegen Brute-Force-Angriffe zu
          testen. Im{" "}
          <span
            onClick={() => handleClickDrawer(bruteForceAttackSimple)}
            className="cursor-pointer font-bold"
          >
            einfachen Modus
          </span>{" "}
          werden alle möglichen Zeichenkombinationen durchprobiert. Der{" "}
          <span
            onClick={() => handleClickDrawer(bruteForceAttackList)}
            className="cursor-pointer font-bold"
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
          <div onClick={(e) => handleBruteTypeClick(e)}>
            <Label htmlFor="simple">Einfach</Label>
            <Radio
              id="simple"
              name="bruteForce"
              value={"Einfach"}
              data-type="simple"
            />
            <label htmlFor="list">Liste</label>
            <Radio
              id="list"
              name="bruteForce"
              value={"Liste"}
              data-type="library"
              defaultChecked
            />
          </div>
          <div className="flex">
            <div className="flex flex-row gap-3">
              <Button onClick={handleBruteForceStart} disabled={isBruteActive}>
                {isBruteActive ? (
                  <>
                    <Spinner aria-label="Spinner button example" size="sm" />
                    <span className="pl-3" id="spinner"></span>
                  </>
                ) : (
                  <span className="pl-3">Start</span>
                )}
              </Button>
              <Button disabled={false} onClick={handleBruteForceStop}>
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
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y" ref={displayResult}></Table.Body>
          </Table>
        </div>
        {showResults ? (
          <span onClick={() => setOpenResultModal(true)}>
            Hier Könnte ihre werbung stehen
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
