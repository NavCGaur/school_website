// React imports
import React from 'react'

// Style imports
import './Header.css' 

//Component import
import {Navbar} from '../index'
import {TextScroll} from '../../components';


//Importing SVG and images
import { Phone, Location, Envelope, HeaderWorldWeb, headerSchoolInfo  } from '../../assets/assets.js'; // 



function Header() {
  return (
    <header className='header'>

      {/*Top section with contact details and Login button*/ }
      <div className='header__top'>

        {/*Contact Information*/}
        <div className='header__contact' >
            <div className='header__container'>
                < Phone className='header__icon'/>
                <a href='tel:+917903232323,013532334343' aria-label='Phone Numbers'>+91-79032323323, 0135-32334343</a>
            </div>
            <div className='header__container'>
                < Envelope className='header__icon'/>
                <a href='mailto:kpsrishi@gmail.com' aria-label='Email'> kpsrishi@gmail.com</a>
            </div>
            <div className='header__container'>
                < HeaderWorldWeb className='header__icon'/>
                <a href='http://www.dpsrishikesh.com' target='_blank' rel='noopener noreferrer' aria-label='Website'>www.kpsrishi.com</a>
            </div>
        </div>
        
        {/*Login Button*/}
        <div className='header__login'>
            <a href='https://www.dpsrishikesh.com/' target='_blank' rel='noopener noreferrer' aria-label='Login' className='header__button'>Login</a>
        </div>

      </div>



    {/*Mid section  */}
    <div className='header__mid'>

      {/* Affiliation */}
        <img src={headerSchoolInfo} alt='School affiliation details' className='header__affiliation'/>

      {/* Location */}
      <div className='header__location'>
        <Location className='location__icon'/>
        <div className='location__text'>
          <p>LOCATION</p>
          <p> Rishikesh, Dehradun -248145</p>
        </div>
      </div>

       {/* Email */}
      <div className='header__email'>
        <Envelope className='email__icon'/>
        <div className='email__text'>
          <p>MAIL US TODAY</p>
          <a href='mailto:kpsrishi@gmail.com' aria-label='Email'> kpsrishi@gmail.com</a>
        </div>
      </div>

    </div>
    
    <nav className='header__nav'>
      <Navbar />
    </nav>

    <TextScroll />

  </header>
  )
}

export default Header
