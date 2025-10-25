
import React from 'react';

const ACDrainIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m-7.5-7.5h15" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.343 6.343l11.314 11.314" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.343 17.657L17.657 6.343" />
  </svg>
);

export default ACDrainIcon;
