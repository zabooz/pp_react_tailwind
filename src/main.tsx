import { Flowbite } from 'flowbite-react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HeadProvider } from 'react-head';
import App from './App.tsx';
import './index.css';
import { Locale } from '@/contexts/languageContext/languageContext.ts';
import { LanguageProvider } from '@/contexts/languageContext/LanguageProvider.tsx';
import { UserProvider } from './contexts/userContext/UserProvider.tsx';

const locale =
    (localStorage.getItem('locale') as Locale) ||
    (['de', 'en'].includes(navigator.language.split('-')[0]) ? navigator.language.split('-')[0] : 'en');

localStorage.setItem('locale', locale);
console.log('Locale:', locale);
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <LanguageProvider initialLanguage={localStorage.getItem('locale') as Locale}>
            <HeadProvider>
                <Flowbite>
                    <UserProvider>
                        <App />
                    </UserProvider>
                </Flowbite>
            </HeadProvider>
        </LanguageProvider>
    </StrictMode>,
);
