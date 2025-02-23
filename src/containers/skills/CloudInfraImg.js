import React, { Component } from "react";

export default class ComputerVisionImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        id="computer-vision"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        width="1098.75"
        height="632.37039"
        viewBox="0 0 1098.75 632.37039"
      >
        <title>computer vision</title>
        {/* Ground shadow */}
        <ellipse
          cx="549.375"
          cy="600.77366"
          rx="549.375"
          ry="31.59674"
          fill={theme.compImgHighlight}
        />

        {/* Camera */}
        <rect x="150" y="200" width="250" height="200" fill={theme.text} />
        <rect
          x="175"
          y="225"
          width="200"
          height="150"
          fill={theme.compImgHighlight}
        />
        {/* Lens */}
        <circle
          cx="275"
          cy="300"
          r="50"
          fill={theme.imageHighlight}
          opacity="0.3"
        />
        <circle
          cx="275"
          cy="300"
          r="35"
          fill={theme.imageHighlight}
          opacity="0.6"
        />
        <circle cx="275" cy="300" r="20" fill={theme.imageHighlight} />
        {/* Shutter button */}
        <rect x="350" y="210" width="30" height="15" fill={theme.jacketColor} />
        {/* Viewfinder */}
        <rect x="325" y="235" width="40" height="30" fill={theme.text} />

        {/* Eye-like processing symbol */}
        <circle
          cx="600"
          cy="350"
          r="80"
          fill={theme.imageHighlight}
          opacity="0.3"
        />
        <circle
          cx="600"
          cy="350"
          r="60"
          fill={theme.imageHighlight}
          opacity="0.6"
        />
        <circle cx="600" cy="350" r="40" fill={theme.imageHighlight} />
        {/* Pupil */}
        <circle cx="600" cy="350" r="15" fill={theme.text} />
        {/* Processing lines */}
        <path
          d="M400,300H550"
          fill="none"
          stroke={theme.jacketColor}
          strokeMiterlimit="10"
          strokeWidth="4"
          opacity="0.5"
        />
        <path
          d="M650,325V375"
          fill="none"
          stroke={theme.jacketColor}
          strokeMiterlimit="10"
          strokeWidth="4"
          opacity="0.5"
        />

        {/* Processed image output */}
        <rect x="750" y="300" width="200" height="200" fill={theme.text} />
        <rect
          x="775"
          y="325"
          width="150"
          height="150"
          fill={theme.compImgHighlight}
        />
        {/* Simplified face detection outline */}
        <circle
          cx="850"
          cy="375"
          r="30"
          fill={theme.imageHighlight}
          opacity="0.5"
        />
        <rect
          x="835"
          y="405"
          width="30"
          height="20"
          fill={theme.imageHighlight}
          opacity="0.5"
        />
        {/* Analysis markers */}
        <circle cx="820" cy="365" r="5" fill={theme.jacketColor} />
        <circle cx="880" cy="365" r="5" fill={theme.jacketColor} />
        <rect x="845" y="450" width="60" height="8" fill={theme.text} />
      </svg>
    );
  }
}
