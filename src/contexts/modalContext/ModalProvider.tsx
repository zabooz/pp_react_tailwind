import { ReactNode, useState } from 'react';
import { ModalContext } from './modalContext';

interface ModalProviderProps {
    children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    return <ModalContext.Provider value={{ openModal, setOpenModal }}>{children}</ModalContext.Provider>;
};
