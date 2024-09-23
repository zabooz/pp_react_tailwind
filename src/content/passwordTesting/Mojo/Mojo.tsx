import { useState, lazy, useCallback } from "react";
import { Button, Card, Table } from "flowbite-react";

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

function Mojo({ mojoGrow, handleCardGrow, onSite }: Props) {
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

  return (
    <div
      className={`flex  ${
        !onSite ? "" : mojoGrow ? "lg:growBox" : "lg:shrinkBox"
      }  min-h-[670px] transition-all rounded dark:border-slate-700 max-w-[508px] lg:max-w-[1003px] relative dark:hover:shadow-2xl cursor-default duration-1000 `}
    >
      <Card
        className={`max-w-lg ${
          startAnimation ? "animate-fade-out" : "animate-fade-in "
        }  border-2 border-r-1`}
        imgAlt="Mojo APP picture"
        imgSrc="/assets/passwordTesting/mojo.webp"
      >
        <div className="relative -mt-8">
          <div className="absolute  -top-[130px] flex items-center justify-center w-full">
            <h5 className="text-2xl font-bold tracking-tight text-center bg-slate-800  w-full bg-opacity-80  text-gray-200">
              Mojo
            </h5>
          </div>
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400">
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
        <Table className=" lg:hidden">
          <Table.Head>
            <Table.HeadCell>Passwword</Table.HeadCell>
            <Table.HeadCell>Versuche</Table.HeadCell>
            <Table.HeadCell>Zeit</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {bruteForceResults.length > 0 && (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={1}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {bruteForceResults[0][0]}
                </Table.Cell>
                <Table.Cell>{bruteForceResults[0][1]}</Table.Cell>
                <Table.Cell>{bruteForceResults[0][3]}</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
        <span
          onClick={() => setOpenResultModal(true)}
          className="cursor-pointer font-bold text-gray-400 underline lg:hidden  hover:text-[#0891b2d9]  underline-offset-4"
        >
          Siehe alle Ergebnisse!
        </span>
        <MojoControll className="block lg:hidden" />
        <div className="hidden lg:block dark:text-gray-400">
          <p>
            Beide Modi helfen dir, die Stärke deines Passworts zu bewerten und
            potenzielle Schwachstellen aufzudecken
          </p>
          <p>
            Wähle den Modus, der am besten zu deinen Sicherheitsanforderungen
            passt, um deine Passwörter effektiv zu schützen.
          </p>

          <Button
            className="w-2/4 mx-auto mt-12"
            onClick={() => {
              handleCardGrow(!mojoGrow);
            }}
          >
            {mojoGrow ? "Verkleinern" : "Vergrössern"}
          </Button>
        </div>
      </Card>
      <MojoTable />
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
