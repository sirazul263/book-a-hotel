import React from "react";
import { Container, Row } from "react-bootstrap";
import seymon from "../../../media/seymon.png";
import mermaid from "../../../media/mermaid.png";
import asia from "../../../media/hotel-asia.png";
import sixSeason from "../../../media/Six-Season.png";
import seaShine from "../../../media/Hotel-Sea-Shine.png";
import silverBay from "../../../media/Hotel-Silver-Bay.png";
import defaultImg from "../../../media/default-room-image.png";
import coastalPeace from "../../../media/Hotel-Coastal-Peace.png";
import raihan from "../../../media/Raihan-Hotel.png";
import elaf from "../../../media/Hotel-Elaf-International.png";
import HotelCard from "./HotelCard";
const Hotels = () => {
  const hotels = [
    {
      id: 1,
      name: "Seymon Beach Resort",
      room: 400,
      img: seymon,
    },
    {
      id: 2,
      name: "Mermaid Resort",
      room: 350,
      img: mermaid,
    },
    {
      id: 3,
      name: "Hotel Asia",
      room: 122,
      img: asia,
    },
    {
      id: 4,
      name: "Six Season",
      room: 90,
      img: sixSeason,
    },
    {
      id: 5,
      name: "Hotel Sea Shine",
      room: 25,
      img: seaShine,
    },
    {
      id: 6,
      name: "Hotel Silver Bay",
      room: 25,
      img: silverBay,
    },
    {
      id: 7,
      name: "Sea Hilton",
      room: 2,
      img: defaultImg,
    },
    {
      id: 8,
      name: "Cox's bazar Surf Club",
      room: 0,
      img: defaultImg,
    },
    {
      id: 9,
      name: "Hotel Asia-2",
      room: 0,
      img: defaultImg,
    },
    {
      id: 10,
      name: "Hotel Coastal Peace",
      room: 0,
      img: coastalPeace,
    },
    {
      id: 11,
      name: "Raihan Hotel",
      room: 0,
      img: raihan,
    },
    {
      id: 12,
      name: "Hotel Elaf International",
      room: 0,
      img: elaf,
    },
  ];
  return (
    <div className="mb-5">
      <Container className="hotel-title d-flex justify-content-center align-items-center mb-2">
        <p className="text-brand fw-bolder pt-2">
          More then <span style={{ color: "#0091ea" }}>12 Hotels</span> are
          waiting
        </p>
      </Container>
      <Container>
        <Row>
          {hotels.map((hotel) => (
            <HotelCard hotel={hotel} key={hotel.id}>
              {" "}
            </HotelCard>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Hotels;
