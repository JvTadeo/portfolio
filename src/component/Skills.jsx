import React from 'react'

const Skills = ({mode}) => {
  return (
    <div>
      <div className={`h-max rounded-2xl flex justify-center items-center backdrop-blur-sm ${mode === true ? 'bg-background-white': 'bg-background-dark'} ${mode === true ? 'text-black': 'text-white'} py-14`}>
        {/* Pc Size*/}
        <div className='hidden md:block'>     
          <div className='flex flex-col'>
            <div className='flex flex-col text-4xl py-2 text-center flex-grow'>
              <p className='font-light'>SKILLS</p>
              <p className='font-bold'>My Tech Skills Tree</p>
            </div>
            <div className='grid grid-cols-4 grid-rows-2 text-center font-roboto font-light text-xl mx-36  my-6'>            
                <div className={`rounded-2xl ${mode === true ? 'bg-[#F8FAFC]' : 'bg-black'} p-3 m-2`}><p>HTML5</p></div>
                <div className={`rounded-2xl ${mode === true ? 'bg-[#F8FAFC]' : 'bg-black'} p-3 m-2`}>CSS</div>
                <div className={`rounded-2xl ${mode === true ? 'bg-[#F8FAFC]' : 'bg-black'} p-3 m-2`}>Tailwind</div>
                <div className={`rounded-2xl ${mode === true ? 'bg-[#F8FAFC]' : 'bg-black'} p-3 m-2`}>JavaScript</div>                        
                <div className={`rounded-2xl ${mode === true ? 'bg-[#F8FAFC]' : 'bg-black'} p-3 m-2`}>React</div>
                <div className={`rounded-2xl ${mode === true ? 'bg-[#F8FAFC]' : 'bg-black'} p-3 m-2`}>Node.js</div>
                <div className={`rounded-2xl ${mode === true ? 'bg-[#F8FAFC]' : 'bg-black'} p-3 m-2`}>C#</div>
                <div className={`rounded-2xl ${mode === true ? 'bg-[#F8FAFC]' : 'bg-black'} p-3 m-2`}>Python</div>                        
            </div>       
          </div>     
        </div>
        {/*Smarthphone size*/}
        <div className='block md:hidden w-screen'>
        <div className='flex flex-col flex-grow-1'>
          <div className='flex flex-col items-center text-3xl py-2'>
            <p className='font-light'>SKILLS</p>
            <p className='font-bold'>My Tech Skills Tree</p>
          </div>
          <div className='grid grid-cols-2 gap-4 text-center font-roboto font-normal text-2xl my-2'>
            <p className={`rounded-2xl ${mode === true ? 'bg-[#F8FAFC]' : 'bg-black'} py-1 m-2`}>HTML5</p>
            <p className={`rounded-2xl ${mode === true ? 'bg-[#F8FAFC]' : 'bg-black'} py-1 m-2`}>CSS</p>
            <p className={`rounded-2xl ${mode === true ? 'bg-[#F8FAFC]' : 'bg-black'} py-1 m-2`}>Tailwind</p>
            <p className={`rounded-2xl ${mode === true ? 'bg-[#F8FAFC]' : 'bg-black'} py-1 m-2`}>JavaScript</p>
            <p className={`rounded-2xl ${mode === true ? 'bg-[#F8FAFC]' : 'bg-black'} py-1 m-2`}>React</p>
            <p className={`rounded-2xl ${mode === true ? 'bg-[#F8FAFC]' : 'bg-black'} py-1 m-2`}>Node.js</p>
            <p className={`rounded-2xl ${mode === true ? 'bg-[#F8FAFC]' : 'bg-black'} py-1 m-2`}>C#</p>
            <p className={`rounded-2xl ${mode === true ? 'bg-[#F8FAFC]' : 'bg-black'} py-1 m-2`}>Python</p>
          </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Skills
