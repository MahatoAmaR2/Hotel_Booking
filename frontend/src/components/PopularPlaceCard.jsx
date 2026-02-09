import React from "react";
import "../App.css";
const PopularPlaceCard = ({ image, title, price, location }) => {
  return (
    <>
      <div className="popular__card">
        <img src={image} alt="popular hotel" />
        <div className="popular__content">
          <div className="popular__card__header">
            <h4>{title}</h4>
            <h4>{price}</h4>
          </div>
          <p>{location}</p>
        </div>
      </div>
    </>
  );
};

export default PopularPlaceCard;
