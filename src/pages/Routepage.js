import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchRoute from "../components/SearchRoute";
import ResultRoute from "../components/ResultRoute";
import { getAuthorizationHeader } from "../commons/auth";

const Routepage = () => {
  const styleSettings = {
    radius: "radius",
    bg: "route_banner",
  };
  const [result, setResult] = useState("");

  const getData = async (city = "", keywords = "") => {
    // console.log(city, keywords);
    try {
      let res = await fetch(
        `https://ptx.transportdata.tw/MOTC/v2/Cycling/Shape/${city}?$top=12&$format=JSON`,
        {
          headers: getAuthorizationHeader(),
        }
      );
      let data = await res.json();
      // console.log(data);
      setResult(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className={`banner_background ${styleSettings.bg}`}></div>
      <Navbar setStyle={styleSettings} />
      <p>
        首頁<span>探索路線</span>
      </p>
      <SearchRoute onGetData={getData} />
      <ResultRoute result={result} />
      <Footer />
    </div>
  );
};

export default Routepage;
