import { createContext, useContext } from 'react';

interface PasswordTestingContextType {
    onSite: boolean;
    setOnSite: (value: boolean) => void;
    isThinking: boolean;
    setIsThinking: (value: boolean) => void;
    extendetExcalibur: boolean;
    setExtendetExcalibur: (value: boolean) => void;
    extendetMojo: boolean;
    setExtendetMojo: (value: boolean) => void;
}

export const PasswordTestingContext = createContext<PasswordTestingContextType | undefined>(undefined);

export const usePasswordTesting = () => {
    const context = useContext(PasswordTestingContext);
    if (!context) {
        throw new Error('usePasswordTesting must be used within a PasswordTestingProvider');
    }
    return context;
};
