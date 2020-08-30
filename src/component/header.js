import React from "react";
import "../App.css";

export default function Header() {
  return (
    <div className="header">
      <h1>Simple Code.</h1>
      <div className="burger">
        <div className="line1 line"></div>
        <div className="line2 line"></div>
        <div className="line3 line"></div>
      </div>
    </div>
  );
}
