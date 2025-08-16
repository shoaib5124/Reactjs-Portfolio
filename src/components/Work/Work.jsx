import React from 'react'
import Container from '../container'
const Work = () => {
  return (
 <section>
  <Container>
     <div className='text-center '>
          <h1 
          className='text-xl font-bold sm:text-2xl md:text-3xl lg:text-5xl'
          >
            PROJECTS
          </h1>
          <div className='w-36 h-2 bg-[#8245ec] mx-auto mt-2'></div>
          <p 
           className='text-base sm:text-lg md:text-lg lg:text-2xl text-gray-400 my-8'
          >
            Explore my projects showcasing creativity, functionality, and problem-solving skills. Each project reflects real-world challenges, modern design, and innovation—highlighting my ability to build practical, impactful solutions with passion and precision.
          </p>
       </div>
  </Container>
 </section>
  )
}

export default Work
