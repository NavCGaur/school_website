//React imports
import { useState, React} from 'react';

//Style imports
import './Carousel.css';

//Importing SVG and images
import {carouselImage1, carouselImage2, carouselImage3, carouselImage4, CarouselCircle, CarouselCircleDot, LeftArrow, RightArrow} from '../../assets/assets.js'


function Carousel() {

  const images = [carouselImage1, carouselImage2, carouselImage3, carouselImage4] ;

  const [imageIndex, setImageIndex] = useState(0)


   function showNextImage() {
    setImageIndex(prevIndex => prevIndex === (images.length - 1)? 0: (prevIndex + 1)
    )
  }

  function showPrevImage() {
    setImageIndex(prevIndex => (prevIndex === 0)? images.length - 1: (prevIndex - 1))
  }

  return (
    
    <div className='carousel'>
      <div className='carousel__banner' > 
        {images.map((image, index)=> <img src={image} alt='' key={index} style={{ transform: `translateX(${-100 * imageIndex}%)`,
                                                                                  transition: 'transform 0.5s ease-in-out' }}/>)}
        
      </div>

      <div className='carousel__arrow' onClick={showPrevImage}>
        <LeftArrow className='carousel__leftarrow'/>
        <div className='carousel__arrow-leftbg' ></div>
      </div>
      <div className='carousel__arrow'onClick={showNextImage}>
        <RightArrow className='carousel__rightarrow'/>
        <div className='carousel__arrow-rightbg' ></div>
      </div>

      <div className='carousel__circle'>
        {images.map((_,index)=> (imageIndex === index ? 
          (<CarouselCircleDot key={index} className='carousel__circle--dot' />  ) 
          : 
          (<CarouselCircle key={index} className='carousel__circle--empty' />  )
          ))}
      </div>
  </div>


  )
}

export default Carousel