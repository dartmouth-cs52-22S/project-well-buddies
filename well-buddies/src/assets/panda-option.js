import React from 'react';
import Svg, {
  Defs, Ellipse, Path, RadialGradient, Rect, Stop,
} from 'react-native-svg';

function PandaOption() {
  return (
    <Svg width="164" height="122" viewBox="0 0 164 122" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path fillRule="evenodd" clipRule="evenodd" d="M14.8474 15.6593C2.2136 30.5334 9.0112 45.0465 19.5388 48.119C14.4553 66.0468 13.4441 102.685 46.7865 110.036C79.4408 117.236 105.924 113.379 127.265 103.094C144.338 94.8662 142.007 68.0399 140.121 56.2981C139.762 54.0605 138.855 51.3342 137.498 48.3755C153.002 51.7869 167.146 32.104 143.421 10.5966C132.359 3.56662 119.159 11.9792 119.296 24.9167C114.352 20.9955 108.898 18.2341 103.353 17.73C92.0399 16.7015 85.3548 16.7015 79.4412 16.7015H79.4408C67.4669 16.7015 55.1487 18.1104 44.7255 22.0788C43.7099 8.26866 26.5202 1.91661 14.8474 15.6593Z" fill="#292B2F" />
      <Path d="M19.5388 48.119L26.7543 50.165L28.7847 43.0046L21.64 40.9194L19.5388 48.119ZM14.8474 15.6593L9.13115 10.8039L14.8474 15.6593ZM46.7865 110.036L48.4013 102.712L46.7865 110.036ZM127.265 103.094L130.521 109.85L127.265 103.094ZM140.121 56.2981L147.526 55.109V55.1089L140.121 56.2981ZM137.498 48.3755L139.11 41.0507L124.404 37.8149L130.681 51.5017L137.498 48.3755ZM143.421 10.5966L148.459 5.04001L147.984 4.60999L147.444 4.2666L143.421 10.5966ZM119.296 24.9167L114.635 30.7928L126.962 40.5693L126.796 24.8376L119.296 24.9167ZM103.353 17.73L102.674 25.1992L103.353 17.73ZM79.4412 16.7015L79.4412 9.20152H79.4412V16.7015ZM79.4408 16.7015L79.4408 24.2015H79.4408V16.7015ZM44.7255 22.0788L37.2457 22.6289L37.9842 32.6707L47.3942 29.088L44.7255 22.0788ZM21.64 40.9194C18.9975 40.1482 16.6049 37.8531 15.7928 34.5329C15.0293 31.4113 15.5055 26.4697 20.5637 20.5146L9.13115 10.8039C1.55552 19.723 -0.886397 29.4751 1.22233 38.0966C3.28249 46.5197 9.55247 53.0174 17.4375 55.3187L21.64 40.9194ZM48.4013 102.712C34.9835 99.7539 28.7052 91.2744 26.0005 81.1145C23.1657 70.4659 24.461 58.2526 26.7543 50.165L12.3233 46.073C9.53302 55.9132 7.78097 70.983 11.5053 84.9733C15.3598 99.4523 25.2471 112.968 45.1717 117.36L48.4013 102.712ZM124.009 96.3377C104.326 105.824 79.5771 109.586 48.4013 102.712L45.1717 117.36C79.3045 124.886 107.522 120.934 130.521 109.85L124.009 96.3377ZM132.716 57.4872C133.616 63.0887 134.535 71.8577 133.378 79.9524C132.197 88.2107 129.189 93.8413 124.009 96.3377L130.521 109.85C142.414 104.119 146.776 92.2225 148.227 82.0752C149.701 71.7644 148.512 61.2493 147.526 55.109L132.716 57.4872ZM130.681 51.5017C131.872 54.1 132.501 56.1492 132.716 57.4872L147.526 55.1089C147.023 51.9717 145.838 48.5683 144.315 45.2492L130.681 51.5017ZM138.384 16.1533C148.996 25.773 149.231 33.0893 148.09 36.3578C146.885 39.807 143.31 41.9749 139.11 41.0507L135.886 55.7002C147.19 58.1874 158.439 52.2196 162.251 41.3034C166.127 30.2065 161.572 16.9276 148.459 5.04001L138.384 16.1533ZM126.796 24.8376C126.713 17.0161 134.049 13.5273 139.399 16.9267L147.444 4.2666C130.668 -6.39403 111.606 6.94218 111.796 24.9958L126.796 24.8376ZM102.674 25.1992C106.25 25.5243 110.348 27.3926 114.635 30.7928L123.957 19.0406C118.356 14.5984 111.546 10.9439 104.032 10.2608L102.674 25.1992ZM79.4412 24.2015C85.2607 24.2015 91.6884 24.2005 102.674 25.1992L104.032 10.2608C92.3913 9.20255 85.4489 9.20152 79.4412 9.20152L79.4412 24.2015ZM79.4408 24.2015H79.4412V9.20152H79.4408V24.2015ZM47.3942 29.088C56.6368 25.569 67.9454 24.2015 79.4408 24.2015L79.4408 9.20152C66.9884 9.20151 53.6606 10.6518 42.0569 15.0697L47.3942 29.088ZM20.5637 20.5146C24.7503 15.5856 29.0713 15.0295 31.8188 15.775C34.6949 16.5554 36.9762 18.9632 37.2457 22.6289L52.2053 21.5288C51.4593 11.3843 44.6379 3.71098 35.747 1.29848C26.7276 -1.1489 16.6173 1.9903 9.13115 10.8039L20.5637 20.5146Z" fill="#A1CFE9" />
      <Path d="M32.3223 45.8409C17.0366 55.5544 -2.32769 35.7857 15.0433 15.3344C32.4143 -5.11695 62.0033 18.9342 32.3223 45.8409Z" fill="#292B2F" />
      <Path d="M143.617 10.2717C128.331 0.55817 108.967 20.3269 126.338 40.7782C143.709 61.2296 173.298 37.1784 143.617 10.2717Z" fill="#292B2F" />
      <Path d="M21.5269 42.6029C30.269 22.0332 55.6438 16.3766 79.6362 16.3766H79.6365C85.5502 16.3766 92.2352 16.3766 103.548 17.4051C121.467 19.034 138.431 44.2313 140.317 55.9732C142.202 67.715 144.533 94.5412 127.461 102.769C106.12 113.054 79.6362 116.911 46.9819 109.711C9.95648 101.548 15.2932 57.2705 21.5269 42.6029Z" fill="white" />
      <Ellipse cx="42.5178" cy="84.6413" rx="25.9578" ry="27.1201" fill="url(#paint0_radial_224_1405)" />
      <Ellipse cx="114.58" cy="84.6413" rx="25.9578" ry="27.1201" fill="url(#paint1_radial_224_1405)" />
      <Path d="M55.4337 83.8529C41.6924 95.2509 20.2635 79.5508 34.6993 57.7531C49.1351 35.9553 81.1073 54.1608 55.4337 83.8529Z" fill="#292B2F" />
      <Path d="M115.086 52.0976C101.344 40.6996 79.9153 56.3997 94.3511 78.1974C108.787 99.9952 140.759 81.7897 115.086 52.0976Z" fill="#292B2F" />
      <Rect x="44.2745" y="61.854" width="9.93087" height="13.0303" rx="4.03284" fill="#292B2F" stroke="white" strokeWidth="0.917159" />
      <Rect x="102.389" y="61.854" width="9.93087" height="13.0303" rx="4.03284" fill="#292B2F" stroke="white" strokeWidth="0.917159" />
      <Path d="M73.6473 76.1176C73.2599 78.0548 74.8096 80.7668 79.4588 80.7668C81.3959 80.3794 83.7205 78.8296 84.1079 76.5051C84.4954 74.1805 82.1708 73.0182 78.6839 73.0182C75.1971 73.0182 74.0348 74.1805 73.6473 76.1176Z" fill="#292B2F" />
      <Path d="M78.7837 80.1423V88.8844" stroke="#292B2F" strokeWidth="1.37574" strokeLinecap="round" />
      <Path d="M68.4985 87.3417C76.7622 92.9298 86.3405 89.6701 90.0967 87.3417" stroke="#292B2F" strokeWidth="1.37574" strokeLinecap="round" />
      <Defs>
        <RadialGradient id="paint0_radial_224_1405" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(42.5178 84.6413) rotate(90) scale(27.1201 25.9578)">
          <Stop stopColor="#FF9AA0" stopOpacity="0.54" />
          <Stop offset="0.338542" stopColor="#F19D9C" stopOpacity="0.402188" />
          <Stop offset="0.671875" stopColor="#F4BFB2" stopOpacity="0.222262" />
          <Stop offset="1" stopColor="#F9E8CE" stopOpacity="0" />
        </RadialGradient>
        <RadialGradient id="paint1_radial_224_1405" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(114.58 84.6413) rotate(90) scale(27.1201 25.9578)">
          <Stop stopColor="#FF9AA0" stopOpacity="0.54" />
          <Stop offset="0.338542" stopColor="#F19D9C" stopOpacity="0.402188" />
          <Stop offset="0.671875" stopColor="#F4BFB2" stopOpacity="0.222262" />
          <Stop offset="1" stopColor="#F9E8CE" stopOpacity="0" />
        </RadialGradient>
      </Defs>
    </Svg>

  );
}

export default PandaOption;
