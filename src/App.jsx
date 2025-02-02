/**
 * @copyright 2025 Lemark Sumalpong
 * @license Apache-2.0
 */

import { ReactLenis, useLenis } from 'lenis/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger); // register the hook to avoid React version discrepancies 


import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  useGSAP (() => {
    const elements = gsap.utils.toArray('.reveal-up');
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger:{
        trigger: element,
        start: '-200 bottom',
        end:'bottom 80%',
        scrub: true
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out'
      })
    });
  });


  return (
   <ReactLenis root>
    <Header/>
    <main>
      <Hero/>
      <About />
      <Skills />
      <Project />
      <Contact />
    </main>
    <Footer />
  </ReactLenis>
  )
}

export default App;