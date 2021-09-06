import React from "react";
import { Card, Col } from "react-bootstrap";

const HotelCard = (props) => {
  const { name, room, img } = props.hotel;

  return (
    <Col xs={4}>
      <div className="hotel-card" style={{ backgroundImage: `url(${img})` }}>
        <p className="text-white card-title pt-4 px-4 text-center">{name}</p>
        <div className="d-flex justify-content-end align-items-center text-white rooms">
          {room > 0 ? (
            <div>
              <h5>{room}+</h5>
              <p>available</p>
            </div>
          ) : (
            <p className="">No Room Available</p>
          )}
        </div>
      </div>
    </Col>
  );
};

export default HotelCard;
