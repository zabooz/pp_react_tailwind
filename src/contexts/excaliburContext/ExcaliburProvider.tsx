import { ZxcvbnResult } from "@zxcvbn-ts/core";
import { useState } from "react";
import { PasswordStrength } from "../../interfaces/interfaces";
import { ExcaliburContext } from "./excaliburContext";

export const ExcaliburProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [showModalLink, setShowModalLink] = useState(false);
    const [modalLinkText, setModalLinkText] = useState('');
    const [nerdStats, setNerdStats] = useState<ZxcvbnResult | null>(null);
    const [password, setPassword] = useState<string>('');
    const [passwordStrength, setPasswordStrength] = useState<PasswordStrength | null>(null);

    const [openModal, setOpenModal] = useState<boolean>(false);
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
                openModal,
                setOpenModal,
            }}
        >
            {children}
        </ExcaliburContext.Provider>
    );
};
