import React, {useState, useEffect} from 'react';
import {FiMenu, FiX} from 'react-icons/fi';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen,setIsOpen]= useState(false);        
  const [isScrolled,setIsScrolled]= useState(false);        
  const [isSectionId,setSectionId]= useState("");
  
//A function to trace the scrolling to change the Navbar background
useEffect(()=>{
const handleScroll = ()=>{
    setIsScrolled(window.scrollY>50)
};
window.addEventListener('scroll',handleScroll);

return ()=>
    window.removeEventListener('scroll',handleScroll)
},[])

// Smooth scroll function
const handleMenuItemClick =(sectionId)=>{
    setSectionId(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if(section){
        section.scrollIntoView({behavior:'smooth  '})
    }
}
// menuItem to run loop 
const menuItems = [
    {id:"about", label:"About"},
    {id:"skills", label:"Skills"},
    {id:"work", label:"Projects"},
    {id:"experience", label:"Expereince"},
    {id:"education", label:"Education"}
]

  return (
    <div>

      <nav className={`top-0 flex fixed w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] 
        ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md":"bg-transparent"}`}>
        
       
        <div className='text-white flex py-5 justify-between items-center'>

            {/* Logo */}
            <div className='lg:font-bold font-semibold'>
                <span className='text-[#8245ec]'>&lt;</span>
                <span className='text-white'>Shoaib Ul</span>
                <span className='text-[#8245ec]'>/</span>
                <span className='text-white'>Hassan</span>
                <span className='text-[#8245ec]'>&gt;</span>
            </div>

           {/* Deskstop Menu */}
           <ul className='hidden md:flex space-x-8 text-gray-300'>
                {menuItems.map((item)=>(
                    <li
                    key={item.id} 
                    className={`cursor-pointer hover:text-[rgb(130,69,236)]
                    ${isSectionId == item.id ? "text-[#8245ec]": "" 
                    }`}
                    >
                        <button onClick={()=> handleMenuItemClick(item.id)}>
                            {item.label}
                        </button>
                    </li>
                ))} 
           </ul>

           {/* Social Icons */}
           <div className='hidden md:flex space-x-4'>
             <a><FaGithub size={24}/></a>
             <a><FaLinkedin size={24}/></a>
            </div>       
        </div>  
      </nav>
    </div>
  )
}
  
export default Navbar
