import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CharCard from "./components/characterCards";

const App = () => {
  const [CharacterData, setCharacterData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        setCharacterData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="content">
        <CharCard charInfo={CharacterData.results} />
      </div>
    </div>
  );
};

export default App;
