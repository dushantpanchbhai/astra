import React from "react";
import "./Box2.css";
function Box2() {
  return (
    <div className="box2">
      <div className="box2_top">
        <div className="box2_left">
          <img src="https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad"></img>
          <div className="box2_left_details">
            <div className="box2_name">Saurabh Mantri</div>
            <div className="box2_class">Class 4A</div>
          </div>
        </div>
        <div className="box2_right">
          <span>Marks</span>
        </div>
      </div>
      <div className="box2_down">
          <div className="down_left">
            <span id="down_left_1">Unit Test</span>
            <span id="down_left_2">English</span>
          </div>
          <div className="down_right">
            <span>32/40</span>
          </div>
      </div>
    </div>
  );
}

export default Box2;
