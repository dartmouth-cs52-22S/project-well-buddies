import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

function CheckboxChecked(props) {
  return (
    <Svg
      width={33}
      height={33}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={16.5}
        cy={16.5}
        r={16}
        fill="#F2F7F9"
        fillOpacity={0.2}
        stroke="#D0E5F0"
      />
      <Path
        d="M25.333 11 14.458 23.875 8 17"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CheckboxChecked;
