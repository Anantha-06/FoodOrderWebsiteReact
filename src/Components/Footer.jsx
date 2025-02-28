import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'

function Footer(){
    return(
<Container fluid className="bg-warning">
    <Row>
        <Col className="my-4 d-flex justify-content-center" xs={12} sm={12} md={6} lg={4}>
    <div className="d-flex flex-column gap-3 ">
            <img src='src/Image/bg1.png' className='footer-logimg'></img>
            <p>© 2025 ByteEats. All Rights Reserverd</p>
        <div className="d-flex gap-3 m-0 p-0 flex-nowrap">
            <img className="socialMedia-img" src="src/Image/facebook.png"/>
            <img className="socialMedia-img" src="src/Image/instagram.png"/>
            <img className="socialMedia-img" src="src/Image/twitter.png"/>
            </div>
        </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} >
        <div className="d-flex flex-column flex-nowrap">
            <p className="fs-5 fw-bold my-1">Pages</p>
         <p className="m-0 p-0"><a  className="text-decoration-none text-reset" href="#">About Us</a></p>
         <p className="m-0 p-0"><a  className="text-decoration-none text-reset" href="#">News</a></p>
         <p className="m-0 p-0"><a  className="text-decoration-none text-reset" href="#">Contact</a></p>
         <p className="m-0 p-0"><a  className="text-decoration-none text-reset" href="#">Blog</a></p>
         <p className="m-0 p-0"><a  className="text-decoration-none text-reset" href="#">Terms & Condition</a></p>
         <p className="m-0 p-0"><a  className="text-decoration-none text-reset" href="#">Privacy Policy</a></p>
        </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4}>
    <div className="d-flex flex-column flex-nowrap">
    <p className="fs-5 fw-bold my-1">Subscribe</p>
    <p>Simply enter your mail below:</p>
    <Form className="d-flex flex-row flex-nowrap gap-2">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Button variant="primary" type="submit" className="mb-3">
        Submit
      </Button>
    </Form>
    <p>By subscribing, you agree to receive emails from us and acknowledge our Privacy Policy.</p>
    </div>
    </Col>
    </Row>
    <div className="d-flex flex-row gap-lg-5 gap-md-2 gap-sm-1  flex-wrap justify-content-center">
        <div className="d-flex flex-row gap-2">
        <img src="src/Image/phone-call.png" className="footericon"/>
        <p><a  className="text-decoration-none text-reset" href="tel:+4733378901">+91 8075146088</a></p>
        </div>
        <div className="d-flex flex-row gap-2">
        <img src="src/Image/mail.png" className="footericon"/>
        <p><a className="text-decoration-none text-reset" href="mailto:manu06011998@gmail.com">byteeats@support.com</a></p>
        </div>
        <div className="d-flex flex-row gap-2">
        <img src="src/Image/location.png" className="footericon"/>
        <p>Near Palayam, Thiruvananthapuram, Kerala
        695020</p>
        </div>
        <div className="d-flex flex-row gap-4">
    <p className="fs-5 fw-bold">Download App On</p>
    <a href="#"><img src="src/Image/app.png" className="socialMedia-img"/></a>
    <a href="#"><img src="src/Image/android.png" className="socialMedia-img"/></a>
    </div>
    </div>
    </Container>

    )
}

export default Footer