
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {Suspense } from "react";

import {
  ClippyProvider,
  SlideProvider,
} from "./contexts/Contexts";


import { NavbarCom } from "./components/Navbar";
import Footer from "./components/Footer";
import ContentBox from "./components/ContentBox";
import QuickNav from "./components/quickNav/QuickNav";

import LandingPage from "./content/landingPage/LandingPage";
import PasswordGenerating from "./content/passwordGenerating/PasswordGenerating";
import PasswordTesting from "./content/passwordTesting/passwordTesting";
import UsernameGenerating from "./content/usernameGenerating/UsernameGenerating";

const AboutUs = React.lazy(() => import("./content/aboutUs/AboutUs"));
const Project = React.lazy(() => import("./content/aboutUs/Project"));
const Impressum = React.lazy(() => import("./content/legalStuff/Impressum"));
const PrivacyPolicy = React.lazy(
  () => import("./content/legalStuff/PrivacyPolicy")
);
const DashBoard = React.lazy(() => import("./content/DashBoard/DashBoard"));

function App() {

  return (
    <Router>
      <SlideProvider>
        <ClippyProvider>
        <NavbarCom />
          <QuickNav />
          <Suspense>
            <Routes>
              <Route path="/" element={<ContentBox />}>
              <Route index element={<LandingPage />} />
              <Route path="password-generating" element={<PasswordGenerating />}/>
              <Route path="password-testing" element={<PasswordTesting />} />
              <Route path="username-generating" element={<UsernameGenerating />}/>
              <Route path="dashBoard" element={<DashBoard />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="project" element={<Project />} />
              <Route path="impressum" element={<Impressum />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              </Route>
            </Routes>
          </Suspense>
        </ClippyProvider>
      </SlideProvider>
      <Footer />
    </Router>

  );
}

export default App;
