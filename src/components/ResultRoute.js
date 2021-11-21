import React from "react";
import Card from "./Card";

const ResultRoute = ({ result }) => {
  return (
    <section className="container container_shadow">
      <div className="section_title">
        <h3>搜尋結果</h3>
        <p>找到離您最近的自行車車道</p>
        {/* {result && <p>{result}</p>} */}
      </div>
      <div className="section_cards">
        {result ? (
          result.map((r) => {
            return <Card props={r} />;
          })
        ) : (
          <p>無符合結果</p>
        )}
      </div>
    </section>
  );
};

export default ResultRoute;
