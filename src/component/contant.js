import React from "react";
import "../App.css";

export default function Contant() {
  return (
    <div className="contant">
      <h1>Contant</h1>
      <div className="contant-form">
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" maxLength="20" />
          <label htmlFor="MAIL">Email</label>
          <input type="email" />
          <label htmlFor="PHONE">Phone</label>
          <input type="namber" maxLength="20" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
