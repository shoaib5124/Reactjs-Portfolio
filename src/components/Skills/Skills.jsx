import React from 'react'
import Container from '../container'
const Skills = () => {
  return (
    <section
    id='skills'
    className='font-sans mt-20'
    >
      <Container>
       <div className='text-center'>
          <h1 
          className='text-xl font-bold sm:text-2xl md:text-3xl lg:text-5xl'
          >
            SKILLS
          </h1>
          <p 
           className='text-base sm:text-lg md:text-lg lg:text-2xl text-gray-400 mt-8'
          >
           These are the tools I use to turn ideas into smooth, responsive websites.
           From front-end design to backend logic, each skill helps me craft engaging, reliable digital experiences.
          </p>
       </div>
       <div className='w-full grid gap-6 grid-cols-2'>
          <div 
          className=' p-6 border-2 border-gray-300 rounded-lg'
          >
            <h1>Frontend</h1>
          </div>
          <div
          className='p-6 border-2 border-gray-300 rounded-lg'
          >
            <h1>Backend</h1>
          </div>
          <div 
          className='p-6 border-2 border-gray-300 rounded-lg'
          >
            <h1>Languges</h1>
          </div>
          <div 
          className='p-6 border-2 border-gray-300 rounded-lg'
          >
            <h1>Tools</h1>
          </div>
       </div>
      </Container>
    </section>
  )
}

export default Skills
