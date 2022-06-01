import React from 'react';
import Svg, { Path } from 'react-native-svg';

function CloseIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      fill="none"
      viewBox="0 0 29 29"
    >
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21.75 7.25l-14.5 14.5M7.25 7.25l14.5 14.5"
      ></Path>
    </Svg>
  );
}

export default CloseIcon;