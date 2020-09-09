import React from "react";
import "../App.css";

import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

export default function Footer() {
  return (
    <div className="footer">
      <h1>Simple Code. &copy;</h1>
      <div className="iconsocial">
        <div className="icon1">
          <PhoneIcon />
          <h5>966547022238</h5>
        </div>
      
        <div className="icon2">
        <MailOutlineIcon />
          <h5>abdabbas456@gmail</h5>
        </div>
      </div>
    </div>
  );
}

