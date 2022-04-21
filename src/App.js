import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Areas from './components/Areas';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Areas />
      <About />
      <Experience />
      <Projects />
      <Newsletter />
      <Contact />
      <Footer />
    </>
  );
}
