/**
 * @copyright 2025 Lemark Sumalpong
 * @license Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Reviews from "./components/Reviews";

const App = () => {
  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <About />
      <Skills />
      <Project />
      <Reviews />
    </main>
    
    </>
  )
}

export default App;