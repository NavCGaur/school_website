//React imports
import React, {useState} from 'react'

//Style import
import './Navbar.css'

//import SVG 
import { NavbarMenu } from '../../assets/assets.js'; //

//import DropDown component
import {DropDown} from '../../components/index' //

function Navbar() {

  const [openMenu, setOpenMenu] = useState(false);

  const menu = [        { title:'CBSE DATA', items:['Affiliation Details','Mandatory Disclosure']} ,
                        { title:'ABOUT US' , items:['About the School','Our Motto','Vision', 'Faculty']},
                        { title:'ACADEMICS', items:['Activities Calender','Curriculam','Activities','School Calender']},
                        { title:'ADMISSION', items:['Affiliation Details','Mandatory Disclosure']},
                        { title:"PARENT'S ZONE", items:['Affiliation Details','Mandatory Disclosure']} ,
                        { title:"STUDENT'S ZONE" , items:['About the School','Our Motto','Vision', 'Faculty']},
                        { title:'NEWS LETTER', items:['Activities Calender','Curriculam','Activities','School Calender']},
                        { title:'CONTACT', items:['Affiliation Details','Mandatory Disclosure']},
                ]


  
  function handleOpenMenu(){
    setOpenMenu(!openMenu);
  }

  return (
    <div className='navbar'>
       <div className='navbar__menu' onClick={handleOpenMenu}>
          <p>MENU</p>
        <NavbarMenu className='navbar__menuicon' />
       </div>
       <div className='navbar__home'>
        <a href='#Home' aria-label='Home' >HOME</a>
       </div>

       {/* Calling DropDown component for each value of Title. Both Title value and index are passed as props. This way there is separate component instance for each Title and mouse state dont clash.  */}
       <div className={'navbar__dropdown ' + (openMenu ? 'navbar__dropdown--open' : '')}>
       {menu.map((menuItem,index) => <DropDown menuData={menuItem} key={index} />)} 

       </div>

    </div>
  )
}
export default Navbar

