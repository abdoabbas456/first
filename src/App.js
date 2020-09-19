import React ,{useEffect}from "react";

import "./App.scss";
import gsap from "gsap";



import { Route } from "react-router-dom";

import Header from "./component/header";
import Home from "./component/about"
import Case from "./component/cases"
import { BrowserRouter as Router, Switch } from "react-router-dom";






function App() {
  useEffect(()=>{
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh",`${vh}px`);
  const tl = gsap.timeline();
   tl.from(".line span", 1.8, {
    y: 100,
    ease: "power4.out",
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3
    }
  })},[]);
  return (
    <Router>
      <div className="App">
        <Header />
        <Home/>
        <Case/>
        
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                {/* <Route exact path="/" component={Home} /> */}
                {/* <Route exact path="/opportunities" component={Opportunities} />
                <Route exact path="/solutions" component={Solutions} />
                <Route exact path="/contact-us" component={Contact} /> */}
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}


export default App;
