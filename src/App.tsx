import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';

function App() {
  return (
    <>
      <Header />
      <main className="pt-4 w-full">
        <div >
          <Hero />
        </div>
        <a className="relative bottom-5"  id="about"></a>
        <div >
          <About />
        </div>
        
        <a className="relative bottom-5"  id="projects"></a>
        <div >
          <Projects />
        </div>
        
        <a className="relative bottom-5" id="skills"></a>
        <div>
          <Skills />
        </div>
        <a className="relative bottom-5"  id="contact"></a>
        <div >
          <Contact />
        </div>
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </>
  );
}

export default App;
