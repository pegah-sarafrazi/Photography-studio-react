import React from "react";
import MobileMenu from "../Components/Mobilemenu";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import HeroSection from "../Components/HeroSection";
import InfoSection from "../Components/InfoSection";
import { homeAboutObj, homeAboutObj2 } from "../Components/InfoSection/Data";
import Services from "../Components/Services";
import "bootstrap/dist/css/bootstrap.css";
import Tabcontent from "../Components/Tablist/tabcontent";
import Footer from "../Components/Footer";
const Home = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <MobileMenu isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeAboutObj} />
      <Services />
      <InfoSection {...homeAboutObj2} />
      <Tabcontent />
      <Footer />
    </>
  );
};

export default Home;
