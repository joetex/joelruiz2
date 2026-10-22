import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';

function App() {
  return (
    <>
      <Header />
      <main id="home" className="w-full">
        <Hero />
        <div id="about" className="scroll-mt-16">
          <About />
        </div>
        <div id="experience" className="scroll-mt-16">
          <Experience />
        </div>
        <div id="projects" className="scroll-mt-16">
          <Projects />
        </div>
        <div id="skills" className="scroll-mt-16">
          <Skills />
        </div>
        <div id="contact" className="scroll-mt-16">
          <Contact />
        </div>
      </main>
      <Footer />
      <Toaster position="bottom-right" theme="dark" />
    </>
  );
}

export default App;
