import './App.css'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/Home/Home.jsx'
import { Nav} from './components/Navbar/Nav'
import Projects from './components/Projects/Projects.jsx'
import Skills from './components/Skills/Skills.jsx'

function App() {

  return (
    <>
    <div className='fixed min-w-full z-10'>
      <Nav />
    </div>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
