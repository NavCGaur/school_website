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
  console.log(openMenu);

  return (
    <div className='navbar'>
       <MenuIcon className='navbar__menuicon' onClick={handleOpenMenu}/>
       <a href='#Home' aria-label='Home' className='navbar__home'>HOME</a>

       {/* Calling DropDown component for each value of Title. Both Title value and index are passed as props. This way there is separate component instance for each Title and mouse events state dont clash.  */}
       <div className={`navbar__dropdown ${openMenu ? 'navbar__dropdown--open' : ''}`}
>
       {titles.map((title,index) => <DropDown title={title} index={index} key={index} />)} 

       </div>

    </div>
  )
}
export default Navbar


/*

const DropDownData = [['Affiliation Details','Mandatory Disclosure'],
                        ['About the School','Our Motto','Vision', 'Faculty'],
                        ['Activities Calender','CUrriculam','Activities','School Calender'],
                        ['Affiliation Details','Mandatory Disclosure'],
                        ['About the School','Our Motto','Vision', 'Faculty'],
                        ['Activities Calender','CUrriculam','Activities','School Calender'],
                        ['About the School','Our Motto','Vision', 'Faculty'],
                        ['Activities Calender','CUrriculam','Activities','School Calender']
                       ]

       <div className='navbar__title' title={Title[0]}>
        CBSE DATA
       </div>
       <div className='navbar__title' title={Title[1]}>
        ABOUT US
       </div> 
       <div className='navbar__title' title={Title[2]}>
       ACADEMICS
       </div>
       <div className='navbar__title' title={Title[3]}>
       ADMISSION
       </div>
       <div className='navbar__title' title={Title[4]}>
       PARENT'S ZONE
       </div>
       <div className='navbar__title' title={Title[5]}>
       STUDENT'S ZONE
       </div>
       <div className='navbar__title' title={Title[6]}>
       NEWS LETTER
       </div>
       <div className='navbar__title' title={Title[7]}>
       CONTACT
       </div>


       <ul className={mouseOver?'navbar__list':'navbar__list-hidden'} >
                                  {DropDownData[index].map((item,listIndex)=> <li>{DropDownData[index][listIndex]}</li>)}
                                </ul>
 */