import React, {useState } from 'react';
import './DropDown.css'
import { dropDownData } from '../../containers/navbar/data';

import { ReactComponent as CaretDown } from '../../assets/caretdown.svg'; // Importing CaretDown SVG as a React component




function DropDown({title,index}) {//destructuring props, getting title,index from parent component Navbar


  // State to manage whether the dropdown is visible (mouse is over the title)
  const [mouseOver, setMouseOver]= useState(false); //useState for mouse entering and mouse exiting

  //  Set mouseOver to true when mouse enters the Title Div                  
  function handleMouseEnter(){
    setMouseOver(true);
  }

    //  Set mouseOver to false when mouse exits the Title Div         
  function handleMouseOut(){
    setMouseOver(false);
  }

  return (
    <div className='dropdown'  
    onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseOut} >  {/* Title div with mouse enter and leave events to control dropdown visibility */}

      
      <div className='dropdown__title' >
        {title} 
        <CaretDown className='dropdown__caretdown'/>  {/* Caret down icon */}
      </div>

              
      {/* Dropdown list, visibility controlled by mouseOver state */}
      <ul className={mouseOver?'dropdown__list':'dropdown__list-hidden'} > 
        {dropDownData[index].map((item,idx)=> <li key={idx}>{item}</li>)}       
      </ul>

    </div>
  ) 
}

export default DropDown
