import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AwardsCertificates from "./components/AwardsCertificates";
import FeatureDemos from "./components/FeatureDemos";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <AwardsCertificates />
      <FeatureDemos />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
