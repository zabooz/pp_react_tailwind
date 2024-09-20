import { createContext, useState, ReactNode, useContext, useEffect } from "react";

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
  currentSlide: number;
  setCurrentSlide: (value: number) => void;
  nextSlide:number;
  setNextSlide: (value: number) => void;
  startAnimation:boolean;
  setStartAnimation: (value: boolean) => void;
  directionFunc: (value:number) => void;
}

const SlideContext = createContext<SlideContextProps | undefined>(
  undefined
);

interface SlideProviderProps {
  children: ReactNode;
}

export const SlideProvider = ({ children }: SlideProviderProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [nextSlide, setNextSlide] = useState<number>(0);
  const [startAnimation, setStartAnimation] = useState<boolean>(false);

  const directionFunc = (next:number) => {
    setCurrentSlide(next); 
    setStartAnimation(true); // Start the animation
  
    // Reset the animation after the duration
    setTimeout(() => {
      setStartAnimation(false); // Reset the animation state
    }, 800); // Assuming 1000ms is the animation duration
  };

  useEffect(() => {
    console.log("currentSlide", currentSlide,"nextSlide",nextSlide,"direction",startAnimation)
  }, [currentSlide,nextSlide,startAnimation]);
  return (
    <SlideContext.Provider
      value={{ currentSlide, setCurrentSlide, nextSlide, setNextSlide,startAnimation, setStartAnimation,directionFunc }}
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


