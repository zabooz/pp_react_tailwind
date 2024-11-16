import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HeadProvider } from 'react-head';
import { Flowbite } from 'flowbite-react';
import App from './App.tsx';
import './index.css';
import { LoginProvider } from './contexts/Contexts.tsx';
import { LanguageProvider } from './contexts/languageContext/LanguageProvider.tsx';
import { Locale } from './contexts/languageContext/languageContext.ts';

const locale =
    navigator.language.split('-')[0] === 'de' || navigator.language.split('-')[0] === 'en'
        ? (navigator.language.split('-')[0] as Locale)
        : 'en';
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <LanguageProvider initialLanguage={locale}>
            <HeadProvider>
                <Flowbite>
                    <LoginProvider>
                        <App />
                    </LoginProvider>
                </Flowbite>
            </HeadProvider>
        </LanguageProvider>
    </StrictMode>,
);
