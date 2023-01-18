import React from "react"
import allCountryScores from "./scores"

function HighScoreTable(props) {
return (
  <div>
    <div className="AllItems">
      <h1>igh Score: {props.country}</h1>
      <ul className="list">
        {props.scores.map((score, index) => {
          return (
            <div className="Items">
              <li className="listItems" key = {index}>
                {" "}
                {score.n} {score.s}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  </div>
)}



export default HighScoreTable;