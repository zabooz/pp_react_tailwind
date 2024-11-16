import { ReactNode, useMemo, useState } from 'react';
import { LanguageContext, Locale } from './languageContext';

interface LanguageProviderProps {
    children: ReactNode;
    initialLanguage: Locale;
}

export const LanguageProvider = ({ children, initialLanguage }: LanguageProviderProps) => {
    const [language, setLanguage] = useState<Locale>(initialLanguage);
    localStorage.setItem('locale', language);
    const value = useMemo(() => ({ language, setLanguage }), [language, setLanguage]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
