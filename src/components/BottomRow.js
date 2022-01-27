import React from "react";
import './BottomRow.css';
import Box3 from "./Box3";
import Box4 from "./Box4";

function BottomRow() {
  return (
    <>
      <div className="yesterday">Yesterday</div>
      <Box3></Box3>
      <Box4></Box4>
    </>
  );
}

export default BottomRow;
