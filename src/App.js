// import logo from './logo.svg';
import Header from './components/sections/header/Header';
import Navbar from './components/sections/navbar/Navbar';
import Footer from './components/sections/Footer';
import Contact from './components/sections/Contact';
import About from './components/sections/about/About';
import Experience from './components/sections/Experience';
import FloatingNav from './components/sections/FloatingNav';
import Portfolio from './components/sections/portfolio/Portfolio';
import Services from './components/sections/service/Services';

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <FloatingNav />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
