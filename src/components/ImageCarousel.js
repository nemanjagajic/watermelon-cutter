import React from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import { useState } from 'react'
import cutting from '../assets/cutting.jpg'
import cutting2 from '../assets/cutting2.png'
import tutorial from '../assets/tutorial.jpg'
import '../styles/Carousel.css'

const ImageCarousel = () => {
  const [value, setValue] = useState(0);

  const onChange = value => {
    setValue(value);
  }

  return (
    <div>
      <Carousel
        value={value}
        onChange={onChange}
        draggable={false}
      >
        <img alt={'carouselImg'} className='carouselImg' src={cutting} />
        <img alt={'carouselImg'} className='carouselImg' src={cutting2} />
        <img alt={'carouselImg'} className='carouselImg' src={tutorial} />
      </Carousel>
      <Dots
        value={value}
        onChange={onChange}
        thumbnails={[
          <img alt={'carouselImg'} className='carouselImgSmall' src={cutting} />,
          <img alt={'carouselImg'} className='carouselImgSmall' src={cutting2} />,
          <img alt={'carouselImg'} className='carouselImgSmall' src={tutorial} />
        ]}
      />
    </div>
  );
};

export default ImageCarousel;
