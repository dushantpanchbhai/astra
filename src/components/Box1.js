import React from "react";
import "./Box1.css";

function Box1() {
  return (
    <div className="box1">
        <div className='box1_left'>
            <img src='https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad'></img>
            <div className='box1_left_details'>
                <div className='box1_name'>Saurabh Mantri</div>
                <div className='box1_class'>Class 4A</div>
            </div>
        </div>      
        <div className='box1_right'>
            <span>Absent</span>
        </div>
    </div>
  );
}

export default Box1;
