import React, { useState } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import SearchStation from "../components/SearchStation";
import Map from "../components/Map";
import Footer from "../components/Footer";
import { getAuthorizationHeader } from "../commons/auth";
import { useEffect } from "react/cjs/react.development";

const Stationpage = () => {
  const styleSettings = {
    radius: "",
    bg: "station_banner",
  };
  const [result, setResult] = useState("");
  const [navy, setNavy] = useState("");
  const [currentPosition, setCurrentPosition] = useState([]);
  const getData = async (city = "", keywords = "") => {
    // console.log(city, keywords);
    try {
      let res = await fetch(
        `https://ptx.transportdata.tw/MOTC/v2/Bike/Availability/${city}?$top=10&$format=JSON`,
        {
          headers: getAuthorizationHeader(),
        }
      );
      let data = await res.json();
      console.log(data);
      setResult(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (navy === true) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const longitude = position.coords.longitude; // 經度
          const latitude = position.coords.latitude; // 緯度
          // console.log([latitude, longitude]);
          setCurrentPosition([latitude, longitude]);
          // 重新設定 view 的位置
          // mymap.setView([latitude, longitude], 13);
          // 將經緯度當作參數傳給 getData 執行
          // getStationData(longitude, latitude);
        },
        // 錯誤訊息
        function (e) {
          const msg = e.code;
          const dd = e.message;
          console.error(msg);
          console.error(dd);
        }
      );
    }
  }, [navy]);

  return (
    <div>
      <Navbar setStyle={styleSettings} />
      {/* <Banner setStyle={styleSettings} /> */}
      <Map result={result} currentPosition={currentPosition} />
      <SearchStation onSetNavy={setNavy} onGetData={getData} />
      <Footer />
    </div>
  );
};

export default Stationpage;
