import React from "react";
import HomepageCarousel from "../Components/HomepageCarousel.jsx";
import BestSellerSlider from "../Components/BestSellerSlider.jsx";
import RestaurantCard from "../Components/RestaurantCard.jsx";
import { useState,useEffect } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";

function Homepage(){

const [productList,setProductList] = useState([])

useEffect(()=>{
    const productList = axios.get('https://fakestoreapi.com/products')
    .then((json) => setProductList(json.data));
},[])

    return(
        <>
        <HomepageCarousel/>
        <Container fluid>
        <Row>
            {productList.map((item)=>(
<Col>
<BestSellerSlider/>
</Col>
            ))}
        </Row>
        </Container>
        <RestaurantCard/>
        </>
    )
}
export default Homepage