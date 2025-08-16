import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSectionId, setSectionId] = useState("");

  //A function to trace the scrolling to change the Navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    };
    window.addEventListener('scroll', handleScroll);

    return () =>
      window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setSectionId(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }
  // menuItem to run loop 
  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Expereince" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" }
  ]

  return (
    <div>

      <nav className={`top-0 flex w-full fixed z-50 transition duration-300  ] 
        ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"}`}>

        <div className='text-white  px-10 w-full max-w-7xl md:mx-auto flex py-5 justify-between items-center'>

          {/* Logo */}
          <div className='text-xl md:text-2xl lg:text-3xl font-semibold lg:font-bold'>
            <span className='text-[#8245ec]'>&lt;</span>
            <span className='text-white'>Shoaib</span>
            <span className='text-[#8245ec]'>/</span>
            <span className='text-white'>Hassan</span>
            <span className='text-[#8245ec]'>&gt;</span>
          </div>

          {/* Deskstop Menu */}
          <ul className='hidden md:flex md:text-base lg:text-2xl font-medium space-x-8 text-gray-300'>
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[rgb(130,69,236)]
                    ${isSectionId == item.id ? "text-[#8245ec]" : ""
                  }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className='hidden md:flex space-x-4'>
            <a
              href='https://github.com/shoaib5124/Reactjs-Portfolio.git'
              target='_blank'
              rel='noopener noreferer'
              className='text-gray-300 hover:text-[#8245ec]'
            >
              <FaGithub size={26} />
            </a>
            <a
              href='https://www.linkedin.com/in/shoaib-ul-hassan-070ab333b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
              target='_blank'
              rel='noopener noreferer'
              className='text-gray-300 hover:text-[#8245ec]'
            >
              <FaLinkedin size={26} />
            </a>
          </div>
        </div>

        {/* Mobile menu icons */}
        <div className='md:hidden'>
          {isOpen ?(
              <FiX
                className='text-3xl mt-5 mr-10 text-white cursor-pointer'
                onClick={()=>setIsOpen(false)}
              />
            ):(
              <FiMenu
                className='text-3xl mt-5 mr-10 text-white cursor-pointer'
                onClick={()=>setIsOpen(true)}
              />
            )}{/* Mobile Menu Items */}
              {isOpen && (
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 mbackdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
                  <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
                    {menuItems.map((item) => (
                      <li
                        key={item.id}
                        className={`cursor-pointer hover:text-white ${
                          isSectionId === item.id ? "text-[#8245ec]" : ""
                        }`}
                      >
                        <button onClick={() => handleMenuItemClick(item.id)}>
                          {item.label}
                        </button>
                      </li>
                    ))}
                    <div className="flex space-x-4">
                      <a
                        href="https://github.com/codingmastr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white"
                      >
                        <FaGithub size={24} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white"
                      >
                        <FaLinkedin size={24} />
                      </a>
                    </div>
                  </ul>
                </div>
              )}

        </div>
      </nav>
    </div>
  )
}

export default Navbar
