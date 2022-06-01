import React from 'react';
import Svg, { Path } from 'react-native-svg';

function CalendarIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 28 28"
    >
      <Path
        stroke="#373F41"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zM16 2v4M8 2v4M3 10h18"
      ></Path>
    </Svg>
  );
}

export default CalendarIcon;