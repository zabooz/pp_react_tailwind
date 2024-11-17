import { Table } from 'flowbite-react';
import { useBruteForceContext } from '../../../../contexts/bruteForceContext/bruteForceContext';

function MojoExtendetTable() {
    const { bruteForceResults } = useBruteForceContext();

    return (
        <div className="lg:h-[293px]  overflow-hidden border-b dark:border-slate-600 ">
            <Table striped className="border-collapse w-[99.5%]">
                <Table.Head className="rounded-none">
                    <Table.HeadCell>Passwort</Table.HeadCell>
                    <Table.HeadCell>Versuche</Table.HeadCell>
                    <Table.HeadCell>Modus</Table.HeadCell>
                    <Table.HeadCell>Zeit</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y  ">
                    {bruteForceResults.map((result) => (
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={result.join()}>
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
    );
}

export default MojoExtendetTable;
