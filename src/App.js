import Navbar from './Components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About';
import Projects from './sections/Projects'
import Skills from './sections/Skills';
import './styles/App.css'

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  )
}
export default App;
