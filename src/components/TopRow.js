import React from 'react';
import "./TopRow.css";
import Box1 from './Box1';
import Box2 from './Box2';

function TopRow() {
  return(
      <>
        <div className='today'>Today</div>
        <Box1></Box1>
        <Box2></Box2>
      </>
  );
}

export default TopRow;
