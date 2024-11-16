import { ReactNode, useState, useMemo, useCallback } from 'react';
import { PasswordTestingContext } from './passwordTestingContext';

export const PasswordTestingProvider = ({ children }: { children: ReactNode }) => {
    const [mojoGrow, setMojoGrow] = useState(false);
    const [excaliburGrow, setExcaliburGrow] = useState(false);
    const [colDelay, setColDelay] = useState(false);
    const [onSite, setOnSite] = useState(false);
    const [isThinking, setIsThinking] = useState<boolean>(false);

const handleCardGrow = useCallback(
    (value: boolean, animate: (value: boolean) => void) => {
        if (!onSite) {
            setOnSite(true);
        }
        animate(!value);
        setTimeout(() => {
            setColDelay(!colDelay);
        }, 2000);
    },
    [onSite, colDelay], // Dependencies for the callback function
);

    // Use useMemo to memoize the context value
    const contextValue = useMemo(
        () => ({
            mojoGrow,
            excaliburGrow,
            colDelay,
            onSite,
            setMojoGrow,
            setExcaliburGrow,
            setColDelay,
            setOnSite,
            isThinking,
            setIsThinking,
            handleCardGrow,
        }),
        [mojoGrow, excaliburGrow, colDelay, onSite, isThinking,handleCardGrow],
    ); // Only re-compute when dependencies change

    return <PasswordTestingContext.Provider value={contextValue}>{children}</PasswordTestingContext.Provider>;
};
