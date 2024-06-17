import React from 'react'
import './Cta.css'

import{ReactComponent as Icon} from '../../assets/user.svg'

function Cta() {
    
  const links = ["Online Registration","Admission Enquiry","Online Fee Payment","School Calendar","Feedbacks"];


  return (
    <div className='cta'>
        <div className='cta__title'>
            <h2>Quick Links</h2>
        </div>
        <div className='cta__links'>
            {links.map((link,index)=> <div className='cta__container' key={index}>
                <Icon className='cta__icon'/>
                <p>{link}</p>
            </div>)}

        </div>
    </div>
  )
}

export default Cta