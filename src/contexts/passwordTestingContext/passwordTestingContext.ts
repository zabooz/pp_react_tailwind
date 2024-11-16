import { createContext, useContext } from "react";

interface PasswordTestingContextType {
    mojoGrow: boolean;
    excaliburGrow: boolean;
    colDelay: boolean;
    onSite: boolean;
    setMojoGrow: (value: boolean) => void;
    setExcaliburGrow: (value: boolean) => void;
    setColDelay: (value: boolean) => void;
    setOnSite: (value: boolean) => void;
    handleCardGrow: (value: boolean, useState: (value: boolean) => void) => void;
    isThinking: boolean;
    setIsThinking: (value: boolean) => void;
}

export const PasswordTestingContext = createContext<PasswordTestingContextType | undefined>(undefined);


export const usePasswordTesting = () => {
    const context = useContext(PasswordTestingContext);
    if (!context) {
        throw new Error('usePasswordTesting must be used within a PasswordTestingProvider');
    }
    return context;
};
