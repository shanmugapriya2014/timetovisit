import React from "react";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
      <Row className="justify-content-center align-items-center" style={{ marginTop:"0px" ,width:"1330px" }}>
        <Col lg={10}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../img/banner1.jpg")}
                alt="First slide"
                height="539vh"
                fluid
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../img/pic1.jpeg")}
                alt="Second slide"
                height="539vh"
                fluid
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../img/pic2.jpeg")}
                alt="Third slide"
                height="539vh"
                fluid
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../img/pic3.jpeg")}
                alt="Third slide"
                height="539vh"
                fluid
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../img/pic4.jpeg")}
                alt="Third slide"
                height="539vh"
                fluid
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    
  );
};

export default Home;
