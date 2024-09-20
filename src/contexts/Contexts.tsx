import { createContext, useState, ReactNode, useContext} from "react";

// Definiere das Interface für den ModalContext
interface ModalContextProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}

export const ModalContext = createContext<ModalContextProps | undefined>(
  undefined
);

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <ModalContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModalContext = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within an ModalProvider");
  }
  return context;
}

interface LoginContextProps {
  loggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
  change: boolean;
  setChange: (value: boolean) => void;
}
export const LoginContext = createContext<LoginContextProps | undefined>(
  undefined
);

interface LoginProviderProps {
  children: ReactNode;
}

export const LoginProvider = ({ children }: LoginProviderProps) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [change, setChange] = useState<boolean>(false);
  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn, change, setChange }}>
      {children}
    </LoginContext.Provider>
  );
};
export const useLoginContext = (): LoginContextProps => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLoginContext must be used within an LoginProvider");
  }
  return context;
};
interface ClippyContextProps {
  passwords: string[];
  setPasswords: (value: string[]) => void;
  usernames: string[];
  setUsernames: (value: string[]) => void;
}

export const ClippyContext = createContext<ClippyContextProps | undefined>(
  undefined
);

interface ClippyProviderProps {
  children: ReactNode;
}

export const ClippyProvider = ({ children }: ClippyProviderProps) => {
  const [passwords, setPasswords] = useState<string[]>([]);
  const [usernames, setUsernames] = useState<string[]>([]);

  return (
    <ClippyContext.Provider
      value={{ passwords, setPasswords, usernames, setUsernames }}
    >
      {children}
    </ClippyContext.Provider>
  );
};

export const useClippyContext = (): ClippyContextProps => {
  const context = useContext(ClippyContext);
  if (!context) {
    throw new Error("useClippyContext must be used within an ClippyProvider");
  }
  return context;
};

interface SlideContextProps {

  startAnimation:boolean;
  setStartAnimation: (value: boolean) => void;
  directionFunc: (nextSite:number) => void;
}

const SlideContext = createContext<SlideContextProps | undefined>(
  undefined
);

interface SlideProviderProps {
  children: ReactNode;
}

export const SlideProvider = ({ children }: SlideProviderProps) => {

  const [startAnimation, setStartAnimation] = useState<boolean>(false);
  const [currentSite, setCurrentSite] = useState<number| null>(null);
  const directionFunc = (nextSite: number) => {

    if(nextSite !== currentSite){
      setStartAnimation(true); 
      setCurrentSite(nextSite);
      setTimeout(() => {
        setStartAnimation(false); 
      }, 800); 
    }

  };

  return (
    <SlideContext.Provider
      value={{ startAnimation, setStartAnimation,directionFunc }}
    >
      {children}
    </SlideContext.Provider>
  );
};


export const useSlideContext = (): SlideContextProps => {
  const context = useContext(SlideContext);
  if (!context) {
    throw new Error("useSlideContext must be used within an SlideProvider");
  }
  return context;
};


