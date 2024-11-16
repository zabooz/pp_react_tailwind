import { createContext, useContext } from 'react';

interface ClippyContextProps {
    passwords: string[];
    setPasswords: (value: string[]) => void;
    usernames: string[];
    setUsernames: (value: string[]) => void;
}

export const ClippyContext = createContext<ClippyContextProps | undefined>(undefined);

export const useClippyContext = (): ClippyContextProps => {
    const context = useContext(ClippyContext);
    if (!context) {
        throw new Error('useClippyContext must be used within an ClippyProvider');
    }
    return context;
};