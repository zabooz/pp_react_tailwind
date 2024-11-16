import { createContext, useContext } from "react";

interface SlideContextProps {
    startAnimation: boolean;
    setStartAnimation: (value: boolean) => void;
    directionFunc: (nextSite: number) => void;
}

export const SlideContext = createContext<SlideContextProps | undefined>(undefined);

export const useSlideContext = (): SlideContextProps => {
    const context = useContext(SlideContext);
    if (!context) {
        throw new Error('useSlideContext must be used within an SlideProvider');
    }
    return context;
};
