import React from 'react'
//Imgs
import linkedinImg from '../assets/img/Linkedin_Icon.png'
import gmailImg from '../assets/img/gmail_Icon.png'
import gitHubIcon_White from '../assets/img/GitHub_Icon_white.png'
import gitHubIcon_Dark from '../assets/img/GitHub_Icon.png'

const Footer = ({mode, language}) => {
  return (
    <div>
      <div className={`h-max rounded-t-2xl flex justify-center items-center backdrop-blur-sm ${mode === true ? 'bg-background-white text-black' : 'bg-background-dark text-white'}`}>
        {/* Pc Size*/}
        <div className='hidden md:block '>                   
            <div className={`flex flex-col text-center`}>            
                <div className='flex flex-col items-center text-2xl font-bold pt-12'>
                    <p>{language.foot.text_default}</p>
                    <div className={`flex rounded-[56px] w-2/6 py-3 my-6 shadow-xl ${mode === true ? 'bg-white' : 'bg-black'}`}>
                        <a rel='noopener noreferrer' href='mailto:joao.tadeov@gmail.com' className='flex justify-evenly align-middle items-center'>
                            <img className='w-1/2 object-contain'src={gmailImg} alt='gmail_img'></img>
                        </a>
                        <a rel='noopener noreferrer' href='https://www.linkedin.com/in/jvtadeo/' target='_blank' className='flex justify-center'>
                            <img className='w-1/2 object-contain' src={linkedinImg} alt='linkedin_img'></img>
                        </a>
                        <a rel='noopener noreferrer' href='https://github.com/JvTadeo' target='_blank' className='flex justify-center'>
                            <img className='w-1/2 object-contain' src={mode === true ? gitHubIcon_Dark : gitHubIcon_White} alt='github_icon'></img>
                        </a>
                    </div>
                </div>
                <p className='text-base mb-3 font-bold'>&copy; {new Date().getFullYear()}, {language.foot.text_bottom}</p>
            </div>
        </div>
        {/*Smarthphone size*/}
        <div className='block md:hidden'>
            <div className='flex flex-col text-center'>
                <div className='flex flex-col items-center text-xl font-bold py-6'>
                    <p>{language.foot.text_default}</p>
                    <div className={`flex rounded-[56px] w-2/3 py-3 shadow-xl ${mode === true ? 'bg-white' : 'bg-black'}`}>
                        <a rel='noopener noreferrer' href='mailto:joao.tadeov@gmail.com' className='flex justify-evenly align-middle items-center'>
                            <img className='w-1/2'src={gmailImg} alt='gmail_img'></img>
                        </a>
                        <a rel='noopener noreferrer' href='https://www.linkedin.com/in/jvtadeo/' target='_blank' className='flex justify-center'>
                            <img className='w-1/2' src={linkedinImg} alt='linkedin_img'></img>
                        </a>
                        <a rel='noopener noreferrer' href='https://github.com/JvTadeo' target='_blank' className='flex justify-center'>
                            <img className='w-1/2' src={mode === true ? gitHubIcon_Dark : gitHubIcon_White} alt='github_icon'></img>
                        </a>
                    </div>
                </div>
                <p className='text-base'>&copy; {new Date().getFullYear()}, {language.foot.text_bottom}</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer
