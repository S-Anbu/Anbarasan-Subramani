import './App.css'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import { Nav} from './components/Navbar/Nav'
import Projects from './components/Projects/Projects.jsx'
import Skills from './components/Skills/Skills.jsx'

function App() {

  return (
    <>
    <div classname="">
      <Nav />
    </div>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
    
    </>
  )
}

export default App
