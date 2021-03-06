import React from 'react';
import PropTypes from 'prop-types';


const Logo = ({width, height, fill}) => (
  <svg width="100%" viewBox="91 0 400 402" >
    <g>
      <title>background</title>
      <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1" />
      <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
        <rect fill="url(#gridpattern)" strokeWidth="0" y="0" x="0" height="100%" width="100%" />
      </g>
    </g>
    <g>
      <title>Layer 1</title>
      <ellipse stroke="#fff" ry="71.5" rx="71.5" id="svg_2" cy="74.5" cx="290" strokeWidth="1.5" fill="#000" />
      <line stroke="#fff" strokeLinecap="null" strokeLinejoin="null" id="svg_7" y2="104.043554" x2="305" y1="44.000004" x1="305" strokeWidth="12" fill="none" />
      <line stroke="#fff" strokeLinecap="null" strokeLinejoin="null" id="svg_10" y2="104.043554" x2="272" y1="44.000004" x1="272" strokeWidth="12" fill="none" />
      <text stroke="#ffffff" transform="matrix(0.5761413034842303,0,0,0.5761413034842303,196.33039947631062,101.08586048340452) " fontWeight="bold" space="preserve" textAnchor="start" fontFamily="'Trebuchet MS', Gadget, sans-serif" fontSize="75" id="svg_14" y="189.637383" x="-17.580066" strokeWidth="0" fill="#000000">H E L I O S</text>
      <line stroke="#fff" transform="rotate(-25 289.06909179687494,71.48894500732426) " strokeLinecap="null" strokeLinejoin="null" id="svg_15" y2="71.488946" x2="360.567663" y1="71.488946" x1="217.57051" fillOpacity="null" strokeOpacity="null" strokeWidth="5" fill="none" />
    </g>
  </svg >
);

Logo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string
}

export default Logo;