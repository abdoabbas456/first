import React from "react";
import "../App.css";
import youtube from "./img/youtube.svg";
import twitter from "./img/twitter.svg";
import instg from "./img/instagram.svg";
export default function Footer() {
  return (
    <div className="footer">
      <h1>Simple Code. &copy;</h1>
      <div className="iconsocial">
        <div className="icon1"><img src={youtube} alt="twitter-social-media" /></div>
        
        <div className="icon2"> <img src={instg} alt="youtube-social-media" /></div>
       
        <div className="icon3"><img src={twitter} alt="instagram-social-media" /></div>
        
      </div>
    </div>
  );
}
