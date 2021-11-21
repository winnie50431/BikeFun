import React, { useState } from "react";
import { cityData } from "../commons/cityData";

const SearchRoute = ({ onGetData }) => {
  const [city, setCity] = useState(`${cityData[0].value}`);
  const [keywords, setKeywords] = useState("");

  // 搜尋路線
  const searchRoute = (e) => {
    // 防止提交
    e.preventDefault();
    // 取得輸入資訊
    onGetData(city, keywords);
  };

  return (
    <section className="container container_shadow">
      <div className="section_title">
        <h3>探索路線</h3>
        <p>找到離您最近的自行車車道</p>
      </div>
      <form className="section_form" action="">
        <div>
          <label className="label" htmlFor="citySelect">
            選擇縣市
          </label>
          <select
            name=""
            id="citySelect"
            onChange={(e) => setCity(e.target.value)}
          >
            {cityData.map((city, index) => (
              <option key={index} value={`${city.value}`}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label" htmlFor="">
            關鍵字
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="請輸入關鍵字"
            onChange={(e) => setKeywords(e.target.value)}
          />
          <button onClick={searchRoute}>GO !</button>
        </div>
      </form>
    </section>
  );
};

export default SearchRoute;
