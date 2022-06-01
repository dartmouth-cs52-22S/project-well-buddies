import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';

function Checkboc(props) {
  return (
    <Svg
      width={33}
      height={33}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={16.5} cy={16.5} r={16} fill="#F2F7F9" stroke="#D0E5F0" />
    </Svg>
  );
}

export default Checkboc;
