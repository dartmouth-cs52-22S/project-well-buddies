import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

function BackButton() {
  return (
    <Svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect width="57" height="57" rx="13" fill="#AABBCB"/>
      <Path d="M32.625 36.75L24.375 28.5L32.625 20.25" stroke="#F2F7F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
}

export default BackButton;