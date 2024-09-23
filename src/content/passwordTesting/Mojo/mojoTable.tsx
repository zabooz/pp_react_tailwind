import { Table, Button } from "flowbite-react";
import MojoControl from "./MojoControl";
import { useBruteForce } from "../../../contexts/Contexts";
import { useSlideContext } from "../../../contexts/Contexts";

function mojoTable() {
  const { startAnimation } = useSlideContext();

  const {
    bruteForceResults,
    setOpenResultModal,
    showResults,
    setBruteForceResults,
  } = useBruteForce();
  console.log(startAnimation);
  return (
    <div
      className={`  absolute top-0 min-h-[715px]   right-0 w-[500px] hidden border-2  border-slate-700 dark:border-slate-600  ${
        startAnimation ? "animate-fade-out" : "animate-fade-in"
      }  lg:flex flex-col -z-10 cursor-default`}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="   lg:h-[293px]  overflow-y-hidden   flex flex-col ">
        <Table striped className="  ">
          <Table.Head>
            <Table.HeadCell>Passwort</Table.HeadCell>
            <Table.HeadCell>Versuche</Table.HeadCell>
            <Table.HeadCell>Modus</Table.HeadCell>
            <Table.HeadCell>Zeit</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y ">
            {bruteForceResults.map((result, index) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={index}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {result[0]}
                </Table.Cell>
                <Table.Cell>{result[1]}</Table.Cell>
                <Table.Cell>{result[2]}</Table.Cell>
                <Table.Cell>{result[3]}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      <div className="my-auto mx-5">
        <Button onClick={() => setBruteForceResults([])}>Löschen</Button>
        {showResults && (
          <span
            onClick={() => setOpenResultModal(true)}
            className="cursor-pointer font-bold text-gray-400  lg:hidden hover:text-[#0891b2d9] hover:underline underline-offset-4"
          >
            Siehe alle Ergebnisse!
          </span>
        )}
      </div>
      <MojoControl className="mb-12 px-5"></MojoControl>
    </div>
  );
}

export default mojoTable;
