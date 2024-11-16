import { ReactNode, useMemo, useState } from 'react';
import { LoginContext } from './loginContext';

interface LoginProviderProps {
    children: ReactNode;
}

export const LoginProvider = ({ children }: LoginProviderProps) => {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const [change, setChange] = useState<boolean>(false);

    const values = useMemo(() => ({ loggedIn, setLoggedIn, change, setChange }), [loggedIn, change]);

    return (
        <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
    );
};
