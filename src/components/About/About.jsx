import React from 'react';
import {Typewriter}from 'react-simple-typewriter';
import profileImage from '../../assets/assets/profile2.png';
import Container from '../container';
import {Tilt} from 'react-tilt';
const About = () => {
  return (
    <section
    id="about"
    className=' mt-10 font-sans'
    >
      <Container className='md:flex-row md:gap-x-10 flex flex-col-reverse gap-y-8  items-center justify-between py-10 '>
            {/* Left text side */}
            <div className=' w-full text-center md:text-left md:w-1/2'>
                {/* Greeting */}
                <h1 className='text-3xl sm:text-4xl  font-bold md:text-5xl mb-2'>Hi, I am</h1>
                {/* Name */}
                <h2 className='text-4xl sm:text-5xl font-bold md:text-6xl'>Shoaib Ul Hassan</h2>
                {/* Skills headig with typing effects */}
                <h3 className='text-3xl sm:text-4xl text-[#8245ec] font-bold md:text-5xl mb-2'> 
                    <span className='text-white'>I am a </span>
                    <Typewriter
                        words={[
                            'React. js Developer',
                            'Frontend web Developer',
                            'Javascript Enthusiast',
                            'Responsive Design Expert'
                        ]}
                        loop={0}
                        cursor
                        cursorStyle='|'
                        typeSpeed={80}
                        deleteSpeed={30}
                        delaySpeed={1000}
                    />
                </h3>
                {/* About me paragraph */}
                <p className='text-base sm:text-lg md:text-lg lg:text-2xl text-gray-400 mt-8'>
                  I’m a passionate front-end developer with 2 years of experience creating clean, user-friendly websites. Skilled in React.js, Tailwind CSS, and modern JavaScript, I transform ideas into interactive digital experiences. I love learning, solving challenges, and building projects that make an impact about both visual appeal and functionality.
                </p>
                {/* Resume Button */}
                <a 
                href=''
                target='_blank'
                rel='noopener noreferer'
                className='text-lg inline-block rounded-full py-3 mt-8 font-bold transition duration-300 transform hover:scale-105 px-8'
                style={{
                  background:'linear-gradient(90deg,#8245ec,#a855f7)',
                  boxShadow:' 0 0 2px #8245ec, 0 0 2px #a855f7, 0 0 40px #8245ec '
                }}
                >
                 DOWNLOAD CV
                </a>
            </div>
            {/* Right image side */}
            <div className='md:w-1/2 flex justify-center md:justify-end '>
                <Tilt
                className='w-48 h-48 sm:w-64 sm:h-64 md:w-[22rem] md:h-[30rem] lg:w-[27rem] lg:h-[35rem] border-4 border-purple-700 rounded-full '
                >
                  <img 
                   src={profileImage}
                   className='w-full h-full rounded-full object-cover'
                  />  
                </Tilt>     
            </div>
      </Container>
       
    </section>
  )
}

export default About
