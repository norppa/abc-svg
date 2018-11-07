import React from "react";

const TrebleClef = ({ x, y, w, h }) => {
  // original aspect ratio of this image is 1:2.5
  return (
    <svg
      x={x}
      y={y}
      width={w}
      height={h}
      viewBox="220 150 310 760"
      preserveAspectRatio="none"
    >
      <title id="title3077">Treble Clef</title>
      <defs id="defs3035">
        <linearGradient
          id="linearGradient3776"
          x1="598.60864"
          y1="490.82504"
          x2="881.5011"
          y2="490.82504"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient id="linearGradient3013-7">
          <stop id="stop3015-9" offset="0" />
          <stop id="stop3017-0" offset="1" />
        </linearGradient>
        <linearGradient
          gradientTransform="translate(-368.00764,35.356037)"
          y2="490.82504"
          x2="881.5011"
          y1="490.82504"
          x1="598.60864"
          gradientUnits="userSpaceOnUse"
          id="linearGradient3793"
        />
      </defs>

      <path
        id="trebleClefPath"
        d="m 278.89443,840.50155 c 0,23.81128 27.14446,51.13314 48.1934,55.10814 0,0 22.50833,5.61337 41.03037,1.12235 3.34609,0.75146 59.49757,-9.54161 60.61992,-84.75534 l -11.84275,-91.53621 c 7.89194,-1.34811 33.64315,-13.76333 41.59154,-18.4785 21.81169,-12.94253 31.35491,-31.6355 39.85157,-45.46494 9.5416,-20.76836 15.15498,-34.94612 15.15498,-57.55603 0,-57.18514 -46.34057,-103.537 -103.50475,-103.537 -8.23865,0 -16.24347,0.97722 -23.93384,2.7962 l -10.21566,-73.46408 c 38.68406,-43.00577 77.89705,-95.86921 91.06534,-144.30935 12.91028,-63.9886 6.73573,-107.20722 -27.50408,-125.73087 -31.43232,-7.29691 -69.58907,35.64274 -92.05224,97.66561 -14.59381,33.11584 3.99757,96.38523 12.3491,122.3622 -61.52781,58.98316 -122.74275,101.28262 -129.0963,203.50537 0,80.05307 64.87388,144.93825 144.89309,144.93825 7.64521,0 20.2749,0.179 34.64295,-1.68352 l 6.7583,91.41204 c 0,0 2.59302,66.86221 -48.2934,75.92165 -20.19589,3.59282 -39.67419,7.75649 -34.07049,-5.61176 15.73873,-8.19672 34.07049,-21.26342 34.07049,-42.70421 0,-26.68328 -20.08462,-48.31598 -44.84894,-48.31598 -24.77399,0 -44.8586,21.6327 -44.8586,48.31598 z m 90.97502,-409.14096 9.53032,68.63443 c -42.22044,13.05702 -72.90129,52.42643 -72.90129,98.946 0,52.64896 62.94525,77.20203 61.23915,64.70619 -24.54017,-10.58656 -33.63348,-22.48575 -33.63348,-50.91061 0,-32.12895 21.95843,-59.1154 51.67336,-66.80577 l 22.66474,163.40547 c -5.09735,1.38036 -10.59784,2.54787 -16.55792,3.47993 -86.24858,-1.72868 -126.78709,-47.63224 -126.78709,-127.6837 0.002,-44.84571 52.80859,-96.57551 104.77221,-153.77194 z m 45.19726,275.96805 -22.59863,-162.77656 c 3.45736,-0.5386 7.01632,-0.83047 10.63171,-0.83047 38.10031,0 68.99403,30.905 68.99403,69.0166 -0.76275,30.66956 -2.22374,76.33608 -57.02711,94.59043 z M 366.99746,364.62256 c -15.54845,-52.45868 -1.49325,-78.60336 7.63231,-98.69927 21.56497,-47.45164 40.53692,-64.70619 59.85718,-80.1079 25.12392,9.85606 13.78429,80.1079 10.01248,80.1079 -11.83146,41.4464 -54.27605,74.39454 -77.50197,98.69927 z"
      />
    </svg>
  );
};

export { TrebleClef };
