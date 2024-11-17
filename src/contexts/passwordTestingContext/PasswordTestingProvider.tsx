import { ReactNode, useState, useMemo } from 'react';
import { PasswordTestingContext } from './passwordTestingContext';

export const PasswordTestingProvider = ({ children }: { children: ReactNode }) => {
    const [extendetExcalibur, setExtendetExcalibur] = useState<boolean>(false);
    const [extendetMojo, setExtendetMojo] = useState<boolean>(false);
    const [onSite, setOnSite] = useState<boolean>(false);
    const [isThinking, setIsThinking] = useState<boolean>(false);

    // Use useMemo to memoize the context value
    const contextValue = useMemo(
        () => ({
            extendetExcalibur,
            setExtendetExcalibur,
            extendetMojo,
            setExtendetMojo,
            onSite,
            setOnSite,
            isThinking,
            setIsThinking,
        }),

        [
            extendetExcalibur,
            extendetMojo,
            setExtendetExcalibur,
            setExtendetMojo,
            onSite,
            setOnSite,
            isThinking,
            setIsThinking,
        ],
    ); // Only re-compute when dependencies change

    return <PasswordTestingContext.Provider value={contextValue}>{children}</PasswordTestingContext.Provider>;
};
