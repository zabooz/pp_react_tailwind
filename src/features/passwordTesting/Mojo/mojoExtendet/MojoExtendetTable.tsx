import { Table } from 'flowbite-react'
import { useBruteForce } from '../../../../contexts/Contexts';


function MojoExtendetTable() {

    const { bruteForceResults } = useBruteForce();

  return (
    <div className="   lg:h-[293px]  overflow-y-hidden  border-b dark:border-slate-600 flex flex-col ">
    <Table striped>
      <Table.Head>
        <Table.HeadCell>Passwort</Table.HeadCell>
        <Table.HeadCell>Versuche</Table.HeadCell>
        <Table.HeadCell>Modus</Table.HeadCell>
        <Table.HeadCell>Zeit</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y  ">
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
  )
}

export default MojoExtendetTable
