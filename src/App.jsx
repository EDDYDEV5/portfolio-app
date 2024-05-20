import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import SocialLinks from './components/SocialLinks'

function App() {

  return (
    <>
    <div >
    <Navbar />
    <div className='mx-2 lg:mx-4'>
    <Home />
    
  <About />
 <Projects />
 <Skills />
 <Contact />
 </div>

 
  <SocialLinks />
    </div>
 
    </>
  )
}

export default App
