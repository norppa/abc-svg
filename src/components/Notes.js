import React from "react";
import {LINE_HEIGHT, NOTE_SPACING} from '../Constants'

const quarterHeadWidth = 1.2 * LINE_HEIGHT
const quarterHeadHeight = LINE_HEIGHT
const QuarterHead = ({x, y}) => (<svg x={x} y={y} width={quarterHeadWidth} height={LINE_HEIGHT} viewBox="0 0 15.875 13.229168">
  <g transform="translate(0,-283.77083)">
    <ellipse id="path3771" cx="-110.76757" cy="264.51202" rx="8.4090567" ry="6.0036974" transform="matrix(0.8982744,-0.43943499,0.40617127,0.91379697,0,0)"/>
  </g>
</svg>)

const stemWidth = 0.1 * LINE_HEIGHT
const stemHeight = 3.4 * LINE_HEIGHT
const Stem = ({x, y}) => (<svg>
  <rect x={x} y={y} width={0.1 * LINE_HEIGHT} height={3.5 * LINE_HEIGHT} fill="black"/>
</svg>)

const QuarterUp = ({x, y}) => (<svg
    x={x}
    y={y - 3.5 * LINE_HEIGHT}
    width={quarterHeadWidth}
    height={4 * LINE_HEIGHT}
    >
  <QuarterHead x={0} y={3 * quarterHeadHeight}/>
  <Stem x={quarterHeadWidth - stemWidth} y={0} />

  </svg>)

const HalfUp = ({x, y, w, h}) => (<svg width={w} height={h} viewBox="6 5 15 40" preserveAspectRatio="none">
  <g transform="matrix(-1,0,0,-1,254,262)">
    <path d="M 237.68484,218.18353 C 234.289,220.0035 232.47956,223.29808 233.59262,225.77649 C 234.77988,228.42013 238.85963,229.16621 242.6992,227.44186 C 246.53876,225.7175 248.69136,222.17246 247.5041,219.52883 C 246.31683,216.88519 242.23709,216.13911 238.39752,217.86346 C 238.15755,217.97123 237.91124,218.0622 237.68484,218.18353 z M 238.79457,220.42569 C 239.0358,220.30136 239.28005,220.20766 239.53576,220.09282 C 242.80883,218.62288 245.96997,218.55375 246.59187,219.93851 C 247.21377,221.32327 245.06209,223.64013 241.78902,225.11008 C 238.51594,226.58002 235.3548,226.64915 234.73291,225.26439 C 234.15959,223.98781 235.94804,221.89278 238.79457,220.42569 z " fill="black"/>
    <path d="M 234.05234,224.51692 L 234.05234,258.10449" stroke="black" strokeWidth="1.5" strokeLinecap="butt"/>
  </g>
</svg>)

export {
  HalfUp,
  QuarterUp
};
