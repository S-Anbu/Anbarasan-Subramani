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
      <Nav />
      <div id='Home'>
      <Home/>
      </div>
      <div >
      <About/>
      </div>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
