//React import
import React from 'react'

//Style import
import './Footer.css'

//importing SVG
import {Location, Phone, Envelope} from '../../assets/assets'

function Footer() {
  return (
    <div className='footer'>

      <div className='footer__topcontainer'>
        
        <div className='footer__contact'>
          <div className='footer__title'>
            <h2>Contact Information</h2>
          </div>

          <div className='footer__address'>
            <div className='footer__container'>
              <Location className='footer__icon'/>
              <p>K Public School</p>
            </div>
            <p className='footer__address-text'>Radada, Rishikesh, Dehradun -248156</p>

            <div className='footer__container'>
              <Phone className='footer__icon'/>
              <p>+91-79002767600, 0135-2456200</p>
            </div>

            <div className='footer__container'>
              <Envelope className='footer__icon'/>
              <p>+91-79002767600, 0135-2456200</p>
            </div>

          </div>
      </div>

      <div className='footer__location'>
        <div className='footer__title'> 
          <h2>Locate Us</h2>
        </div>
        <div className='footer__map'>
        <iframe className='footer__mapframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.399715384479!2d78.24708920557215!3d30.058280095100802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093ef6166707bd%3A0xea85d27af97b829c!2sLakkad%20Ghat%20Rd%2C%20Birpur%20Khurd%2C%20Rishikesh%2C%20Uttarakhand%20249204!5e0!3m2!1sen!2sin!4v1718536902580!5m2!1sen!2sin" width="200%" height="40%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>
      </div>

      <div className='footer__copyright'>
        <p>Copyright ©2024 Public School Rishikesh . All Rights Reserved</p>
      </div>

    </div>
  )
}

export default Footer