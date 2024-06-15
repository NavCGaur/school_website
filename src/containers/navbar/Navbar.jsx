import React, {useState} from 'react'
import './Navbar.css'
import {DropDown} from '../../components/index' //importing DropDown component from index
import { ReactComponent as MenuIcon } from '../../assets/menu.svg'; // Importing Menu SVG as a React component
import { titles} from './data'; //Importing Titles data from data.js



function Navbar() {

  const [openMenu, setOpenMenu] = useState(false);
  
  function handleOpenMenu(){
    setOpenMenu(!openMenu);
  }

  return (
    <div className='navbar'>
       <div className='navbar__menu' onClick={handleOpenMenu}>
          <p>MENU</p>
        <MenuIcon className='navbar__menuicon' />
       </div>
       <div className='navbar__home'>
        <a href='#Home' aria-label='Home' >HOME</a>
       </div>

       {/* Calling DropDown component for each value of Title. Both Title value and index are passed as props. This way there is separate component instance for each Title and mouse events state dont clash.  */}
       <div className={'navbar__dropdown ' + (openMenu ? 'navbar__dropdown--open' : '')}>
       {titles.map((title,index) => <DropDown title={title} index={index} key={index} />)} 

       </div>

    </div>
  )
}
export default Navbar

