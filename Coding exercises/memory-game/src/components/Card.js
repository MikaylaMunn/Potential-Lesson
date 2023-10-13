// Card.js
import React from "react";
import { Card as BootstrapCard } from "react-bootstrap";
import "./Card.css"; // Import the CSS file

const Card = ({ value, isFlipped, isMatched, onClick }) => (
  <BootstrapCard
    className={`memory-card ${isFlipped ? "flipped" : ""} ${
      isMatched ? "matched" : ""
    }`}
    onClick={() => onClick(value)} // Use the 'value' property for click
  >
    <div className="card-content">
      {isFlipped || isMatched ? (
        <img src={value} alt="Card" /> // Display the image based on the 'value' property
      ) : (
        "?" // Display "?" when not flipped or matched
      )}
    </div>
  </BootstrapCard>
);

export default Card;
