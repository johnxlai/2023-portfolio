// import logo from './logo.svg';
import Header from './components/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Experience from './components/Experience';
import FloatingNav from './components/FloatingNav';

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <Header />
      <About />
      <FloatingNav />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
