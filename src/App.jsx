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
import background_normal_black from './assets/thumbnail/Background_Black_Normal.svg'
import background_normal_white from './assets/thumbnail/Background_White_Normal.svg'
//Traslations
import en_language from '../translations/en_language'
import pt_br from '../translations/pt_br_language'

function App() {  
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Padrão para inglês
  const [mode, setMode] = useState(false);  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleModeToggle = () => {
    setMode( mode == false ? true : false);      
  }

  const handleLanguageChange = (event) => {
    const selectedLang = event
    setSelectedLanguage(selectedLang);    
  };

  const translations = selectedLanguage === 'pt_br' ? pt_br : en_language;

  return (
    <div className='relative min-h-screen m-0 p-0 w-full'>      
      <div className='absolute inset-0 z-[-1] block md:hidden'>         
        <img className= 'w-full h-full object-cover object-center 'src={mode === true ? background_small_size : background_small_black} alt='Background'></img> 
      </div> 
      <div className='absolute inset-0 z-[-1] hidden md:block'>
        <img className= 'w-full h-full object-cover center hidden md:block'src={mode === true ? background_normal_white : background_normal_black} alt='Background'></img> 
      </div>
      <div className='flex flex-row justify-center align-middle items-center h-full'>
        <NavBar       
          mode={mode} 
          handleModeToggle={handleModeToggle}           
          homeRef={homeRef}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef} 
          contactRef={contactRef}
          selectedLanguage={selectedLanguage}
          language={translations}
          handleLanguageChange = {handleLanguageChange}
        /> 
      </div>           
      <div className='flex flex-col w-full items-center justify-center'>
      <div className='max-w-[1200px] flex flex-col justify-center'>             
        <div ref={homeRef} className='pt-20 flex w-full justify-center items-center'>
          <Home mode={mode} language={translations}/>                       
        </div>
        <div ref={aboutRef} className='pt-40'>
          <About mode={mode} language={translations}/>
        </div>
        <div ref={skillsRef} className='pt-40 w-full'>
          <Skills mode={mode} language={translations}/>
        </div>
        <div ref={projectsRef} className='pt-40'>
          <Projects mode={mode} language={translations}/>
        </div>        
      </div>  
      <div ref={contactRef} className='pt-40 max-w-[1200px] flex flex-col justify-center align-middle items-center h-full w-full'>
        <Footer mode={mode} language={translations}/>
      </div>     
      </div> 
    </div>
  )
}

export default App
