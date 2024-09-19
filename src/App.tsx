import Head from "./components/Head";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { useLoginContext, ClippyProvider } from "./contexts/Contexts";
import { HeadProvider } from "react-head";
import { autoLogin } from "./backend/autoLogin";

import { NavbarCom } from "./components/Navbar";
import Footer from "./components/Footer";
import ContentBox from "./components/ContentBox";

import LandingPage from "./content/landingPage/LandingPage";
import PasswordGenerating from "./content/passwordGenerating/PasswordGenerating";
import PasswordTesting from "./content/passwordTesting/PasswordTesting";
import UsernameGenerating from "./content/usernameGenerating/UsernameGenerating";
import AboutUs from "./content/aboutUs/AboutUs";
import Project from "./content/aboutUs/Project";
import Impressum from "./content/legalStuff/Impressum";
import PrivacyPolicy from "./content/legalStuff/PrivacyPolicy";
import DashBoard from "./content/DashBoard/DashBoard";
import { Flowbite } from "flowbite-react";
import QuickNav from "./components/quickNav/QuickNav";

function App() {
  const { setLoggedIn } = useLoginContext();

  useEffect(() => {
    (async () => {
      const result = await autoLogin();
      if (result) setLoggedIn(true);
    })();
  }, []);
  console.log(235);
  return (
    <HeadProvider>
      <Flowbite>
        <Router>
          <Head />

          <NavbarCom />

          <ClippyProvider>
            <QuickNav />
            <Routes>
              <Route path="/" element={<ContentBox />}>
                <Route index element={<LandingPage />} /> {/* Die Startseite */}
                <Route
                  path="password-generating"
                  element={<PasswordGenerating />}
                />
                <Route path="password-testing" element={<PasswordTesting />} />
                <Route
                  path="username-generating"
                  element={<UsernameGenerating />}
                />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="project" element={<Project />} />
                <Route path="impressum" element={<Impressum />} />
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
                <Route path="dashBoard" element={<DashBoard />} />
              </Route>
            </Routes>
          </ClippyProvider>

          <Footer />
        </Router>
      </Flowbite>
    </HeadProvider>
  );
}

export default App;
