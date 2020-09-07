import React from "react";
import "../App.css";
import photo from "./img/781.jpg";
export default function Home() {
  return (
    <div className="home">
      <div className="homebaner">
        <img className="photome" src={photo} alt="photome" />

        <p>Email</p>
        <p>abdabbas456@gmail.com</p>
        <p>Phone</p>
        <p>+966547022238</p>
      </div>

      <div className="hello">
        <h1 className="web0">hello</h1>
        <h1 className="web">
        {" "}
      
        
          Abdo Abbas web development</h1>
        <p className="prg">
          {" "}
          I love design & programing web and make web applactions usually by
          django .
        </p>
      </div>
    </div>
  );
}
