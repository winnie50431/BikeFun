import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Card = ({ props }) => {
  return (
    <div className="card">
      {/* <img src="" alt="" /> */}
      <h4>{props.RouteName}</h4>
      <p>
        {props.Direction} {props.CyclingLength}
      </p>
      <p>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <span>
          {props.City}
          {props.Town}
        </span>
      </p>
    </div>
  );
};

export default Card;
