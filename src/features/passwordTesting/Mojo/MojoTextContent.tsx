import { useCallback } from 'react';
import { bruteForceAttackList, bruteForceAttackSimple } from '../../../data/drawer/drawerData';
import { DrawerData } from '../../../interfaces/interfaces';
import { FormattedMessage } from 'react-intl';
import { useBruteForceContext } from '../../../contexts/bruteForceContext/bruteForceContext';

function MojoTextContent() {
    const { setDrawerShow, setDrawerContent, drawer } = useBruteForceContext();
    const handleClickDrawer = useCallback(
        (content: DrawerData) => {
            setDrawerShow(!drawer);
            setDrawerContent(content);
        },
        [drawer, setDrawerShow, setDrawerContent],
    );

    return (
        <div className="font-normal text-gray-700 dark:text-gray-400">
            <p>
                <FormattedMessage
                    id="passwordTesting.mojo.textContent"
                    defaultMessage="Wähle einen Modus, um dein Passwort gegen Brute-Force-Angriffe zu testen. Im"
                />
            {' '}
                <span
                    onClick={(e) => {
                        e.stopPropagation();
                        handleClickDrawer(bruteForceAttackSimple);
                    }}
                    className="font-bold cursor-pointer text-[#0ea5e9] underline underline-offset-2"
                >
                    <FormattedMessage id="passwordTesting.mojo.textContent.simple" defaultMessage="einfachen Modus" />
                </span>{' '}
                <FormattedMessage
                    id="passwordTesting.mojo.textContent.simple.description"
                    defaultMessage="werden alle möglichen Zeichen durchprobiert. Der"
                />{' '}
                <span
                    onClick={(e) => {
                        e.stopPropagation();
                        handleClickDrawer(bruteForceAttackList);
                    }}
                    className="font-bold cursor-pointer text-[#0ea5e9] underline underline-offset-2"
                >
                    <FormattedMessage id="passwordTesting.mojo.textContent.list" defaultMessage="Listen-Modus" />
                </span>{' '}
                <FormattedMessage
                    id="passwordTesting.mojo.textContent.list.description"
                    defaultMessage="prüft bekannte Passwörter"
                />
            </p>

            <p className="my-4 hidden lg:block">
                <FormattedMessage
                    id="passwordTesting.mojo.textContent.description"
                    defaultMessage="Beide Modi helfen dir, die Stärke deines Passworts zu bewerten und potenzielle Schwachstellen aufzudecken"
                />
            </p>
            <p>
                <FormattedMessage
                    id="passwordTesting.mojo.textContent.recommendation"
                    defaultMessage="Wähle den Modus, der am besten zu deinen Sicherheitsanforderungen passt,um deine Passwörter effektiv zu schützen."
                />
            </p>
        </div>
    );
}

export default MojoTextContent;
