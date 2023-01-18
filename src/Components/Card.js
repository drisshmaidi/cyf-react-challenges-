import React from "react";
import Score from "./Score";

const Card = (props, key) => {
  return (
    <div className="card" key={key}>
      <h2 className="card-header">HIGH SCORES: {props.country}</h2>
      {props.scores.map((item, index) => {
        return <Score key={index} name={item.n} score={item.s} />;
      })}
    </div>
  );
};

export default Card;
