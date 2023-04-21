// import logo from './logo.svg';
import Header from './components/sections/header/Header';
import Navbar from './components/sections/navbar/Navbar';
import Footer from './components/sections/Footer';
import Contact from './components/sections/contact/Contact';
import About from './components/sections/about/About';
import Experience from './components/sections/Experience';
import FloatingNav from './components/sections/floatingNav/FloatingNav';
import Portfolio from './components/sections/portfolio/Portfolio';
import Services from './components/sections/service/Services';
import Skills from './components/sections/skills/Skills';
import { useRef, useState, useEffect } from 'react';

function App() {
  // For the floating nav, hiding and showing the nav on scroll
  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPosition, setSiteYPosition] = useState(0);
  console.log(mainRef.current.getBoundingClientRect());

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };
  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };

  return (
    <main ref={mainRef}>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
      <FloatingNav />
    </main>
  );
}

export default App;
