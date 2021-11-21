import React from "react";
import Logo from "../images/logo_white.png";

const Banner = ({ setStyle }) => {
  return (
    <div className={`banner_background ${setStyle.bg}`}>
      <div className="title_container">
        <img src={Logo} alt="logo" />
        <h1>Bike Fun！自行車旅遊網</h1>
      </div>
    </div>
  );
};

export default Banner;
