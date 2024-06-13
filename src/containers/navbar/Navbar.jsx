import React, {useState} from 'react'
import './Navbar.css'
import {DropDown} from '../../components/index' //importing DropDown component from index
import { ReactComponent as MenuIcon } from '../../assets/menu.svg'; // Importing Menu SVG as a React component


function Navbar() {

  const [openMenu, setOpenMenu] = useState(false);
  const titles = ['CBSE DATA', 'ABOUT US','ACADEMICS', 'ADMISSION',"PARENT'S ZONE","STUDENT'S ZONE",'NEWS LETTER', 'CONTACT' ];
  
  function handleOpenMenu(){
    setOpenMenu(!openMenu);
  }

  return (
    <div className='navbar'>
       <MenuIcon className='navbar__menuicon' onClick={handleOpenMenu}/>
       <a href='#Home' aria-label='Home' className='navbar__home'>HOME</a>

       {/* Calling DropDown component for each value of Title. Both Title value and index are passed as props. This way there is separate component instance for each Title and mouse events state dont clash.  */}
       <div className={'navbar__dropdown ' + (openMenu ? 'navbar__dropdown--open' : '')}>
       {titles.map((title,index) => <DropDown title={title} index={index} key={index} />)} 

       </div>

    </div>
  )
}
export default Navbar

// <div className={`navbar__dropdown ${openMenu ? 'navbar__dropdown--open' : ''}`}>
