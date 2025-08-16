import React from 'react'
import 'react-vertical-timeline-component/style.min.css'
import {VerticalTimeline,
VerticalTimelineElement} from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';
import {experiences} from '../../constants';
import Container from '../container';
const ExperienceCard = ({experience}) =>(
  <VerticalTimelineElement
  className='transition-transform duration-300 ease-in-out hover:scale-105'
  contentStyle={{background:'#111825', color: '#6B7280',
    boxShadow:'0 0 20px 1px rgba(130,69,236,0.3)',
    border: '1px solid white',
    borderRadius:'0.5rem',

  }}
  contentArrowStyle={{borderRight:'7px solid #232631'}}
  iconStyle={{background: '#8245ec' }}
  icon={
    <div className='flex justify-center items-center
    h-full w-full'>
      <img src={experience.img} 
      alt={experience.company_name} 
      className='w-[60%] h-[60%] object-contain rounded-full' />
    </div>
  }
  >
    <div>
      <h3 className='text-xl md:text-2xl md:font-bold lg:text-3xl font-semibold text-gray-400 mb-3 text-center'>{experience.role}</h3>
      <p className='text-secondary text-[24px]
      font-semibold' style={{margin:0}}>
        {experience.company_name}</p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2  '>
      {experience.points.map((point, index) =>(
        <li key={`experience-point-${index}`}
        className="text-gray-400 text-[20px]
        pl-1 tracking-wider text-3xl">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)
const Experience = () => {
  return (      
    <section
    id='experience'
    className='py-24 pb-24 bg-skills-gradient clip-path-custom-2'
    >
      <Container>
         <div className='text-center'>
           <h1 
          className='text-xl font-bold sm:text-2xl md:text-3xl lg:text-5xl'
          >
            EXPERIENCE
          </h1>
          <div className='w-36 h-2 bg-[#8245ec] mx-auto mt-2'></div>
          <p 
           className='text-base sm:text-lg md:text-lg lg:text-2xl text-gray-400 my-8'
          >
           These are the tools I use to turn ideas into smooth, responsive websites.
           From front-end design to backend logic, each skill helps me craft engaging, reliable digital experiences.
          </p>
         </div>
         <div className='mt-2 flex flex-col '>
          <VerticalTimeline>
            {experiences.map((experience,index)=>(
              <ExperienceCard key={index} experience=
              {experience}/>
            ))}
          </VerticalTimeline>
         </div>
      </Container>
    </section>
  )
}

export default Experience;
