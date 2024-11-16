import { Table } from 'flowbite-react';
import { FormattedMessage } from 'react-intl';
import { useBruteForceContext } from '../../../contexts/bruteForceContext/bruteForceContext';

function MojoTable() {
    const { bruteForceResults } = useBruteForceContext();

    return (
        <Table className=" lg:hidden">
            <Table.Head>
                <Table.HeadCell>
                    <FormattedMessage id="passwordTesting.mojoTable.password" defaultMessage="Passwwort" />
                </Table.HeadCell>
                <Table.HeadCell>
                    <FormattedMessage id="passwordTesting.mojoTable.guesses" defaultMessage="Versuche" />
                </Table.HeadCell>
                <Table.HeadCell>
                    <FormattedMessage id="passwordTesting.mojoTable.time" defaultMessage="Zeit" />
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                {bruteForceResults.length > 0 && (
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={1}>
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
