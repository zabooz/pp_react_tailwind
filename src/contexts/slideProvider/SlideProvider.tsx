import { ReactNode, useState } from 'react';
import { SlideContext } from './slideContext';

interface SlideProviderProps {
    children: ReactNode;
}

export const SlideProvider = ({ children }: SlideProviderProps) => {
    const [startAnimation, setStartAnimation] = useState<boolean>(false);
    const [currentSite, setCurrentSite] = useState<number | null>(null);
    const directionFunc = (nextSite: number) => {
        if (nextSite !== currentSite) {
            setStartAnimation(true);
            setCurrentSite(nextSite);
            setTimeout(() => {
                setStartAnimation(false);
            }, 800);
        }
    };

    return (
        <SlideContext.Provider value={{ startAnimation, setStartAnimation, directionFunc }}>
            {children}
        </SlideContext.Provider>
    );
};
