import React from 'react'
import './Main.css'
import { Carousel } from '../../components'
import {Blog} from '../index'
import {Gallery} from '../../components'
import {Cta} from '../../components'




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
        <Gallery />
      </div>

      <div className='cta'>
      <Cta />
      </div>



    </div>
  )
}

export default Main