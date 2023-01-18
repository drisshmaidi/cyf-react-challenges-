import React from "react";
import Card from "./Components/Card";
import allCountryScores from "./scores";

import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="header"> High Scores per Country</h1>
      {allCountryScores.map((country, index) => (
        <Card key = {index} country = {country.name} scores = {country.scores} />
      ))}
    </div>
  )}

export default App;
