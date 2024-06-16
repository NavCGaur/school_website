import React from 'react'
import './Gallery.css'

import {ReactComponent as Bell} from '../../assets/bell.svg';
import {ReactComponent as Camera} from '../../assets/camera.svg';
import {ReactComponent as Video} from '../../assets/video.svg';
import {ReactComponent as VirtualTour} from '../../assets/up-down-left-right.svg';




function Gallery() {
  return (
    <div className='gallery'>
      <div className='gallery__newsletter'>
        <div className='gallery__container'>
          <div><Bell className='gallery__icon'/></div>
          <h2>Newsletter</h2>
        </div>
        <div className='gallery__link'>
          <a href='#'>+ Click here</a>
        </div>

      </div>

      <div className='gallery__photogallery'>
        <div className='gallery__container'>
        <div><Camera className='gallery__icon'/></div>
        <h2>Newsletter</h2>

        </div>
        <div className='gallery__link'>
        <a href='#'>+ Click here</a>
        </div>
      </div>

      <div className='gallery__videogallery'>
      <div className='gallery__container'>
        <div><Video className='gallery__icon'/></div>
        <h2>Newsletter</h2>
      </div>
      <div className='gallery__link'>
      <a href='#'>+ Click here</a>

      </div>
      </div>

      <div className='gallery__virtualtour'>
        
      <div className='gallery__container'>
      <div><VirtualTour className='gallery__icon'/></div>
      <h2>Newsletter</h2>


      </div>
      <div className='gallery__link'>
      <a href='#'>+ Click here</a>

      </div>
      </div>

    </div>
  )
}

export default Gallery

