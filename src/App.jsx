import { useState, useRef } from 'react'
//Components
import NavBar from './component/NavBar'
import Home from './component/Home'
import About from './component/About'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Footer from './component/Footer'
//Background
import background_small_size from './assets/thumbnail/Background_White_Small.svg'
import background_small_black from './assets/thumbnail/Background_Black_Small.svg'
import background_normal_white from './assets/thumbnail/Background_White_Normal.svg'
function App() {  

  const [mode, setMode] = useState(false);
  const [modal, setModal] = useState(false);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleModeToggle = () => {
    setMode( mode == false ? true : false);      
    console.log(mode);
  }

  const handleModalToggle = () => {
    setModal( modal == false ? true : false);    
  }

  return (
    <div className='relative min-h-screen m-0' onClick={() => modal === true ? setModal(false) : null }>      
      <div className='absolute inset-0 z-[-1]'> 
        <img className= 'w-full h-full object-cover object-center md:hidden'src={mode === true ? background_small_size : background_small_black}></img> 
        <img className= 'w-full h-full object-cover object-center hidden md:block'src={mode === true ? background_normal_white : background_small_black}></img> 
      </div> 
      <div className='flex flex-row justify-center align-middle items-center h-full'>
        <NavBar        
          mode={mode} 
          handleModeToggle={handleModeToggle} 
          modal={modal} 
          handleModalToggle={handleModalToggle}  
          homeRef={homeRef}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef} 
          contactRef={contactRef}
        /> 
      </div>           
      <div className='flex flex-col justify-center align-middle items-center h-full'>             
        <div ref={homeRef} className='pt-20'>
          <Home mode={mode}/>                       
        </div>
        <div ref={aboutRef} className='pt-40'>
          <About mode={mode}/>
        </div>
        <div ref={skillsRef} className='pt-40'>
          <Skills mode={mode}/>
        </div>
        <div ref={projectsRef} className='pt-40'>
          <Projects mode={mode}/>
        </div>        
      </div>  
      <div ref={contactRef} className='pt-40 flex flex-col justify-center align-middle items-center h-full w-full'>
        <Footer mode={mode}/>
      </div>      
    </div>
  )
}

export default App
