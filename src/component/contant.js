import React from "react";
import "../App.css";

export default function Contant() {
  return (
    <div className="contant">
      <h1>Contant</h1>

      <form className="contant-form">
        <label className="form1" htmlFor="name">
          Name
        </label>
        <input className="form2" type="text" maxLength="20" />
        <label className="form3" htmlFor="MAIL">
          Email
        </label>
        <input className="form4" type="email" />
        <label className="form5" htmlFor="Message">
        Message
        </label>
        <textarea className="form6" type="namber" />
        <button className="form7" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}