import { createContext, useContext } from 'react';

export type Locale = 'en' | 'de' | 'fr' | 'es'  | 'la' ;

interface LanguageProps {
    language: Locale;
    setLanguage: (language: Locale) => void; 
}

export const LanguageContext = createContext<LanguageProps | undefined>(undefined);

export const useLanguageContext = (): LanguageProps => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguageContext must be used within a LanguageProvider');
    }
    return context;
};
