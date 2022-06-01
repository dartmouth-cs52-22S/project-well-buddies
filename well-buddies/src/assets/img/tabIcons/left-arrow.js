import React from 'react';
import Svg, { Path } from 'react-native-svg';

function LeftArrow() {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        fill="none"
        viewBox="0 0 30 30"
      >
        <Path
          stroke="#363D4F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 18l-6-6 6-6"
        ></Path>
      </Svg>
    );
  }
  
  export default LeftArrow;
  