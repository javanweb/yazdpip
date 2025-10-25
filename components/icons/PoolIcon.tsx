
import React from 'react';

const PoolIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12.75C3.75 14.96 5.54 16.75 7.75 16.75h8.5c2.21 0 4-1.79 4-4s-1.79-4-4-4h-1" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.25 12.75L15.25 9.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.75 12.75L11.75 9.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 12.75L8.25 9.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.25 16.75v3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.25 19.75h6" />
  </svg>
);

export default PoolIcon;
