import { createContext, useContext } from 'react';
import { DrawerData } from '../../interfaces/interfaces';

interface BruteForceContextProps {
    bruteForceThinkerInterval: number;
    setBruteThinkerInterval: (value: number) => void;
    isBruteActive: boolean;
    setIsBruteActive: (value: boolean) => void;
    bruteType: string;
    setBruteType: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
    showResults: boolean;
    setShowResults: (value: boolean) => void;
    openResultModal: boolean;
    setOpenResultModal: (value: boolean) => void;
    bruteForceResults: string[][];
    setBruteForceResults: (value: string[][]) => void;
    drawer: boolean;
    setDrawerShow: (value: boolean) => void;
    drawerContent: DrawerData;
    setDrawerContent: (value: DrawerData) => void;
}
export const BruteForceContext = createContext<BruteForceContextProps | undefined>(undefined);


export const useBruteForceContext = () => {
    const context = useContext(BruteForceContext);
    if (!context) {
        throw new Error('useBruteForce must be used within a BruteForceProvider');
    }
    return context;
};
