import React from 'react'
import 'react-vertical-timeline-component/style.min.css'
import {VerticalTimeline,
VerticalTimelineElement} from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';
import {education} from '../../constants';
import Container from '../container';
const ExperienceCard = ({edu}) =>(
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
      <img src={edu.img} 
      className='w-[60%] h-[60%] object-contain rounded-full' />
    </div>
  }
  >
    <div>
      <h3
       className='text-xl md:text-2xl md:font-bold lg:text-3xl font-semibold text-gray-400
        mb-3 text-center'
      >
        {edu.degree}
      </h3>

      <p className='text-secondary text-[24px]
      font-semibold' style={{margin:0}}>
        {edu.school}</p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2  '>
      {edu.points.map((point, index) =>(
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
    id='education'
    className='pt-24 pb-36 bg-skills-gradient clip-path-custom-2'
    >
      <Container>
         <div className='text-center'>
           <h1 
          className='text-xl font-bold sm:text-2xl md:text-3xl lg:text-5xl'
          >
            EDUCATION
          </h1>
          <div className='w-36 h-2 bg-[#8245ec] mx-auto mt-2'></div>
          <p 
           className='text-base sm:text-lg md:text-lg lg:text-2xl text-gray-400 my-8'
          >
          My education has been a journey of learning and development.
           Here are the details of my academic background 
          </p>
         </div>
         <div className='mt-2 flex flex-col '>
          <VerticalTimeline>
            {education.map((edu,index)=>(
              <ExperienceCard key={index} edu=
              {edu}/>
            ))}
          </VerticalTimeline>
         </div>
      </Container>
    </section>
  )
}

export default Experience;
