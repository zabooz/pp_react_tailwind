import { ReactNode, useState } from 'react';
import { PasswordTestingContext } from './passwordTestingContext';

export const PasswordTestingProvider = ({ children }: { children: ReactNode }) => {
    const [mojoGrow, setMojoGrow] = useState(false);
    const [excaliburGrow, setExcaliburGrow] = useState(false);
    const [colDelay, setColDelay] = useState(false);
    const [onSite, setOnSite] = useState(false);
    const [isThinking, setIsThinking] = useState<boolean>(false);

    const handleCardGrow = (value: boolean, animate: (value: boolean) => void) => {
        if (!onSite) {setOnSite(true);}
        animate(!value);
        setTimeout(() => {
            setColDelay(!colDelay);
        }, 2000);
    };

    return (
        <PasswordTestingContext.Provider
            value={{
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
            }}
        >
            {children}
        </PasswordTestingContext.Provider>
    );
};
