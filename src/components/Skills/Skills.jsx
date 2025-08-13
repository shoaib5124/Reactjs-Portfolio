import React from 'react';
import Container from '../container';
import {SkillsInfo} from  '../../constants';
import { Tilt } from 'react-tilt';
const Skills = () => {
  return (
    <section
    id='skills'
    className='font-sans mt-20 bg-skills-gradient'
    >
      <Container>
       <div className='text-center'>
          <h1 
          className='text-xl font-bold sm:text-2xl md:text-3xl lg:text-5xl'
          >
            SKILLS
          </h1>
          <div className='w-28 h-2 bg-[#8245ec] mx-auto mt-2'></div>
          <p 
           className='text-base sm:text-lg md:text-lg lg:text-2xl text-gray-400 my-8'
          >
           These are the tools I use to turn ideas into smooth, responsive websites.
           From front-end design to backend logic, each skill helps me craft engaging, reliable digital experiences.
          </p>
       </div>
       <div className=' flex flex-wrap justify-between'>
          {SkillsInfo.map((category)=>(
            <div 
                key={category.title}
                className='bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 
                w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'
            >
             <h3 className='text-2xl md:text-3xl md:font-bold lg:text-4xl font-semibold text-gray-400 mb-3 text-center'>{category.title}</h3>
            
            {/* Skills items - 3 per row on larger screend */}
            <Tilt
                key={category.title}
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                scale={1.05}
                trasitionSpeed={1000}
                gyroscope={true}
            >
                <div className='grid grid-cols-2 gap-3 mt-5 sm:grid-cols-3 w-full'>
                    {category.skills.map((skill)=>(
                        <div 
                          key={skill.name}
                            className='flex border space-x-2 bg-transparent items-center text-center
                            justify-center border-gray-500 px-2 py-2 rounded-3xl'>
                            <img
                                src={skill.logo}
                                className='w-6 h-6 sm:w-8 sm:h-8'
                                alt={`${skill.name} logo`}

                            />
                            <span className='text-gray-400 '>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </Tilt>
            </div>
          ))}
       </div>
      </Container>
    </section>
  )
}

export default Skills
