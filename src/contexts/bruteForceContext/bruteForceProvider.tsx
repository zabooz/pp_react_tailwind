import { ReactNode, useMemo, useState } from 'react';
import { BruteForceContext } from './bruteForceContext';
import { DrawerData } from '../../interfaces/interfaces';

//eslint-disable-next-line
export const BruteForceProvider: React.FC<{ children: ReactNode }> = ({ children }: React.PropsWithChildren<{}>) => {
    const [bruteForceThinkerInterval, setBruteForceThinkerInterval] = useState<number>(0);
    const [isBruteActive, setIsBruteActive] = useState<boolean>(false);
    const [bruteType, setBruteType] = useState<string>('library');
    const [password, setPassword] = useState<string>('');
    const [showResults, setShowResults] = useState<boolean>(false);
    const [openResultModal, setOpenResultModal] = useState<boolean>(false);
    const [bruteForceResults, setBruteForceResults] = useState<string[][]>([]);
    const [drawer, setDrawer] = useState<boolean>(false);
    const [drawerContent, setDrawerContent] = useState<DrawerData>({
        title: '',
        paragraphs: [],
    });

    const values = useMemo(
        () => ({
            bruteForceThinkerInterval,
            setBruteForceThinkerInterval,
            isBruteActive,
            setIsBruteActive,
            bruteType,
            setBruteType,
            password,
            setPassword,
            showResults,
            setShowResults,
            openResultModal,
            setOpenResultModal,
            bruteForceResults,
            setBruteForceResults,
            drawer,
            setDrawer,
            drawerContent,
            setDrawerContent,
        }),
        [
            bruteForceThinkerInterval,
            isBruteActive,
            bruteType,
            password,
            showResults,
            openResultModal,
            bruteForceResults,
            drawer,
            drawerContent,
        ],
    );

    return <BruteForceContext.Provider value={values}>{children}</BruteForceContext.Provider>;
};
