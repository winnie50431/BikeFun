import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Map = ({ result, currentPosition }) => {
  let token = process.env.REACT_APP_MAPBOXTOKEN;

  useEffect(() => {
    console.log("dafault map");
    // setView([緯度, 經度], 13)
    let mymap = L.map("map").setView([23.5, 121], 10);

    // check if container is exist
    mymap.invalidateSize();

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: token,
      }
    ).addTo(mymap);
  }, []);

  return (
    <div
      id="map"
      style={{ height: "80vh", width: "60%", float: "inline-start" }}
    ></div>
  );
};

export default Map;
