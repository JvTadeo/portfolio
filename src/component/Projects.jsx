import React from 'react'
//Imgs
import product_card from '../assets/mockups/product_card.png'
import todoApp from '../assets/mockups/todo_app.png'
import weatherApp from '../assets/mockups/weather_app.png'

import gitHubIcon_White from '../assets/img/GitHub_Icon_white.png'
import gitHubIcon_Dark from '../assets/img/GitHub_Icon.png'

const Projects = ({mode, language}) => {
  return (
    <div>
      <div className={`h-max rounded-2xl flex justify-center items-center backdrop-blur-sm ${mode === true ? 'bg-background-white': 'bg-background-dark'} py-14`}>
        {/* Pc Size*/}
        <div className='hidden md:block font-roboto'>
          <div className={`flex flex-col flex-grow-1 items-center ${mode === true ? 'text-black' : 'text-white'}`}>
            <div className={`flex flex-col items-center text-center text-3xl py-2 font-light`}>
              <p>{language.projects.projects_titles}</p>
              <p className='font-bold'>{language.projects.projects_subtitle}</p>
            </div>  
            <div className={`flex flex-row rounded-2xl bg-gradient-to-t from-[#FFF2A0] w-3/4 mb-12 ${mode === true ? 'border-[#E4EAF0] border-2' : ''}`}>
              <div className='flex flex-col items-start justify-end text-left ml-4 my-5'>
                  <p className='font-bold text-2xl py-7'>{language.projects.product_card_title}</p>
                  <p className='w-full text-sm pb-6'>{language.projects.product_card_description}</p>
                  <a target='_blank' rel='noopener noreferrer' href='https://github.com/JvTadeo/Product-Card' className={`max-w-[120px] flex flex-row justify-evenly items-center align-middle px-2 py-3 rounded-xl ${mode === true ? 'bg-black text-white': 'bg-white text-black'}`}>
                      <img className='w-1/4 h-auto' src={mode === true ? gitHubIcon_White : gitHubIcon_Dark} alt='github_icon'></img>
                      <p>GitHub</p>
                  </a>                  
              </div>  
              <div className='flex justify-end w-3/4'>
                <img className='w-[200px] object-contain' src={product_card} alt='product_card_ing'></img>
              </div>
            </div>
            <div className={`flex flex-row rounded-2xl bg-gradient-to-t from-[#AA56B0] w-3/4 mb-12 ${mode === true ? 'border-[#E4EAF0] border-2' : ''}`}>
              <div className='flex justify-end w-full overflow-hidden'>
                <img className='object-contain w-auto' src={todoApp} alt='TodoApp_Img'></img>
              </div>
              <div className='flex flex-col items-end justify-end text-end mr-4 my-5 w-2/3'>
                  <p className='font-bold text-2xl py-7'>{language.projects.todo_app_title}</p>
                  <p className='w-full text-sm pb-6'>{language.projects.todo_app_description}</p>
                  <a target='_blank' rel='noopener noreferrer' href='https://github.com/JvTadeo/ToDo' className={`max-w-[120px] flex flex-row justify-evenly items-center align-middle px-2 py-3 rounded-xl ${mode === true ? 'bg-black text-white': 'bg-white text-black'}`}>
                      <img className='w-1/4 h-auto' src={mode === true ? gitHubIcon_White : gitHubIcon_Dark} alt='github_icon'></img>
                      <p>GitHub</p>
                  </a>                  
              </div>  
            </div>
            <div className={`flex flex-row rounded-2xl bg-gradient-to-t from-[#191B22] w-3/4 mb-12 ${mode === true ? 'border-[#E4EAF0] border-2' : ''}`}>
              <div className='flex flex-col items-start justify-end text-left ml-4 my-5 w-2/3'>
                  <p className='font-bold text-2xl py-7'>{language.projects.weather_app_title}</p>
                  <p className='w-full text-sm pb-6'>{language.projects.weather_app_description}</p>
                  <a target='_blank' rel='noopener noreferrer' href='https://github.com/JvTadeo/project-weather' className={`max-w-[120px] flex flex-row justify-evenly items-center align-middle px-2 py-3 rounded-xl ${mode === true ? 'bg-black text-white': 'bg-white text-black'}`}>
                      <img className='w-1/4 h-auto' src={mode === true ? gitHubIcon_White : gitHubIcon_Dark} alt='github_icon'></img>
                      <p>GitHub</p>
                  </a>                  
              </div>  
              <div className='flex justify-end w-full overflow-hidden'>
                <img className='object-contain w-auto' src={weatherApp} alt='WeatherApp_Img'></img>
              </div>
            </div>
          </div>
        </div>
        {/*Smarthphone size*/}
        <div className='block md:hidden w-screen font-roboto'>
        <div className={`flex flex-col flex-grow-1 items-center ${mode === true ? 'text-black' : 'text-white'}`}>
          <div className={`flex flex-col items-center text-center text-3xl py-2`}>
            <p className='font-light'>{language.projects.projects_titles}</p>
            <p className='font-bold'>{language.projects.projects_subtitle}</p>
          </div>
          <div className={`rounded-2xl bg-gradient-to-t from-[#FFF2A0] w-3/4 mb-12 ${mode === true ? 'border-[#E4EAF0] border-2' : ''}`}>
            <div className='flex flex-col items-center justify-center text-center'>
                <p className='font-bold text-2xl py-7'>{language.projects.product_card_title}</p>
                <p className='w-3/4 text-sm pb-6'>{language.projects.product_card_description}</p>
                <a target='_blank' rel='noopener noreferrer' href='https://github.com/JvTadeo/Product-Card' className={`max-w-[120px] flex flex-row justify-evenly items-center align-middle px-2 py-3 rounded-xl ${mode === true ? 'bg-black text-white': 'bg-white text-black'}`}>
                      <img className='w-1/4 h-auto' src={mode === true ? gitHubIcon_White : gitHubIcon_Dark} alt='github_icon'></img>
                      <p>GitHub</p>
                </a>   
                <div className='pt-4'>
                    <img className='max-w-[150px]' src={product_card} alt='produt_card_img'></img>
                </div>
            </div>
          </div>
          <div className={`rounded-2xl bg-gradient-to-t from-[#AA56B0] w-3/4 mb-12 ${mode === true ? 'border-[#E4EAF0] border-2' : ''}`}>
            <div className={`flex flex-col items-center justify-center text-center`}>
                <p className='font-bold text-2xl py-7'>{language.projects.todo_app_title}</p>
                <p className='w-3/4 text-sm pb-6'>{language.projects.todo_app_description}</p>
                <a target='_blank' rel='noopener noreferrer' href='https://github.com/JvTadeo/ToDo' className={`max-w-[120px] flex flex-row justify-evenly items-center align-middle px-2 py-3 rounded-xl ${mode === true ? 'bg-black text-white': 'bg-white text-black'}`}>
                      <img className='w-1/4 h-auto' src={mode === true ? gitHubIcon_White : gitHubIcon_Dark} alt='github_icon'></img>
                      <p>GitHub</p>
                </a>                  
                <div className='pt-4'>
                    <img className='w-max' src={todoApp} alt='TodoApp_Img'></img>
                </div>
            </div>
          </div>
          <div className={`rounded-2xl bg-gradient-to-t from-[#191B22] w-3/4 mb-12 ${mode === true ? 'border-[#E4EAF0] border-2' : ''}`}>
            <div className={`flex flex-col items-center justify-center text-center`}>
                <p className='font-bold text-2xl py-7'>{language.projects.weather_app_title}</p>
                <p className='w-3/4 text-sm  pb-6'>{language.projects.weather_app_description}</p>
                <a target='_blank' rel='noopener noreferrer' href='https://github.com/JvTadeo/project-weather' className={`max-w-[120px] flex flex-row justify-evenly items-center align-middle px-2 py-3 rounded-xl ${mode === true ? 'bg-black text-white': 'bg-white text-black'}`}>
                      <img className='w-1/4 h-auto' src={mode === true ? gitHubIcon_White : gitHubIcon_Dark} alt='github_icon'></img>
                      <p>GitHub</p>
                </a>          
                <div className='pt-4'>
                    <img className='w-max' src={weatherApp} alt='WeatherApp_Img'></img>
                </div>
            </div>
          </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Projects
