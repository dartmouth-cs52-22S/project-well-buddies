import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

function ForwardButton() {
  return (
    <Svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect width="57" height="57" rx="13" fill="#667BA4"/>
      <Path d="M24.375 36.75L32.625 28.5L24.375 20.25" stroke="#F2F7F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
}

export default ForwardButton;