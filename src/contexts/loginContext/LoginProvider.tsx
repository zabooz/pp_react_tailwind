import { ReactNode, useState } from 'react';
import { LoginContext } from './loginContext';

interface LoginProviderProps {
    children: ReactNode;
}

export const LoginProvider = ({ children }: LoginProviderProps) => {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const [change, setChange] = useState<boolean>(false);
    return (
        <LoginContext.Provider value={{ loggedIn, setLoggedIn, change, setChange }}>{children}</LoginContext.Provider>
    );
};
