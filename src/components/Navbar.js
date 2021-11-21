import React from "react";
import { Link } from "react-router-dom";
import Logo_yellow from "../images/logo_yellow.png";

const Navbar = ({ setStyle }) => {
  return (
    <nav>
      <ul className={`subnav ${setStyle.radius}`}>
        <li className="logo">
          <Link to="/">
            <img src={Logo_yellow} alt="Logo" />
            <p>Bike Fun！自行車旅遊網</p>
          </Link>
        </li>
        <li>
          <Link to="/news">最新消息</Link>
        </li>
        <li>
          <Link to="/route">探索路線</Link>
        </li>
        <li>
          <Link to="/station">尋找站點</Link>
        </li>
        <li>
          <Link to="/question">常見問題</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
