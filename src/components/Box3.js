import React from "react";
import "./Box3.css";

function Box3() {
  return (
    <div className="box3">
      <div className="box3_top">
        <div className="box3_left">
          <img src="https://avatars.dicebear.com/api/miniavs/dushan.svg"></img>
          <div className="box3_left_details">
            <div className="box3_name">Saurabh Mantri</div>
            <div className="box3_class">Class 4A</div>
          </div>
        </div>
        <div className="box3_right">
          <span>Fees</span>
        </div>
      </div>
      <div className="box3_down">
        <div className="down_left">
          <span id="down_left_1">Due on: Thursday, 23 Nov 2021</span>
        </div>
      </div>
    </div>
  );
}

export default Box3;
