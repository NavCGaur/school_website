//React imports
import React from 'react'

//Style imports
import './Gallery.css'

//SVG imports
import {GalleryBell, GalleryCamera, GalleryVideo, GalleryUpDownLeftRightArrow} from '../../assets/assets.js';




function Gallery() {
  return (
    <div className='gallery'>
      <div className='gallery__newsletter'>
        <div className='gallery__container'>
          <div><GalleryBell className='gallery__icon'/></div>
          <h2>Newsletter</h2>
        </div>
        <div className='gallery__link'>
          <a href='#'>+ Click here</a>
        </div>

      </div>

      <div className='gallery__photogallery'>
        <div className='gallery__container'>
        <div><GalleryCamera className='gallery__icon'/></div>
        <h2>Newsletter</h2>

        </div>
        <div className='gallery__link'>
        <a href='#'>+ Click here</a>
        </div>
      </div>

      <div className='gallery__videogallery'>
      <div className='gallery__container'>
        <div><GalleryVideo className='gallery__icon'/></div>
        <h2>Newsletter</h2>
      </div>
      <div className='gallery__link'>
      <a href='#'>+ Click here</a>

      </div>
      </div>

      <div className='gallery__virtualtour'>
        
      <div className='gallery__container'>
      <div><GalleryUpDownLeftRightArrow className='gallery__icon'/></div>
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

