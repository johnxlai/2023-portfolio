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

function App() {
  return (
    <main>
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
