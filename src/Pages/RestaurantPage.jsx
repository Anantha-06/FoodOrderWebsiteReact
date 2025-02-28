import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

function RestaurantPage() {
  const [restaturantname, setrestaturantname] = useState([]);
  useEffect(() => {
    const singleResta = axios
      .get("https://fakestoreapi.com/products/1")
      .then((json) => setrestaturantname(json.data));
  }, []);

  return <>
  <Container fluid>
<div><p className="fs-4 fw-bold">{restaturantname.title}</p></div>
  </Container>
  </>;
}
export default RestaurantPage;
