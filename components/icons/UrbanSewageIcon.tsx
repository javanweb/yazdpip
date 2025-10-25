
import React from 'react';

const UrbanSewageIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 12h-6.375" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12h6.375" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a3.375 3.375 0 006.75 0" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25v2.625" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.125V21.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.625V15.375" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.105 5.105l1.858 1.858" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.037 17.037l1.858 1.858" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.105 18.895l1.858-1.858" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.037 6.963l1.858-1.858" />
  </svg>
);

export default UrbanSewageIcon;
