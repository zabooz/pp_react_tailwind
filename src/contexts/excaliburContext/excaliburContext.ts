import { ZxcvbnResult } from '@zxcvbn-ts/core';
import { createContext, useContext } from 'react';
import { PasswordStrength } from '../../interfaces/interfaces';

interface ExcaliburContextType {
    showModalLink: boolean;
    setShowModalLink: (value: boolean) => void;
    modalLinkText: string;
    setModalLinkText: (value: string) => void;
    nerdStats: ZxcvbnResult | null;
    setNerdStats: React.Dispatch<React.SetStateAction<ZxcvbnResult | null>>;
    password: string;
    setPassword: (value: string) => void;
    passwordStrength: PasswordStrength | null;
    setPasswordStrength: (value: PasswordStrength | null) => void;
    openModal: boolean;
    setOpenModal: (value: boolean) => void;
}

export const ExcaliburContext = createContext<ExcaliburContextType | undefined>(undefined);

export const useExcalibur = () => {
    const context = useContext(ExcaliburContext);
    if (!context) {
        throw new Error('useExcalibur must be used within an ExcaliburProvider');
    }
    return context;
};