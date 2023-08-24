import React from "react";
import hero from "../assets/hero.jpg";
import Nave from "./Nave";
import Social from "./Social";
import Something from "./Something";
import Title from "./Title";
import Contact from "./Contact";
import HeroButtom from "./HeroButtom";
import Section from "./Section";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div className="hero">
      <img className="banner" src={hero} />
      <Nave />
      <Social />
      <Something />
      <Title />
      <Contact />
      <HeroButtom />
      <Section />
      {/* <Footer /> */}
    </div>
  );
};

export default Hero;
