import { createContext} from "react";

// Definiere das Interface für den ModalContext
interface ModalContextProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}

export const ModalContext = createContext<ModalContextProps>(
  {} as ModalContextProps
);

interface LoginContextProps {
  loggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
  change: boolean;
  setChange: (value: boolean) => void;
}
export const LoginContext = createContext<LoginContextProps>(
  {} as LoginContextProps
);

interface ClippyContextProps {
  passwords: string[];
  setPasswords: (value: string[]) => void;
  usernames: string[];
  setUsernames: (value: string[]) => void;
}

// Erstelle den Context mit einem Default-Wert
export const ClippyContext = createContext<ClippyContextProps>(
{} as ClippyContextProps  
);

