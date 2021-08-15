import 'react-slideshow-image/dist/styles.css'
import React from 'react';
import { Slide } from 'react-slideshow-image';
import IMG from '../images/kitchen.png'
import IMG1 from '../images/images.png'
import IMG2 from '../images/image3.png'
import IMG3 from '../images/image4.png'

const slideImages = [
  IMG,
  IMG1,
  IMG2,
  IMG3
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        <div>
          <div className="each-slide" style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span>Slide 1</span>
          </div>
        </div>
        <div>
          <div className="each-slide" style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>Slide 2</span>
          </div>
        </div>
        <div>
          <div className="each-slide" style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>Slide 3</span>
          </div>
        </div>
        <div>
          <div className="each-slide" style={{'backgroundImage': `url(${slideImages[3]})`}}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default Slideshow;