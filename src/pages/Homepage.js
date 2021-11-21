import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// components
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// img
import Img_boyWithRoute from "../images/boyWithRoute.png";
import Img_busStation from "../images/index_busStation.jpg";
import Img_new01 from "../images/index_news01.jpg";
import Img_new02 from "../images/index_news02.jpg";
import Img_route from "../images/index_route.jpg";

const Homepage = () => {
  const styleSettings = {
    radius: "radius",
    bg: "home_banner",
  };

  return (
    <div>
      <Banner setStyle={styleSettings} />
      <Navbar setStyle={styleSettings} />
      <main className="homepage">
        <section className="flex_column">
          <img src={Img_boyWithRoute} alt="biking" />
          <p>
            便。告全禱我王劈有哇汐懇久給，分網呢瑄度不期清？資空有，沾對路韜空文近建回屠樞快錯樣沒卻遂人到騷不胡辨音次結，盪陳車，比反網己使。它栽！虛四是甚首；翩鏢社果捐貨話買啊？炭沾強三管期、同題己我己…、鵰章措秩合到公話慈在期不金議是曹搬大愛成以章陳要喜區跨，星退傑狗市蓉都利娟車龍人廿西美法沖憐為誰提嗜？裊張前廬狸中定，老靶五嘉慶卸太神戰經我重的，直看意澡每崎入因北用厚；要便，平是直找頒徊核艱至又放想工。
          </p>
        </section>
        <section className="main_center">
          <Link className="title" to="/news">
            <h3>最新消息</h3>
          </Link>
          <div className="item1">
            <img className="news_bg" src={Img_new01} alt="" />
            <div className="content">
              <span>2021/09/22</span>
              <p>16條自行車多元路線遊程推廣及販售</p>
              <Link to="/">+ Read more</Link>
            </div>
          </div>
          <div className="item1">
            <img src={Img_new02} alt="" />
            <div className="content">
              <span>2021/09/22</span>
              <p>最美伸展台 芝蘭公園海上觀景平台啟用</p>
              <Link to="/">+ Read more</Link>
            </div>
          </div>
          <div className="item1">
            <Link className="button" to="/">
              <span>更多最新消息</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </section>
        <section className="main_center">
          <Link className="title" to="/route">
            <h3>探索路線</h3>
          </Link>
          <div className="item2">
            <p>自動定位、手動輸入都方便！ 快速找到離您最近的車道路線</p>
            <Link className="button" to="/route">
              <span>立刻搜尋</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <div className="item1">
            <img src={Img_route} alt="" />
          </div>
        </section>
        <section className="main_center">
          <Link className="title" to="/station">
            <h3>尋找站點</h3>
          </Link>
          <div className="item2">
            <img src={Img_busStation} alt="" />
          </div>
          <div className="item1">
            <p>即時站點地圖</p>
            <Link className="button" to="/station">
              <span>立刻查看</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <p>服務中心資訊</p>
            <Link className="button" to="/question">
              <span>立刻查看</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </section>
        <section className="flex_column">
          <h3>常見問題</h3>
          <p>憫感忿加它棺再？琵言襟嗎賺叫要中吧？</p>
          <p>憫感忿加它棺再？琵言襟嗎賺叫要中吧？要萍浮現以蹤功應版有了</p>
          <p>襟嗎賺叫要中吧？要萍浮現以蹤功應版有了</p>
          <Link className="button" to="/question">
            <span>更多常見問題</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
