import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const HomeMain = () => {
  const setDate = () => {
    let date = new Date().toDateString();
    console.log(date);
    // return the date string
    return date;
  };
  return (
    <div className="home-main mb-3">
      <div className="container search-bar d-flex justify-content-between pt-2">
        <div className="div">
          <h3>What are you looking for? </h3>
        </div>
        <div>
          <Button className="btn btn-primary">Search</Button>
        </div>
      </div>
      <h2 className="text-white fw-bold text-center py-5">LET'S TRAVEL</h2>
      <Container className="main-container">
        <h4 className="text-white text-center py-2">Search Your Hotel</h4>
        <div className="booking-form">
          <Row className="g-2 px-3 py-2 ">
            <Col xs={3}>
              <Form.Group className="mb-3" controlId="to">
                <Form.Label className="form-labels"> Where To</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Location"
                  className="form-input"
                />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3" controlId="checkIn">
                <Form.Label className="form-labels">Check In</Form.Label>
                <Form.Control
                  type="text"
                  name="date"
                  onFocus={(e) => (e.target.type = "date")}
                  placeholder="Date"
                  className="form-input"
                />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3" controlId="checkout">
                <Form.Label className="form-labels">Checkout</Form.Label>
                <Form.Control
                  type="date"
                  placeholder=""
                  className="form-input"
                />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3" controlId="persons">
                <Form.Label className="form-labels">Adult Per Room?</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  placeholder="1"
                  className="form-input"
                />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3" controlId="room">
                <Form.Label className="form-labels">Room</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  placeholder="1"
                  className="form-input"
                />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="" controlId="search">
                <Button
                  variant="primary"
                  type="submit"
                  className="btn btn-primary search-btn shadow"
                >
                  Search
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default HomeMain;
