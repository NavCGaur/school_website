//React imports
import {useState, React} from 'react';

//Style import
import './blog.css';

//SVG and image exports
import {carouselImage1, carouselImage2, carouselImage3, carouselImage4, LeftArrow, RightArrow} from '../../assets/assets.js'



function Blog() {

const [imageIndex, setImageIndex] = useState(0)

const images = [carouselImage1, carouselImage2, carouselImage3, carouselImage4];

const descriptions = [ "Children's Day"," Playground", "Performance"," More Activities" ];

const links = ["Read more 1","Read more 2","Read more 3","Read more 4"];


function showNextImage() {
    setImageIndex(prevIndex => prevIndex === (images.length - 1)? 0: (prevIndex + 1)
    )
  }

  function showPrevImage() {
    setImageIndex(prevIndex => (prevIndex === 0)? images.length - 1: (prevIndex - 1))
  }


  return (
    <div className='blog'>
        
        <div className='blog__activities'>
           <h2>ACTIVITIES</h2>
           <div className='blog__outContainer'>
            {images.map((_,index)=>

            <div className='blog__insideContainer'>
                <div className='blog__carousal'>
                    <img src={images[imageIndex]} key={index} ></img>

                    <div className='blog__arrow' onClick={showPrevImage}>
                     <LeftArrow className='blog__leftarrow'/>
                    </div>
                    <div className='blog__arrow'onClick={showNextImage}>
                     <RightArrow className='blog__rightarrow'/>
                    </div>
                </div>

                <div className='blog__description'>
                    <div className='blog__description-text'>
                        <h3>{descriptions[imageIndex]}</h3>
                    </div>

                    <div className='blog__description-link'>
                        <a>{links[imageIndex]}</a>
                    </div>
                </div>

            </div>
                    )}
            </div>

        </div>

        <div className='blog__para'>
            <div className='blog__para1'>            
                <h2>About The School</h2>
                <p>KPS Rishi is founded on the principle of Pramiti, meaning acquiring knowledge by proof. The emphasis of the School is to offer a stream of learning to the young scholars based on a ‘learning by doing’ approach. Our core group is led by eminent and nationally and internationally renowned educationists and education administrators.</p>
                <div className='blog__link'><a> Read more </a></div>
            </div>

            <div className='blog__para2'>            
                <h2>Principal's Message </h2>
                <p>This powerful quote by Helen Keller will forever stand the test of time. When we work together on a common goal, we can achieve things beyond our greatest imagination. This is specially true if our intentions are real and the purpose is for the greater good.</p>
                <div className='blog__link'><a>Read more  </a></div>
            </div>
        </div>

        <div className='blog__textscroll'>
                <div className='blog__updates'>
                    <h2>Latest Updates</h2>
                </div>

                <div className='blog__textscroll-text'>
                    <div class='blog__textscroll-text-content'>

                        <p>	
                        "Heartiest congratulations to Sanskriti of Grade 5B on emerging victorious in the Under-11 Inter School Badminton Competition organised by Dehradun Sports Association! Your exceptional skills, dedication, and passion for the game have paid off. We are incredibly proud of your achievement and wish you continued success in your future endeavors!"
                        </p>
                        <p>The Orientation Programme will be held on Monday, 1st April, 2024.</p>
                        <p>	Admissions Open (2024-25) from Grade Pre-Nursery to 9th and 11th </p>
                        <p>	Annual Day Celebration 2022-23 Annual Sports Day of class Pre Nursery to 2 was celebrated with great enthusiasm at Public School, Rishikesh on 22nd December 2022.</p>
                    </div>

                </div>
        </div>



    </div>
  )
}

export default Blog