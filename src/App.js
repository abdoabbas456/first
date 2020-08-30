import React from "react";
import "./App.css";
import Header from "./component/header";
import About from "./component/about";
import Work from "./component/work";
import Skills from "./component/skills";
import Contant from "./component/contant";


export default function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Work />
      <Skills />
      <Contant/>
     
    </div>
  );
}
