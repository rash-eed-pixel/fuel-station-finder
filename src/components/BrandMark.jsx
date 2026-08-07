import React from 'react';

// A bespoke logo mark: a fuel droplet fused with a map pin, split by a
// route line, in the amber → green brand gradient. Built to replace the
// generic "stock icon in a colored rounded square" pattern.
export const BrandMark = ({ className = 'w-9 h-9' }) => (
  <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="naijafuel-mark-grad" x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="var(--color-fuel-400, #ffb545)" />
        <stop offset="55%" stopColor="var(--color-fuel-600, #de7300)" />
        <stop offset="100%" stopColor="var(--color-naija-500, #2e9e5b)" />
      </linearGradient>
    </defs>
    <path
      d="M20 2C11.5 11 6 18.2 6 24.5 6 32 12.3 38 20 38s14-6 14-13.5C34 18.2 28.5 11 20 2Z"
      fill="url(#naijafuel-mark-grad)"
    />
    <path
      d="M20 8.5c-5.6 6.2-9.2 11.3-9.2 15.6a9.2 9.2 0 0 0 6.9 8.9"
      stroke="rgba(10,12,16,0.35)"
      strokeWidth="1.6"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="20" cy="25" r="4.6" fill="#0a0c10" />
    <path d="M20 21v8M16.5 25h7" stroke="#ffb545" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
