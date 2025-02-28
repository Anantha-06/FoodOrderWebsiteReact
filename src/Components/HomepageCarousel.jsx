import Carousel from 'react-bootstrap/Carousel';
import '../App.css'

function HomepageCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src="src/Image/arrangement-with-delicious-food-copy.jpg" className='carousel-image' />
      </Carousel.Item>
      <Carousel.Item interval={500}>  
        <img src="src/Image/fast-food-concept-with-maize-burger.jpg" className='carousel-image' />
      </Carousel.Item>
      <Carousel.Item>
        <img src="src/Image/ingredients-near-pizza.jpg" className='carousel-image'/>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomepageCarousel;