import React from 'react';
import Svg, {
  Defs, Path, Rect, Stop, G, LinearGradient, ClipPath,
} from 'react-native-svg';

function Gradient() {
  return (
    <Svg width="100%" height="130%" viewBox="0 0 375 812" fill="none" xmlns="http://www.w3.org/2000/SVG">
      <G clipPath="url(#clip0_346_1094)">
        <Rect width="375" height="812" fill="url(#paint0_linear_346_1094)" />
        <Path d="M77 738.095C193.5 676.5 383 606.5 448.5 636.5L421.5 824.5C379.833 837 249.8 774.895 77 738.095Z" fill="url(#paint1_linear_346_1094)" />
        <Path d="M-107.409 632.108C-16.1701 590.431 206.007 629.33 346 752.276L400.863 786.231C429.953 798.589 456.137 809.975 442.5 812C249.5 840.661 -47.6797 837.556 -98 822.5L-107.409 632.108Z" fill="url(#paint2_linear_346_1094)" />
      </G>
      <Defs>
        <LinearGradient id="paint0_linear_346_1094" x1="187.5" y1="0" x2="177" y2="733.5" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#419ADA" />
          <Stop offset="0.265625" stopColor="#A1CFE9" />
          <Stop offset="0.776042" stopColor="#FAECD8" />
          <Stop offset="1" stopColor="#FFFEF7" />
        </LinearGradient>
        <LinearGradient id="paint1_linear_346_1094" x1="379" y1="629" x2="247.5" y2="760.931" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#B8DAAC" />
          <Stop offset="1" stopColor="#E2F1D6" />
        </LinearGradient>
        <LinearGradient id="paint2_linear_346_1094" x1="33.5" y1="665" x2="262.5" y2="752.5" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#94DAAC" />
          <Stop offset="1" stopColor="#B5DBC2" />
        </LinearGradient>
        <ClipPath id="clip0_346_1094">
          <Rect width="375" height="812" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>

  );
}

export default Gradient;
