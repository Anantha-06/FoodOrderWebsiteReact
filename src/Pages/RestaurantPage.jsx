import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import RestaurantPageItemCard from "../Components/RestaurantPageItemCard.jsx";
import "../App.css";

function RestaurantPage() {
  // Restaurant Axios//
  const [restaturantname, setrestaturantname] = useState([]);
  useEffect(() => {
    const singleResta = axios
      .get("https://fakestoreapi.com/products/1")
      .then((json) => setrestaturantname(json.data));
  }, []);
  //Menu Item Axio//
  const [menuItems, SetmenuItems] = useState([]);
  useEffect(() => {
    const allitems = axios
      .get("https://fakestoreapi.com/products")
      .then((json) => SetmenuItems(json.data));
  }, []);

  return (
    <>
      <Container fluid>
        <Container className="my-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded-5">
          <Row>
            <Col
              sm={6}
              md={6}
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <img
                src={restaturantname.image}
                className="restaurant-image"
              ></img>
            </Col>
            <Col
              sm={6}
              md={6}
              lg={6}
              className="d-flex flex-column justify-content-center align-items-start"
            >
              <div>
                <p className="fs-2 fw-bold">{restaturantname.title}</p>
              </div>
              <p className="fs-5">{restaturantname.description}</p>
            </Col>
          </Row>
        </Container>
        <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded-5">

        <div className="my-5">
          <p className="fs-1 fw-bold text-center secondHEader">Best In The BYTEEATS</p>
        </div>
        <Container>
          <div>
            {menuItems.map((item) => (
              <div key={item.id}>
                <RestaurantPageItemCard
                  image={item.image}
                  desc={item.description}
                  price={item.price}
                  heading={item.title}
                />
              </div>
            ))}
          </div>
        </Container>
        </div>
      </Container>
    </>
  );
}
export default RestaurantPage;
