import React, { Component } from "react";

export default class BackendDevImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        id="backend-dev"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        width="1098.75"
        height="632.37039"
        viewBox="0 0 1098.75 632.37039"
      >
        <title>backend development</title>
        {/* Ground shadow */}
        <ellipse
          cx="549.375"
          cy="600.77366"
          rx="549.375"
          ry="31.59674"
          fill={theme.compImgHighlight}
        />

        {/* Server rack */}
        <rect x="150" y="150" width="300" height="400" fill={theme.text} />
        <rect
          x="175"
          y="175"
          width="250"
          height="350"
          fill="none"
          stroke={theme.compImgHighlight}
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        {/* Server slots */}
        <rect
          x="185"
          y="185"
          width="230"
          height="50"
          fill={theme.imageHighlight}
          opacity="0.5"
        />
        <rect
          x="185"
          y="245"
          width="230"
          height="50"
          fill={theme.imageHighlight}
          opacity="0.5"
        />
        <rect
          x="185"
          y="305"
          width="230"
          height="50"
          fill={theme.imageHighlight}
          opacity="0.5"
        />
        <rect
          x="185"
          y="365"
          width="230"
          height="50"
          fill={theme.imageHighlight}
          opacity="0.5"
        />
        <rect
          x="185"
          y="425"
          width="230"
          height="50"
          fill={theme.imageHighlight}
          opacity="0.5"
        />
        {/* Power lights */}
        <circle cx="200" cy="200" r="6" fill={theme.jacketColor} />
        <circle cx="220" cy="200" r="6" fill={theme.jacketColor} />

        {/* Database cylinders */}
        <circle
          cx="700"
          cy="250"
          r="50"
          fill={theme.imageHighlight}
          opacity="0.3"
        />
        <circle
          cx="700"
          cy="250"
          r="35"
          fill={theme.imageHighlight}
          opacity="0.6"
        />
        <circle cx="700" cy="250" r="20" fill={theme.imageHighlight} />
        <rect x="650" y="250" width="100" height="150" fill={theme.text} />
        <rect
          x="660"
          y="260"
          width="80"
          height="130"
          fill={theme.compImgHighlight}
        />
        <circle
          cx="700"
          cy="400"
          r="50"
          fill={theme.imageHighlight}
          opacity="0.3"
        />
        <circle
          cx="700"
          cy="400"
          r="35"
          fill={theme.imageHighlight}
          opacity="0.6"
        />
        <circle cx="700" cy="400" r="20" fill={theme.imageHighlight} />

        {/* Terminal window */}
        <rect x="850" y="350" width="200" height="150" fill={theme.text} />
        <rect
          x="860"
          y="360"
          width="180"
          height="130"
          fill={theme.compImgHighlight}
        />
        {/* Terminal header */}
        <rect
          x="860"
          y="360"
          width="180"
          height="20"
          fill={theme.jacketColor}
        />
        <circle cx="875" cy="370" r="5" fill={theme.imageHighlight} />
        <circle cx="895" cy="370" r="5" fill={theme.imageHighlight} />
        <circle cx="915" cy="370" r="5" fill={theme.imageHighlight} />
        {/* Terminal text */}
        <rect x="870" y="390" width="100" height="8" fill={theme.text} />
        <rect x="870" y="410" width="140" height="8" fill={theme.text} />
        <rect x="870" y="430" width="60" height="8" fill={theme.text} />

        {/* Abstract connectors (data flow) */}
        <path
          d="M450,350H650"
          fill="none"
          stroke={theme.imageHighlight}
          strokeMiterlimit="10"
          strokeWidth="4"
          opacity="0.5"
        />
        <path
          d="M750,325H850"
          fill="none"
          stroke={theme.imageHighlight}
          strokeMiterlimit="10"
          strokeWidth="4"
          opacity="0.5"
        />
      </svg>
    );
  }
}
