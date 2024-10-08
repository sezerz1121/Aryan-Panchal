import React from 'react';
import { Element } from 'react-scroll';
import HeroSection from './HeroSection';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Footer from './Footer';

function HomePageParent() {
  return (
    <>
      <Element name="home">
        <HeroSection />
      </Element>
      <Element name="about">
        <AboutMe />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
    </>
  );
}

export default HomePageParent;
