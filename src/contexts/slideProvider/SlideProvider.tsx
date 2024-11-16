import { ReactNode, useCallback, useMemo, useState } from 'react';
import { SlideContext } from './slideContext';

interface SlideProviderProps {
    children: ReactNode;
}

export const SlideProvider = ({ children }: SlideProviderProps) => {
    const [startAnimation, setStartAnimation] = useState<boolean>(false);
    const [currentSite, setCurrentSite] = useState<number | null>(null);
    const directionFunc = useCallback(
        (nextSite: number) => {
            if (nextSite !== currentSite) {
                setStartAnimation(true);
                setCurrentSite(nextSite);
                setTimeout(() => {
                    setStartAnimation(false);
                }, 800);
            }
        },
        [currentSite], // Dependencies
    );
    const value = useMemo(
        () => ({
            startAnimation,
            setStartAnimation,
            directionFunc,
        }),
        [startAnimation, setStartAnimation, directionFunc], // Dependencies
    );
    return (
        <SlideContext.Provider value={value}>
            {children}
        </SlideContext.Provider>
    );
};
