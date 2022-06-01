import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Automobile(props) {
  return (
    <Svg
      width={36}
      height={36}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13 32h20s3 0 3-4c0-2 0-6-1-7s-8-7-11-7h-6c-3 0-10 7-10 7l-4 1s-3 1-3 3v3s-1 .338-1 1.957C0 32 2 32 2 32h11Z"
        fill="#DD2E44"
      />
      <Path
        d="M20 16h-2c-2 0-8 6-8 6s4.997-.263 10-.519V16Zm10 3c-1-1-5-3-7-3h-1v5.379c4.011-.204 7.582-.379 8-.379 1 0 1-1 0-2Z"
        fill="#BBDDF5"
      />
      <Path d="M10 35a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="#292F33" />
      <Path d="M10 33a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="#CCD6DD" />
      <Path d="M27 35a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="#292F33" />
      <Path d="M27 33a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="#CCD6DD" />
    </Svg>
  );
}

export default Automobile;
