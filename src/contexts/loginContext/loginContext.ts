import { createContext, useContext } from 'react';
interface LoginContextProps {
    loggedIn: boolean;
    setLoggedIn: (value: boolean) => void;
    change: boolean;
    setChange: (value: boolean) => void;
}
export const LoginContext = createContext<LoginContextProps | undefined>(undefined);

export const useLoginContext = (): LoginContextProps => {
    const context = useContext(LoginContext);
    if (!context) {
        throw new Error('useLoginContext must be used within an LoginProvider');
    }
    return context;
};