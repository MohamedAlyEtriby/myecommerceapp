import React from "react";
import "./Four.css";
function Four({ image, title }) {
  return (
    <div className="four">
      <div>
        <img src={image} alt="" />
      </div>
      <p>{title}</p>
    </div>
  );
}

export default Four;
