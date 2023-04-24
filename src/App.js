// import logo from './logo.svg';
import Header from './components/sections/header/Header';
import Navbar from './components/sections/navbar/Navbar';
import Footer from './components/sections/Footer';
import Contact from './components/sections/contact/Contact';
import About from './components/sections/about/About';
import FloatingNav from './components/sections/floatingNav/FloatingNav';
import Portfolio from './components/sections/portfolio/Portfolio';
import Services from './components/sections/service/Services';
import Skills from './components/sections/skills/Skills';
import { useRef, useState, useEffect } from 'react';

function App() {
  // For the floating nav, hiding and showing the nav on scroll
  //set the main section as a ref
  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPosition, setSiteYPosition] = useState(0);

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };
  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };

  // Check if the floating nav should be shown or hidden
  const floatingNavToggleHandler = () => {
    //check if user is scrolling up or downn at least 20px
    if (
      siteYPosition < mainRef?.current?.getBoundingClientRect().y - 20 ||
      siteYPosition > mainRef?.current?.getBoundingClientRect().y + 20
    ) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }
    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  };

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

    // stop interval
    return () => clearInterval(checkYPosition);
  }, [siteYPosition]);

  return (
    <main ref={mainRef}>
      <Navbar />
      <Header />
      <About />
      {/* <Services /> */}
      <Portfolio />
      <Skills />
      {/* <Experience /> */}
      <Contact />
      <Footer />
      {showFloatingNav && <FloatingNav />}
    </main>
  );
}

export default App;
