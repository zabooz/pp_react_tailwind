import { ReactNode, useMemo, useState } from 'react';
import { ClippyContext } from './clippyContext';

interface ClippyProviderProps {
    children: ReactNode;
}

export const ClippyProvider = ({ children }: ClippyProviderProps) => {
    const [passwords, setPasswords] = useState<string[]>([]);
    const [usernames, setUsernames] = useState<string[]>([]);
    const values = useMemo(() => ({ passwords, setPasswords, usernames, setUsernames }), [
        passwords,
        setPasswords,
        usernames,
        setUsernames,
    ]);
    return (
        <ClippyContext.Provider value={values}>
            {children}
        </ClippyContext.Provider>
    );
};
