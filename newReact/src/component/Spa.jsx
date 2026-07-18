import React, { useState } from "react";
export default function RenderPage() {
  const [initpage, setPage] = useState("Home");
  const setHomePage = () => {
    setPage("Home");
    console.log(initpage);
  };
  const setAboutPage = () => {
    setPage("About");
    console.log(initpage);
  };
  const setContactPage = () => {
    setPage("Contact");
    console.log(initpage);
  };
  return (
    <>
      <ul className="nav">
        <li className="nav-items">
          <button onClick={setHomePage}>Home</button>
          <button onClick={setAboutPage}>About</button>
          <button onClick={setContactPage}>Contact</button>
        </li>
      </ul>
      <div
        style={{
          display: initpage !== "Home" ? "none" : "",
        }}
        className="home"
      >
        <h2>Home Page........................................</h2>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
      </div>
      <div
        style={{
          display: initpage !== "About" ? "none" : "",
        }}
        className="about"
      >
        <h2>About Page..........................................</h2>
        <p>About</p>
        <p>About</p>
        <p>About</p>
        <p>About</p>
        <p>About</p>
        <p>About</p>
        <p>About</p>
      </div>
      <div
        style={{
          display: initpage !== "Contact" ? "none" : "",
        }}
        className="contact"
      >
        <h2>Contact Page........................................</h2>
        <p>Contact</p>
        <p>Contact</p>
        <p>Contact</p>
        <p>Contact</p>
        <p>Contact</p>
        <p>Contact</p>
        <p>Contact</p>
      </div>
    </>
  );
}
