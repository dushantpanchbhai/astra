import React, { useState } from "react";
import "./Box4.css";

function Box4() {
  const [likes,setLikes] = useState(121);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState("Send feedback");
  const handleCancle = () => {
    setVisible(false);
    console.log("handling cancle");
  };

  const handleSubmit = () => {
    setCurrent("Feedback sent");
    setVisible(false);
    console.log(comment);
    console.log("handling submit");
  };

  const addLike = () => {
      if(liked===false)
      {
        setLikes(likes+1);
        setLiked(true);
      }
  }

  return (
    <div className="big_container">
      <div className="box4">
        <div className="box4_top">
          <div className="box4_left">
            <img src="https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad"></img>
            <div className="box4_left_details">
              <div className="box4_name">Saurabh Mantri</div>
              <div className="box4_class">Class 4A</div>
            </div>
          </div>
          <div className="box4_right">
            <span>Announcement</span>
          </div>
        </div>
        <div className="box4_down">
          <div className="down_left">
            <span id="down_left_1">
              School will be closed tomorrow due to rains.
              <br /> Any changes to school reopening will be <br /> notified.
            </span>
          </div>
          <hr></hr>
          <div className="like_comment_box">
            <div className="like_options">
              <img type="button" src="./like_button.png" onClick={addLike}></img>
              <span>{likes}</span>
            </div>
            <div className="suggestions">
              <img type="button" onClick={(e) => {setVisible(!visible)}} src="./suggestion.png"></img>
              <button
                onClick={(e) => {
                  setVisible(!visible);
                }}
              >
                {current}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* feedback */}
      {visible === true && (
        <div className="feedback_box">
          <span>Only School Admin will be able to see your feedback</span>
          <textarea
            className="feedback_input"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <div className="feed_submit">
            <button type="submit" id="cancel" onClick={handleCancle}>
              cancel
            </button>
            <button type="submit" id="submit" onClick={handleSubmit}>
              submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Box4;
