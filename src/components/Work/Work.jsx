import React, { useState } from 'react';
import Container from '../container';
import {projects} from '../../constants';
import ReactDom from 'react-dom';
const Work = () => {

  const [selectedProject, setSelectedProject] = useState(null);

  // Function to open Model
  const handleOpenModel = (project) =>{
    setSelectedProject(project)
  }

  // Function to close Model
  const handleCloseModel = ()=>{
  setSelectedProject(null)
  }
  return (
    <>
      <section
      id='work'
      className='bg-skills-gradient clip-path-custom pt-24 pb-36 z-[999]'
      >
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

              {/* Prjects Grid */}
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {projects.map((project)=>(
                  <div
                  id={project.id}
                    className='rounded-2xl  border bg-gray- hover:-translate-y-2 transition-transform duration-300
                  border-white h-full w-full gap-5 cursor-pointer shadow-2xl overflow-hidden hover:shadow-purple-500/50 '
                    onClick={()=> handleOpenModel(project)}
                  >
                    <div className='p-5'>
                      <img
                      className='w-full rounded-2xl h-48'
                      src={project.image}
                      />
                    </div>
                    <div className='p-5'>
                      <h3 className='text-1xl md:text-2xl lg:text-3xl font-bold mb-4'>
                        {project.title}
                      </h3>
                      <p className='text-gray-400 text-xl line-clamp-3 mb-4'>
                        {project.description}
                      </p>
                      <div className='flex flex-wrap'>
                        {project.tags.map((tag)=>(
                          <span className='inline-block m-2 px-2 py-1 text-xs bg-[#251f38]
                        text-purple-500 font-semibold rounded-full'>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>  
          </Container>
      </section>

              {/* Modal Container */}
        {selectedProject && ReactDom.createPortal(
          <div
           className='fixed inset-0 bg-black z-[999]  bg-opacity-90 flex justify-center items-center'
          >
          <div className='w-[90%] max-h-[100vh] max-w-3xl rounded-2xl  bg-gray-900 relative   p-2'>
            <div className=' btn-close-white absolute top-2 right-2 '>
              <button
               onClick={handleCloseModel}
               className='text-white  text-3xl md:text-4xl lg:text-5xl font-bold'
              >&times;</button>
            </div>
            <div className='flex flex-col mt-14 gap-y-5'>
              <div
              className='w-full flex justify-center '
              >
                <img
                key={selectedProject.key}
                src={selectedProject.image}
                className='rounded-2xl'
                />
              </div>
              <div>
                <h3 className=' text-white text-1xl md:text-2xl lg:text-3xl font-bold mb-3'>
                  {selectedProject.title}
                </h3>
                <p className='text-gray-400 text-xl '>
                  {selectedProject.description}
                </p>
              </div>
              <div>
                {selectedProject.tags.map((tag)=>(
                  <span className='inline-block m-2 px-2 py-1 text-xl bg-[#251f38]
                   text-purple-500 font-semibold rounded-full'>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Github and Live demo links */}
              <div className='flex text-white gap-x-5 font-bold text-2xl'>
                 <a
                 className='bg-[#251f38] w-1/2 rounded-3xl text-center py-2 cursor-pointer'
                 >View Code</a>
                 <a
                 className='bg-purple-500 w-1/2 rounded-3xl text-center py-2 cursor-pointer'
                 > Live Demo</a>
              </div>
            </div>
          </div>
          </div>,
          document.body
        )}
    </>  
  )
}

export default Work
