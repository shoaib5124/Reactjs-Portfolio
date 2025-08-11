import React from 'react';
import {Typewriter}from 'react-simple-typewriter';
import profileImage from '../../assets/assets/profile2.png'
import Container from '../container';
const About = () => {
  return (
    <section
    id="about"
    className=' mt-10 font-sans'
    >
      <Container className='md:flex-row flex flex-col-reverse items-center justify-between py-10 '>
            {/* Left text side */}
            <div className='w-1/2'>
                {/* Greeting */}
                <h1 className='text-3xl sm:text-4xl font-bold md:text-5xl mb-2'>Hi, I am</h1>
                {/* Name */}
                <h2 className='text-4xl sm:text-5xl font-bold md:text-6xl'>Shoaib Ul Hassan</h2>
                {/* Skills headig with typing effects */}
                <h3 className='text-3xl sm:text-4xl text-[#8245ec] font-bold md:text-6xl mb-2'> 
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
            </div>
            {/* Right image side */}
            <div>
                <img 
                src={profileImage}
                className='w-[200px]'
                />       
            </div>
      </Container>
       
    </section>
  )
}

export default About
