import React from 'react';
import './Carousel.css';
import { useState } from 'react';

import Image1 from '../../assets/carousel-image-1.jpg';
import Image2 from '../../assets/carousel-image-2.jpg';
import Image3 from '../../assets/carousel-image-3.jpg';
import Image4 from '../../assets/carousel-image-4.jpg';
import {ReactComponent as Circle} from '../../assets/circle.svg'
import {ReactComponent as CircleDot} from '../../assets/circle-dot.svg'
import {ReactComponent as LeftArrow}  from '../../assets/leftarrow.svg';
import {ReactComponent as RightArrow}  from '../../assets/rightarrow.svg';

function Carousel() {

  const images = [Image1, Image2, Image3, Image4] ;

  const [imageIndex, setImageIndex] = useState(0)


   function showNextImage() {
    setImageIndex(prevIndex => prevIndex === (images.length - 1)? 0: (prevIndex + 1)
    )
  }

  function showPrevImage() {
    setImageIndex(prevIndex => (prevIndex === 0)? images.length - 1: (prevIndex - 1))
  }

  return (
    
    <div className='carousal'>
      <div className='carousal__banner' > 
        {images.map((image, index)=> <img src={image} alt='' key={index} style={{ transform: `translateX(${-100 * imageIndex}%)`,
                                                                                  transition: 'transform 0.5s ease-in-out' }}/>)}
        
      </div>

      <div className='carousal__arrow' onClick={showPrevImage}>
        <LeftArrow className='carousal__leftarrow'/>
        <div className='carousal__arrow-leftbg' ></div>
      </div>
      <div className='carousal__arrow'onClick={showNextImage}>
        <RightArrow className='carousal__rightarrow'/>
        <div className='carousal__arrow-rightbg' ></div>
      </div>

      <div className='carousal__circle'>
        {images.map((_,index)=> (imageIndex === index ? 
          (<CircleDot key={index} className='carousal__circle--dot' />  ) 
          : 
          (<Circle key={index} className='carousal__circle--empty' />  )
          ))}
      </div>
  </div>


  )
}

export default Carousel