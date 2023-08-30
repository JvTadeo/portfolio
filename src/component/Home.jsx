import React from 'react'

//Images Smarthphone size
import profile_smallsize from '../assets/img/photo_SmartPhone.png'
//Documents
import resumeEn from '../assets/documents/Resume_English_João_Vitor_Tadeo.pdf'
import resumePt from '../assets/documents/Resume_Portuguese_João_Vitor_Tadeo.pdf'

const Home = ({mode, language}) => {
  return (
    <div className={`py-14 rounded-2xl flex justify-center items-center backdrop-blur-sm ${mode === true ? 'bg-background-white': 'bg-background-dark'}`}>
        {/* Pc Size*/}
        <div className='hidden md:block md:mx-8'>      
          <div className='flex flex-row font-roboto items-center justify-center'>
            <div className='w-1/2'>
              <div className='flex flex-row space-x-2 text-6xl font-bold pb-10'>
                  <h3 className='text-[#199AC5]'>{language.home.title_1}</h3>
                  <h3 className={`${mode === true ? 'text-black' : 'text-white'}`}>{language.home.title_2} 👋🏻</h3>
              </div>
              <p className={`w-2/3 text-2xl ${mode === true ? 'text-black' : 'text-white'}`}>{language.home.apresentation_text}</p>
              <div className='flex flex-col gap-2 pt-14 font-normal cursor-pointer max-w-[250px]'>
                <a className={`rounded-md p-2 shadow-md ${mode === true ? "text-black" : "text-white"} ${mode === true ? "bg-gray-100" : "bg-slate-800"}`} href={resumePt} download="Resume_Portuguese_João_Vitor_Tadeo.pdf" >{language.home.download_resume_br}</a>
                <a className={`rounded-md p-2 shadow-md ${mode === true ? "text-black" : "text-white"} ${mode === true ? "bg-gray-100" : "bg-slate-800"}`} href={resumeEn} download="Resume_English_João_Vitor_Tadeo.pdf" >{language.home.download_resume_en}</a>
              </div>
            </div>
            <div>
              <img className='object-cover object-center rounded-2xl w-[290px] h-[380px] drop-shadow-lg' src={profile_smallsize} alt='profile_img'></img>  
            </div>            
          </div>
        </div>
        {/*Smarthphone size*/}
        <div className='block md:hidden w-screen'>
          <div className='flex flex-col items-center font-roboto'>
            <img className='object-cover object-center rounded-2xl w-[193px] h-[250px] drop-shadow-lg ' src={profile_smallsize} alt='profile_img'></img>
            <div className='flex flex-col items-center text-center pt-6'>
              <div className='flex flex-row space-x-2 text-4xl font-bold pb-4'>
                <h3 className='text-[#199AC5]'>{language.home.title_1}</h3>
                <h3 className={`${mode === true ? 'text-black' : 'text-white'}`}>{language.home.title_2} 👋🏻</h3>
              </div>
              <p className={`w-2/3 text-lg ${mode === true ? 'text-black' : 'text-white'}`}>{language.home.apresentation_text}</p>
              <div className='flex flex-col gap-2 h-full items-center pt-14 font-normal text-lg cursor-pointer'>
                <a className={` rounded-md p-2 ${mode === true ? "text-black" : "text-white"} ${mode === true ? "bg-gray-100" : "bg-slate-800"}`} href={resumePt} download="Resume_Portuguese_João_Vitor_Tadeo.pdf" >{language.home.download_resume_br}</a>
                <a className={` rounded-md p-2 ${mode === true ? "text-black" : "text-white"} ${mode === true ? "bg-gray-100" : "bg-slate-800"}`} href={resumeEn} download="Resume_English_João_Vitor_Tadeo.pdf" >{language.home.download_resume_en}</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
