import React from "react";
import "../App.css";
import html from "./img/html.svg";
import css from "./img/css.svg";
import react from "./img/react.svg";
import python from "./img/python.svg";
import django from "./img/django.svg";
export default function Skills() {
  return (
    <div className="skills">
      <h1> Skills</h1>
      <div className="skillscard">
        <div className="skillscard1" >
          <img  src={html} alt="html"/>
          <h3>Html5</h3>
         
        </div>
        <div className="lines lines1"></div>
        <div className="lines lines2"></div>
        <div className="lines lines3"></div>
      
      
        <div className="skillscard2">
        <img  src={css} alt="css"/>
          <h3>Css3</h3>
        </div>
        <div className="skillscard3">
        <img  src={react} alt="react"/>
          <h3>React js</h3>
        </div>
        <div className="skillscard4">
        <img className="py" src={python} alt="python"/>
          <h3>python</h3>
        </div>
        <div className="skillscard5">
        <img className="django" src={django} alt="django"/>
          <h3>django</h3>
        </div>
       
      </div>
    </div>
  );
}
