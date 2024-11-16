import { createContext, useContext } from 'react';

interface ModalContextProps {
    openModal: boolean;
    setOpenModal: (value: boolean) => void;
}

export const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModalContext = (): ModalContextProps => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModalContext must be used within an ModalProvider');
    }
    return context;
};