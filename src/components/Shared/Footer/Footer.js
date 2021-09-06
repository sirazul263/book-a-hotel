import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../../../media/logo.png";
import {
  faFacebookF,
  faYoutube,
  faTwitter,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <div className="footer mb-1">
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <div className="address">
            <img src={logo} alt="" className=" pb-3 mx-5" />

            <p className="text-white text-center ">
              Baitul Khair (5th floor), <br /> 48/A,Purana Paltan, Dhaka-1000,{" "}
              <br />
              Bangladesh. +8801829848975 <br /> info@soroltechnologies.com
            </p>
          </div>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <div>
            <p className="text-white text-center">
              For any query, please call{" "}
            </p>
            <h2 style={{ color: "#0091ea" }}> +8801734320986</h2>
          </div>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <div>
            <p className="text-white text-center">
              Connect With Our Social Media
            </p>
            <div className="social-media">
              <ul className="list-unstyled d-flex justify-content-center">
                <li className="social-icons text-center  mx-2 facebook">
                  <FontAwesomeIcon icon={faFacebookF} />
                </li>
                <li className="social-icons text-center mx-2 youtube">
                  <FontAwesomeIcon icon={faYoutube} />
                </li>
                <li className="social-icons text-center mx-2 twitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </li>
                <li className="social-icons text-center  mx-2 pinerest">
                  <FontAwesomeIcon icon={faPinterestP} />
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
