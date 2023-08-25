import React from 'react'

//Images Smarthphone size
import profile_smallsize from '../assets/img/photo_SmartPhone.png'

const Home = ({mode}) => {
  return (
    <div className={`py-14 rounded-2xl flex justify-center items-center backdrop-blur-sm ${mode === true ? 'bg-background-white': 'bg-background-dark'}`}>
        {/* Pc Size*/}
        <div className='hidden md:block md:mx-8'>      
          <div className='flex flex-row font-roboto items-center justify-center'>
            <div className='w-1/2'>
              <div className='flex flex-row space-x-2 text-6xl font-bold pb-10'>
                  <h3 className='text-[#199AC5]'>Hey</h3>
                  <h3 className={`${mode === true ? 'text-black' : 'text-white'}`}>There 👋🏻</h3>
              </div>
              <p className={`w-2/3 text-2xl ${mode === true ? 'text-black' : 'text-white'}`}>I’m João Vitor from Brazil, a Front-end developer, and I love how games are made.</p>
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
                <h3 className='text-[#199AC5]'>Hey</h3>
                <h3 className={`${mode === true ? 'text-black' : 'text-white'}`}>There 👋🏻</h3>
              </div>
              <p className={`w-2/3 text-lg ${mode === true ? 'text-black' : 'text-white'}`}>I’m João Vitor from Brazil, a Front-end developer, and I love how games are made.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
