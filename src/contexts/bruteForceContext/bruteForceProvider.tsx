import { ReactNode, useState } from "react";
import { DrawerData } from "../../interfaces/interfaces";
import { BruteForceContext } from "./bruteForceContext";

export const BruteForceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [bruteForceThinkerInterval, setBruteThinkerInterval] = useState<number>(0);
    const [isBruteActive, setIsBruteActive] = useState<boolean>(false);
    const [bruteType, setBruteType] = useState<string>('library');
    const [password, setPassword] = useState<string>('');
    const [showResults, setShowResults] = useState<boolean>(false);
    const [openResultModal, setOpenResultModal] = useState<boolean>(false);
    const [bruteForceResults, setBruteForceResults] = useState<string[][]>([]);
    const [drawer, setDrawerShow] = useState<boolean>(false);
    const [drawerContent, setDrawerContent] = useState<DrawerData>({
        title: '',
        paragraphs: [],
    });
    return (
        <BruteForceContext.Provider
            value={{
                bruteForceThinkerInterval,
                setBruteThinkerInterval,
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
                setDrawerShow,
                drawerContent,
                setDrawerContent,
            }}
        >
            {children}
        </BruteForceContext.Provider>
    );
};
