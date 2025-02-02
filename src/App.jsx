/**
 * @copyright 2025 Lemark Sumalpong
 * @license Apache-2.0
 */

import { ReactLenis, useLenis } from 'lenis/react'

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
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