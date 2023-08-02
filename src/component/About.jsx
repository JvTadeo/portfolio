import React from 'react'
import profile from '../assets/img/profile_aboutHistory.png'

const About = ({mode}) => {
  return (
    <div>
      <div className={`max-w-[1200px] h-max rounded-2xl flex justify-center items-center backdrop-blur-sm ${mode === true ? 'bg-background-white': 'bg-background-dark'} ${mode === true ? 'text-black': 'text-white'}`}>
        {/* Pc Size*/}
        <div className='hidden md:block font-roboto md:mx-8 py-14'>
          <div className='flex flex-col justify-start text-3xl gap-1 mb-4'>
              <p className='font-light'>ABOUT ME</p>
              <p className='font-bold'>A little about my history</p>
          </div>          
          <div className='flex flex-row items-center'>
            <div className='max-h-[520px] max-w-[320px] mr-5 overflow-hidden rounded-xl shadow-2xl'>
              <img src={profile} className=' object-contain object-center '></img>
            </div>
            <div className='space-y-5 text-xl'>
              <p>Hello, I'm João Vitor Tadeo, a front-end developer passionate about creating amazing digital experiences.</p>
              <p>Throughout my journey, I've honed my skills in HTML, CSS, and JavaScript, along with React. I take pride in working on challenging projects, collaborating with clients to build intuitive and responsive interfaces that enhance user experience.</p>
              <p>In addition to web development, I have a strong passion for game creation. As a gaming enthusiast, I immerse myself in personal projects using Unity, exploring the power of programming to bring virtual worlds to life.</p>
              <p>I believe that staying up-to-date with the latest trends and technologies is the key to success.</p>
              <p>My commitment to delivering quality solutions, combined with my passion for technology, drives my daily work. I am always seeking exciting challenges and opportunities to grow professionally, whether it's collaborating with talented teams or working independently.</p>
            </div>          
            </div>
        </div>
        {/*Smarthphone size*/}
        <div className='block md:hidden font-roboto w-screen'>
        <div className='flex flex-col mx-2 py-4'>
          <div className='flex flex-col justify-start text-3xl'>
            <p className='font-light'>ABOUT ME</p>
            <p className='font-bold'>A little about my history</p>
          </div>
          <div className='pt-4 space-y-5 text-xl'>
            <p>Hello, I'm João Vitor Tadeo, a passionate front-end developer dedicated to creating amazing digital experiences.</p>
            <p>Throughout my journey, I've honed my skills in HTML, CSS, and JavaScript, along with React. I take pride in working on challenging projects, collaborating with clients to build intuitive and responsive interfaces that enhance user experience.</p>
            <p>In addition to web development, I have a strong passion for game creation. As a gaming enthusiast, I immerse myself in personal projects using Unity, exploring the power of programming to bring virtual worlds to life.</p>
            <p>I believe that staying up-to-date with the latest trends and technologies is the key to success.</p>
            <p>My commitment to delivering quality solutions, combined with my passion for technology, drives my daily work. I am always seeking exciting challenges and opportunities to grow professionally, whether it's collaborating with talented teams or working independently.</p>
          </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default About
