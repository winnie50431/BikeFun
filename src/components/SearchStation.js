import React, { useState } from "react";
import { cityData } from "../commons/cityData";

const SearchStation = ({ onSetNavy, onGetData }) => {
  const [city, setCity] = useState(`${cityData[0].value}`); // 預設為第一筆資料
  const [keywords, setKeywords] = useState("");

  // 搜尋路線
  const searchStation = (e) => {
    // 防止提交
    e.preventDefault();
    // 取得輸入資訊
    onGetData(city, keywords);
  };

  return (
    <section className="container station_container">
      <div className="section_title">
        <h3>尋找站點</h3>
        <p>找到離您最近的自行車租借站</p>
      </div>
      <form className="section_form" action="">
        <div>
          <p style={{ marginRight: "2rem" }}>開啟定位</p>
          {/* 定位鈕 */}
          <div class="onoffswitch">
            <input
              type="checkbox"
              name="onoffswitch"
              class="onoffswitch-checkbox"
              id="myonoffswitch"
              tabindex="0"
              onChange={(e) => onSetNavy(e.target.checked)}
              // checked
            />
            <label class="onoffswitch-label" for="myonoffswitch">
              <span class="onoffswitch-inner"></span>
              <span class="onoffswitch-switch"></span>
            </label>
          </div>
          {/* 定位鈕 */}
        </div>
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
            路線關鍵字
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="請輸入關鍵字"
            onChange={(e) => setKeywords(e.target.value)}
          />
          <button onClick={searchStation}>GO !</button>
        </div>
      </form>
    </section>
  );
};

export default SearchStation;
