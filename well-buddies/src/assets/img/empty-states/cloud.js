import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={149}
      height={149}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M128.306 91.056c-1.933 0-3.767.351-5.542.844a18.512 18.512 0 0 0 1.403-7.053c0-10.285-8.34-18.625-18.625-18.625-4.218 0-8.059 1.453-11.18 3.812-2.921-11.692-13.472-20.367-26.07-20.367-11.747 0-21.709 7.54-25.376 18.033a33.054 33.054 0 0 0-9.805-1.478C14.826 66.222 0 81.048 0 99.333c0 18.29 14.825 33.111 33.111 33.111h95.195c11.431 0 20.694-9.262 20.694-20.694 0-11.432-9.263-20.694-20.694-20.694Z"
        fill="#fff"
      />
      <Rect
        x={22}
        y={95}
        width={4.216}
        height={5.622}
        rx={2.108}
        fill="#292B2F"
      />
      <Rect
        x={63}
        y={95}
        width={4.216}
        height={5.622}
        rx={2.108}
        fill="#292B2F"
      />
      <Path
        d="M38 104c5 4 9 3 12.889.233"
        stroke="#292B2F"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SvgComponent;
