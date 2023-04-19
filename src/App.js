// import logo from './logo.svg';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/about/About';
import Experience from './components/Experience';
import FloatingNav from './components/FloatingNav';
import Services from './components/service/Services';

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <FloatingNav />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
