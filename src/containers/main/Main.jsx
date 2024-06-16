import React from 'react'
import './Main.css'
import { Carousel } from '../../components'
import {Blog} from '../index'




function Main() {
  return (
    <div className='main'>
      
      <div>
        <Carousel />
      </div>
      
      <div className='blog'>
        <Blog />
      </div>

      <div  className='gallery'>

      </div>

      <div className='cta'>

      </div>



    </div>
  )
}

export default Main