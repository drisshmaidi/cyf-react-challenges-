import React from "react";

const Score = (props, key) => {
  return (
    <div className="card-container" key={key}>
      <div className="player-name">{props.name}</div>
      <div className="card-score">{props.score}</div>
    </div>
  );
};

export default Score;
