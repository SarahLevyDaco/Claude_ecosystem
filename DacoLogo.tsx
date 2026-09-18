import React from "react";

interface DacoLogoProps {
  size: number;
}

export const DacoLogo: React.FC<DacoLogoProps> = ({ size }) => {
  const ratio = size / 200; // Base size 200px

  return (
    <svg
      viewBox="0 0 200 240"
      width={size}
      height={size * 1.2}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main geometric shape - Door/Frame */}
      <g>
        {/* Gold accent line - left */}
        <rect x="20" y="40" width="12" height="90" fill="#D4AF37" />

        {/* Dark frame lines */}
        <rect x="50" y="40" width="15" height="90" fill="#3a3a3a" />
        <rect x="85" y="40" width="15" height="90" fill="#3a3a3a" />
        <rect x="120" y="40" width="15" height="90" fill="#3a3a3a" />

        {/* Bottom horizontal line */}
        <rect x="20" y="120" width="115" height="10" fill="#3a3a3a" />
      </g>

      {/* Text: DACO */}
      <text
        x="100"
        y="170"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="32"
        fontWeight="bold"
        fill="#3a3a3a"
        letterSpacing="3"
      >
        DACO
      </text>

      {/* Text: INTEGRAL */}
      <text
        x="100"
        y="205"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="14"
        fontWeight="300"
        fill="#D4AF37"
        letterSpacing="4"
      >
        INTEGRAL
      </text>
    </svg>
  );
};
