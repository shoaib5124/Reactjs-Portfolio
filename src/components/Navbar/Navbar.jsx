import React, {useState, useEffect} from 'react';
import {Fimenu, FiX} from 'react-icons/fi';
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
const menuItem = [
    {id:"about", label:"About"},
    {id:"skills", label:"Skills"},
    {id:"work", label:"Projects"},
    {id:"experience", label:"Expereince"},
    {id:"education", label:"Education"}
]

  return (
    <div>
      <h1>Navbar</h1>
    </div>
  )
}
  
export default Navbar
