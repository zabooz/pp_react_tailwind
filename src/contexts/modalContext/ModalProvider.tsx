import { ReactNode, useMemo, useState } from 'react';
import { ModalContext } from './modalContext';

interface ModalProviderProps {
    children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const values = useMemo(() => ({ openModal, setOpenModal }), [openModal, setOpenModal]);

    return <ModalContext.Provider value={values}>{children}</ModalContext.Provider>;
};
