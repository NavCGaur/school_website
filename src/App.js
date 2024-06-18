// React imports
import React from 'react'

//Style imports
import './App.css';

// Component imports
import {Modal, Carousel, Gallery, Cta} from './components'
import {Header, Blog, Footer} from './containers'


function App() {
  return (
    <div>
  <Modal />

  <Header />

  <div className='main'>
    <div className='carousal'>
      <Carousel />
    </div>

    <div className='blog'>
      <Blog />
    </div>

    <div className='gallery'>
      <Gallery />
    </div>

    <div className='cta'>
      <Cta />
    </div>
  </div>

  <Footer />
</div>
  )
}

export default App;
