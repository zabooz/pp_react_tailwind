import { ZxcvbnResult } from "@zxcvbn-ts/core";
import { createContext, useState, ReactNode, useContext } from "react";
import { DrawerData, Points } from "../interfaces/interfaces";

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
};

export const useModalContext = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within an ModalProvider");
  }
  return context;
};

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
  startAnimation: boolean;
  setStartAnimation: (value: boolean) => void;
  directionFunc: (nextSite: number) => void;
}

const SlideContext = createContext<SlideContextProps | undefined>(undefined);

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
    <SlideContext.Provider
      value={{ startAnimation, setStartAnimation, directionFunc }}
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

interface BruteForceContextProps {
  bruteForceThinkerInterval: number;
  setBruteThinkerInterval: (value: number) => void;
  isBruteActive: boolean;
  setIsBruteActive: (value: boolean) => void;
  bruteType: string;
  setBruteType: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  showResults: boolean;
  setShowResults: (value: boolean) => void;
  openResultModal: boolean;
  setOpenResultModal: (value: boolean) => void;
  bruteForceResults: string[][];
  setBruteForceResults: (value: string[][]) => void;
  drawer: boolean;
  setDrawerShow: (value: boolean) => void;
  drawerContent: DrawerData;
  setDrawerContent: (value: DrawerData) => void;
}

// Erstelle den Kontext mit einem Standardwert (kann `null` oder initialisiert sein)
const BruteForceContext = createContext<BruteForceContextProps | undefined>(
  undefined
);

// Erstelle einen benutzerdefinierten Hook, um den Kontext zu verwenden
export const useBruteForce = () => {
  const context = useContext(BruteForceContext);
  if (!context) {
    throw new Error("useBruteForce must be used within a BruteForceProvider");
  }
  return context;
};

// Erstelle den Provider
export const BruteForceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [bruteForceThinkerInterval, setBruteThinkerInterval] =
    useState<number>(0);
  const [isBruteActive, setIsBruteActive] = useState<boolean>(false);
  const [bruteType, setBruteType] = useState<string>("library");
  const [password, setPassword] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);
  const [openResultModal, setOpenResultModal] = useState<boolean>(false);
  const [bruteForceResults, setBruteForceResults] = useState<string[][]>([]);
  const [drawer, setDrawerShow] = useState<boolean>(false);
  const [drawerContent, setDrawerContent] = useState<DrawerData>({
    title: "",
    paragraphs: [],
  });
  return (
    <BruteForceContext.Provider
      value={{
        bruteForceThinkerInterval,
        setBruteThinkerInterval,
        isBruteActive,
        setIsBruteActive,
        bruteType,
        setBruteType,
        password,
        setPassword,
        showResults,
        setShowResults,
        openResultModal,
        setOpenResultModal,
        bruteForceResults,
        setBruteForceResults,
        drawer,
        setDrawerShow,
        drawerContent,
        setDrawerContent,
      }}
    >
      {children}
    </BruteForceContext.Provider>
  );
};

type PasswordStrength = {
  result: number;
  points: Points;
};

type ExcaliburContextType = {
  showModalLink: boolean;
  setShowModalLink: (value: boolean) => void;
  modalLinkText: string;
  setModalLinkText: (value: string) => void;
  nerdStats: ZxcvbnResult | null;
  setNerdStats: React.Dispatch<React.SetStateAction<ZxcvbnResult | null>>;
  password: string;
  setPassword: (value: string) => void;
  passwordStrength: PasswordStrength | null;
  setPasswordStrength: (value: PasswordStrength | null) => void;
  isThinking: boolean;
  setIsThinking: (value: boolean) => void;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
};

// Erstellen des Excalibur-Kontexts
const ExcaliburContext = createContext<ExcaliburContextType | undefined>(
  undefined
);

// Erstellen des Excalibur-Anbieters
export const ExcaliburProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showModalLink, setShowModalLink] = useState(false);
  const [modalLinkText, setModalLinkText] = useState("");
  const [nerdStats, setNerdStats] = useState<ZxcvbnResult | null>(null);
  const [password, setPassword] = useState<string>("");
  const [passwordStrength, setPasswordStrength] =
    useState<PasswordStrength | null>(null);
  const [isThinking, setIsThinking] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <ExcaliburContext.Provider
      value={{
        showModalLink,
        setShowModalLink,
        modalLinkText,
        setModalLinkText,
        nerdStats,
        setNerdStats,
        password,
        setPassword,
        passwordStrength,
        setPasswordStrength,
        isThinking,
        setIsThinking,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </ExcaliburContext.Provider>
  );
};

export const useExcalibur = () => {
  const context = useContext(ExcaliburContext);
  if (!context) {
    throw new Error("useExcalibur must be used within an ExcaliburProvider");
  }
  return context;
};
