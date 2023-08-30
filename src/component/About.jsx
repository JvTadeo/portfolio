import React from 'react'
import profile from '../assets/img/profile_aboutHistory.png'

const About = ({mode, language}) => {  
  return (
    <div>
      <div className={`h-max rounded-2xl flex justify-center items-center backdrop-blur-sm ${mode === true ? 'bg-background-white': 'bg-background-dark'} ${mode === true ? 'text-black': 'text-white'}`}>
        {/* Pc Size*/}
        <div className='hidden md:block font-roboto md:mx-8 py-14'>
          <div className='flex flex-col justify-start text-3xl gap-1 mb-4'>
              <p className='font-light'>{language.about.about_title}</p>
              <p className='font-bold'>{language.about.about_subtitle}</p>
          </div>          
          <div className='flex flex-row items-center w-full gap-x-4'>
            <div className='rounded-xl shadow-2xl'>
              <img src={profile} className='object-contain object-center max-w-[800px]' alt='profile_img'></img>
            </div>
            <div className='space-y-5 text-xl'>
              <p>{language.about.about_descript1}</p>
              <p>{language.about.about_descript2}</p>
              <p>{language.about.about_descript3}</p>
              <p>{language.about.about_descript4}</p>
              <p>{language.about.about_descript5}</p>
            </div>          
            </div>
        </div>
        {/*Smarthphone size*/}
        <div className='block md:hidden font-roboto w-screen py-4'>
        <div className='flex flex-col mx-2 py-4'>
          <div className='flex flex-col justify-start text-3xl'>
            <p className='font-light'>{language.about.about_title}</p>
            <p className='font-bold'>{language.about.about_subtitle}</p>
          </div>
          <div className='pt-4 space-y-5 text-xl'>
            <p>{language.about.about_descript1}</p>
            <p>{language.about.about_descript2}</p>
            <p>{language.about.about_descript3}</p>
            <p>{language.about.about_descript4}</p>
            <p>{language.about.about_descript5}</p>
          </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default About
