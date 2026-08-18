import React from "react";

export const Logo = ({ className = "size-10 md:size-12" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      className={className}
      width="100%"
      height="100%"
    >
      <defs>
        <linearGradient id="viteFront" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#646CFF" />
          <stop offset="100%" stopColor="#BD34FE" />
        </linearGradient>

        <linearGradient id="viteBack" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#41D1FF" />
          <stop offset="100%" stopColor="#646CFF" />
        </linearGradient>

        <filter id="glowShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="6" stdDeviation="6" floodColor="#BD34FE" floodOpacity="0.3" />
        </filter>
      </defs>

      <rect x="40" y="15" width="60" height="85" rx="8" fill="url(#viteBack)" opacity="0.6" />

      <rect
        x="20"
        y="25"
        width="60"
        height="85"
        rx="8"
        fill="url(#viteFront)"
        filter="url(#glowShadow)"
      />

      <circle cx="40" cy="46" r="9" fill="#ffffff" />

      <rect x="55" y="41" width="15" height="4" rx="2" fill="#ffffff" />
      <rect x="55" y="49" width="10" height="3" rx="1.5" fill="#ffffff" opacity="0.7" />

      <line
        x1="30"
        y1="63"
        x2="70"
        y2="63"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeOpacity="0.4"
        strokeLinecap="round"
      />

      <rect x="30" y="73" width="40" height="3.5" rx="1.75" fill="#ffffff" opacity="0.9" />
      <rect x="30" y="82" width="35" height="3.5" rx="1.75" fill="#ffffff" opacity="0.9" />
      <rect x="30" y="91" width="20" height="3.5" rx="1.75" fill="#ffffff" opacity="0.9" />
    </svg>
  );
};
