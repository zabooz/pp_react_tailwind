import { Table } from "flowbite-react";
import { useBruteForce } from "../../../contexts/Contexts";

function MojoTable() {
  const { bruteForceResults } = useBruteForce();

  return (
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
  );
}

export default MojoTable;
