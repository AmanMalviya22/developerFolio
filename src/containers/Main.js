import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Highlights from "./highlights/Highlights";
import CompanyStrip from "./companies/CompanyStrip";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const SPLASH_SEEN_KEY = "portfolioSplashSeen";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(
    () => {
      if (!splashScreen.enabled) {
        return false;
      }
      return !localStorage.getItem(SPLASH_SEEN_KEY);
    }
  );

  useEffect(() => {
    if (!splashScreen.enabled || !isShowingSplashAnimation) {
      return undefined;
    }

    const splashTimer = setTimeout(() => {
      setIsShowingSplashAnimation(false);
      localStorage.setItem(SPLASH_SEEN_KEY, "true");
    }, splashScreen.duration);

    return () => clearTimeout(splashTimer);
  }, [isShowingSplashAnimation]);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode page-shell" : "page-shell"}>
      <a href="#greeting" className="skip-link">
        Skip to content
      </a>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <div className="page-content">
            <Header />
            <Greeting />
            <Highlights />
            <CompanyStrip />
            <WorkExperience />
            <StartupProject />
            <Achievement />
            <Skills />
            <Education />
            <Contact />
            <Footer />
            <ScrollToTopButton />
          </div>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
