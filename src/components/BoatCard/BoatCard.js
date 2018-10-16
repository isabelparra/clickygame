import React from "react";
import "./BoatCard.css";

const BoatCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Capacity</strong> {props.capacity}
        </li>
        <li>
          <strong>Activity:</strong> {props.activity}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removeBoat(props.id)} className="remove">𝘅</span>
  </div>
);

export default BoatCard;
