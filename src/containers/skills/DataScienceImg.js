import React, { Component } from "react";

export default class MobileDevicesImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        id="mobile-devices"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        width="1120"
        height="829.80067"
        viewBox="0 0 1120 829.80067"
      >
        <title>mobile devices</title>
        {/* Shadow for all devices */}
        <ellipse
          cx="280"
          cy="811.05902"
          rx="144.42094"
          ry="18.74165"
          fill={theme.text}
        />
        <ellipse
          cx="560"
          cy="811.05902"
          rx="144.42094"
          ry="18.74165"
          fill={theme.text}
        />
        <ellipse
          cx="840"
          cy="811.05902"
          rx="144.42094"
          ry="18.74165"
          fill={theme.text}
        />

        {/* Device 1: Classic Android Style */}
        <rect
          x="160"
          y="200"
          width="200"
          height="400"
          rx="20"
          fill={theme.compImgHighlight}
        />
        <rect
          x="185"
          y="175"
          width="200"
          height="400"
          rx="20"
          fill="none"
          stroke={theme.text}
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <rect
          x="203"
          y="223"
          width="165"
          height="300"
          fill={theme.imageHighlight}
        />
        <rect x="218" y="243" width="40" height="40" fill={theme.jacketColor} />
        <rect x="268" y="243" width="40" height="40" fill={theme.text} />
        <rect
          x="218"
          y="303"
          width="40"
          height="40"
          fill={theme.imageHighlight}
        />
        <circle cx="285" cy="548" r="10" fill={theme.text} />

        {/* Device 2: Modern Android with Notch */}
        <rect
          x="460"
          y="200"
          width="200"
          height="400"
          rx="20"
          fill={theme.compImgHighlight}
        />
        <rect
          x="485"
          y="175"
          width="200"
          height="400"
          rx="20"
          fill="none"
          stroke={theme.text}
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <rect
          x="503"
          y="223"
          width="165"
          height="300"
          fill={theme.imageHighlight}
        />
        {/* Notch */}
        <rect
          x="565"
          y="223"
          width="40"
          height="15"
          fill={theme.compImgHighlight}
        />
        <rect x="518" y="253" width="60" height="60" fill={theme.jacketColor} />
        <rect x="590" y="253" width="60" height="60" fill={theme.text} />
        {/* Navigation bar */}
        <rect x="503" y="508" width="165" height="15" fill={theme.text} />

        {/* Device 3: Minimalist Design */}
        <rect
          x="760"
          y="200"
          width="200"
          height="400"
          rx="20"
          fill={theme.compImgHighlight}
        />
        <rect
          x="785"
          y="175"
          width="200"
          height="400"
          rx="20"
          fill="none"
          stroke={theme.text}
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <rect
          x="803"
          y="223"
          width="165"
          height="300"
          fill={theme.imageHighlight}
        />
        <rect x="818" y="243" width="80" height="80" fill={theme.jacketColor} />
        <rect x="818" y="343" width="40" height="40" fill={theme.text} />
        {/* No physical button, gesture-based */}
      </svg>
    );
  }
}
