import { ReactNode, useState } from 'react';
import { ClippyContext } from './clippyContext';

interface ClippyProviderProps {
    children: ReactNode;
}

export const ClippyProvider = ({ children }: ClippyProviderProps) => {
    const [passwords, setPasswords] = useState<string[]>([]);
    const [usernames, setUsernames] = useState<string[]>([]);

    return (
        <ClippyContext.Provider value={{ passwords, setPasswords, usernames, setUsernames }}>
            {children}
        </ClippyContext.Provider>
    );
};
