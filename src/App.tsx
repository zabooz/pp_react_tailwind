import React, { Suspense } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContentBox from './components/ContentBox';
import Footer from './components/Footer';
import { NavbarCom } from './components/Navbar';
import deMessages from '../compiled-lang/de.json';
import enMessages from '../compiled-lang/en.json';
import QuickNav from './components/quickNav/QuickNav';
import { ClippyProvider } from './contexts/clippyContext/ClippyProvider';
import { useLanguageContext } from './contexts/languageContext/languageContext';
import LandingPage from './features/landingPage/LandingPage';
import PasswordGenerating from './features/passwordGenerating/PasswordGenerating';
import PasswordTesting from './features/passwordTesting/passwordTesting';
import UsernameGenerating from './features/usernameGenerating/UsernameGenerating';

const AboutUs = React.lazy(() => import('./features/aboutUs/AboutUs'));
const Project = React.lazy(() => import('./features/aboutUs/Project'));
const Impressum = React.lazy(() => import('./features/legalStuff/Impressum'));
const PrivacyPolicy = React.lazy(() => import('./features/legalStuff/PrivacyPolicy'));
const DashBoard = React.lazy(() => import('./features/DashBoard/DashBoard'));
import { PasswordTestingProvider } from './contexts/passwordTestingContext/PasswordTestingProvider';
import { SlideProvider } from './contexts/slideProvider/SlideProvider';
// import esMessages from '../compiled-lang/es.json';
// import frMessages from '../compiled-lang/fr.json';
// import laMessages from '../compiled-lang/la.json';

function App() {
    const { language } = useLanguageContext();
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
