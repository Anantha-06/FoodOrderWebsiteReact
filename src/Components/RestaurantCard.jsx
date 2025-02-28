import Card from 'react-bootstrap/Card';
import '../App.css'

function RestaurantCard(props) {
  return (
    <Card className='d-flex text-center border border-0  rounded-5 my-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
      <a href='#' className='text-decoration-none text-reset '>
      <Card.Img variant="top" src={props.image} className='restaurantCard-image ' />
      <Card.Body>
        <Card.Title className='text-center fw-bold'>{props.title}</Card.Title>
        <Card.Text name="restaturant-status" className='text-center'>Open</Card.Text>
      </Card.Body>
      </a>
    </Card>
  );
}

export default RestaurantCard;