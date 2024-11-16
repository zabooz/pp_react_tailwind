import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';

import { ClippyProvider, PasswordTestingProvider, SlideProvider } from './contexts/Contexts';

import { NavbarCom } from './components/Navbar';
import Footer from './components/Footer';
import ContentBox from './components/ContentBox';
import QuickNav from './components/quickNav/QuickNav';

import LandingPage from './features/landingPage/LandingPage';
import PasswordGenerating from './features/passwordGenerating/PasswordGenerating';
import PasswordTesting from './features/passwordTesting/passwordTesting';
import UsernameGenerating from './features/usernameGenerating/UsernameGenerating';
import { IntlProvider } from 'react-intl';
import { useLanguageContext } from './contexts/languageContext/languageContext';

const AboutUs = React.lazy(() => import('./features/aboutUs/AboutUs'));
const Project = React.lazy(() => import('./features/aboutUs/Project'));
const Impressum = React.lazy(() => import('./features/legalStuff/Impressum'));
const PrivacyPolicy = React.lazy(() => import('./features/legalStuff/PrivacyPolicy'));
const DashBoard = React.lazy(() => import('./features/DashBoard/DashBoard'));
import deMessages from '../compiled-lang/de.json';
import enMessages from '../compiled-lang/en.json';
// import esMessages from '../compiled-lang/es.json';
// import frMessages from '../compiled-lang/fr.json';
// import laMessages from '../compiled-lang/la.json';


function App() {

    const {language} = useLanguageContext()
    const messages = {
        en: enMessages,
        de: deMessages,
        // es: esMessages,
        // fr: frMessages,
        // la: laMessages
    };

    return (
        <div className="min-h-screen">
            <IntlProvider messages={messages[language]} locale={language} defaultLocale="en">
                <Router>
                    <SlideProvider>
                        <ClippyProvider>
                            <NavbarCom />
                            <QuickNav />
                            <Suspense>
                                <Routes>
                                    <Route path="/" element={<ContentBox />}>
                                        <Route index element={<LandingPage />} />
                                        <Route path="password-generating" element={<PasswordGenerating />} />
                                        <Route
                                            path="password-testing"
                                            element={
                                                <PasswordTestingProvider>
                                                    <PasswordTesting />
                                                </PasswordTestingProvider>
                                            }
                                        />
                                        <Route path="username-generating" element={<UsernameGenerating />} />
                                        <Route path="dashBoard" element={<DashBoard />} />
                                        <Route path="about-us" element={<AboutUs />} />
                                        <Route path="project" element={<Project />} />
                                        <Route path="impressum" element={<Impressum />} />
                                        <Route path="privacy-policy" element={<PrivacyPolicy />} />
                                    </Route>
                                </Routes>
                            </Suspense>
                        </ClippyProvider>
                        <Footer />
                    </SlideProvider>
                </Router>
            </IntlProvider>
        </div>
    );
}

export default App;
