import React from "react";
import HomepageCarousel from "../Components/HomepageCarousel.jsx";
import BestSellerSlider from "../Components/BestSellerSlider.jsx";
import RestaurantCard from "../Components/RestaurantCard.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import "../App.css";

function Homepage() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const allProductList = axios
      .get("https://fakestoreapi.com/products")
      .then((json) => setProductList(json.data));
  }, []);

  return (
    <>
      <div className="backgroundGradient">
        <HomepageCarousel />
        <BestSellerSlider />
        <Container fluid>
          <Row>
            <p className="text-center my-5 fs-1 fw-bold">Restaurants</p>
            {productList.map((item) => (
              <Col
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                xxl={3}
                className=""
                key={item.id}
              >
                <RestaurantCard
                  title={item.title}
                  name={item.name}
                  image={item.image}
                  status={item.status}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Homepage;
