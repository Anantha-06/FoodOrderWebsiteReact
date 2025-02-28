import Carousel from 'react-bootstrap/Carousel';
import '../App.css'

function HomepageCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src="https://res.cloudinary.com/dzmymp0yf/image/upload/v1740756877/Food%20Order%20Website/lewpzxcfbghh9jpzl8yw.jpg" className='carousel-image' />
      </Carousel.Item>
      <Carousel.Item interval={500}>  
        <img src="https://res.cloudinary.com/dzmymp0yf/image/upload/v1740756877/Food%20Order%20Website/Slider%20Image%203.jpg" className='carousel-image' />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://res.cloudinary.com/dzmymp0yf/image/upload/v1740756875/Food%20Order%20Website/Slider%20Image%202.jpg" className='carousel-image'/>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomepageCarousel;