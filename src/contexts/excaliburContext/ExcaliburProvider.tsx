import { ZxcvbnResult } from '@zxcvbn-ts/core';
import React, { useMemo, useState } from 'react';
import { ExcaliburContext } from './excaliburContext';
import { PasswordStrength } from '../../interfaces/interfaces';
//eslint-disable-next-line
export const ExcaliburProvider: React.FC<{ children: React.ReactNode }> = ({ children }:React.PropsWithChildren<{}>) => {
    const [showModalLink, setShowModalLink] = useState(false);
    const [modalLinkText, setModalLinkText] = useState('');
    const [nerdStats, setNerdStats] = useState<ZxcvbnResult | null>(null);
    const [password, setPassword] = useState<string>('');
    const [passwordStrength, setPasswordStrength] = useState<PasswordStrength | null>(null);

    const [openModal, setOpenModal] = useState<boolean>(false);

    const values = useMemo(() => ({
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
    }), [
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
    ]);


    return (
        <ExcaliburContext.Provider
            value={values}
        >
            {children}
        </ExcaliburContext.Provider>
    );
};
