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
    (localStorage.getItem('locale') as Locale) ||
    (['de', 'en'].includes(navigator.language.split('-')[0]) 
       ? navigator.language.split('-')[0] : 'en');

localStorage.setItem('locale', locale);




createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <LanguageProvider initialLanguage={localStorage.getItem('locale') as Locale}>
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
