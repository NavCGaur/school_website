import React, {useState} from 'react'
import './NavbarCopy.css'
import { ReactComponent as MenuIcon } from '../../assets/menu.svg'; // Importing Menu SVG as a React component

import { ReactComponent as CaretDown } from '../../assets/caretdown.svg'; // Importing CaretDown SVG as a React component



function NavbarCopy() {

  const [openMenu, setOpenMenu] = useState(false);

  const [mouseOver, setMouseOver]= useState(null); //useState for mouse entering and mouse exiting


  const titles = ['CBSE DATA', 'ABOUT US','ACADEMICS', 'ADMISSION',"PARENT'S ZONE","STUDENT'S ZONE",'NEWS LETTER', 'CONTACT' ];

  // Data for dropdown, each array represents the dropdown items for each title
  const dropDownData = [['Affiliation Details','Mandatory Disclosure'], 
  ['About the School','Our Motto','Vision', 'Faculty'],
  ['Activities Calender','Curriculam','Activities','School Calender'],
  ['Affiliation Details','Mandatory Disclosure'],
  ['About the School','Our Motto','Vision', 'Faculty'],
  ['Activities Calender','Curriculam','Activities','School Calender'],
  ['About the School','Our Motto','Vision', 'Faculty'],
  ['Activities Calender','Curriculam','Activities','School Calender']
  ]
  
  function handleOpenMenu(){
    setOpenMenu(!openMenu);
  }

  function handleMouseEnter(index){
    setMouseOver(index);
  }

    //  Set mouseOver to false when mouse exits the Title Div         
  function handleMouseOut(){
    setMouseOver(null);
  }

  return (
    <div className='navbarcopy'>
       <MenuIcon className='navbarcopy__menuicon' onClick={handleOpenMenu}/>

       <a href='#Home' aria-label='Home' className='navbarcopy__home'>HOME</a>

       
       <div className='navbarcopy__container' >

        {titles.map((title,index) => 

        <div className='navbarcopy__dropdown'
          onMouseEnter={()=>handleMouseEnter(index)} 
          onMouseLeave={handleMouseOut} >

          <div className='navbarcopy__title'>
           <p>{title}</p>
           <CaretDown className='navbarcopy__caretdown'/>   
          </div>        

          {
            mouseOver===index &&
            <ul className='navbarcopy__list'>
            {dropDownData[index].map((data,idx)=> <li key={idx}>{data}</li>)}
            </ul>
          }
        </div>
      
        )} 

       </div>

    </div>
  )
}
export default NavbarCopy

// <div className={`navbar__dropdown ${openMenu ? 'navbar__dropdown--open' : ''}`}>
