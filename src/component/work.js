import React from "react";
import "../App.css";
import pizza from "./img/123.jpg";
import travel from "./img/125.jpg";
import Adopt from "./img/126.jpg";
export default function App() {
  return (
    <div className="work">
      <h1>Working</h1>
      <div className="card">
        <div className="card1">
          <img src={pizza} alt="pizzehome" />
          <div className="carddoc">
            <h3>PizzeHome</h3>
          </div>

          <div className="card2">
            <img src={travel} alt="travell" />
            <div className="carddoc">
              <h3>Travel</h3>
            </div>
          </div>

          <div className="card3">
            <img src={Adopt} alt="adoptme" />
            <div className="carddoc">
              <h3>Adopt-me</h3>
            </div>
          </div>
        
            </div>
          </div>
        </div>
     
   
  );
}
