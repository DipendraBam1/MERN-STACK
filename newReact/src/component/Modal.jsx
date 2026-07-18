import React from "react";
import Button from "./Button";
import { useState } from "react";
export default function Modaloverlay() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)} label="Open Modal" />{" "}
      {showModal && (
        <div className="overlay">
        <div className="modalOverlay">
          <label>Enter name</label>
          <input type="text" placeholder="Enter name" />
           <label>Enter passsword</label>
          <input type="password" placeholder="Enter Password" />
           <label>Enter confirm</label>
          <input type="password" placeholder="Enter confirm Password" />
          <button className="close" onClick={() => setShowModal(false)}>X</button>
        </div>
        </div>
      )}
    </>
  );
}
